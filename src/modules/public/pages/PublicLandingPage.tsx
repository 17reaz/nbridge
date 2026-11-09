
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Globe2,
  BookOpen,
  Plane,
  ShieldCheck,
  Menu,
  CheckCircle2,
  Compass,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const destinations = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: "photo-1513635269975-59663e0ac1ad",
    description: "Globally recognised degrees and rich academic traditions.",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    image: "photo-1498892158567-9eecf6f6b6e1",
    description: "Flexible study pathways and diverse programmes.",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    image: "photo-1517935706615-2717063c2225",
    description: "Welcoming campuses and opportunities across many fields.",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: "photo-1506973035872-a4ec16b8e8d9",
    description: "Innovative universities and vibrant student life.",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image: "photo-1467269204594-9661b134dd2b",
    description: "Strong research institutions and diverse study options.",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    image: "photo-1493976040374-85c8e12f0c0e",
    description: "A unique blend of technology, culture and education.",
  },
];

const services = [
  {
    icon: Compass,
    title: "University Guidance",
    description: "Find courses and universities that match your academic goals.",
  },
  {
    icon: BookOpen,
    title: "Admission Assistance",
    description: "Get guidance with entry requirements and applications.",
  },
  {
    icon: ShieldCheck,
    title: "Visa Guidance",
    description: "Understand visa requirements and prepare your documents.",
  },
  {
    icon: Sparkles,
    title: "Scholarship Guidance",
    description: "Explore potential scholarships and funding opportunities.",
  },
  {
    icon: MessageCircle,
    title: "Personal Consultation",
    description: "Discuss your plans and get guidance for your next step.",
  },
  {
    icon: Plane,
    title: "Pre-departure Support",
    description: "Prepare for your journey to your new university.",
  },
];

const journey = [
  ["01", "Share your goals", "Tell us about your education and preferred destination."],
  ["02", "Explore your options", "Discover suitable study pathways and universities."],
  ["03", "Prepare your application", "Get guidance on admission and required documents."],
  ["04", "Get ready to go", "Move forward with visa and pre-departure guidance."],
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-lg bg-[#153b63] text-white">
        <GraduationCap size={24} />
      </div>
      <div>
        <p className="text-xl font-bold tracking-tight text-[#122c46]">NBridge</p>
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
          Global Education
        </p>
      </div>
    </Link>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Brand />

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#destinations" className="text-sm text-slate-600 hover:text-blue-800">
            Destinations
          </a>
          <a href="#services" className="text-sm text-slate-600 hover:text-blue-800">
            Services
          </a>
          <a href="#process" className="text-sm text-slate-600 hover:text-blue-800">
            How it works
          </a>
          <a href="#about" className="text-sm text-slate-600 hover:text-blue-800">
            About us
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link to="/login" className="text-sm font-semibold text-slate-700">
            Login
          </Link>
          <Link
            to="/get-started"
            className="flex h-11 items-center gap-2 rounded-md bg-[#153b63] px-5 text-sm font-semibold text-white hover:bg-[#0e2e50]"
          >
            Apply Now <ArrowUpRight size={16} />
          </Link>
        </div>

        <Link
          to="/get-started"
          className="flex h-10 items-center gap-2 rounded-md bg-[#153b63] px-4 text-sm font-semibold text-white lg:hidden"
        >
          Apply <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#f3f7fa]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-[#28577e]">
            <Globe2 size={15} />
            YOUR FUTURE HAS NO BORDERS
          </div>

          <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-[#122c46] sm:text-6xl lg:text-7xl">
            Your next chapter
            <br />
            <span className="font-serif font-normal italic text-[#39749b]">
              starts here.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">
            Big ambitions deserve a clear path. Explore international study
            opportunities and get thoughtful guidance at every step of your
            education journey.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/get-started"
              className="flex h-12 items-center gap-3 rounded-md bg-[#153b63] px-6 text-sm font-semibold text-white transition hover:bg-[#0e2e50]"
            >
              Start Your Application <ArrowUpRight size={17} />
            </Link>

            <a
              href="#destinations"
              className="flex h-12 items-center gap-2 rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-[#183b5c] hover:bg-slate-50"
            >
              Explore Destinations <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-7 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-600" />
              Personalised guidance
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-600" />
              Clear next steps
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-600" />
              Student-first support
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-sm shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=90"
              alt="University students walking across a campus"
              className="aspect-[5/5.2] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-lg border bg-white p-5 shadow-xl sm:block">
            <p className="text-xs font-semibold text-slate-500">YOUR JOURNEY</p>
            <p className="mt-1 text-lg font-bold text-[#153b63]">
              Starts with a plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#39749b]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#122c46] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function DestinationsSection() {
  return (
    <section id="destinations" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Explore the world"
            title="Where could you go?"
            description="Discover international study destinations and explore the opportunities each country has to offer."
          />
          <Link
            to="/get-started"
            className="flex items-center gap-2 text-sm font-semibold text-[#24577f]"
          >
            Find your destination <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((country, index) => (
            <Link
              to="/get-started"
              key={country.name}
              className="group relative min-h-[300px] overflow-hidden bg-slate-200"
            >
              <img
                src={`https://images.unsplash.com/${country.image}?auto=format&fit=crop&w=900&q=85`}
                alt={country.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2034]/90 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-full bg-white text-xl">
                {country.flag}
              </div>

              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs text-white/70">0{index + 1} / DESTINATION</p>
                <h3 className="mt-2 text-2xl font-semibold">{country.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  {country.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f3f7fa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Guidance for every important step."
          description="From your first questions to preparing for departure, get support to make informed decisions about your education journey."
        />

        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="border-t border-slate-200 py-8">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-white text-[#28577e] shadow-sm">
                    <Icon size={23} />
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#173650]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Simple process"
            title="From first idea to first day on campus."
            description="A good plan starts with understanding your goals. We help break a big decision into clear, manageable steps."
          />

          <Link
            to="/get-started"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-md bg-[#153b63] px-6 text-sm font-semibold text-white hover:bg-[#0e2e50]"
          >
            Tell Us Your Plans <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="border-t border-slate-200">
          {journey.map(([number, title, description]) => (
            <div
              key={number}
              className="grid grid-cols-[55px_1fr] gap-4 border-b border-slate-200 py-7"
            >
              <span className="text-sm font-bold text-[#6e91ac]">{number}</span>
              <div>
                <h3 className="text-xl font-semibold text-[#173650]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#102b45] py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9c8df]">
            The NBridge approach
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Your ambitions are personal. Your guidance should be too.
          </h2>
        </div>
        <div>
          <p className="text-base leading-8 text-slate-300">
            Choosing where to study is about more than selecting a country or a
            university. It is about finding a path that fits your background,
            interests, resources and long-term goals. NBridge is here to help
            you explore those choices with clarity.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-5 border-t border-white/15 pt-6">
            <div>
              <p className="font-semibold">Student-first</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Your priorities shape the conversation.
              </p>
            </div>
            <div>
              <p className="font-semibold">Clear guidance</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Understand your options and next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl bg-[#eaf1f6] px-7 py-14 sm:px-14 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#39749b]">
          Your journey starts here
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[#122c46] sm:text-4xl">
          Ready to explore what is possible?
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
          Share your academic background and study goals. Let’s start shaping
          your next chapter.
        </p>
        <Link
          to="/get-started"
          className="mt-8 inline-flex h-12 items-center gap-3 rounded-md bg-[#153b63] px-6 text-sm font-semibold text-white hover:bg-[#0e2e50]"
        >
          Apply to NBridge <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b2034] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="[&_p]:text-white">
            <Brand />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            Helping students explore international education opportunities
            and take their next step with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
            Explore
          </h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <a href="#destinations" className="hover:text-white">Destinations</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">How it works</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300">
            Get started
          </h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/get-started" className="hover:text-white">Student application</Link>
            <Link to="/login" className="hover:text-white">Login</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-slate-500 sm:px-8">
          © {new Date().getFullYear()} NBridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function PublicLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
