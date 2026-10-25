import { SITE, FOUNDER, ASSOCIATES } from './site'
import { HOME_FAQS, BANK_DEFREEZE_FAQS, CYBER_CRIME_FAQS, CRIMINAL_LAW_FAQS } from './faqs'

const BRAND = SITE.name
const ORG_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`
const FOUNDER_ID = `${SITE.url}/#roshan-kumar`

const practice = (path, serviceName, crumb, extra) => ({
    path,
    breadcrumb: [{ name: crumb, path }],
    service: serviceName,
    priority: 0.8,
    ...extra
})

// One entry per indexable URL. Used for <head> tags, structured data, prerendering and sitemap.xml.
export const ROUTES = [
    {
        path: '/',
        title: 'Cyber Crime Lawyer in Kolkata & Pan-India | The Juris Associates',
        description: 'The Juris Associates, led by Adv. Roshan Kumar, is a Kolkata law firm for cyber crime, bank account freeze & lien removal, online fraud, criminal, civil and corporate matters across India.',
        faqs: HOME_FAQS,
        priority: 1.0
    },
    practice('/practice-areas/bank-account-defreeze', 'Bank account defreezing and lien removal', 'Bank Account Defreeze & Lien Removal', {
        title: 'Bank Account Frozen by Cyber Cell? Defreeze & Lien Removal Lawyer',
        description: 'Bank account frozen by cyber police or a lien marked on your balance? Adv. Roshan Kumar handles bank account defreezing and lien removal across India - representations, Magistrate applications and High Court writs.',
        faqs: BANK_DEFREEZE_FAQS,
        priority: 0.9
    }),
    practice('/practice-areas/cyber-crime', 'Cyber crime and digital law', 'Cyber Crime & Digital Law', {
        title: 'Cyber Crime Lawyer - Online Fraud, Crypto & Harassment | The Juris Associates',
        description: 'Cyber crime lawyers for online investment and trading app fraud, crypto and P2P disputes, identity theft, sextortion, cyber harassment and wrongful cyber allegations. Kolkata-based, Pan-India.',
        faqs: CYBER_CRIME_FAQS,
        priority: 0.9
    }),
    practice('/practice-areas/criminal-law', 'Criminal defence and bail', 'Criminal Law', {
        title: 'Criminal Lawyer for Bail, FIR & Defence in Kolkata | The Juris Associates',
        description: 'Criminal defence lawyers in Kolkata for bail and anticipatory bail, FIR matters, trials and appeals under the BNS, BNSS and BSA. Clear advice from the first police notice to final judgment.',
        faqs: CRIMINAL_LAW_FAQS
    }),
    practice('/practice-areas/banking-finance', 'Banking and finance law', 'Banking & Finance', {
        title: 'Banking & Finance Lawyers - Recovery, Restructuring | The Juris Associates',
        description: 'Banking and finance legal services for lenders and borrowers: debt restructuring, recovery and enforcement, securitisation, acquisition finance, loan documentation and regulatory compliance.'
    }),
    practice('/practice-areas/civil-law-corporate', 'Civil and corporate litigation', 'Civil Law & Corporate', {
        title: 'Civil Lawyer - Property Disputes, Recovery & Contracts | The Juris Associates',
        description: 'Civil and corporate litigation in Kolkata: property and real estate disputes, recovery suits, injunctions, and contract drafting and review, with regular updates at every stage.'
    }),
    practice('/practice-areas/corporate-commercial', 'Corporate and commercial law', 'Corporate & Commercial', {
        title: 'Corporate & Commercial Lawyers - Company, M&A, Contracts | The Juris Associates',
        description: 'Corporate and commercial legal advice for businesses: company, LLP and firm registration, M&A and joint ventures, fundraising, vendor and franchise contracts, compliance and governance.'
    }),
    practice('/practice-areas/dispute-resolution', 'Dispute resolution and arbitration', 'Dispute Resolution', {
        title: 'Dispute Resolution & Arbitration Lawyers, NCLT | The Juris Associates',
        description: 'Dispute resolution lawyers for shareholder and contract disputes, domestic and international arbitration, NCLT and tribunal matters, and property and IP disputes across Indian courts.'
    }),
    practice('/practice-areas/employment-labour', 'Employment and labour law', 'Employment & Labour Law', {
        title: 'Employment & Labour Law Advisors - Labour Codes | The Juris Associates',
        description: 'Employment and labour law advice for employers: offer letters, NDAs and HR policies, ESOPs, employee transfers in restructuring, and compliance with the new Indian labour codes.'
    }),
    practice('/practice-areas/family-estates', 'Wills, succession and trust planning', 'Family Estates & Trust Planning', {
        title: 'Wills, Succession & Trust Lawyers - Probate | The Juris Associates',
        description: 'Wills, succession planning, private trusts, probate and estate administration, and estate litigation for families and business owners. Clear, uncontested plans that protect your legacy.'
    }),
    {
        path: '/about',
        title: 'About The Juris Associates - Kolkata Law Firm & Cyber Law Specialists',
        description: 'The Juris Associates is a client-centric Kolkata legal consultancy offering advisory and litigation across criminal, civil, corporate and regulatory law, with a core focus on cyber crime.',
        breadcrumb: [{ name: 'About Us', path: '/about' }],
        pageType: 'AboutPage',
        priority: 0.7
    },
    {
        path: '/team',
        title: 'Our Lawyers - Adv. Roshan Kumar & Team | The Juris Associates',
        description: 'Meet the lawyers of The Juris Associates: Adv. Roshan Kumar, founder and cyber crime specialist, and Advocate Samrat Chandra Mandal, criminal and civil law associate.',
        breadcrumb: [{ name: 'Our Team', path: '/team' }],
        pageType: 'ProfilePage',
        mainEntity: FOUNDER_ID,
        priority: 0.7
    },
    {
        path: '/contact',
        title: 'Contact a Cyber Crime Lawyer in Kolkata | The Juris Associates',
        description: 'Contact The Juris Associates in Kolkata: call or WhatsApp +91 9211957859 or email infothejurisassociates@gmail.com. Monday to Saturday, 10 AM to 7 PM. Pan-India consultations.',
        breadcrumb: [{ name: 'Contact Us', path: '/contact' }],
        pageType: 'ContactPage',
        priority: 0.8
    },
    {
        path: '/insights',
        title: 'Legal Insights on Cyber Crime & Indian Law | The Juris Associates',
        description: 'Articles and updates from The Juris Associates on bank account freezes, cyber fraud, crypto disputes, corporate compliance, labour codes and dispute resolution in India.',
        breadcrumb: [{ name: 'Insights', path: '/insights' }],
        priority: 0.6
    },
    {
        path: '/privacy-policy',
        title: 'Privacy Policy | The Juris Associates',
        description: 'How The Juris Associates collects, uses and protects personal information shared through this website.',
        breadcrumb: [{ name: 'Privacy Policy', path: '/privacy-policy' }],
        priority: 0.2
    },
    {
        path: '/terms-conditions',
        title: 'Terms & Conditions | The Juris Associates',
        description: 'Terms and conditions for using the website of The Juris Associates.',
        breadcrumb: [{ name: 'Terms & Conditions', path: '/terms-conditions' }],
        priority: 0.2
    }
]

export const NOT_FOUND = {
    path: '/404',
    title: 'Page Not Found | The Juris Associates',
    description: 'The page you are looking for does not exist.',
    noindex: true
}

export const normalizePath = (pathname) => {
    const p = (pathname || '/').split(/[?#]/)[0].replace(/\/+$/, '')
    return p === '' ? '/' : p
}

export const getRoute = (pathname) => {
    const path = normalizePath(pathname)
    return ROUTES.find(r => r.path === path) || NOT_FOUND
}

const absolute = (path) => (path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`)

const organizationSchema = () => ({
    '@type': ['LegalService', 'ProfessionalService'],
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    legalName: SITE.legalName,
    slogan: SITE.tagline,
    description: 'Kolkata-based legal consultancy offering advisory and litigation services in cyber crime, bank account freeze and lien removal, criminal, civil, corporate, banking, employment and family law across India.',
    url: `${SITE.url}/`,
    logo: { '@type': 'ImageObject', url: absolute(SITE.logo) },
    image: absolute(SITE.ogImage),
    telephone: SITE.phone,
    email: SITE.email,
    address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.locality,
        addressRegion: SITE.region,
        addressCountry: SITE.country
    },
    areaServed: [
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'State', name: 'West Bengal' },
        { '@type': 'Country', name: 'India' }
    ],
    openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SITE.openingHours.days,
        opens: SITE.openingHours.opens,
        closes: SITE.openingHours.closes
    }],
    contactPoint: [{
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        email: SITE.email,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Bengali']
    }],
    founder: { '@id': FOUNDER_ID },
    employee: [{ '@id': FOUNDER_ID }, ...ASSOCIATES.map(a => ({ '@type': 'Person', name: a.name, jobTitle: a.jobTitle, knowsAbout: a.knowsAbout }))],
    knowsAbout: [
        'Cyber crime law', 'Bank account defreezing', 'Lien removal', 'Online investment fraud',
        'Crypto and P2P trading disputes', 'Criminal defence', 'Bail and anticipatory bail',
        'Civil litigation', 'Corporate law', 'Banking and finance law', 'Arbitration',
        'Employment and labour law', 'Wills and succession'
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal services',
        itemListElement: ROUTES.filter(r => r.service).map(r => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: r.service, url: absolute(r.path) }
        }))
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {})
})

const founderSchema = () => ({
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: FOUNDER.name,
    givenName: FOUNDER.givenName,
    familyName: FOUNDER.familyName,
    honorificPrefix: 'Adv.',
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.description,
    knowsAbout: FOUNDER.knowsAbout,
    worksFor: { '@id': ORG_ID },
    url: absolute('/team')
})

const websiteSchema = () => ({
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
    creator: { '@type': 'Organization', name: SITE.developer.name, url: SITE.developer.url }
})

export const buildSchema = (route) => {
    const url = absolute(route.path)
    const graph = [organizationSchema(), founderSchema(), websiteSchema()]

    const webPage = {
        '@type': route.pageType || 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: route.title,
        description: route.description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        primaryImageOfPage: { '@type': 'ImageObject', url: absolute(SITE.ogImage) },
        ...(route.mainEntity ? { mainEntity: { '@id': route.mainEntity } } : {})
    }

    if (route.breadcrumb) {
        const crumbs = [{ name: 'Home', path: '/' }, ...route.breadcrumb]
        graph.push({
            '@type': 'BreadcrumbList',
            '@id': `${url}#breadcrumb`,
            itemListElement: crumbs.map((c, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: c.name,
                item: absolute(c.path)
            }))
        })
        webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
    }
    graph.push(webPage)

    if (route.service) {
        graph.push({
            '@type': 'Service',
            '@id': `${url}#service`,
            name: route.service,
            serviceType: route.service,
            description: route.description,
            url,
            provider: { '@id': ORG_ID },
            areaServed: { '@type': 'Country', name: 'India' }
        })
    }

    if (route.faqs?.length) {
        graph.push({
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            mainEntity: route.faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
            }))
        })
    }

    return { '@context': 'https://schema.org', '@graph': graph }
}

// Head tags for a route, as plain descriptors so the same data drives both the prerendered
// HTML and client-side navigation.
export const buildHeadTags = (route) => {
    const url = absolute(route.path)
    const image = absolute(SITE.ogImage)
    const tags = [
        { tag: 'meta', attrs: { name: 'description', content: route.description } },
        { tag: 'meta', attrs: { name: 'robots', content: route.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: BRAND } },
        { tag: 'meta', attrs: { property: 'og:locale', content: SITE.locale } },
        { tag: 'meta', attrs: { property: 'og:title', content: route.title } },
        { tag: 'meta', attrs: { property: 'og:description', content: route.description } },
        { tag: 'meta', attrs: { property: 'og:image', content: image } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: `${BRAND} - ${SITE.tagline}` } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:title', content: route.title } },
        { tag: 'meta', attrs: { name: 'twitter:description', content: route.description } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image } }
    ]
    if (!route.noindex) {
        tags.push(
            { tag: 'link', attrs: { rel: 'canonical', href: url } },
            { tag: 'meta', attrs: { property: 'og:url', content: url } },
            { tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(buildSchema(route)) }
        )
    }
    return tags
}

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const renderHead = (route) => {
    const tags = buildHeadTags(route).map(({ tag, attrs, text }) => {
        const a = Object.entries(attrs).map(([k, v]) => ` ${k}="${escapeAttr(v)}"`).join('')
        if (tag === 'script') return `<script data-seo${a}>${text.replace(/</g, '\\u003c')}</script>`
        return `<${tag} data-seo${a}>`
    })
    return [`<title>${escapeText(route.title)}</title>`, ...tags].join('\n  ')
}
