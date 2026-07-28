import { site } from '../config/site'

export type LegalSection = {
  title: string
  paragraphs: string[]
  list?: string[]
}

export type LegalDocument = {
  title: string
  description: string
  intro?: string
  sections: LegalSection[]
}

export const legalDocuments: Record<string, LegalDocument> = {
  about: {
    title: 'About Us',
    description: `Learn about ${site.name}, a brand incubation lab under ${site.legalName}.`,
    intro: `${site.name} is a brand incubation lab that designs, builds, and grows brands — combining strategy, creative, and production under one roof.`,
    sections: [
      {
        title: 'Who We Are',
        paragraphs: [
          `${site.name} is the brand incubation arm of ${site.legalName}. We partner with founders, teams, and organizations to launch and scale brand ventures with clarity and creative rigor.`,
        ],
      },
      {
        title: 'What We Do',
        paragraphs: ['Our focus areas include:'],
        list: [
          'Brand strategy and positioning',
          'Creative identity and visual systems',
          'Go-to-market and launch support',
          'Production and content development',
          'Portfolio brand development across ventures such as Firstpective and Simsami',
        ],
      },
      {
        title: 'Our Philosophy',
        paragraphs: [
          'We design, build, and grow with the brands we incubate. Every venture is treated as a long-term partnership — not a one-off project.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    description: `Get in touch with ${site.name} for partnerships, investments, and inquiries.`,
    sections: [
      {
        title: 'General Inquiry',
        paragraphs: [
          'For business inquiries, partnership discussions, or investor relations, reach us through the channels below.',
        ],
        list: [
          `Email: ${site.email}`,
          `Phone / WhatsApp: ${site.phone}`,
          `Website: ${site.domain}`,
        ],
      },
      {
        title: 'Business Hours',
        paragraphs: [
          'Our team operates Monday to Friday, 09:00–18:00 WIB (Western Indonesian Time), excluding public holidays.',
        ],
      },
      {
        title: 'Investor Relations',
        paragraphs: [
          'For investor-related inquiries, please email us with "Investor Relations" in the subject line.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    description: `Privacy Policy for ${site.name} — how we collect, use, and protect your information.`,
    intro: `This Privacy Policy explains how ${site.name} ("we", "us", "our") collects, uses, and protects information when you visit ${site.domain} or contact us. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: ['We may collect the following types of information:'],
        list: [
          'Contact details you provide (name, email, phone, company) when you reach out to us',
          'Technical data such as IP address, browser type, device information, and pages visited',
          'Cookies and similar technologies used for site functionality and analytics',
        ],
      },
      {
        title: 'How We Use Your Information',
        paragraphs: ['We use collected information to:'],
        list: [
          'Respond to inquiries and partnership requests',
          'Improve our website and communications',
          'Send relevant updates you have agreed to receive',
          'Comply with legal obligations',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Our website may use cookies to remember preferences and understand visitor behavior. You can manage cookies through your browser settings.',
        ],
      },
      {
        title: 'Third-Party Services',
        paragraphs: [
          'We may use third-party hosting, analytics, or communication services that process data on our behalf under appropriate safeguards.',
        ],
      },
      {
        title: 'Data Retention',
        paragraphs: [
          'We retain personal information only as long as necessary for the purposes described here, or as required by law.',
        ],
      },
      {
        title: 'Your Rights',
        paragraphs: [
          'You may request access, correction, or deletion of your personal data where applicable law permits. Contact us using the email below.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [`For privacy questions, contact ${site.email}.`],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    description: `Terms of Service for using the ${site.name} website.`,
    intro: `By accessing ${site.domain}, you agree to these Terms of Service. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'Use of This Website',
        paragraphs: [
          'This website provides company and portfolio information. You agree to use it lawfully and not to interfere with its operation or security.',
        ],
      },
      {
        title: 'Intellectual Property',
        paragraphs: [
          'All website content is owned by or licensed to us and protected by intellectual property laws. Unauthorized copying or distribution is prohibited.',
        ],
      },
      {
        title: 'Disclaimer',
        paragraphs: [
          'Website content is for general information only and does not constitute professional advice. We strive for accuracy but make no warranties regarding completeness or timeliness.',
        ],
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'To the extent permitted by law, we are not liable for indirect or consequential damages arising from use of this website.',
        ],
      },
      {
        title: 'Governing Law',
        paragraphs: [
          'These terms are governed by the laws of the Republic of Indonesia.',
        ],
      },
      {
        title: 'Changes',
        paragraphs: [
          'We may revise these terms at any time. Continued use after updates constitutes acceptance.',
        ],
      },
    ],
  },
  'ai-disclaimer': {
    title: 'AI Disclaimer',
    description: `AI Disclaimer for ${site.name} and portfolio brands using AI-powered tools.`,
    intro: `${site.legalName} and its portfolio brands use artificial intelligence in creative and analytical workflows. This disclaimer outlines important limitations. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'AI in Our Ecosystem',
        paragraphs: [
          'Brands under our portfolio — including Firstpective and Simsami — may use AI for content creation, simulation, and workflow optimization. Outputs may be AI-assisted even when reviewed by human teams.',
        ],
      },
      {
        title: 'No Guarantee of Accuracy',
        paragraphs: [
          'AI-generated content or analysis may contain errors. Do not rely on AI outputs alone for legal, financial, or compliance decisions without independent verification.',
        ],
      },
      {
        title: 'Simulation Results',
        paragraphs: [
          'AI performance simulations (such as those provided by Simsami) are estimates based on models — not guarantees of real-world outcomes.',
        ],
      },
      {
        title: 'Not Professional Advice',
        paragraphs: [
          'Nothing on this website constitutes legal, financial, or investment advice.',
        ],
      },
      {
        title: 'Human Oversight',
        paragraphs: [
          'We maintain human oversight across brand incubation, creative direction, and strategic decisions.',
        ],
      },
    ],
  },
  'data-usage': {
    title: 'Data Usage Policy',
    description: `How ${site.name} handles data across its website and portfolio operations.`,
    intro: `This policy describes how we collect and use data in connection with our website and related services. Last updated: ${site.updated}.`,
    sections: [
      {
        title: 'Data We Process',
        paragraphs: ['We may process:'],
        list: [
          'Contact information from inquiries',
          'Website analytics and usage data',
          'Materials shared during partnership discussions',
          'Inputs to AI simulation tools in our portfolio',
        ],
      },
      {
        title: 'Purpose of Processing',
        paragraphs: ['Data is used to:'],
        list: [
          'Respond to inquiries and manage relationships',
          'Improve our website and services',
          'Support brand incubation activities',
          'Maintain security and compliance',
        ],
      },
      {
        title: 'AI and Machine Learning',
        paragraphs: [
          'AI tools may analyze content samples for simulation or recommendation purposes. Client confidential data is not used to train public models without explicit consent.',
        ],
      },
      {
        title: 'Data Security',
        paragraphs: [
          'We apply reasonable safeguards to protect data. However, no online transmission is completely secure.',
        ],
      },
      {
        title: 'Data Sharing',
        paragraphs: [
          'We do not sell personal data. Data may be shared with service providers under confidentiality agreements or when legally required.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [`Questions? Email ${site.email}.`],
      },
    ],
  },
}
