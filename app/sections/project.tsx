"use client";

import { Projects } from "@/app/data/project";
import ProjectCard from "../components/projects/project-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

export default function Project() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    []
  );

  return (
    <section className="min-h-screen flex items-center justify-center flex-col gap-4">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full"
        plugins={[plugin]}
        onMouseEnter={() => plugin.stop()}
        onMouseLeave={() => plugin.reset()}
      >
        <CarouselContent className="-mt-1 max-h-80">
          {Projects.map((project, index) => (
            <CarouselItem key={index}>
              <ProjectCard key={project.title} {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
