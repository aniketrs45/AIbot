# Ani AI Sidebar Extension

Chrome Manifest V3 extension with a React + Tailwind sidebar UI, content script text extraction, and a background worker that serves a mock API response.

## Folder structure

```
public/
  manifest.json
src/
  background.ts
  contentScript.ts
  global.d.ts
  sidebar/
    App.tsx
    main.tsx
    styles.css
    components/
      ChatInput.tsx
      Header.tsx
      PromptCard.tsx
      StatusBadge.tsx
index.html
sidebar.html
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Build the extension (required before loading in Chrome):

```bash
npm run build
```

3. Load the extension in Chrome:

- Go to `chrome://extensions`
- Enable **Developer mode**
- Click **Load unpacked**
- Select the `dist/` folder (the manifest lives there after the build step)

4. Open any webpage to see the injected sidebar.

## Development (optional)

Run a local preview of the sidebar UI:

```bash
npm run dev
```

Visit `http://localhost:5173` to see the preview UI.
