import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Pricing = () => (
  <section id="pricing" className="w-full py-20 px-3 bg-background scroll-mt-28">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-semibold">
            Transparent pricing. No surprises.
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Whether you're just starting out or scaling fast, Moroccan Saas Ai
            offers plans designed for every stage.
          </p>
        </div>

        <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
          {/* Startup Plan */}
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-medium">
                  Startup
                </span>
              </CardTitle>
              <CardDescription>
                Ideal for solo founders or early-stage businesses getting
                started with automation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">Free</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / forever
                  </span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Basic AI workflow automations",
                    "Up to 3 team members",
                    "Email support",
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Check className="w-4 h-4 mt-1 text-primary" />
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="gap-2">
                  Start free <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Growth Plan */}
          <Card className="w-full shadow-2xl shadow-green-200 rounded-md border-2">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-medium">
                  Growth
                </span>
              </CardTitle>
              <CardDescription>
                Designed for growing businesses that need more power and
                control.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">$49</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / month
                  </span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Unlimited automations",
                    "Advanced analytics dashboard",
                    "Team access (up to 10)",
                    "Priority support",
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Check className="w-4 h-4 mt-1 text-primary" />
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button className="gap-2">
                  Upgrade now <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle>
                <span className="flex flex-row gap-4 items-center font-medium">
                  Enterprise
                </span>
              </CardTitle>
              <CardDescription>
                Custom solutions and onboarding for larger teams and high-volume
                ops.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                <p className="flex flex-row items-center gap-2 text-xl">
                  <span className="text-4xl">Custom</span>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    / tailored quote
                  </span>
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Dedicated AI advisor",
                    "Unlimited users & integrations",
                    "Private onboarding & SLA",
                    "24/7 premium support",
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <Check className="w-4 h-4 mt-1 text-primary" />
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="gap-2">
                  Book a meeting <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
