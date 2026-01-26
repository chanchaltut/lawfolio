// App configuration
export const APP_CONFIG = {
    name: 'Juris Associates',
    description: 'Legal Consultants • Cyber Crime Specialists',
    tagline: 'Comprehensive Legal Services with a Core Focus on Cyber Crime Law',
    version: '1.0.0',
    author: 'Juris Associates'
}

// Navigation items
export const NAV_ITEMS = [
    { name: 'Home', href: '#home', icon: 'fa-house' },
    { name: 'About Us', href: '#about', icon: 'fa-info-circle' },
    { name: 'Practice Areas', href: '#practice', icon: 'fa-scale-balanced' },
    { name: 'Why Choose Us', href: '#why-choose-us', icon: 'fa-shield-halved' },
    { name: 'Contact Us', href: '#contact', icon: 'fa-phone' }
]

// Social links and contact
export const SOCIAL_LINKS = {
    phone: '9211957859',
    email: 'roshankgupta479@gmail.com',
    address: 'Kolkata, West Bengal',
    location: 'Kolkata, West Bengal, India',
    website: 'https://jurisassociates.com',
    facebook: 'https://facebook.com/jurisassociates',
    twitter: 'https://twitter.com/jurisassociates',
    instagram: 'https://instagram.com/jurisassociates',
    linkedin: 'https://linkedin.com/company/jurisassociates'
}

// Advocate Profile
export const ADVOCATE_PROFILE = {
    name: 'Adv. Roshan Kumar',
    designation: 'Cyber Crime & Corporate Legal Consultant',
    specialization: 'Bank Account Defreezing & Lien Removal Expert',
    phone: '9211957859',
    email: 'roshankgupta479@gmail.com',
    location: 'Kolkata, West Bengal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    description: 'A practicing Cyber Crime and Digital Fraud Lawyer, specializing in bank account defreezing, lien removal, and cyber-related financial disputes.',
    expertise: [
        'Bank Account Defreezing & Lien Removal',
        'Cyber Crime Defense & FIR Analysis',
        'Investment & Digital Fraud Matters',
        'Crypto & P2P Trading Disputes'
    ]
}

// Practice areas with detailed content
export const PRACTICE_AREAS = [
    {
        id: 1,
        category: 'Cyber Crime & Digital Law',
        isCore: true,
        icon: 'fa-shield-halved',
        subtitle: 'Core Focus',
        services: [
            'Bank Account Freeze & Defreeze Matters',
            'Online Investment & Trading App Fraud',
            'Crypto Fraud & P2P Trading Disputes',
            'Identity Theft & Impersonation',
            'Social Media Crime & Cyber Harassment',
            'Online Extortion, Blackmail & Defamation',
            'Wrongful Cyber Allegations & Defense'
        ],
        description: 'Specialized expertise in cyber crime and digital law matters.',
        overview: 'At The Juris Associates, we specialize in cyber crime and digital law, providing expert legal services for matters involving digital fraud, online financial disputes, and cyber-related offenses. Our team has extensive experience in handling complex cyber crime cases with a focus on protecting our clients\' rights and interests.',
        whatWeDo: 'We provide comprehensive legal support for cyber crime matters including bank account freeze and defreeze cases, online investment fraud, cryptocurrency disputes, identity theft, social media crimes, and wrongful cyber allegations. Our approach combines deep understanding of cyber laws with practical solutions tailored to each client\'s unique situation.',
        difference: 'Our specialized practice in cyber crime law positions us uniquely to handle complex digital disputes. We understand the evolving nature of cyber laws and digital regulations, ensuring that our clients receive the most current and effective legal representation. We work closely with law enforcement agencies, financial institutions, and regulatory bodies to achieve the best outcomes for our clients.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80'
    },
    {
        id: 2,
        category: 'Banking & Finance',
        icon: 'fa-landmark',
        subtitle: 'Financial Expertise',
        services: [
            'Securitization: Managing corporate and personal loan portfolios, including mortgages',
            'Debt Restructuring: Joint lenders\' forums, negotiated settlements, and corporate restructuring',
            'Recovery & Enforcement: Bankruptcy proceedings and security enforcement',
            'Domestic and International Transactions',
            'Acquisition Finance and Infrastructure Projects'
        ],
        description: 'Navigating the Complexities of Finance with Practical, High-Level Insight.',
        overview: 'At The Juris Associates, we know that in the banking world, a legal strategy is only as good as the business results it delivers. Our team brings together years of experience working alongside financial regulators and major institutions to help our clients move their deals forward with confidence.',
        whatWeDo: 'We handle the heavy lifting on both domestic and international transactions. Whether you are navigating acquisition finance or a complex infrastructure project, we provide the legal backbone needed to close the deal. We represent both lenders and borrowers, ensuring that every piece of documentation is not just compliant, but strategically sound.',
        difference: 'We don\'t just cite law; we understand the industry. Our approach combines deep legal knowledge with a real-world perspective on the banking sector. We see ourselves as your partners, dedicated to finding smart, effective solutions that work for your business—here at home and across the global market.',
        image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80'
    },
    {
        id: 3,
        category: 'Criminal Law',
        icon: 'fa-gavel',
        subtitle: 'Expert Defense',
        services: [
            'Rights of Arrested Person: Presumption of innocence and legal protections',
            'Circumstantial Evidence: Establishing guilt or innocence through reasoning',
            'Rights of Arrestee: Legal rights, defenses, and proceedings',
            'Law of Evidence: Admissibility of evidence in Indian courts',
            'Bail Proceedings: Advice on bail conditions and procedures'
        ],
        description: 'Understanding the Concept of Criminal Legal Services',
        overview: 'Criminal legal services regulate violations, including felonies and wrongdoings. Wrongdoings are referred to as offenses against the state. The standard of confirmation for wrongdoings is "past a sensible instability." This field of law is managed by Indian Penal Code, CrPC, Evidence Act etc.',
        whatWeDo: 'An arrangement of guidelines and statutes that portrays conduct blocked by the organization in light of the way that it cripples and damages open wellbeing and welfare, and that develops control to be constrained for the commission of such acts.',
        difference: 'The term criminal laws imply wrongdoings that may build up disciplines. Criminal Procedure depicts the procedure through which the criminal laws are implemented. Violations are normally ordered as crimes or wrongdoings in light of their inclination and the greatest discipline that can be forced.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80'
    },
    {
        id: 4,
        category: 'Civil Law & Corporate',
        icon: 'fa-house-chimney-user',
        subtitle: 'Comprehensive Solutions',
        services: [
            'Contract Drafting and Review: Researching, reviewing and drafting contracts and agreements',
            'Civil and Corporate Litigation: Non-criminal legal issues and disputes',
            'Oral Pleadings: Effective representation before judges and adjudicating authorities',
            'Property & Real Estate Disputes',
            'Recovery Suits and Injunctions'
        ],
        description: 'Changing facets of Civil and Corporate Litigation Services',
        overview: 'Initially, the law was broadly categorized under two main areas namely, civil and criminal. But today, there is one more branch of law namely Corporate law. Civil and corporate litigation involves the determination of all the non-criminal legal issues and disputes between two or more people with the intention of either seeking legal performance of a contract or if that is not a possibility, then to award damages and compensation to the aggrieved party.',
        whatWeDo: 'Civil and Corporate Litigation services involve researching, reviewing and drafting of contracts, agreements of any type and kind. Once the drafting part is taken care of, the next crucial part is of oral pleadings. Both civil and corporate litigation relies heavily on the lawyer\'s command over the language as well as his persuasiveness when it comes to convincing the authority.',
        difference: 'We ensure that your lawyer is always at your assistance and provides you with proper and sound legal advice. At every stage of proceedings, we give you an update on the status of your matter and what lies or may lie ahead.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80'
    },
    {
        id: 5,
        category: 'Corporate & Commercial',
        icon: 'fa-building',
        subtitle: 'Business Advisory',
        services: [
            'M&A and Structural Changes: Mergers, de-mergers, and complex joint ventures',
            'Investment & Growth: Fundraising rounds, private equity, and venture capital',
            'Contracts & Operations: Vendor contracts, franchise agreements, and distributorships',
            'Compliance & Governance: Airtight governance and risk management',
            'Company, LLP & Firm Registration'
        ],
        description: 'A Partner for the Entire Business Life Cycle.',
        overview: 'At The Juris Associates, we don\'t just handle cases; we support businesses. We have built a reputation for being a go-to firm for corporate and commercial matters because we understand that legal advice is useless if it doesn\'t align with your commercial goals.',
        whatWeDo: 'From the day you start a venture to the day you exit, we are in your corner. Our team works as an extension of your own in-house counsel, providing the kind of day-to-day advisory that keeps operations running smoothly. We take the time to learn how your business actually makes money, so our advice is always relevant and grounded in reality.',
        difference: 'We pride ourselves on being reliable, responsive, and deeply invested in our clients\' success. At The Juris Associates, we help you navigate the complexities of Indian corporate law so you can stay focused on what you do best: growing your business.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
    },
    {
        id: 6,
        category: 'Dispute Resolution',
        icon: 'fa-scale-balanced',
        subtitle: 'Strategic Litigation',
        services: [
            'Civil & Corporate Litigation: Shareholder disputes, breach of contract, and commercial disagreements',
            'Regulatory & Tribunals: Representation before quasi-judicial authorities and specialized Tribunals (NCLT, NGT, etc.)',
            'Arbitration: Domestic and international arbitration',
            'Property & Intellectual Property: Land ownership, construction, and brand protection disputes',
            'High-stakes Civil Litigation and Criminal Defense'
        ],
        description: 'A Proven Track Record of Success in Every Forum.',
        overview: 'Dispute resolution is the core of what we do. At The Juris Associates, we don\'t just "handle cases"—we resolve them. Our litigation team is built on a deep understanding of Indian law and a strategic approach that prioritizes our clients\' business goals over endless courtroom battles.',
        whatWeDo: 'We believe a win in court is only a win if it makes sense for your bottom line. Our litigators don\'t work in a vacuum; they collaborate with our corporate and finance experts to make sure our courtroom strategy aligns with your long-term interests. We handle everything from high-stakes civil litigation and criminal defense to complex property and tax disputes.',
        difference: 'Our team has the reach and the stamina to represent you at every level of the Indian judicial system. We enter every case with a clear set of objectives, focusing on the relief you actually need to move forward. At The Juris Associates, we help you navigate complex legal hurdles so you can emerge from a dispute with your business intact and your interests secured.',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80'
    },
    {
        id: 7,
        category: 'Employment & Labour Law',
        icon: 'fa-briefcase',
        subtitle: 'Workplace Solutions',
        services: [
            'The Essentials: Drafting offer letters, non-disclosure agreements, and company policies',
            'Structural Changes: Employee transfers during business sales and benefits during restructure',
            'Attracting Talent: Setting up ESOPs (Employee Stock Options) and other incentive plans',
            'Staying Compliant: Navigating the latest updates to Indian labour codes',
            'Sector Experience: IT, Hospitality, Manufacturing, and Plantations'
        ],
        description: 'Clear-cut advice for the modern workplace.',
        overview: 'Managing a team in India means dealing with a lot of red tape. At The Juris Associates, we help you cut through it. We aren\'t just here to quote the law; we\'re here to help you manage your people without getting tied up in litigation or regulatory hurdles.',
        whatWeDo: 'Most employment issues come down to how things are set up at the start. We spend a lot of our time helping companies get their foundations right—drafting contracts that actually protect the business and creating handbooks that employees can actually understand. When things change, like during a merger or a layoff, we step in to make sure the process is handled legally and quietly.',
        difference: 'We don\'t stick to one niche. Our team has worked across everything from IT and Hospitality to Manufacturing and Plantations. We also stay in constant contact with industry groups and the government, so when the rules change, we\'re usually the first to know. At the end of the day, our goal is simple: to help you build a workplace that is compliant, productive, and free of legal drama.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80'
    },
    {
        id: 8,
        category: 'Family Estates & Trust Planning',
        icon: 'fa-heart',
        subtitle: 'Legacy Protection',
        services: [
            'Wills & Succession: Drafting precise wills and succession plans that leave no room for ambiguity',
            'Trusts & Asset Protection: Setting up private trusts and family offices to safeguard assets',
            'Probate & Administration: Guiding families through probate and estate administration',
            'Philanthropy: Structuring charitable giving and non-profit entities',
            'Dispute Resolution: Representing executors, trustees, and beneficiaries in estate litigation'
        ],
        description: 'Protecting Your Legacy and Your Family\'s Future.',
        overview: 'Managing wealth is one thing; making sure it transitions smoothly to the next generation is another. At The Juris Associates, we act as more than just legal advisors—we are long-term confidants for business families, entrepreneurs, and individuals who want to secure their legacy without leaving behind a trail of legal disputes.',
        whatWeDo: 'We know that family dynamics can be just as complex as the law itself. Our goal is to help you organize your affairs so that your heirs are protected and your wishes are carried out exactly as intended. We focus on creating clear, uncontested plans that minimize taxes and prevent the kind of public litigation that can tear families apart.',
        difference: 'We don\'t believe in one-size-fits-all templates. Every family is different, and we take the time to understand the "why" behind your planning. Whether you\'re dealing with a multi-generational business or personal assets, we provide the steady, professional hand needed to ensure a seamless transition for those you care about most.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
    }
]

// Why choose us features
export const WHY_CHOOSE_US = [
    'Full-Service Legal Consultancy',
    'Specialized Cyber Crime Practice',
    'Pan-India Client Representation',
    'Ethical, Confidential & Transparent',
    'Quick Response & Professional Handling'
]

// Legal team
export const LEGAL_TEAM = [
    {
        id: 1,
        name: 'Senior Advocate',
        position: 'Cyber Crime & Digital Law Specialist',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80',
        expertise: 'Cyber Crime, Digital Fraud, Financial Disputes'
    },
    {
        id: 2,
        name: 'Legal Consultant',
        position: 'Criminal & Civil Law Expert',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        expertise: 'Criminal Defense, Civil Litigation'
    },
    {
        id: 3,
        name: 'Corporate Advisor',
        position: 'Corporate & Commercial Law',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        expertise: 'Corporate Compliance, Commercial Contracts'
    }
]

// About section
export const ABOUT_SECTION = {
    title: 'About Juris Associates',
    description: `Juris Associates is a client-centric legal consultancy firm offering advisory and litigation services across all major areas of law, including criminal law, civil disputes, corporate advisory, and regulatory compliance, with particular expertise in cyber crime and digital financial fraud matters.`,
    mission: `Our mission is to protect our clients' legal rights while delivering practical, timely, and ethical legal solutions. With a strong understanding of cyber laws and evolving digital regulations, we are well-equipped to handle both traditional legal matters and modern technology-driven disputes.`,
    tagline: 'Pan-India Practice | Trusted Legal Advisors | Cyber Law Specialists'
}

// Statistics
export const STATS = [
    { number: '15+', label: 'Years of Experience' },
    { number: '2.5k+', label: 'Cases Successfully Resolved' },
    { number: '100+', label: 'Cyber Crime Cases Handled' },
    { number: '50+', label: 'Corporate Clients Served' }
]
