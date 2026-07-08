"use client";

import { useEffect, useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const phrases = [
  [
    { text: "développeur" },
    { text: "full-stack.", className: "text-blue-500 dark:text-blue-500" },
  ],
  [
    { text: "créateur" },
    { text: "de" },
    { text: "sites" },
    { text: "web" },
    { text: "modernes.", className: "text-purple-500 dark:text-purple-500" },
  ],
  [
    { text: "développeur" },
    { text: "à" },
    { text: "l'écoute.", className: "text-pink-500 dark:text-pink-500" },
  ],
];

export default function FirstSentence() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center gap-1 text-base font-normal">
      <p>Besoin d'un</p>

      <TypewriterEffect
        key={index}
        words={phrases[index]}
        cursorClassName="bg-blue-500 h-5"
        className="text-base font-normal normal-case text-left"
      />
    </section>
  );
}
