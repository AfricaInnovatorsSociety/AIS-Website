import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import type { Venture } from "@/content/partners";

export function VentureCard({ venture }: { venture: Venture }) {
  const Wrapper = venture.url ? "a" : "div";
  const props = venture.url
    ? { href: venture.url, target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <Wrapper {...props} className="group block h-full">
      <Card className="h-full overflow-hidden hover:border-crimson-200 transition-colors">
        <CardBody className="!p-6 h-full flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-charcoal-900 group-hover:text-crimson-700 transition-colors">
                {venture.name}
              </h3>
              <p className="text-xs text-charcoal-500 mt-0.5">
                Founded by {venture.founder} · {venture.cohort}
              </p>
            </div>
            {venture.url && (
              <ArrowUpRight className="h-4 w-4 text-charcoal-400 group-hover:text-crimson-700 transition-colors shrink-0" />
            )}
          </div>
          <p className="mt-3 text-sm text-charcoal-600 leading-relaxed flex-1">{venture.description}</p>
          <div className="mt-4">
            <Badge tone="amber">{venture.sector}</Badge>
          </div>
        </CardBody>
      </Card>
    </Wrapper>
  );
}
