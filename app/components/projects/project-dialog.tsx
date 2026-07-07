"use client";

import { Project } from "@/app/data/project";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

type ProjectDialogProps = {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <Image
          width={400}
          height={200}
          src="https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/overview.jpg"
          alt={project.title}
          className="w-full rounded-lg object-cover object-center mt-4"
        />

        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.shortDescription}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2">
          {project.technos.map((techno) => (
            <span
              key={techno}
              className="rounded-md bg-gray-100 px-2 py-1 text-sm"
            >
              {techno}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
