export const AboutBlock = () => (
  <section id="about" className="relative overflow-hidden bg-night py-16 text-night-foreground md:py-24">
    <div className="absolute inset-0 grain pointer-events-none" />
    <div className="container relative grid gap-12 md:grid-cols-12 md:items-center">
      <div className="md:col-span-5">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">About ReEngage Africa</p>
        <h2 className="mt-3 font-serif text-3xl md:text-5xl text-balance">
          We believe Africa's elders are not behind us. They are <em className="not-italic text-accent">ahead of us</em>.
        </h2>
      </div>
      <div className="md:col-span-7 md:pl-10">
        <p className="text-lg leading-relaxed text-night-foreground/85">
          ReEngage Africa exists to bring older generations back to the center of African life —
          not as recipients of care, but as keepers of culture, mentors, entrepreneurs, and
          travelers. Across our initiatives we capture their voices, build with their experience,
          and create spaces where they thrive.
        </p>

        <div className="mt-10 border-t border-night-foreground/15 pt-8">
          <p className="text-xs uppercase tracking-[0.18em] text-night-foreground/60">
            What we're building
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            <div>
              <p className="font-serif text-3xl text-accent">Stories</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-night-foreground/65">Preserved</p>
              <p className="mt-2 text-sm leading-relaxed text-night-foreground/75">
                Voices, memories and lived experiences captured for future generations.
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-accent">Experience</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-night-foreground/65">Activated</p>
              <p className="mt-2 text-sm leading-relaxed text-night-foreground/75">
                Creating pathways for older adults to contribute, learn, work and remain connected.
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-accent">Generations</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-night-foreground/65">Connected</p>
              <p className="mt-2 text-sm leading-relaxed text-night-foreground/75">
                Creating spaces where experience can be shared across generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
