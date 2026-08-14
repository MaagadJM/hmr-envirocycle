const fs = require('fs')
const path = require('path')

const htmlPath = path.join(__dirname, 'landing-preview.html')
const outPath = path.join(__dirname, 'landing-standalone.html')

let html = fs.readFileSync(htmlPath, 'utf8')

// Find all src="..." pointing to local image files
const srcRegex = /src="(src\/assets\/images\/[^"]+)"/g
let match

while ((match = srcRegex.exec(html)) !== null) {
  const relPath = match[1]
  const absPath = path.join(__dirname, relPath)

  if (fs.existsSync(absPath)) {
    const ext = path.extname(absPath).toLowerCase().replace('.', '')
    const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : `image/${ext}`
    const data = fs.readFileSync(absPath).toString('base64')
    const dataUri = `data:${mime};base64,${data}`
    html = html.replace(`src="${relPath}"`, `src="${dataUri}"`)
    console.log(`Embedded: ${relPath}`)
  } else {
    console.warn(`Missing: ${absPath}`)
  }
}

fs.writeFileSync(outPath, html, 'utf8')
console.log(`\nDone! Saved to: landing-standalone.html`)
