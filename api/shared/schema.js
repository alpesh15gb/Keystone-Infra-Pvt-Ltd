import { z } from 'zod';

export const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company is required"),
  helpType: z.string().min(1, "Help type is required"),
  message: z.string().min(1, "Message is required")
});