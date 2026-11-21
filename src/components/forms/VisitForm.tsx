"use client";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { visitSchema, type VisitInput } from "@/lib/validators";
import { submitVisit } from "@/app/actions";
import { FormError, FormSuccess, Honeypot, Input, Select, SubmitButton } from "./Fields";


export function VisitForm({ times }: { times: string[] }) {
  const [pending, start] = useTransition();
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string>();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<VisitInput>({
    resolver: zodResolver(visitSchema),
    defaultValues: { children: 1 },
  });

  const onSubmit = (data: VisitInput) =>
    start(async () => {
      setServerError(undefined);
      const res = await submitVisit(data);
      if (res.ok) { setDone(true); reset(); } else setServerError(res.error);
    });

  if (done) return <FormSuccess title="Visit booked!" text="Thank you! We'll call you to confirm your campus visit." onReset={() => setDone(false)} />;

  const today = new Date().toISOString().slice(0, 10);
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Input label="Your name" required autoComplete="name" {...register("name")} error={errors.name?.message} />
      <Input label="Mobile number" required type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" {...register("phone")} error={errors.phone?.message} />
      <Input label="Preferred date" required type="date" min={today} {...register("date")} error={errors.date?.message} />
      <Select label="Preferred time" required options={times} placeholder="Choose a time" {...register("time")} error={errors.time?.message} />
      <Select label="Number of children" options={[1, 2, 3, 4, 5]} {...register("children")} error={errors.children?.message} />
      <Honeypot {...register("website")} />
      <div className="flex flex-col justify-end gap-4">
        <FormError message={serverError} />
        <SubmitButton pending={pending} className="btn-navy">Book My Visit</SubmitButton>
      </div>
    </form>
  );
}
