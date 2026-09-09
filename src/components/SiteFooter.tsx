import { Facebook, Instagram, Youtube } from "lucide-react";
import { VOICES_URL } from "@/config/links";
import logo from "@/assets/reengage-logo.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.25 1.83 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const SiteFooter = () => (
  <footer className="bg-night text-night-foreground">
    <div className="container grid gap-8 py-12 md:grid-cols-4 md:gap-10 md:py-16">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="ReEngage Africa" width={40} height={40} className="h-10 w-10 rounded-full object-contain" />
          <span className="font-serif text-lg font-semibold">
            ReEngage <span className="text-primary">Africa</span>
          </span>
        </div>
        <p className="mt-4 max-w-sm text-sm text-night-foreground/70">
          Engaging elders. Enriching Africa. A platform for wisdom, work, and wonder in the second half of life.
        </p>
        <div className="mt-6 flex gap-3">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/reengage_africa?stkn=dmdqb3poOWpyZ2Qy", label: "Instagram" },
            { Icon: TikTokIcon, href: "https://www.tiktok.com/@reengage_voices?_r=1&_t=ZS-99aR1l8Rzpy", label: "TikTok" },
            { Icon: Facebook, href: "https://www.facebook.com/share/1Lrak6XX27/?mibextid=wwXIfr", label: "Facebook" },
            { Icon: Youtube, href: "https://youtube.com/@reengagevoices?si=_WImyzWzZJa7u-i9", label: "YouTube" },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-night-foreground/15 text-night-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-night-foreground/60">Initiatives</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href={VOICES_URL} className="hover:text-primary">ReEngage Voices</a></li>
          <li><a href="#initiatives" className="hover:text-primary">AgriVentures</a></li>
          <li><a href="#initiatives" className="hover:text-primary">Global Mobility</a></li>
          <li><a href="#initiatives" className="hover:text-primary">Digital Academy</a></li>
          <li><a href="#initiatives" className="hover:text-primary">ActiveLife</a></li>
          <li><a href="#initiatives" className="hover:text-primary">Purpose Lab</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-night-foreground/60">Organization</h4>
        <ul className="mt-4 space-y-2 text-sm">
          <li><a href="#about" className="hover:text-primary">About</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          <li><a href="#" className="hover:text-primary">Get involved</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-night-foreground/10">
      <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-night-foreground/60 md:flex-row md:py-6">
        <p>© {new Date().getFullYear()} ReEngage Africa. All rights reserved.</p>
        <p>Made with care for the wisdom of a continent.</p>
      </div>
    </div>
  </footer>
);
