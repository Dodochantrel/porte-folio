import Image from "next/image";
import { Project } from "@/app/data/project";
import { Badge } from "@/components/ui/badge"

export default function ProjectCard(project: Project) {
  return (
    <div className="flex gap-4 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <Image
        width={160}
        height={80}
        src="https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/overview.jpg"
        alt={project.title}
        className="h-40 w-60 rounded-lg object-cover object-center"
      />

      <div className="flex flex-col py-2">
        <h5 className="text-lg font-bold">{project.title}</h5>

        <p className="mt-2 text-gray-600">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technos.slice(0, 3).map((techno) => (
            <Badge key={techno}>
              {techno}
            </Badge>
          ))}

          {project.technos.length > 3 && (
            <Badge>
              +{project.technos.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}