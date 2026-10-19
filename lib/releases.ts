// Published application releases checked against github.com/zostaje/zostaje on 2026-10-19.
// These releases have no downloadable installers attached. Update this list when publishing a release.
export const releases = [
  { version: "0.0.4-alpha", date: "2026-07-14", url: "https://github.com/zostaje/zostaje/releases/tag/v0.0.4-alpha",
    pl: ["Aplikacja desktop działa lokalnie, bez logowania i serwera.", "Wybór folderu danych, konta, transakcje i pulpit.", "Konfiguracja pakowania dla macOS, Windows i Linux."],
    en: ["The desktop app works locally, without a login or server.", "Data folder selection, accounts, transactions and dashboard.", "Packaging configuration for macOS, Windows and Linux."] },
  { version: "0.0.3-alpha", date: "2026-07-07", url: "https://github.com/zostaje/zostaje/releases/tag/v0.0.3-alpha",
    pl: ["Model kont i działający widok dodawania kont.", "Walidacja danych i pierwsza powłoka desktopowa.", "Poprawki wersjonowania i zależności projektu."],
    en: ["Account model and a working add-account view.", "Data validation and the first desktop shell.", "Project versioning and dependency fixes."] },
  { version: "0.0.2-alpha", date: "2026-06-27", url: "https://github.com/zostaje/zostaje/releases/tag/v0.0.2-alpha",
    pl: ["Lista transakcji połączona z backendem.", "Panel użytkownika i powiadomienia.", "Dokumentacja kierunku rozwoju aplikacji lokalnej."],
    en: ["Transaction list connected to the backend.", "User panel and notifications.", "Documentation for the local-first direction."] },
  { version: "0.0.1-alpha", date: "2026-06-05", url: "https://github.com/zostaje/zostaje/releases/tag/v0.0.1-alpha",
    pl: ["Fundament projektu i struktura repozytorium.", "Pierwszy interfejs aplikacji i tłumaczenia PL/EN.", "Początkowa architektura i automatyczne kontrole jakości."],
    en: ["Project foundation and repository structure.", "First application interface and PL/EN translations.", "Initial architecture and automated quality checks."] },
] as const;

export type PlatformId = "macos" | "linux" | "windows" | "android" | "ios";
export type Platform = { id: PlatformId; name: string; downloadUrl: string | null; format: string; status: "planned" | "development" };
export const platforms: Platform[] = [
  { id: "macos", name: "macOS", downloadUrl: null, format: "DMG / ZIP", status: "development" },
  { id: "linux", name: "Linux", downloadUrl: null, format: "AppImage", status: "development" },
  { id: "windows", name: "Windows", downloadUrl: null, format: "Instalator / Installer", status: "development" },
  { id: "android", name: "Android", downloadUrl: null, format: "—", status: "planned" },
  { id: "ios", name: "iOS", downloadUrl: null, format: "TestFlight", status: "development" },
];

export function detectPlatform({ userAgent, platform, maxTouchPoints }: { userAgent: string; platform: string; maxTouchPoints: number }): PlatformId | null {
  if (/iPhone|iPad|iPod/i.test(userAgent) || (/Mac/i.test(platform) && maxTouchPoints > 1)) return "ios";
  if (/Android/i.test(userAgent)) return "android";
  if (/Windows/i.test(userAgent) || /Win/i.test(platform)) return "windows";
  if (/Mac/i.test(userAgent) || /Mac/i.test(platform)) return "macos";
  if (/Linux/i.test(userAgent) || /Linux/i.test(platform)) return "linux";
  return null;
}
