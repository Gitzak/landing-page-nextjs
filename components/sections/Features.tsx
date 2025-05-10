import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Features = () => (
  <section id="features" className="w-full py-10 px-3">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge>Platform Features</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Smart. Scalable. Built for Morocco.
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Moroccan Saas Ai empowers entrepreneurs to build and grow
            intelligent SaaS platforms with AI automation, multilingual support,
            and local-first design.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>AI Workflow Automation</p>
                <p className="text-muted-foreground text-sm">
                  Automate repetitive tasks and free your time for growth and
                  strategy.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Multilingual Interface</p>
                <p className="text-muted-foreground text-sm">
                  Support for Arabic, French, and English to connect with all
                  audiences.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Smart Dashboards</p>
                <p className="text-muted-foreground text-sm">
                  Track performance and make data-driven decisions easily.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Built for Morocco</p>
                <p className="text-muted-foreground text-sm">
                  Designed with local business needs, culture, and growth in
                  mind.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>No-Code Setup</p>
                <p className="text-muted-foreground text-sm">
                  Launch your SaaS product without writing a single line of
                  code.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Scalable Architecture</p>
                <p className="text-muted-foreground text-sm">
                  Whether you're starting or scaling — we grow with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
