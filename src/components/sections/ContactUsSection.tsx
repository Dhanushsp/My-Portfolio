import { Reveal } from "@/components/Reveal";

export function ContactUsSection() {
  return (
    <section id="contact-us" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Let&apos;s bring your next project to life.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Share a few details about your vision and I&apos;ll reach out with a clear next step.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 rounded-[2rem] border border-border bg-surface/80 p-6 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New contact request from website" />
              <input type="hidden" name="from_name" value="Dominic Wagner Portfolio" />
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-foreground">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-3 w-full rounded-3xl border border-border bg-background/90 px-4 py-3 text-sm text-foreground outline-none transition-shadow duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block text-sm font-semibold text-foreground">
                  Email address
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-3xl border border-border bg-background/90 px-4 py-3 text-sm text-foreground outline-none transition-shadow duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              </div>

              <label className="block text-sm font-semibold text-foreground">
                Message
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project"
                  className="mt-3 w-full rounded-[1.5rem] border border-border bg-background/90 px-4 py-3 text-sm text-foreground outline-none transition-shadow duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90 sm:w-auto"
              >
                Send message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
