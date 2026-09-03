import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { VOICES_URL } from "@/config/links";
import heroImg from "@/assets/hero-main.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-night text-night-foreground">
      <div className="relative min-h-[88svh] md:min-h-[92svh]">
        <picture className="absolute inset-0 block h-full w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Elder African man and woman sharing wisdom with younger adults in a warm intergenerational gathering"
            width={1920}
            height={1088}
            className="absolute left-[-50%] top-0 w-[200%] max-w-none md:inset-0 md:left-0 md:h-full md:w-full md:object-cover md:object-[50%_17%]"
          />
        </picture>


        <div className="absolute inset-x-0 top-[36%] h-[32%] bg-gradient-to-b from-transparent to-night md:hidden" />
        {/* Legibility gradients */}
        <div className="absolute inset-0 bg-gradient-night opacity-90 lg:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/65 via-night/20 to-transparent lg:from-night/85 lg:via-night/35 lg:to-night/0" />
        {/* Desktop-only directional gradient: dark on the text side, clear over the subject */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-l from-transparent via-transparent to-night/45" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative container flex min-h-[88svh] flex-col justify-end pb-20 pt-32 md:min-h-[92svh] md:justify-center md:pb-28">
          <div className="max-w-2xl animate-fade-up lg:max-w-[46rem] xl:max-w-[50rem]">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent lg:text-sm">
              ReEngage Africa
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02] xl:text-[4.25rem] xl:leading-[1.0]">
              Africa's future needs the{" "}
              <em className="not-italic text-accent">wisdom</em>, experience and
              potential of its older generation.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-night-foreground/85 md:text-lg lg:mt-7 lg:max-w-[42rem] lg:text-xl lg:leading-[1.5]">
              ReEngage Africa is reimagining what it means to grow older in Africa —
              creating opportunities for older adults to remain connected, purposeful,
              productive and engaged in the life of the continent.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-10 lg:gap-4">
              <Button asChild size="lg" className="bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-95 lg:h-[3.25rem] lg:px-8 lg:text-base">
                <a href="#initiatives">
                  Explore our initiatives <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-night-foreground/40 bg-night/20 text-night-foreground backdrop-blur-sm hover:bg-night-foreground/10 hover:text-night-foreground lg:h-[3.25rem] lg:px-8 lg:text-base"
              >
                <a href={VOICES_URL}>
                  Explore ReEngage Voices <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </Button>
            </div>
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
