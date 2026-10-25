// FAQ content is rendered on the page (FAQSection) and emitted as FAQPage structured data,
// so the visible answers and the schema always match.

export const HOME_FAQS = [
    {
        q: 'What does The Juris Associates do?',
        a: 'The Juris Associates is a Kolkata-based legal consultancy led by Adv. Roshan Kumar. The firm advises and represents clients in cyber crime and digital fraud matters, bank account freeze, defreeze and lien removal, criminal defence and bail, civil and property disputes, corporate and commercial law, banking and finance, employment law, and wills, succession and trusts.'
    },
    {
        q: 'Where is The Juris Associates located, and do you take cases outside Kolkata?',
        a: 'The firm is based in Kolkata, West Bengal, and handles matters across India. Cyber crime and bank account freeze cases often involve a police station or cyber cell in another state, and we coordinate with the investigating agency and the competent court wherever the case is registered.'
    },
    {
        q: 'My bank account has been frozen by the cyber cell. What should I do first?',
        a: 'Ask your bank in writing for the details of the freeze: which police station or cyber cell requested it, the complaint or acknowledgement number, and the amount marked. Do not move money out of other accounts in a panic, keep your transaction records safe, and consult a cyber crime lawyer before replying to any police notice.'
    },
    {
        q: 'How can I consult a lawyer at The Juris Associates?',
        a: 'Call or WhatsApp +91 9211957859, email infothejurisassociates@gmail.com, or use the contact form on this website. Office hours are Monday to Saturday, 10:00 AM to 7:00 PM; Sunday consultations are by appointment.'
    }
]

export const BANK_DEFREEZE_FAQS = [
    {
        q: 'Why was my bank account frozen by the cyber crime police?',
        a: 'Most freezes happen because money linked to a complaint on the National Cybercrime Reporting Portal (cybercrime.gov.in) or the 1930 helpline passed through your account, even if you received it in good faith, for example through a crypto P2P sale, a UPI payment for goods, or a transfer from someone you did not know was a fraudster. On the request of the police, the bank either blocks debits from the whole account or marks a lien on a specific amount.'
    },
    {
        q: 'What is the difference between a debit freeze and a lien on my account?',
        a: 'A debit freeze stops all outgoing transactions from the account. A lien blocks only a specific amount, usually the disputed sum, while the rest of the balance can still be used. The remedy and the urgency depend on which one has been applied, so check your bank\'s letter or ask the branch in writing.'
    },
    {
        q: 'How do I find out which police station or cyber cell froze my account?',
        a: 'Write to your bank branch or nodal officer asking for the name of the police station or cyber cell, the state, the complaint or acknowledgement number, the date of the request and the amount involved. Banks normally share these details with the account holder, and they are needed to approach the investigating officer or the court.'
    },
    {
        q: 'What is the legal process to get a frozen bank account defrozen?',
        a: 'Police usually freeze accounts using their power to seize property under Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (earlier Section 102 of the CrPC), and the seizure has to be reported to the jurisdictional Magistrate. The usual remedies are a written representation with supporting documents to the investigating officer or cyber cell, an application before the Magistrate for release or de-freezing of the account, and, where the freeze is excessive or procedure has not been followed, a writ petition before the High Court.'
    },
    {
        q: 'Can the police freeze my entire account for a small disputed amount?',
        a: 'Indian courts have, in a number of cases, held that freezing an entire account when only a small amount is disputed can be disproportionate, and have directed that only the disputed amount be kept on hold. Whether this applies to your case depends on the facts, so have a lawyer review the freeze details.'
    },
    {
        q: 'How long does it take to get a bank account unfrozen?',
        a: 'There is no fixed timeline. It depends on the state and agency involved, whether the disputed amount is clearly identified, how quickly documents are provided, and whether a court order is needed. Some matters are resolved through a representation to the investigating officer; others need an application before the Magistrate or the High Court.'
    },
    {
        q: 'Which documents do I need for a bank account defreeze?',
        a: 'Keep ready the bank\'s freeze or lien communication, account statements covering the disputed transactions, KYC documents, and proof that the transactions were genuine, such as invoices, P2P trade records, chat screenshots and wallet histories, along with any notice received from the police.'
    },
    {
        q: 'Do I have to travel to the state where the complaint was filed?',
        a: 'Not always. Many steps, such as obtaining freeze details, sending representations and coordinating with the investigating officer, can be handled remotely, and we file before the competent court where needed. Your personal appearance may be required in some cases, and we will tell you in advance if it is.'
    }
]

export const CYBER_CRIME_FAQS = [
    {
        q: 'How do I report cyber fraud in India?',
        a: 'Call the National Cyber Crime Helpline 1930 as soon as possible and register a complaint on cybercrime.gov.in. Inform your bank immediately and preserve all evidence, including screenshots, transaction IDs, phone numbers, website links and chats. Reporting quickly improves the chance of the money being put on hold before it is withdrawn.'
    },
    {
        q: 'Can money lost in an online investment or trading app fraud be recovered?',
        a: 'Sometimes. If the money is traced and put on hold in the receiving accounts in time, the victim can apply to the court for its release. Results depend on how fast the fraud is reported and on how the money moved, so recovery can never be guaranteed, but timely legal action improves the chances.'
    },
    {
        q: 'Someone is blackmailing or harassing me online. What should I do?',
        a: 'Do not pay and do not delete the conversation. Preserve screenshots, profile links and phone numbers, report the account to the platform, and file a complaint on cybercrime.gov.in or at your nearest police station. Online extortion, harassment and the publishing of private images are offences under the Information Technology Act, 2000 and the Bharatiya Nyaya Sanhita, 2023.'
    },
    {
        q: 'I have received a police notice in a cyber crime case. What should I do?',
        a: 'Do not ignore it. Note the police station, the case number and the date by which you must respond, and consult a lawyer before appearing or giving a statement. Depending on the facts, a lawyer can help you reply with documents, protect your rights during questioning, or seek anticipatory bail where there is a risk of arrest.'
    },
    {
        q: 'Do you handle cyber crime cases outside West Bengal?',
        a: 'Yes. The Juris Associates represents clients in cyber crime and bank account freeze matters across India, coordinating with cyber cells and courts in the state where the case is registered.'
    }
]

export const CRIMINAL_LAW_FAQS = [
    {
        q: 'Which laws now govern criminal cases in India?',
        a: 'From 1 July 2024, the Bharatiya Nyaya Sanhita, 2023 (BNS) replaced the Indian Penal Code, the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) replaced the Code of Criminal Procedure, and the Bharatiya Sakshya Adhiniyam, 2023 (BSA) replaced the Indian Evidence Act. Offences committed before that date generally continue under the old laws.'
    },
    {
        q: 'What is the difference between regular bail and anticipatory bail?',
        a: 'Regular bail is sought after a person has been arrested. Anticipatory bail, now under Section 482 of the BNSS (earlier Section 438 of the CrPC), is sought from the Sessions Court or the High Court by a person who fears arrest, so that they are released on bail if arrested.'
    },
    {
        q: 'What can I do if the police refuse to register my FIR?',
        a: 'You can send the complaint in writing to the Superintendent of Police, and if no action is taken you can apply to the Magistrate, who can direct an investigation under Section 175(3) of the BNSS (earlier Section 156(3) of the CrPC). For cyber offences, you can also register the complaint on cybercrime.gov.in.'
    }
]
