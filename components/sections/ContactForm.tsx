"use client";

import { useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { submitContactForm, type ContactActionState } from "@/lib/actions/contact";
import { budgetOptions } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const initialState: ContactActionState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-6 rounded-md border border-line p-10">
        <CheckCircle2 className="h-10 w-10 text-signal" aria-hidden="true" />
        <p className="max-w-md text-body-lg text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field
          label="Name"
          name="name"
          type="text"
          required
          error={state.errors?.name}
        />
        <Field
          label="E-Mail"
          name="email"
          type="email"
          required
          error={state.errors?.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field
          label="Unternehmen (optional)"
          name="company"
          type="text"
          error={state.errors?.company}
        />

        <div className="flex flex-col gap-2">
          <label
            htmlFor="budget"
            className="font-mono text-xs uppercase tracking-wide text-mute"
          >
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={cn(
              "border-b border-line bg-transparent py-3 text-body text-ink outline-none transition-colors focus:border-ink",
              state.errors?.budget && "border-signal",
            )}
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {state.errors?.budget ? (
            <p className="text-xs text-signal">{state.errors.budget}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-wide text-mute"
        >
          Erzähl uns von deinem Projekt
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(
            "resize-none border-b border-line bg-transparent py-3 text-body text-ink outline-none transition-colors focus:border-ink",
            state.errors?.message && "border-signal",
          )}
        />
        {state.errors?.message ? (
          <p className="text-xs text-signal">{state.errors.message}</p>
        ) : null}
      </div>

      {state.status === "error" && !state.errors ? (
        <p className="text-sm text-signal">{state.message}</p>
      ) : null}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      data-cursor="pointer"
      className="group mt-4 inline-flex w-fit items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink/85 disabled:opacity-60"
    >
      {pending ? "Wird gesendet…" : "Nachricht senden"}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  error?: string;
}

function Field({ label, name, type, required, error }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-xs uppercase tracking-wide text-mute"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={cn(
          "border-b border-line bg-transparent py-3 text-body text-ink outline-none transition-colors focus:border-ink",
          error && "border-signal",
        )}
      />
      {error ? <p className="text-xs text-signal">{error}</p> : null}
    </div>
  );
}
