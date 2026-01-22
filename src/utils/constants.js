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
    image: '/public/roshan_profile.jpeg',
    description: 'A practicing Cyber Crime and Digital Fraud Lawyer, specializing in bank account defreezing, lien removal, and cyber-related financial disputes.',
    expertise: [
        'Bank Account Defreezing & Lien Removal',
        'Cyber Crime Defense & FIR Analysis',
        'Investment & Digital Fraud Matters',
        'Crypto & P2P Trading Disputes'
    ]
}

// Practice areas
export const PRACTICE_AREAS = [
    {
        id: 1,
        category: 'Cyber Crime & Digital Law',
        isCore: true,
        icon: 'fa-shield-halved',
        services: [
            'Bank Account Freeze & Defreeze Matters',
            'Online Investment & Trading App Fraud',
            'Crypto Fraud & P2P Trading Disputes',
            'Identity Theft & Impersonation',
            'Social Media Crime & Cyber Harassment',
            'Online Extortion, Blackmail & Defamation',
            'Wrongful Cyber Allegations & Defense'
        ]
    },
    {
        id: 2,
        category: 'Criminal Law',
        icon: 'fa-gavel',
        services: [
            'FIR, Bail & Anticipatory Bail',
            'Criminal Trial & Appeals',
            'White Collar Crimes',
            'Economic Offences',
            'Cheque Bounce Cases'
        ]
    },
    {
        id: 3,
        category: 'Civil Law',
        icon: 'fa-house-chimney-user',
        services: [
            'Property & Real Estate Disputes',
            'Recovery Suits',
            'Injunctions & Declarations',
            'Family & Matrimonial Matters',
            'Consumer Protection Cases'
        ]
    },
    {
        id: 4,
        category: 'Corporate & Commercial Law',
        icon: 'fa-building',
        services: [
            'Company, LLP & Firm Registration',
            'Corporate Compliance & Advisory',
            'Contract Drafting & Review',
            'Regulatory Matters',
            'Employment & Labour Law'
        ]
    },
    {
        id: 5,
        category: 'Banking & Financial Law',
        icon: 'fa-landmark',
        services: [
            'Lien Removal',
            'NOC from Police/Cyber Cell',
            'Disputed Transaction Resolution',
            'Recovery & Enforcement Proceedings'
        ]
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
