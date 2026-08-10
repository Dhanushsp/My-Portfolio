import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/Reveal";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I start a project with you?",
    answer:
      "Send a message through the contact section or email directly. I&apos;ll review your request and propose an initial scope that fits your goals and timeline.",
  },
  {
    question: "What is your design process like?",
    answer:
      "I begin with clarity and strategy, then move into visual exploration, prototyping, and final handoff. Every stage includes feedback rounds so the result feels purposeful and polished.",
  },
  {
    question: "Can you help with both brand and digital product work?",
    answer:
      "Yes — I specialize in brand systems, visual identity, and UI/UX design for websites and digital products, making sure every touchpoint feels consistent.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most brand and UI/UX engagements run between 4 to 8 weeks depending on scope, with clear milestones and delivery checkpoints built in.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Frequently asked questions.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Answers to the most common questions about my process, delivery, and how I work with
              clients.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} className="rounded-[2rem] border border-border bg-surface/80 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                >
                  <span className="text-base font-semibold text-foreground sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden px-6 transition-all duration-300 sm:px-8 ${
                    isOpen ? "max-h-80 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
