
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Layers3,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

type LeadFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const initialForm: LeadFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const services = [
  "Business Consultation",
  "Software Development",
  "Digital Transformation",
  "Partnership",
  "Other",
];

export function PublicLeadPage() {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(
    field: keyof LeadFormData,
    value: string,
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your request. Please try again.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="border-b bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Layers3 className="size-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              NBridge<span className="text-primary">.</span>
            </span>
          </a>

          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 size-[450px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Your next opportunity starts here
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Let's build something
              <span className="text-primary"> meaningful </span>
              together.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Have an idea, a project, or a business challenge?
              Tell us what you are looking for. Our team will
              connect with you to explore the right solution.
            </p>

            <div className="mt-9 flex flex-wrap gap-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="size-5 text-primary" />
                Secure inquiry
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="size-5 text-primary" />
                Simple process
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="size-5 text-primary" />
                Personal response
              </div>
            </div>
          </div>

          {/* Hero information */}
          <div className="relative">
            <div className="rounded-2xl border bg-card p-7 shadow-xl shadow-black/5 sm:p-9">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Let's get started
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">
                    Your journey begins here.
                  </h2>
                </div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Globe2 className="size-6 text-primary" />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MessageCircle,
                    title: "Tell us about your needs",
                    description: "Share your requirements through our simple form.",
                  },
                  {
                    icon: Layers3,
                    title: "We understand your goals",
                    description: "Our team reviews your inquiry and requirements.",
                  },
                  {
                    icon: Zap,
                    title: "Get connected",
                    description: "We reach out to discuss the next steps.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/50">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {String(index + 1).padStart(2, "0")}. {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-muted/60 p-4">
                <p className="text-sm font-medium">
                  Every great partnership starts with a conversation.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  We look forward to hearing from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section
        id="contact-form"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill in the details below and our team will get back to you.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm sm:p-9">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle2 className="size-9 text-green-600" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">
                  Thank you for reaching out!
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                  Your inquiry has been submitted successfully.
                  Our team will contact you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-lg border px-5 py-2.5 text-sm font-semibold hover:bg-muted"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium">
                      Full name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="fullName"
                      required
                      minLength={2}
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Your full name"
                      className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone number <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      minLength={7}
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+880 1XXXXXXXXX"
                      className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Your company name"
                      className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      What are you interested in?
                      <span className="text-destructive"> *</span>
                    </label>
                    <select
                      id="service"
                      required
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Estimated budget
                    </label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                      className="h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                      <option value="">Select a budget</option>
                      <option value="Not decided">Not decided</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Tell us more about your requirements
                    <span className="text-destructive"> *</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Describe your project, goals, or what kind of help you need..."
                    className="w-full resize-y rounded-lg border bg-background px-3 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
                  >
                    {error}
                  </div>
                )}

                <div className="flex flex-col justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
                  <p className="max-w-sm text-xs leading-5 text-muted-foreground">
                    By submitting this form, you agree to be contacted
                    regarding your inquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit inquiry"}
                    {!loading && <ArrowRight className="size-4" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="/" className="text-lg font-bold tracking-tight">
            NBridge<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NBridge. All rights reserved.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Mail className="size-4" />
            Contact our team
          </a>
        </div>
      </footer>
    </main>
  );
}
