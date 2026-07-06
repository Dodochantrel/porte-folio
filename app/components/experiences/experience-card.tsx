import { Badge } from "@/components/ui/badge";

type ExperienceCardProps = {
  title: string;
  description: string;
  date: string;
  skills: string[];
};

export default function ExperienceCard({
  title,
  description,
  date,
  skills,
}: ExperienceCardProps) {
  return (
    <section className="flex gap-4">
      
      <p className="text-sm text-muted-foreground shrink-0 w-fit">
        {date}
      </p>

      <div className="space-y-2 flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-muted-foreground">{description}</p>

        <div className="flex gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <Badge variant="secondary" key={index}>{skill}</Badge>
          ))}
        </div>
      </div>

    </section>
  );
}