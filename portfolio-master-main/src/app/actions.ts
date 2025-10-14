// src/app/actions.ts
"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <contact@yourdomain.com>',
      to: 'nikhilsahu.pr@gmail.com',
      subject: `New message from ${parsed.data.name}`,
      html: `
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Message:</strong><br/>${parsed.data.message}</p>
      `,
    });

    // Here you would typically save to Firestore
    // Example:
    // import { db } from '@/lib/firebase'; // Assuming you have a firebase admin setup
    // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
    // await addDoc(collection(db, 'contacts'), {
    //   ...parsed.data,
    //   submittedAt: serverTimestamp(),
    // });
    console.log("Form data submitted (simulated):", parsed.data);

    return { message: "Thank you for your message! I'll get back to you soon.", success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An error occurred while submitting the form. Please try again later.",
      success: false,
    };
  }
}
