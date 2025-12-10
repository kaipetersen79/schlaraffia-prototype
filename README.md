Luca Blunck (750058), Julius Cordes (750219), Marcel Baier (750237), Tom Pohlandt (750076), Ben Steingrube (750091)

Wir sind damit einverstanden, dass unsere Website weiterverwendet werden darf. 

# Schlaraffia Website

Dieses Repository enthält den Quellcode für die Schlaraffia-Website, entwickelt mit Vue 3 und Vite. Im Folgenden findest du ausführliche Anweisungen zur Installation, Ausführung, Aktualisierung und Wartung der Website.

## Voraussetzungen

Stelle vorab sicher, dass folgende Software auf deinem System installiert ist:

1. **Node.js** (Version 16 oder höher) – [Node.js herunterladen](https://nodejs.org/)
2. **npm** (wird mit Node.js installiert) oder **yarn** – zum Verwalten der Abhängigkeiten


## Hinweise zu Font Awesome, AOS, tsparticles und Tailwind CSS (visuelle Module)

- **Font Awesome** wird für Icons verwendet und ist bereits als Abhängigkeit installiert und im Projekt eingebunden.
- **AOS (Animate On Scroll)** sorgt für Animationen beim Scrollen und ist ebenfalls automatisch installiert und in der `main.js` initialisiert.
- **tsparticles** wird für Partikel-Effekte genutzt und ist ebenfalls als Abhängigkeit enthalten.
- **Tailwind CSS** wird für das gesamte Styling und die Utility-Klassen verwendet.
- Es sind keine weiteren manuellen Installationsschritte für diese Bibliotheken notwendig – alles wird mit `npm install` erledigt.

## Installation

So richtest du das Projekt ein:

1. Abhängigkeiten installieren:
   ```sh
   npm install
   ```
   **Hinweis:** Alle benötigten Bibliotheken wie Font Awesome, AOS (Animate On Scroll) und tsparticles werden automatisch mitinstalliert. Es sind keine weiteren Schritte für diese Pakete notwendig.

2. Umgebung konfigurieren:
   - Stelle sicher, dass die Datei `vite.config.js` korrekt für deine Umgebung eingerichtet ist.
   - Für dieses Projekt sind keine zusätzlichen Umgebungsvariablen erforderlich.

## Website starten

### Entwicklungsmodus

Um den Entwicklungsserver mit Hot-Reload zu starten:
```sh
npm run dev
```

Die Website ist dann standardmäßig unter `http://localhost:[Portnummer]` erreichbar.

### Produktionsmodus

Um das Projekt für die Produktion zu bauen:
```sh
npm run build
```

Um den Produktions-Build lokal zu testen:
```sh
npm run preview
```

## Abhängigkeiten aktualisieren

So hältst du das Projekt aktuell:

1. Veraltete Pakete anzeigen:
   ```sh
   npm outdated
   ```

2. Pakete aktualisieren:
   ```sh
   npm update
   ```

3. Falls nötig, einzelne Pakete manuell aktualisieren:
   ```sh
   npm install <paketname>@latest
   ```

4. Nach Updates die Anwendung gründlich testen, um Kompatibilität sicherzustellen.

## Wartung

### Regelmäßige Updates

- Prüfe regelmäßig auf Updates für Vue, Vite und andere Abhängigkeiten.
- Aktualisiere die `package.json` und führe `npm install` aus.

### Backup

- Sichere regelmäßig die Ordner `src` und `public`.
- Nutze Versionskontrolle (Git), um eine Änderungshistorie zu behalten.

## Projektstruktur

- `src/`: Hauptquellcode
  - `components/`: Wiederverwendbare Vue-Komponenten
  - `views/`: Vue-Komponenten für einzelne Seiten
  - `assets/`: Bilder und andere statische Dateien
  - `utils/`: Hilfsfunktionen
  - `data/`: JSON-Dateien für dynamische Daten
- `public/`: Öffentlich zugängliche Dateien
- `index.html`: Einstiegspunkt der Website
- `vite.config.js`: Konfigurationsdatei für Vite

## Fehlerbehebung

### Häufige Probleme

1. **Port-Konflikt:**
   - Wenn der Standard-Port (3000) belegt ist, kann ein anderer Port angegeben werden:
     ```sh
     npm run dev -- --port=<neuer-port>
     ```

2. **Abhängigkeitsfehler:**
   - Lösche `node_modules` und installiere die Abhängigkeiten neu:
     ```sh
     rm -rf node_modules
     npm install
     ```

3. **Build-Fehler:**
   - Überprüfe die Datei `vite.config.js` auf Fehler oder falsche Einstellungen.

### Logs

- Prüfe die Browser-Konsole auf Fehler.
- Überprüfe die Ausgaben im Terminal auf Build- oder Laufzeitfehler.
