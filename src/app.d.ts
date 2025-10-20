/**
 * @file src/app.d.ts
 * @description TypeScript-Definitionen für SvelteKit-spezifische Typen. Hier
 * erweitern wir ggf. den App-Namespace, z. B. für `Locals`, `PageData` oder
 * benutzerdefinierte Plattformdaten. Aktuell beschränken wir uns auf die
 * Standardexporte, damit Junioren sehen, wo Erweiterungen vorgenommen werden würden.
 */

// Sie können diesen Namespace erweitern, sobald serverseitige Load-Funktionen
// spezialisierte Typen benötigen. Für das Template behalten wir die Defaults.
declare global {
  namespace App {
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
