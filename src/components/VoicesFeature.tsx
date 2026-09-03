import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VOICES_URL, VOICES_FROG_STORY_URL } from "@/config/links";
import storyArt from "@/assets/voices-frog-story.jpg";

export const VoicesFeature = () => (
  <div className="mt-12 md:mt-16">
    <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
      <figure className="relative overflow-hidden rounded-3xl border border-border shadow-card">
        <img
          src={storyArt}
          alt="Illustration for the Igbo folktale Why Frogs Do Not Have Tails"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">ReEngage Voices</p>
        <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl lg:text-[2.75rem] text-balance">
          A living archive of African memory, wisdom and lived experience.
        </h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          ReEngage Voices is our flagship cultural archive, preserving the stories, knowledge,
          traditions and lived experiences of Africa's older generation — and making them
          accessible to the generations that follow.
        </p>

        <div className="mt-8 border-t border-border/70 pt-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Now playing on ReEngage Voices
          </p>
          <p className="mt-2 font-serif text-xl md:text-2xl">Why Frogs Do Not Have Tails</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            A timeless Igbo folktale about how the frog lost its tail — and how expensive
            procrastination can be.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="bg-gradient-warm text-primary-foreground shadow-warm">
            <a href={VOICES_FROG_STORY_URL}>
              <Play className="mr-2 h-4 w-4" fill="currentColor" />
              Listen to the story
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={VOICES_URL}>
              Explore ReEngage Voices
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);
