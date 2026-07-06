import ExperienceCard from "../components/experiences/experience-card";

export default function Experience() {
  return (
    <section className="p-4 h-screen flex justify-center">
        <div className="flex flex-col gap-8">
            <ExperienceCard
                title="Développeur Full-Stack - Portalp"
                description="Conception et développement d’applications SaaS utilisées par des milliers d’utilisateurs. Encadrement d’une équipe de 4 développeurs et mise en place de bonnes pratiques CI/CD."
                date="2023 - Présent"
                skills={["Typescript", "Angular", "NestJs", "Laravel", "Gitlab", "Docker", "CI/CD"]}
            />
            <ExperienceCard
                title="Développeur Full-Stack - Smile"
                description="Conception et développement d’applications SaaS utilisées par des milliers d’utilisateurs. Encadrement d’une équipe de 4 développeurs et mise en place de bonnes pratiques CI/CD."
                date="2023 - Présent"
                skills={["Laravel", "Google console", "CSS", "HTML", "Javascript"]}
            />
        </div>
    </section>
  );
}