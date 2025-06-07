import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Replace these with your actual EmailJS credentials
const EMAIL_CONFIG = {
  SERVICE_ID: 'service_codeyouridea', // Replace with your EmailJS service ID
  TEMPLATE_ID_CONTACT: 'template_contact_form', // Replace with your contact form template ID
  TEMPLATE_ID_QUOTE: 'template_quote_request', // Replace with your quote request template ID
  PUBLIC_KEY: 'your_emailjs_public_key', // Replace with your EmailJS public key
  TO_EMAIL: 'contact@codeyouridea.com',
  EMAILJS_ENABLED: false // Set to true when EmailJS is configured
};

// Initialize EmailJS only if enabled and configured
if (EMAIL_CONFIG.EMAILJS_ENABLED && EMAIL_CONFIG.PUBLIC_KEY !== 'your_emailjs_public_key') {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
}

// Send Contact Form Email
export const sendContactEmail = async (formData) => {
  // If EmailJS is not configured, use mailto fallback immediately
  if (!EMAIL_CONFIG.EMAILJS_ENABLED || EMAIL_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key') {
    // Use mailto fallback
    const mailtoBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nProject: ${formData.project || 'Not specified'}\nMessage: ${formData.message}`;
    sendEmailViaMailto(`Contact from ${formData.name}`, mailtoBody);
    
    return { 
      success: true, 
      message: 'Your email client has been opened. Please send the email to complete your contact request.' 
    };
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      project_type: formData.project || 'Not specified',
      message: formData.message,
      to_email: EMAIL_CONFIG.TO_EMAIL,
      subject: `New Contact Form Submission from ${formData.name}`,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_CONTACT,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      throw new Error('Email service returned non-200 status');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to send email. Please try contacting us directly via WhatsApp or phone.' 
    };
  }
};

// Send Quote Request Email
export const sendQuoteEmail = async (quoteData) => {
  // If EmailJS is not configured, use mailto fallback immediately
  if (!EMAIL_CONFIG.EMAILJS_ENABLED || EMAIL_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key') {
    // Use mailto fallback
    const mailtoBody = `Project Type: ${quoteData.projectType}\nBudget: ${quoteData.budget}\nTimeline: ${quoteData.timeline}\nDescription: ${quoteData.description}\nContact Email: ${quoteData.email}`;
    sendEmailViaMailto(`Quote Request - ${quoteData.projectType}`, mailtoBody);
    
    return { 
      success: true, 
      message: 'Your email client has been opened. Please send the email to complete your quote request.' 
    };
  }

  try {
    const templateParams = {
      from_name: 'Quote Request',
      from_email: quoteData.email,
      project_type: quoteData.projectType,
      budget: quoteData.budget,
      timeline: quoteData.timeline,
      description: quoteData.description,
      to_email: EMAIL_CONFIG.TO_EMAIL,
      subject: `New Quote Request - ${quoteData.projectType}`,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_QUOTE,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: 'Quote request sent successfully!' };
    } else {
      throw new Error('Email service returned non-200 status');
    }
  } catch (error) {
    console.error('Quote email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to send quote request. Please contact us directly via email or WhatsApp.' 
    };
  }
};

// Configuration instructions for setup
export const EMAIL_SETUP_INSTRUCTIONS = `
EmailJS Setup Instructions:

1. Go to https://www.emailjs.com/
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create email templates:
   
   Template 1 (Contact Form):
   - Template Name: Contact Form Submission
   - Template ID: template_contact_form
   - Subject: New Contact from {{from_name}}
   - Body: 
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Project Type: {{project_type}}
     Message: {{message}}
   
   Template 2 (Quote Request):
   - Template Name: Quote Request
   - Template ID: template_quote_request
   - Subject: Quote Request - {{project_type}}
   - Body:
     Project Type: {{project_type}}
     Budget: {{budget}}
     Timeline: {{timeline}}
     Description: {{description}}
     Contact Email: {{from_email}}

5. Get your Service ID and Public Key from EmailJS dashboard
6. Update the EMAIL_CONFIG object in this file with your credentials
7. Test the integration

Cost: Free for up to 200 emails/month
`;

// Fallback email function using mailto
export const sendEmailViaMailto = (subject, body) => {
  const mailtoLink = `mailto:${EMAIL_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

export default {
  sendContactEmail,
  sendQuoteEmail,
  sendEmailViaMailto,
  EMAIL_SETUP_INSTRUCTIONS
}; 