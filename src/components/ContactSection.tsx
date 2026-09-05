import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Send } from "lucide-react";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const next: FormErrors = {};
    const name = (data.get("name") as string | null) ?? "";
    const email = (data.get("email") as string | null) ?? "";
    const message = (data.get("message") as string | null) ?? "";

    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message.trim()) next.message = "Please enter a message.";

    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (submitting) return;
    const validation = validate(form);
    setErrors(validation);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validation).length > 0) {
      toast({
        title: "Please check the form",
        description: "Make sure your name, email and message are filled in correctly.",
      });
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: ((data.get("name") as string | null) ?? "").trim(),
      email: ((data.get("email") as string | null) ?? "").trim(),
      message: ((data.get("message") as string | null) ?? "").trim(),
    };

    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert(payload);
      if (error) throw error;

      form.reset();
      setErrors({});
      setTouched({});
      toast({
        title: "Message sent",
        description: "Thank you — a member of our team will be in touch shortly.",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Message not sent",
        description: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };


  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement) && !(target instanceof HTMLTextAreaElement)) return;
    if (!target.name) return;
    setTouched((prev) => ({ ...prev, [target.name]: true }));
    setErrors(validate(target.form));
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary md:text-sm">Get in touch</p>
          <h2 className="mt-4 font-serif text-3xl leading-[1.1] text-balance md:text-[2.75rem] lg:text-5xl">
            Have a story to share? A partnership in mind?
          </h2>
          <p className="mt-5 text-muted-foreground">
            We'd love to hear from elders, families, communities, and partners who want to be part
            of what we're building.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">
                <Mail className="h-4 w-4" />
              </span>
              <a
                href="mailto:info@reengageafrica.com"
                className="hover:text-primary hover:underline"
              >
                info@reengageafrica.com
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          onBlur={handleBlur}
          noValidate
          className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 md:p-10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Name
              </label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                aria-invalid={touched.name && !!errors.name}
                aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
                className="min-h-11"
              />
              {touched.name && errors.name && (
                <p id="contact-name-error" className="mt-1.5 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                aria-invalid={touched.email && !!errors.email}
                aria-describedby={touched.email && errors.email ? "contact-email-error" : undefined}
                className="min-h-11"
              />
              {touched.email && errors.email && (
                <p id="contact-email-error" className="mt-1.5 text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Message
            </label>
            <Textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Tell us a little about you…"
              aria-invalid={touched.message && !!errors.message}
              aria-describedby={touched.message && errors.message ? "contact-message-error" : undefined}
              className="min-h-[120px] resize-y"
            />
            {touched.message && errors.message && (
              <p id="contact-message-error" className="mt-1.5 text-xs text-destructive">
                {errors.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="mt-6 h-12 w-full bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-95"
          >
            {submitting ? "Sending…" : (<><Send className="mr-2 h-4 w-4" /> Send message</>)}
          </Button>
        </form>
      </div>
    </section>
  );
};
