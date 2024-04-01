"use server"

import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEMail = async (formData: FormData) => {
    console.log("Running on server");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "shift2unleashed2011earn1994@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail as string,
            text: message as string,
        });
    } catch (error: unknown) {
        // Gracefully handling error
        return {
            error: getErrorMessage(error)
        };
    }
}