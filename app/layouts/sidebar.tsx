"use client";

import { Separator } from "@/components/ui/separator";

import GithubButton from "../components/heros/github-button";
import LinkedinButton from "../components/heros/linkedin-button";
import Profile from "../components/profile";
import Navigation from "../components/navigation";

export default function Sidebar() {
  return (
    <section className="flex gap-4 sticky top-0">
      <Separator orientation="vertical" />
      <div className="flex h-screen flex-col justify-center items-center gap-4">
        <Profile />
        <div className="flex items-center flex-col gap-2">
          <h1 className="text-4xl font-bold">Dorian Chantrel</h1>
          <h3 className="text-xl">Développeur Full-Stack</h3>
          <p className="text-muted">
            Je conçois pour vous et avec vous des applications web et des API robustes. A vos coter aujourd'hui et
            demain.
          </p>
          <div className="flex gap-2">
            <LinkedinButton />
            <GithubButton />
          </div>
        </div>
        <Navigation />
      </div>
    </section>
  );
}
