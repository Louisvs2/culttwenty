import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Bitte gib deinen Namen ein.")
    .max(80, "Name ist zu lang."),
  email: z
    .string()
    .min(1, "Bitte gib deine E-Mail-Adresse ein.")
    .email("Bitte gib eine gültige E-Mail-Adresse ein."),
  company: z.string().max(80, "Firmenname ist zu lang.").optional().or(z.literal("")),
  budget: z.enum(["unter-10k", "10k-25k", "25k-50k", "ueber-50k", "unklar"], {
    errorMap: () => ({ message: "Bitte wähle ein Budget." }),
  }),
  message: z
    .string()
    .min(20, "Erzähl uns etwas mehr über dein Projekt (mind. 20 Zeichen).")
    .max(2000, "Nachricht ist zu lang."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const budgetOptions: { value: ContactFormSchema["budget"]; label: string }[] = [
  { value: "unter-10k", label: "Unter 10.000 €" },
  { value: "10k-25k", label: "10.000 – 25.000 €" },
  { value: "25k-50k", label: "25.000 – 50.000 €" },
  { value: "ueber-50k", label: "Über 50.000 €" },
  { value: "unklar", label: "Noch unklar" },
];
