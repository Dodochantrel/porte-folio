import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function LinkedinButton() {
  return (
    <Button asChild variant="outline" size="sm">
      <a
        href="https://www.linkedin.com/in/dorian-chantrel/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <ExternalLink className="w-4 h-4" />
        LinkedIn
      </a>
    </Button>
  );
}
