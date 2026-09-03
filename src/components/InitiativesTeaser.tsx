import { ArrowUpRight } from "lucide-react";
import agri from "@/assets/agri.jpg";
import travel from "@/assets/travel.jpg";
import academy from "@/assets/vertical-academy.jpg";
import activelife from "@/assets/vertical-activelife.jpg";
import purposelab from "@/assets/vertical-purposelab.jpg";
import { VoicesFeature } from "@/components/VoicesFeature";

const initiatives = [

  {
    tag: "AgriVentures",
    category: "Work & Enterprise",
    title: "Turning land, time and savings into thriving agribusiness.",
    body: "We help midlife and retired adults build small-scale farms and commercial agricultural ventures across the continent.",
    href: "#agriventures",
    image: agri,
  },
  {
    tag: "Global Mobility",
    category: "Travel & Connection",
    title: "Curated travel for those entering their richest chapter.",
    body: "Safe, structured, and meaningful journeys designed for midlife and retired adults — leisure, culture, and community.",
    href: "#mobility",
    image: travel,
  },
  {
    tag: "Digital Academy",
    category: "Learning & Digital Inclusion",
    title: "Digital fluency for the wisdom years.",
    body: "Practical digital literacy, AI tools and remote-work skills for adults 45 and above.",
    href: "#academy",
    image: academy,
  },
  {
    tag: "ActiveLife",
    category: "Wellbeing & Community",
    title: "Movement, community and longevity.",
    body: "Walking groups, yoga, dance fitness and community sports for healthier, connected lives.",
    href: "#activelife",
    image: activelife,
  },
  {
    tag: "Purpose Lab",
    category: "Experience & Impact",
    title: "Turning lifelong experience into impact.",
    body: "Mentorship, advisory and consulting pathways that turn lifelong experience into impact.",
    href: "#purposelab",
    image: purposelab,
  },
];

export const InitiativesTeaser = () => (
  <section id="initiatives" className="bg-background py-16 md:py-24 border-t border-border/60">
    <div className="container">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Our initiatives</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
            One vision, expressed across the continent.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          ReEngage Africa brings together initiatives that create opportunities for Africa's
          experienced generation to remain productive, connected, purposeful and engaged.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:gap-5 md:grid-cols-2">
        {initiatives.map((i) => (
          <a
            key={i.tag}
            href={i.href}
            className="group relative overflow-hidden rounded-3xl border border-border shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-warm"
          >
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden">
              <img
                src={i.image}
                alt={`ReEngage ${i.tag}`}
                loading="lazy"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/10" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/90 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-night-foreground [text-shadow:0_1px_2px_rgb(0_0_0_/_0.45)]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent-foreground">
                    ReEngage {i.tag}
                  </span>
                </div>

                <span className="mt-2 text-[11px] uppercase tracking-[0.18em] text-night-foreground/70">
                  {i.category}
                </span>
                <h3 className="mt-3 font-serif text-xl md:text-2xl lg:text-3xl text-balance">
                  {i.title}
                </h3>
                <p className="mt-2 md:mt-3 max-w-md text-sm text-night-foreground/90">{i.body}</p>
                <span className="mt-4 md:mt-6 inline-flex items-center gap-1 text-sm font-medium text-night-foreground">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
