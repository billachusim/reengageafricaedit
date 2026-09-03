import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-elder.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-night text-night-foreground">
      <img
        src={heroImg}
        alt="Elder African woman in traditional headwrap and beaded earrings"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-night" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative container flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl text-balance">
            Wisdom <em className="not-italic text-accent">meets</em> the future.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-night-foreground/85 md:text-lg">
            ReEngage Africa is building an ecosystem for Africa's experienced generation — enterprise,
            culture, learning, wellbeing and purpose, across the continent and beyond.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-95">
              <a href="#initiatives">
                Explore our initiatives <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scallop divider into next section */}
      <svg className="absolute bottom-0 left-0 right-0 h-12 w-full text-background" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,60 C200,0 400,60 600,30 C800,0 1000,60 1200,20 L1200,60 Z" fill="currentColor" />
      </svg>
    </section>
  );
};
