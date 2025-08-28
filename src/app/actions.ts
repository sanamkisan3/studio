"use server";

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendContactMessage(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, email, message } = parsed.data;

  // Simulate sending an email or saving to a database
  console.log('New contact message:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, you would handle potential errors from your email service
  // For now, we'll just return success.
  return { success: true };
}
