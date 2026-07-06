import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '..', 'dist')

const prettifyName = (name) => name.replaceAll('-', ' ')

const folders = (await fs.readdir(distDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b))

const links = folders
  .map((folder) => `      <li><a href="./${folder}/">${prettifyName(folder)}</a></li>`)
  .join('\n')

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Talks</title>
    <style>
      :root {
        color-scheme: light dark;
        font-family: Inter, system-ui, sans-serif;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 2rem;
        background: Canvas;
        color: CanvasText;
      }

      main {
        width: min(100%, 42rem);
      }

      h1 {
        margin-top: 0;
      }

      ul {
        padding-left: 1.25rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Talks</h1>
      <p>Select a talk:</p>
      <ul>
${links}
      </ul>
    </main>
  </body>
</html>
`

await fs.writeFile(path.join(distDir, 'index.html'), html)
