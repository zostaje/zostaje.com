import { spawnSync } from "node:child_process";

const root = new URL("../", import.meta.url);
function git(args, capture = false) {
  const result = spawnSync("git", args, { cwd: root, encoding: "utf8", stdio: capture ? "pipe" : "inherit" });
  if (result.status !== 0) {
    if (capture && result.stderr) process.stderr.write(result.stderr);
    process.exit(result.status ?? 1);
  }
  return capture ? result.stdout.trim() : "";
}

if (git(["status", "--porcelain", "--", ".", ":(exclude)next-env.d.ts"], true)) {
  process.stderr.write("Najpierw zapisz zmiany w commicie. Synchronizacja publikuje tylko zatwierdzony kod.\n");
  process.exit(1);
}
const expected = { origin: "zostaje/zostaje.com", personal: "rajanbor/zostaje.com" };
for (const [remote, repository] of Object.entries(expected)) {
  const url = git(["remote", "get-url", "--push", remote], true);
  if (![ `https://github.com/${repository}`, `https://github.com/${repository}.git`, `git@github.com:${repository}.git` ].includes(url)) {
    process.stderr.write(`Remote ${remote} nie wskazuje na ${repository}. Sprawdź konfigurację przed publikacją.\n`);
    process.exit(1);
  }
}
// Fast-forward only: never overwrite either remote's independently added commits.
const head = git(["rev-parse", "HEAD"], true);
const archive = git(["rev-parse", "codex/archive-static-site-2026-10-14"], true);
git(["push", "--atomic", "origin", `${head}:refs/heads/codex/nextjs-site`, `${archive}:refs/heads/codex/archive-static-site-2026-10-14`]);
git(["push", "--atomic", "personal", `${head}:refs/heads/main`, `${archive}:refs/heads/codex/archive-static-site-2026-10-14`]);
process.stdout.write("Zsynchronizowano wersję Next.js w organizacji i prywatnym repozytorium.\n");
