import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function GithubButton() {
  return (
    <Button asChild variant="outline" size="sm">
          <a
            href="https://github.com/Dodochantrel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Github
          </a>
        </Button>
  )
}