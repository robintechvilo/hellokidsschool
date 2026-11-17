"use client";
import { forwardRef, useId } from "react";
import { CheckCircle2, Loader2, PartyPopper } from "lucide-react";
import { site, telLink } from "@/content/site";

const base =
  "w-full rounded-2xl border-2 border-sky bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-teal focus:ring-4 focus:ring-teal/15 aria-[invalid=true]:border-red aria-[invalid=true]:ring-red/10";

type FieldProps = { label: string; error?: string; hint?: string; required?: boolean };

function Wrap({ id, label, error, hint, required, children }: FieldProps & { id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-display font-semibold text-navy">
        {label} {required && <span className="text-pink" aria-hidden>*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm font-semibold text-red">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-sm text-ink/60">{hint}</p>
      ) : null}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, FieldProps & React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ label, error, hint, required, ...rest }, ref) {
    const id = useId();
    return (
      <Wrap id={id} label={label} error={error} hint={hint} required={required}>
        <input ref={ref} id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} className={base} {...rest} />
      </Wrap>
    );
  },
);

export const Select = forwardRef<HTMLSelectElement, FieldProps & React.SelectHTMLAttributes<HTMLSelectElement> & { options: readonly (string | number)[]; placeholder?: string }>(
  function Select({ label, error, hint, required, options, placeholder, ...rest }, ref) {
    const id = useId();
    return (
      <Wrap id={id} label={label} error={error} hint={hint} required={required}>
        <select ref={ref} id={id} aria-invalid={!!error} className={`${base} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 fill=%22none%22 stroke=%22%231e2a78%22 stroke-width=%222.5%22 viewBox=%220 0 24 24%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10`} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </Wrap>
    );
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ label, error, hint, required, ...rest }, ref) {
    const id = useId();
    return (
      <Wrap id={id} label={label} error={error} hint={hint} required={required}>
        <textarea ref={ref} id={id} rows={4} aria-invalid={!!error} className={`${base} resize-y`} {...rest} />
      </Wrap>
    );
  },
);

/** Off-screen honeypot field. Bots fill it; humans never see it. */
export const Honeypot = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Honeypot(props, ref) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>Website<input ref={ref} tabIndex={-1} autoComplete="off" {...props} /></label>
    </div>
  );
});

export function SubmitButton({ pending, children, className = "btn-orange" }: { pending: boolean; children: React.ReactNode; className?: string }) {
  return (
    <button type="submit" disabled={pending} className={`btn ${className} w-full !py-4 text-lg disabled:cursor-wait disabled:opacity-70 sm:w-auto`}>
      {pending ? <Loader2 className="size-5 animate-spin" /> : <CheckCircle2 className="size-5" />}
      {pending ? "Sending…" : children}
    </button>
  );
}

export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return <p role="alert" className="rounded-2xl bg-red/10 px-4 py-3 font-semibold text-red">{message}</p>;
}

export function FormSuccess({ title, text, onReset }: { title: string; text: string; onReset: () => void }) {
  return (
    <div role="status" className="flex flex-col items-center rounded-[2rem] bg-green/10 px-6 py-10 text-center">
      <span className="grid size-20 place-items-center rounded-full bg-green text-white shadow-lg"><PartyPopper className="size-10" /></span>
      <h3 className="mt-5 text-3xl font-bold text-navy">{title}</h3>
      <p className="mt-2 max-w-md text-lg text-ink/80">{text}</p>
      <p className="mt-3 text-ink/70">Need us sooner? Call <a href={telLink} className="font-bold text-navy underline">{site.phoneDisplay}</a></p>
      <button type="button" onClick={onReset} className="btn btn-white mt-6">Send another</button>
    </div>
  );
}
