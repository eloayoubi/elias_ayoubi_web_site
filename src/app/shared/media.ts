/** `window.matchMedia`, abgesichert für Umgebungen ohne Implementierung (z. B. jsdom in Tests). */
export function matchMediaSafe(query: string): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia(query).matches;
}
