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
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{fields.name}</span>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{fields.company}</span>
          <input
            required
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">{fields.phone}</span>
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-line-strong"
          />
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
              status === "success" && "text-brand",
              status === "error" && "text-[#9f4a38]",
            )}
          >
            {status === "success"
              ? successMessage
              : status === "error"
                ? errorMessage
                : null}
          </p>
        </div>
      </form>
    </div>
  );
}
