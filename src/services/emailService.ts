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
  const quoteLink = `http://your-frontend.com/jobs/${jobId}/quote`;
  const subject = 'Your Ramp Rental Quote';
  const body = `
    <p>Dear Customer,</p>
    <p>Please review your ramp rental quote <a href="${quoteLink}">here</a>.</p>
    <p>Thank you!</p>
  `;
  await sendEmail({ to: email, subject, body });
};