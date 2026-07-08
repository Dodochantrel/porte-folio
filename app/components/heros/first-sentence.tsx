"use client";

import { useEffect, useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const phrases = [
  [
    { text: "Build" },
    { text: "awesome" },
    { text: "apps" },
    { text: "fast.", className: "text-blue-500 dark:text-blue-500" },
  ],
  [
    { text: "Create" },
    { text: "modern" },
    { text: "websites" },
    { text: "easily.", className: "text-purple-500 dark:text-purple-500" },
  ],
  [
    { text: "Launch" },
    { text: "your" },
    { text: "project" },
    { text: "today.", className: "text-green-500 dark:text-green-500" },
  ],
];

export default function FirstSentence() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="flex">
      <p>Besoin</p>
      <TypewriterEffect
        key={index}
        words={phrases[index]}
        cursorClassName="bg-blue-500"
      />
    </section>
  );
}