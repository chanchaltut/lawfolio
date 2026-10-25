// Renders every route in src/seo/routes.js to static HTML (with its own <head>) after `vite build`,
// so search engines and AI crawlers get full content without running JavaScript.
// Also writes 404.html and sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, renderHead, ROUTES, NOT_FOUND, SITE } = await import(
    pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const SEO_BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/

if (!SEO_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html is missing the seo markers or the empty #root element')
}

const outFile = (routePath) => {
    if (routePath === '/') return 'index.html'
    return `${routePath.slice(1)}.html`
}

const writePage = (route, file) => {
    const html = template
        .replace(SEO_BLOCK, () => renderHead(route))
        .replace('<div id="root"></div>', () => `<div id="root">${render(route.path)}</div>`)
    const target = path.join(distDir, file)
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, html)
    console.log(`prerendered ${route.path} -> dist/${file}`)
}

for (const route of ROUTES) writePage(route, outFile(route.path))
writePage(NOT_FOUND, '404.html')

const lastmod = new Date().toISOString().slice(0, 10)
const urls = ROUTES.map(r => `  <url>
    <loc>${r.path === '/' ? `${SITE.url}/` : SITE.url + r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>
  </url>`).join('\n')

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`)
console.log(`wrote dist/sitemap.xml (${ROUTES.length} urls)`)

fs.rmSync(ssrDir, { recursive: true, force: true })
