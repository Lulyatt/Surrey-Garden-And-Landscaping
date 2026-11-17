import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { services } from "@/content/site";
import { Field, NotConnectedNotice, SubmittedState, inputCls } from "./FormBits";

export const MAX_PHOTOS = 5;
export const MAX_PHOTO_MB = 10;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().regex(/^[0-9+()\s-]{10,20}$/, "Please enter a valid phone number"),
  workType: z.string().min(1, "Please choose the type of work"),
  postcode: z.string().trim().min(2, "Please enter your postcode or area").max(60),
  description: z.string().trim().min(20, "Please describe the project in a little more detail (at least 20 characters)").max(3000),
});
type Values = z.infer<typeof quoteSchema>;

/** Returns an error message or null. Exported for tests. */
export function validatePhotos(files: { type: string; size: number }[]): string | null {
  if (files.length > MAX_PHOTOS) return `You can attach up to ${MAX_PHOTOS} photos`;
  if (files.some((f) => !f.type.startsWith("image/"))) return "Photos must be image files (JPG, PNG, HEIC)";
  if (files.some((f) => f.size > MAX_PHOTO_MB * 1024 * 1024)) return `Each photo must be under ${MAX_PHOTO_MB}MB`;
  return null;
}

export function QuoteForm({ defaultWork = "" }: { defaultWork?: string }) {
  const [done, setDone] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", email: "", phone: "", workType: defaultWork, postcode: "", description: "" },
  });

  useEffect(() => {
    const urls = photos.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach(URL.revokeObjectURL);
  }, [photos]);

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const next = [...photos, ...Array.from(list)];
    const err = validatePhotos(next);
    setPhotoError(err);
    if (!err) setPhotos(next);
  };

  if (done)
    return <SubmittedState title="Thanks for your quote request" onReset={() => { reset(); setPhotos([]); setDone(false); }} />;

  return (
    <form noValidate onSubmit={handleSubmit(async () => { if (photoError) return; await new Promise((r) => setTimeout(r, 600)); setDone(true); })} className="space-y-5">
      <NotConnectedNotice />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="q-name" label="Name" error={errors.name?.message}>
          <input id="q-name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field id="q-email" label="Email address" error={errors.email?.message}>
          <input id="q-email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field id="q-phone" label="Phone number" error={errors.phone?.message}>
          <input id="q-phone" type="tel" autoComplete="tel" className={inputCls} aria-invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field id="q-postcode" label="Postcode or area" error={errors.postcode?.message}>
          <input id="q-postcode" autoComplete="postal-code" placeholder="e.g. GU1 or Guildford" className={inputCls} aria-invalid={!!errors.postcode} {...register("postcode")} />
        </Field>
      </div>
      <Field id="q-work" label="Type of work" error={errors.workType?.message}>
        <select id="q-work" className={inputCls} aria-invalid={!!errors.workType} {...register("workType")}>
          <option value="">Choose one…</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
          <option value="other">Something else / not sure</option>
        </select>
      </Field>
      <Field id="q-desc" label="Brief description of the project" error={errors.description?.message} hint="Roughly what you'd like done, garden size, and any timing you have in mind.">
        <textarea id="q-desc" rows={5} className={inputCls} aria-invalid={!!errors.description} {...register("description")} />
      </Field>
      <Field id="q-photos" label="Photos of your garden" optional error={photoError ?? undefined} hint={`Up to ${MAX_PHOTOS} images, ${MAX_PHOTO_MB}MB each.`}>
        <label htmlFor="q-photos" className="flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed border-input bg-card px-4 py-8 text-center transition-colors hover:border-primary hover:bg-muted">
          <ImagePlus className="h-7 w-7 text-primary" />
          <span className="font-bold text-primary-deep">Choose photos</span>
          <span className="text-sm text-muted-foreground">or take one with your phone</span>
          <input id="q-photos" type="file" accept="image/*" multiple className="sr-only" onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }} />
        </label>
      </Field>
      {previews.length > 0 && (
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {previews.map((src, i) => (
            <li key={src} className="relative aspect-square">
              <img src={src} alt={photos[i]?.name ?? "Selected photo"} className="h-full w-full object-cover" />
              <button type="button" onClick={() => { setPhotos(photos.filter((_, j) => j !== i)); setPhotoError(null); }} aria-label={`Remove ${photos[i]?.name}`} className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-deep text-primary-foreground">
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <Button type="submit" variant="cta" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Checking…" : "Request my free quote"}
      </Button>
    </form>
  );
}
