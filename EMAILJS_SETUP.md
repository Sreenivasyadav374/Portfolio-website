# EmailJS Setup Instructions

Follow these steps to configure EmailJS for your contact form:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this later

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. **Copy the Template ID** - you'll need this later

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**

In `src/components/Contact.tsx`, replace the placeholder values:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',     // Replace with your Service ID
  TEMPLATE_ID: 'your_actual_template_id',   // Replace with your Template ID
  PUBLIC_KEY: 'your_actual_public_key',     // Replace with your Public Key
};
```

## 6. Test Your Form

1. Save your changes
2. Fill out the contact form on your website
3. Check your email inbox for the message
4. Verify all information is correctly formatted

## Template Variables Used

The contact form sends these variables to your email template:

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{message}}` - The message content
- `{{to_email}}` - Your email (srinivaspa374@gmail.com)
- `{{reply_to}}` - The sender's email for easy replies

## Troubleshooting

### Common Issues:

1. **"EmailJS not configured" error**: Make sure you've replaced all placeholder values
2. **Network errors**: Check your internet connection and EmailJS service status
3. **Template not found**: Verify your Template ID is correct
4. **Service not found**: Verify your Service ID is correct
5. **Unauthorized**: Check your Public Key is correct

### Rate Limits:

- Free plan: 200 emails/month
- If you need more, consider upgrading to a paid plan

### Security Notes:

- The Public Key is safe to expose in frontend code
- Never expose your Private Key in frontend code
- EmailJS handles the secure email sending on their servers

## Support

If you encounter issues:
1. Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
2. Visit their [Support Center](https://www.emailjs.com/docs/faq/)
3. Contact EmailJS support directly