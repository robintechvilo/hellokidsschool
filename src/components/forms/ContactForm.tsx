"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validators";
import { submitContact } from "@/app/actions";
import { FormError, FormSuccess, Honeypot, Input, SubmitButton, Textarea } from "./Fields";

export function ContactForm() {
  const [pending, start] = useTransition();
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string>();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) =>
    start(async () => {
      setServerError(undefined);
      const res = await submitContact(data);
      if (res.ok) { setDone(true); reset(); } else setServerError(res.error);
    });

  if (done) return <FormSuccess title="Message sent!" text="Thank you for writing to us. We'll get back to you soon." onReset={() => setDone(false)} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Input label="Your name" required autoComplete="name" {...register("name")} error={errors.name?.message} />
      <Input label="Mobile number" required type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" {...register("phone")} error={errors.phone?.message} />
      <div className="sm:col-span-2">
        <Input label="Email" type="email" autoComplete="email" hint="Optional" {...register("email")} error={errors.email?.message} />
      </div>
      <div className="sm:col-span-2">
        <Textarea label="Message" required {...register("message")} error={errors.message?.message} />
      </div>
      <Honeypot {...register("website")} />
      <div className="space-y-4 sm:col-span-2">
        <FormError message={serverError} />
        <SubmitButton pending={pending} className="btn-pink">Send Message</SubmitButton>
      </div>
    </form>
  );
}
