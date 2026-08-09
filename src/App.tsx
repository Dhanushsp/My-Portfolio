import ctaPortrait from "@/assets/cta-portrait.jpg";
import heroBg from "@/assets/hero-bg.png";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  PricingSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  StatsSection,
  TestimonialsSection,
  WorkSection,
} from "@/components/sections";

const works = [work1, work2, work3, work4, work5];

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
    name: "Jille Bernard",
    role: "Founder at Lume",
    quote:
      "Dominic transformed our brand identity with a fresh, modern look that truly resonates with our audience.",
  },
  {
    name: "David Miller",
    role: "Head of Product",
    quote:
      "From concept to execution, Dominic's attention to detail and creativity exceeded our expectations.",
  },
  {
    name: "Jille Bernard",
    role: "Director at Nobo",
    quote:
      "Our website is a rare peak and intuitive, thanks to Dominic's expertise in digital design.",
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
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <HeroSection heroBg={heroBg} clients={clients} />

      <AboutSection />

      <WorkSection works={works} />

      <ServicesSection services={services} />

      <StatsSection stats={stats} />

      <TestimonialsSection testimonials={testimonials} />

      <PricingSection plans={plans} />

      <ContactSection ctaPortrait={ctaPortrait} />
      <SiteFooter />
    </div>
  );
}
