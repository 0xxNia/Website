"use client";

import { useState, useTransition } from "react";

import { cn } from "@/lib/utils";

type ContactFormProps = {
  title: string;
  description: string;
  fields: {
    name: string;
    company: string;
    phone: string;
    email: string;
    requestType: string;
    message: string;
  };
  requestTypes: string[];
  privacyNote: string;
  submitLabel: string;
  pendingLabel: string;
  successMessage: string;
  errorMessage: string;
};

const initialState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  requestType: "",
  message: "",
};

const lettersOnlyPattern = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/u;
const hasLetterPattern = /[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]/u;
const digitsOnlyPattern = /^\d+$/;

export function ContactForm({
  title,
  description,
  fields,
  requestTypes,
  privacyNote,
  submitLabel,
  pendingLabel,
  successMessage,
  errorMessage,
}: ContactFormProps) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof initialState, string>>>(
    {},
  );
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    const nextValue = (() => {
      if (name === "phone") {
        return value.replace(/\D/g, "");
      }

      if (name === "name" || name === "company") {
        return value.replace(/[^A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]/gu, "");
      }

      return value;
    })();

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setFieldErrors((current) => {
      if (!current[name as keyof typeof initialState]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name as keyof typeof initialState];
      return nextErrors;
    });

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof typeof initialState, string>> = {};

    if (
      !lettersOnlyPattern.test(formData.name.trim()) ||
      !hasLetterPattern.test(formData.name)
    ) {
      nextErrors.name = "Use letters only in this field.";
    }

    if (
      !lettersOnlyPattern.test(formData.company.trim()) ||
      !hasLetterPattern.test(formData.company)
    ) {
      nextErrors.company = "Use letters only in this field.";
    }

    if (!digitsOnlyPattern.test(formData.phone.trim())) {
      nextErrors.phone = "Use digits only in this field.";
    }

    setFieldErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (!validateForm()) {
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setStatus("success");
        setFormData(initialState);
      } catch {
        setStatus("error");
      }
    });
  };

  return (
    <div className="soft-panel rounded-[2rem] border border-line p-6 sm:p-8">
      <div className="max-w-2xl">
        <h2 className="font-serif text-3xl text-foreground">{title}</h2>
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      </div>
      {status === "success" ? (
        <div className="mt-8 rounded-2xl border border-brand/25 bg-brand/10 p-5 text-brand">
          {successMessage}
        </div>
      ) : (
        <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{fields.name}</span>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\\s'-]+"
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
          {fieldErrors.name ? <span className="text-xs text-[#9f4a38]">{fieldErrors.name}</span> : null}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{fields.company}</span>
          <input
            required
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\\s'-]+"
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
          {fieldErrors.company ? (
            <span className="text-xs text-[#9f4a38]">{fieldErrors.company}</span>
          ) : null}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{fields.phone}</span>
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            autoComplete="tel"
            pattern="\d+"
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
          {fieldErrors.phone ? <span className="text-xs text-[#9f4a38]">{fieldErrors.phone}</span> : null}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{fields.email}</span>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-foreground">
            {fields.requestType}
          </span>
          <select
            required
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          >
            <option value="" disabled>
              {fields.requestType}
            </option>
            {requestTypes.map((requestType) => (
              <option key={requestType} value={requestType}>
                {requestType}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-foreground">{fields.message}</span>
          <textarea
            required
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-[1.5rem] border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
        </label>
        <div className="sm:col-span-2">
          <p className="text-sm leading-6 text-muted">{privacyNote}</p>
          <button
            type="submit"
            disabled={isPending}
            className="mt-5 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-strong disabled:cursor-not-allowed disabled:bg-brand/65"
          >
            {isPending ? pendingLabel : submitLabel}
          </button>
          <p
            className={cn(
              "mt-4 text-sm",
              status === "error" && "text-[#9f4a38]",
            )}
          >
            {status === "error" ? errorMessage : null}
          </p>
        </div>
        </form>
      )}
    </div>
  );
}
