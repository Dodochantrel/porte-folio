"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "about", label: "À propos" },
  { id: "experience", label: "Expérience" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <nav className="mt-16 hidden lg:block" aria-label="Navigation principale">
        <ul className="space-y-4 min-w-60">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button onClick={() => handleNav(item.id)} className="group flex items-center gap-4 py-1">
                  <span
                    className={`h-px transition-all ${
                      isActive
                        ? "w-16 bg-primary"
                        : "w-8 bg-muted-foreground/50 group-hover:w-16 group-hover:bg-foreground"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
