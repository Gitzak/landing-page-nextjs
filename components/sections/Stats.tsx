import { MoveUpRight } from "lucide-react";

export const Stats = () => (
  <section id="stats" className="w-full py-20 px-3 bg-muted">
    <div className="container mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <p className="text-sm uppercase text-primary font-medium tracking-wide mb-2">
          Moroccan Saas Ai
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter max-w-2xl">
          Real Impact, Real Numbers
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl text-base">
          We're not just a platform — we're a productivity engine for Moroccan
          businesses.
        </p>
      </div>
      <div className="grid text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 lg:gap-8">
        <div className="flex flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary mx-auto" />
          <h2 className="text-4xl font-semibold tracking-tighter">1,200+</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Moroccan businesses onboarded
          </p>
        </div>
        <div className="flex flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary mx-auto" />
          <h2 className="text-4xl font-semibold tracking-tighter">95%</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Automation success rate
          </p>
        </div>
        <div className="flex flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary mx-auto" />
          <h2 className="text-4xl font-semibold tracking-tighter">3x</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Faster onboarding for new clients
          </p>
        </div>
        <div className="flex flex-col justify-between p-6 border rounded-md">
          <MoveUpRight className="w-4 h-4 mb-10 text-primary mx-auto" />
          <h2 className="text-4xl font-semibold tracking-tighter">+10 hrs</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Saved per user weekly
          </p>
        </div>
      </div>
    </div>
  </section>
);
