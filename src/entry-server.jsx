import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export { ROUTES, NOT_FOUND, renderHead } from './seo/routes'
export { SITE } from './seo/site'

export function render(url) {
    return renderToString(
        <React.StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </React.StrictMode>
    )
}
