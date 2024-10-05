// src/services/emailService.ts
import api from './api';

interface EmailOptions {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({ to, subject, body }: EmailOptions) => {
  try {
    await api.post('/email/send', { to, subject, body });
  } catch (error) {
    throw new Error('Failed to send email');
  }
};

export const sendQuoteEmail = async (jobId: string, email: string) => {
  const quoteLink = `${process.env.REACT_APP_FRONTEND_URL}/jobs/${jobId}/quote`;
  const acceptQuoteLink = `${process.env.REACT_APP_FRONTEND_URL}/jobs/${jobId}/accept-quote`;
  const subject = 'Your Ramp Rental Quote';
  const body = `
    <p>Dear Customer,</p>
    <p>Please review your ramp rental quote <a href="${quoteLink}">here</a>.</p>
    <p>If you'd like to accept this quote, please click the button below:</p>
    <p>
      <a href="${acceptQuoteLink}" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">
        Accept Quote
      </a>
    </p>
    <p>Thank you!</p>
  `;
  await sendEmail({ to: email, subject, body });
};