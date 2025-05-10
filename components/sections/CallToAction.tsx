import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CallToAction = () => (
  <section id="call_to_action" className="w-full py-20 px-3 bg-muted">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Get started</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold">
            Ready to make your SaaS business smarter?
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Moroccan Saas Ai helps you launch, scale, and automate with ease. No
            technical setup. Just real growth — tailored for Moroccan
            entrepreneurs.
          </p>
        </div>
        <div className="flex flex-row gap-4 flex-wrap justify-center">
          <Button className="gap-4" variant="outline">
            Book a free call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Start free trial <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);
