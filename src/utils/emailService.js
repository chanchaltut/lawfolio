import emailjs from '@emailjs/browser';

// Email Configuration
const EMAIL_CONFIG = {
  // Web3Forms Configuration
  WEB3FORMS_ACCESS_KEY: 'a1f2b2e1-ce12-438f-b7b5-3cf1d3d71ae6', // Get from https://web3forms.com/
  TO_EMAIL: 'contact@codeyouridea.com',
  USE_WEB3FORMS: true
};

// Initialize EmailJS only if enabled and configured
if (EMAIL_CONFIG.EMAILJS_ENABLED && EMAIL_CONFIG.PUBLIC_KEY !== 'your_emailjs_public_key') {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
}

// Send Contact Form Email using Web3Forms
export const sendContactEmail = async (formData) => {
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || 'Not provided');
    formDataToSend.append('project', formData.project || 'Not specified');
    formDataToSend.append('message', formData.message);
    formDataToSend.append('subject', `New Contact from ${formData.name} - Code Your Idea`);
    formDataToSend.append('to', EMAIL_CONFIG.TO_EMAIL);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });

    const result = await response.json();
    
    if (result.success) {
      return { 
        success: true, 
        message: 'Email sent successfully! We\'ll get back to you within 24 hours.' 
      };
    } else {
      throw new Error(result.message || 'Web3Forms submission failed');
    }
  } catch (error) {
    console.error('Web3Forms email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again later or contact us directly.' 
    };
  }
};

// Send Quote Request Email using Web3Forms
export const sendQuoteEmail = async (quoteData) => {
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY);
    formDataToSend.append('name', 'Quote Request');
    formDataToSend.append('email', quoteData.email);
    formDataToSend.append('project_type', quoteData.projectType);
    formDataToSend.append('budget', quoteData.budget);
    formDataToSend.append('timeline', quoteData.timeline);
    formDataToSend.append('description', quoteData.description);
    formDataToSend.append('subject', `Quote Request - ${quoteData.projectType} - Code Your Idea`);
    formDataToSend.append('to', EMAIL_CONFIG.TO_EMAIL);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });

    const result = await response.json();
    
    if (result.success) {
      return { 
        success: true, 
        message: 'Quote request sent successfully! We\'ll prepare your custom quote and send it within 24 hours.' 
      };
    } else {
      throw new Error(result.message || 'Web3Forms submission failed');
    }
  } catch (error) {
    console.error('Web3Forms quote sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to send quote request. Please try again later or contact us directly.' 
    };
  }
};

// Send email via mailto link (fallback method)
export const sendEmailViaMailto = (subject, body) => {
  const mailtoLink = `mailto:${EMAIL_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
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

export default {
  sendContactEmail,
  sendQuoteEmail,
  sendEmailViaMailto,
  EMAIL_SETUP_INSTRUCTIONS
}; 