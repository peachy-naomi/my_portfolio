'use client'
import { useState } from "react";
import Nav from "@/app/components/sidebar";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Format the message to be sent to WhatsApp
    const whatsappMessage =
      `*New Message from Portfolio*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Message:*%0A${form.message}`;

    const whatsappNumber = "2349031153531";

    // Open WhatsApp with pre-filled message in a new tab
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    setStatus("sent");
  }

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/peachy-naomi",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emmanuel-naomi-510582377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/2349031153531", 
      icon: <FaWhatsapp className="w-5 h-5" />,
    },
    {
      label: "Email",
      href: "mailto:emmanuelnaomi701@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--portfolio-surface)] text-[var(--portfolio-text)]">
      <Nav />

      <main className="md:ml-64 md:mr-16 px-6 py-14 md:px-16">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--portfolio-primary-purple)] font-semibold mb-2">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--portfolio-text)] leading-tight">
            Let's Work Together
          </h1>
          <p className="mt-4 text-[var(--portfolio-text-muted)] max-w-xl text-base leading-relaxed">
            Have a project in mind, a question, or just want to say hi? Fill out
            the form below or reach out via any of my socials — I'll get back to
            you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl">

          {/* ── Contact Form ── */}
          <div className="flex-1">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-[var(--portfolio-bg)] rounded-2xl shadow-sm border border-[var(--portfolio-primary-purple)]/20 h-full min-h-[420px]">
                {/* WhatsApp success icon */}
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <FaWhatsapp className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--portfolio-text)] mb-2">
                  WhatsApp Opened!
                </h2>
                <p className="text-[var(--portfolio-text-muted)] mb-8 max-w-sm">
                  Your message has been pre-filled in WhatsApp, {form.name.split(" ")[0]}. 
                  Just hit send and I'll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[var(--portfolio-primary-purple)] text-white text-sm font-medium hover:opacity-90 transition"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[var(--portfolio-bg)] rounded-2xl shadow-sm p-8 space-y-6 border border-[var(--portfolio-surface-soft)]"
              >
                {/* WhatsApp notice */}
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <FaWhatsapp className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Your message will be sent directly to my WhatsApp
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--portfolio-text-muted)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Your full name"
                      className={`w-full bg-[var(--portfolio-surface)] text-[var(--portfolio-text)] placeholder:text-[var(--portfolio-text-muted)]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 ${
                        focused === "name"
                          ? "border-[var(--portfolio-primary-purple)]"
                          : "border-[var(--portfolio-surface-soft)]"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--portfolio-text-muted)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="you@example.com"
                      className={`w-full bg-[var(--portfolio-surface)] text-[var(--portfolio-text)] placeholder:text-[var(--portfolio-text-muted)]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 ${
                        focused === "email"
                          ? "border-[var(--portfolio-primary-purple)]"
                          : "border-[var(--portfolio-surface-soft)]"
                      }`}
                    />
                  </div>
                </div>

                {/* <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--portfolio-text-muted)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    placeholder="What's this about?"
                    className={`w-full bg-[var(--portfolio-surface)] text-[var(--portfolio-text)] placeholder:text-[var(--portfolio-text-muted)]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 ${
                      focused === "subject"
                        ? "border-[var(--portfolio-primary-purple)]"
                        : "border-[var(--portfolio-surface-soft)]"
                    }`}
                  />
                </div> */}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--portfolio-text-muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    placeholder="Tell me about your project or question..."
                    className={`w-full bg-[var(--portfolio-surface)] text-[var(--portfolio-text)] placeholder:text-[var(--portfolio-text-muted)]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 resize-none ${
                      focused === "message"
                        ? "border-[var(--portfolio-primary-purple)]"
                        : "border-[var(--portfolio-surface-soft)]"
                    }`}
                  />
                  <p className="text-xs text-[var(--portfolio-text-muted)] mt-1.5 text-right">
                    {form.message.length} / 1000
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-xl bg-[var(--portfolio-primary-purple)] text-white font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                      </svg>
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      Send via WhatsApp
                      <FaWhatsapp className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Right Panel ── */}
          <div className="lg:w-72 flex flex-col gap-6">

            {/* Contact Info */}
            <div className="bg-[var(--portfolio-bg)] rounded-2xl p-6 border border-[var(--portfolio-surface-soft)] shadow-sm space-y-5">
              <h2 className="text-base font-bold text-[var(--portfolio-text)]">Contact Info</h2>

              {[
                {
                  label: "Email",
                  value: "emmanuelnaomi701@gmail.com",
                  href: "mailto:emmanuelnaomi701@gmail.com",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
                },
                {
                  label: "Location",
                  value: "Nigeria — Open to Remote",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />,
                },
                {
                  label: "Response Time",
                  value: "Usually within 24 hours",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-[var(--portfolio-primary-purple)]/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--portfolio-primary-purple)" strokeWidth={1.8} className="w-4 h-4">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--portfolio-text-muted)] mb-0.5 uppercase tracking-widest font-semibold">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[var(--portfolio-text)] hover:text-[var(--portfolio-primary-purple)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[var(--portfolio-text)]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="bg-[var(--portfolio-bg)] rounded-2xl p-6 border border-[var(--portfolio-surface-soft)] shadow-sm">
              <h2 className="text-base font-bold text-[var(--portfolio-text)] mb-4">Find Me Online</h2>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[var(--portfolio-surface-soft)] bg-[var(--portfolio-surface)] hover:border-[var(--portfolio-primary-purple)] hover:text-[var(--portfolio-primary-purple)] transition-all duration-200 group"
                  >
                    <span className="text-[var(--portfolio-text-muted)] group-hover:text-[var(--portfolio-primary-purple)] transition-colors">
                      {s.icon}
                    </span>
                    <span className="text-sm font-medium text-[var(--portfolio-text)] group-hover:text-[var(--portfolio-primary-purple)] transition-colors">
                      {s.label}
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[var(--portfolio-primary-purple)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Available for new opportunities
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
