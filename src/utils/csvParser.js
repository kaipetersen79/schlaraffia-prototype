// Hilfsfunktion zum korrekten Parsen von CSV-Daten, auch wenn Felder Kommas oder Anführungszeichen enthalten
export function parseCSV(csvText) {
  // Kommentarzeilen (//...) und leere Zeilen entfernen
  const lines = csvText.split('\n')
    .filter(line => line.trim() !== '' && !line.trim().startsWith('//'));

  if (lines.length === 0) return [];

  const result = [];
  const termMap = new Map(); // Zum Speichern der eindeutigen Begriffe

  // Überspringen der Header-Zeile, Beginn mit den Daten
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Suchen nach dem ersten Komma außerhalb von Anführungszeichen
    let commaIndex = -1;
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        commaIndex = j;
        break;
      }
    }

    if (commaIndex === -1) continue; // Kein Komma gefunden, ungültige Zeile

    // Extrahieren von Begriff und Definition
    const term = line.substring(0, commaIndex).trim();
    const definitionWithQuotes = line.substring(commaIndex + 1).trim();

    // Anführungszeichen entfernen, falls vorhanden
    let definition = definitionWithQuotes;
    if (definition.startsWith('"') && definition.endsWith('"')) {
      definition = definition.substring(1, definition.length - 1);
    }

    // Nur Begriffe mit einer Definition hinzufügen
    if (term && definition && definition.trim() !== '') {
      // Wenn der Begriff bereits existiert, nehmen wir die längere Definition
      if (termMap.has(term)) {
        const existingDefinition = termMap.get(term).definition;
        // Nur ersetzen, wenn die neue Definition länger oder aussagekräftiger ist
        if (definition.length > existingDefinition.length) {
          termMap.set(term, { term, definition });
        }
      } else {
        termMap.set(term, { term, definition });
      }
    }
  }

  // Map in Array umwandeln und zurückgeben
  return Array.from(termMap.values());
}
