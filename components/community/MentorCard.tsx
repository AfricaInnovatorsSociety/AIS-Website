import { Card, CardBody } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Linkedin } from "lucide-react";
import type { Mentor } from "@/content/partners";

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <Card className="overflow-hidden hover:border-crimson-200 transition-colors">
      <CardBody className="!p-6">
        <div className="flex items-start gap-4">
          <Avatar name={mentor.name} src={mentor.photo} size={56} />
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-charcoal-900 truncate">{mentor.name}</h3>
            <p className="text-sm text-charcoal-500">{mentor.title}</p>
            <p className="text-xs text-charcoal-400 mt-0.5">{mentor.org}</p>
          </div>
          {mentor.linkedin && (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${mentor.name} on LinkedIn`}
              className="shrink-0 w-9 h-9 inline-flex items-center justify-center rounded-full bg-charcoal-100 text-charcoal-700 hover:bg-crimson-700 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
        {mentor.expertise && mentor.expertise.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {mentor.expertise.map((e) => (
              <Badge key={e} tone="outline">{e}</Badge>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
