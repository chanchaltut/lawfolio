import emailjs from '@emailjs/browser';

// Email Configuration
const EMAIL_CONFIG = {
  // Web3Forms (Direct email sending - works immediately)
  WEB3FORMS_ACCESS_KEY: 'YOUR_ACCESS_KEY_HERE', // Get from https://web3forms.com/
  TO_EMAIL: 'contact@codeyouridea.com',
  USE_WEB3FORMS: true, // Set to false to use EmailJS instead
  
  // EmailJS Configuration (backup option)
  SERVICE_ID: 'service_codeyouridea',
  TEMPLATE_ID_CONTACT: 'template_contact_form',
  TEMPLATE_ID_QUOTE: 'template_quote_request',
  PUBLIC_KEY: 'your_emailjs_public_key',
  EMAILJS_ENABLED: false
};

// Initialize EmailJS only if enabled and configured
if (EMAIL_CONFIG.EMAILJS_ENABLED && EMAIL_CONFIG.PUBLIC_KEY !== 'your_emailjs_public_key') {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
}

// Send Contact Form Email using Web3Forms (direct email sending)
export const sendContactEmail = async (formData) => {
  // Use Web3Forms for direct email sending
  if (EMAIL_CONFIG.USE_WEB3FORMS && EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY !== 'YOUR_ACCESS_KEY_HERE') {
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
      // Fallback to mailto
      const mailtoBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nProject: ${formData.project || 'Not specified'}\nMessage: ${formData.message}`;
      sendEmailViaMailto(`Contact from ${formData.name}`, mailtoBody);
      
      return { 
        success: true, 
        message: 'Your email client has been opened as a backup. Please send the email to complete your contact request.' 
      };
    }
  }

  // EmailJS fallback (if Web3Forms is disabled)
  if (EMAIL_CONFIG.EMAILJS_ENABLED && EMAIL_CONFIG.PUBLIC_KEY !== 'your_emailjs_public_key') {
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
      console.error('EmailJS sending failed:', error);
    }
  }
  
  // Final fallback to mailto
  const mailtoBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nProject: ${formData.project || 'Not specified'}\nMessage: ${formData.message}`;
  sendEmailViaMailto(`Contact from ${formData.name}`, mailtoBody);
  
  return { 
    success: true, 
    message: 'Your email client has been opened. Please send the email to complete your contact request.' 
  };
};

// Send Quote Request Email using Web3Forms
export const sendQuoteEmail = async (quoteData) => {
  // Use Web3Forms for direct email sending
  if (EMAIL_CONFIG.USE_WEB3FORMS && EMAIL_CONFIG.WEB3FORMS_ACCESS_KEY !== 'YOUR_ACCESS_KEY_HERE') {
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
      // Fallback to mailto
      const mailtoBody = `Project Type: ${quoteData.projectType}\nBudget: ${quoteData.budget}\nTimeline: ${quoteData.timeline}\nDescription: ${quoteData.description}\nContact Email: ${quoteData.email}`;
      sendEmailViaMailto(`Quote Request - ${quoteData.projectType}`, mailtoBody);
      
      return { 
        success: true, 
        message: 'Your email client has been opened as a backup. Please send the email to complete your quote request.' 
      };
    }
  }

  // EmailJS fallback (if Web3Forms is disabled)
  if (EMAIL_CONFIG.EMAILJS_ENABLED && EMAIL_CONFIG.PUBLIC_KEY !== 'your_emailjs_public_key') {
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
      console.error('EmailJS quote sending failed:', error);
    }
  }
  
  // Final fallback to mailto
  const mailtoBody = `Project Type: ${quoteData.projectType}\nBudget: ${quoteData.budget}\nTimeline: ${quoteData.timeline}\nDescription: ${quoteData.description}\nContact Email: ${quoteData.email}`;
  sendEmailViaMailto(`Quote Request - ${quoteData.projectType}`, mailtoBody);
  
  return { 
    success: true, 
    message: 'Your email client has been opened. Please send the email to complete your quote request.' 
  };
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