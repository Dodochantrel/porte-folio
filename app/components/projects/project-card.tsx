import Image from "next/image";
import { Project } from "@/app/data/project";
import { Badge } from "@/components/ui/badge";
import { MoveDiagonal } from "lucide-react";

export default function ProjectCard(project: Project) {
  return (
    <div className="group flex gap-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
      
      <Image
        width={160}
        height={80}
        src="https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/overview.jpg"
        alt={project.title}
        className="h-40 w-60 rounded-lg object-cover object-center"
      />

      <div className="flex flex-col py-2">
        <h5 className="flex items-center gap-2 text-lg font-bold">
          {project.title}

          <MoveDiagonal
            className="
              h-4 w-4
              transition-all duration-300 ease-in-out
              group-hover:text-green-500
              group-hover:scale-125
            "
          />
        </h5>

        <p className="mt-2 text-gray-600">
          {project.shortDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.technos.slice(0, 3).map((techno) => (
            <Badge key={techno}>{techno}</Badge>
          ))}

          {project.technos.length > 3 && (
            <Badge>+{project.technos.length - 3}</Badge>
          )}
        </div>
      </div>
    </div>
  );
}