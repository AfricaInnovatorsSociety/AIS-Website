import { Section } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { siteConfig } from "@/content/site.config";
import { Quote } from "lucide-react";

export function Testimonial() {
  const t = siteConfig.testimonial;
  return (
    <Section className="!py-20 md:!py-28">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="h-10 w-10 mx-auto text-crimson-700" aria-hidden />
        <blockquote className="mt-6">
          <p className="text-2xl md:text-3xl lg:text-[2.25rem] font-semibold leading-[1.25] text-charcoal-900 text-balance">
            &ldquo;{t.quote}&rdquo;
          </p>
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Avatar name={t.name} src={t.photo} size={56} />
          <div className="text-left">
            <div className="font-semibold text-charcoal-900">{t.name}</div>
            <div className="text-sm text-charcoal-500">{t.role}</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
