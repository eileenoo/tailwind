# SZ CSS Workshop - Tailwind

Dieses Projekt bietet eine Einführung in Tailwind CSS und zeigt dessen grundlegende Verwendung.

Es beinhaltet eine grundlegende Konfiguration von Tailwind, das als PostCSS-Plugin integriert ist (ideal für die Kombination mit Vite).
Der Code wurde mithilfe von [Vite] für React erstellt und bietet einen Entwicklungsserver mit Hot Module Reloading.
Zudem kann der Code mit dem `build` Befehl gebündelt und ein produktionsfertiges Paket generiert werden.
<br><br>

# Workshop Exercises

Adde utility classes zu den bestehenden Komponenten (`/src/components`)um sie zu stylen.
Alernativ: Suche nach "TODO" um die Stellen im Code direkt zu finden.

In der [Tailwind Dokumentation] können alle benötigten utility Classes gefunden werden.

# Getting Started

1.  Installiere benötigte Dependencies

    ```
    npm install
    ```

2.  Starte den Dev Server

    ```
    npm run build
    ```

3.  Bei Verwendung von VSCODE: Empfohelene Extensions installieren

    Installiere die Extensions aus der `.vscode/settings.json` Datei.

    <br>

# Integration von Tailwind

Um Tailwind in dieses Projekt zu integrieren, wurden folgende Punkte durchgeführt.

## Benötigte Dependencies hinzufügen

```json
    // Main dependency
    "tailwindcss": "^3.4.10",
    // Peer dependency, tailwind wird als PostCss Plugin integriert
    "postcss": "^8.4.45",
    // Peer dependency, fügt vendor prefixes hinzu
    "autoprefixer": "^10.4.20",
```

## Erstellung der Tailwind und Postcss Konfigurationsdateien

Die Tailwind- und PostCSS-Konfigurationsdateien können entweder manuell oder mit folgendem Befehl erstellt werden:

```
npx tailwindcss init -p
```

Dieser Befehl generiert die Dateien `tailwind.config.js` und `postcss.config.js`.

In der `tailwind.config.js` müssen die Pfade zu allen Dateien angegeben werden, die Tailwind beim Build-Prozess nach Klassennamen durchsuchen soll. Dies stellt sicher, dass nur benötigtes CSS generiert wird, um ungenutzte Klassen in der Produktionsversion zu vermeiden.
Tailwind verwendet reguläre Ausdrücke (regex), um nach Klassennamen zu suchen, daher funktionieren Template Strings nicht (`Tailwind Merge`, `ClassNames` und `CSLX` können hier Abhilfe schaffen).

```js
  // In tailwind.config.js
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

Die `postcss.config.js` sieht standardmäßig so aus:

```js
// In postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Hinzufügen der Tailwind Directives zu CSS

Die Tailwind-Direktiven müssen zur Haupt-CSS-Datei hinzugefügt werden, um die Basis-, Komponenten- und Utility-Klassen von Tailwind zu verwenden:

```css
/* In main.css file */

/* This injects Tailwind's base styles and any base styles registered by plugins. */
@tailwind base;
/* This injects Tailwind's component classes and any component classes registered by plugins.*/
@tailwind compoenents;
/* This injects Tailwind's utility classes and any utility classes registered by plugins. */
@tailwind utilities;
```

<br>

# Empfohlenes Tooling

1. [Prettier Plugin Tailwind]

   Sorts Tailwind classes.
   Removes duplicate classes.
   Removes unnecessary whitespaces.

2. [Tailwind Debug Screens]

   A Tailwind CSS component that shows the currently active screen (responsive breakpoint).
   Must be disabled in production.

3. VSCODE [Tailwind CSS Intellisense]

   Intelligent Tailwind CSS tooling for VS Code.
   Stellt Autocomplete und Intellisense bereit.

4. VSCODE [Tailwind Fold]

   Improves code readability by folding tailwind class attributes.
   `CTRL + Alt + A` to toggle classList.

5. VSCODE [PostCSS Language Support]

   Syntax highlighting for modern and experimental CSS in VSCode.
   Removes warnings for Tailwind directives in your main css file.

[Vite]: https://vitejs.dev/
[Prettier Plugin Tailwind]: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
[Tailwind CSS Intellisense]: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
[Tailwind Fold]: https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold
[PostCSS Language Support]: https://marketplace.visualstudio.com/items?itemName=csstools.postcss
[Tailwind Debug Screens]: https://github.com/jorenvanhee/tailwindcss-debug-screens?tab=readme-ov-file
[Tailwind Dokumentation]: https://tailwindcss.com/docs/
