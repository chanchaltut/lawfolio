import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRoute, buildHeadTags } from '../seo/routes'

// Keeps <head> in sync on client-side navigation. Prerendered pages already ship the same tags.
const Seo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const route = getRoute(pathname)
    document.title = route.title
    document.head.querySelectorAll('[data-seo]').forEach(el => el.remove())
    buildHeadTags(route).forEach(({ tag, attrs, text }) => {
      const el = document.createElement(tag)
      el.setAttribute('data-seo', '')
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
      if (text) el.textContent = text
      document.head.appendChild(el)
    })
  }, [pathname])

  return null
}

export default Seo
