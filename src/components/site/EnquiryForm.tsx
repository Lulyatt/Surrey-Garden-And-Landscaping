import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, NotConnectedNotice, SubmittedState, inputCls } from "./FormBits";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(20)
    .refine((v) => v === "" || /^[0-9+()\s-]{10,20}$/.test(v), "Please enter a valid phone number")
    .optional(),
  message: z.string().trim().min(10, "Please add a little more detail (at least 10 characters)").max(2000),
});
type Values = z.infer<typeof enquirySchema>;

export function EnquiryForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  if (done) return <SubmittedState title="Thanks for your enquiry" onReset={() => { reset(); setDone(false); }} />;

  return (
    <form noValidate onSubmit={handleSubmit(async () => { await new Promise((r) => setTimeout(r, 500)); setDone(true); })} className="space-y-5">
      <NotConnectedNotice />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="e-name" label="Name" error={errors.name?.message}>
          <input id="e-name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field id="e-email" label="Email address" error={errors.email?.message}>
          <input id="e-email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} {...register("email")} />
        </Field>
      </div>
      <Field id="e-phone" label="Phone number" optional error={errors.phone?.message}>
        <input id="e-phone" type="tel" autoComplete="tel" className={inputCls} aria-invalid={!!errors.phone} {...register("phone")} />
      </Field>
      <Field id="e-message" label="Message" error={errors.message?.message}>
        <textarea id="e-message" rows={5} className={inputCls} aria-invalid={!!errors.message} {...register("message")} />
      </Field>
      <Button type="submit" variant="forest" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Checking…" : "Send enquiry"}
      </Button>
    </form>
  );
}
