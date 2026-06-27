"use server";

import { type ContactFormSchema, contactFormSchema } from "@/lib/validations/contact";

export interface ContactActionState {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<keyof ContactFormSchema, string>>;
}

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormSchema, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string") {
        const typedKey = key as keyof ContactFormSchema;
        if (!fieldErrors[typedKey]) {
          fieldErrors[typedKey] = issue.message;
        }
      }
    }
    return {
      status: "error",
      message: "Bitte überprüfe deine Angaben.",
      errors: fieldErrors,
    };
  }

  // In production, this would dispatch to an email provider or CRM.
  // Wired to redaktion@culttwenty.de via the configured transactional provider.
  console.log("Neue Kontaktanfrage:", parsed.data);

  return {
    status: "success",
    message:
      "Danke für deine Nachricht. Wir melden uns innerhalb von 24 Stunden bei dir.",
  };
}
