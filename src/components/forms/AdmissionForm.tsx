"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { admissionSchema, type AdmissionInput } from "@/lib/validators";
import { submitAdmission } from "@/app/actions";
import { FormError, FormSuccess, Honeypot, Input, Select, SubmitButton, Textarea } from "./Fields";

export function AdmissionForm({ classes, defaultClass }: { classes: string[]; defaultClass?: string }) {
  const [pending, start] = useTransition();
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string>();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AdmissionInput>({
    resolver: zodResolver(admissionSchema),
    defaultValues: { className: defaultClass ?? "" },
  });

  const onSubmit = (data: AdmissionInput) =>
    start(async () => {
      setServerError(undefined);
      const res = await submitAdmission(data);
      if (res.ok) { setDone(true); reset(); } else setServerError(res.error);
    });

  if (done) return <FormSuccess title="Thank you!" text="We received your admission inquiry. Our team will call you within one working day." onReset={() => setDone(false)} />;

  const today = new Date().toISOString().slice(0, 10);
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Input label="Parent's name" required autoComplete="name" {...register("parentName")} error={errors.parentName?.message} />
      <Input label="Mobile number" required type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" {...register("phone")} error={errors.phone?.message} />
      <Input label="Child's name" required {...register("childName")} error={errors.childName?.message} />
      <Input label="Child's date of birth" required type="date" max={today} {...register("childDob")} error={errors.childDob?.message} />
      <Select label="Class" required options={classes} placeholder="Choose a class" {...register("className")} error={errors.className?.message} />
      <Input label="Email" type="email" autoComplete="email" hint="Optional — for a confirmation email" {...register("email")} error={errors.email?.message} />
      <div className="sm:col-span-2">
        <Textarea label="Message" placeholder="Anything you'd like us to know?" {...register("message")} error={errors.message?.message} />
      </div>
      <Honeypot {...register("website")} />
      <div className="space-y-4 sm:col-span-2">
        <FormError message={serverError} />
        <SubmitButton pending={pending}>Send Admission Inquiry</SubmitButton>
      </div>
    </form>
  );
}
