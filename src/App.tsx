import ctaPortrait from "@/assets/cta-portrait.jpg";
import heroBg from "@/assets/hero-bg.png";
import bundle1 from "@/assets/bundle-1.png";
import bundle2 from "@/assets/bundle-2.png";
import bundle3 from "@/assets/bundle-3.png";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import { TemplatesPage } from "@/routes/templates";
import {
  AboutSection,
  ContactSection,
  ContactUsSection,
  FAQSection,
  HeroSection,
  PricingSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  StatsSection,
  TestimonialsSection,
  WorkSection,
} from "@/components/sections";

const topRowWorks = [bundle1, bundle2, bundle3];
const bottomRowWorks = [project1, project2, project3];

const services = [
  {
    n: "01",
    title: "Brand Identity & Strategy",
    body: "From logo design to full brand systems, I create cohesive identities that reflect your vision and resonate with your audience.",
  },
  {
    n: "02",
    title: "UI/UX Design & Digital",
    body: "I design intuitive, user-centered digital experiences that enhance engagement and bring brands to life online.",
  },
  {
    n: "03",
    title: "Fast Integration",
    body: "With a strong design system I define their aesthetic, so everything stays consistent across every touchpoint.",
  },
];

const stats = [
  { value: "20+", label: "Years experience" },
  { value: "200+", label: "Happy clients worldwide" },
  { value: "500+", label: "Projects done" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder of TrendyCart",
    company: "TrendyCart",
    rating: "5.0",
    quote:
      "Working with Dominic was a game-changer. Their team turned our concept into a seamless digital product that customers love.",
  },
  {
    name: "Liam Walker",
    role: "CEO of NovaFit",
    company: "NovaFit",
    rating: "5.0",
    quote:
      "Dominic delivered a stunning brand direction and a polished digital experience with impressive speed and clarity.",
  },
  {
    name: "Maya Lewis",
    role: "Co-founder of Bloomwell",
    company: "Bloomwell",
    rating: "5.0",
    quote:
      "Their thoughtful approach made our product feel premium and intuitive. The result exceeded our expectations.",
  },
];

const plans = [
  {
    tag: "Basic plan",
    price: "$2990",
    sub: "Start Your Journey",
    features: ["Brand consultation", "Brand & design resources", "One revision on initial concept", "Basic chat and support"],
    featured: false,
  },
  {
    tag: "Pro plan",
    price: "$4990",
    sub: "Elevate Your Brand",
    features: ["Full brand identity design", "Social design for website or app", "Extended user experience testing", "Priority support"],
    featured: true,
  },
  {
    tag: "Enterprise plan",
    price: "$6990",
    sub: "Complete Branding Solution",
    features: ["Custom brand strategy & identity", "Digital experience design", "Unlimited revisions", "Priority support"],
    featured: false,
  },
];

const clients = ["Ultra Blox", "Frame Blox", "Hype Blox", "Supa Blox", "Sky Blox", "Nova Blox"];

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");

  if (path === "/templates") {
    return <TemplatesPage />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <HeroSection heroBg={heroBg} clients={clients} />

      <AboutSection />

      <WorkSection topRowWorks={topRowWorks} bottomRowWorks={bottomRowWorks} />

      <ServicesSection services={services} />

      <StatsSection stats={stats} />

      <TestimonialsSection testimonials={testimonials} />

      <ContactUsSection />

      <FAQSection />

      {/* <PricingSection plans={plans} /> */}

      <ContactSection ctaPortrait={ctaPortrait} />
      <SiteFooter />
    </div>
  );
}
