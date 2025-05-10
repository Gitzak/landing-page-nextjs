"use client";

import { CalendarIcon, Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Contact = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section id="contact" className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Badge>Contact</Badge>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-semibold">
                  Let's talk about your project
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Book a quick call to explore how Moroccan Saas Ai can help you
                  launch, automate, or scale your SaaS platform.
                </p>
              </div>
            </div>

            {[
              {
                title: "No-code, no hassle",
                desc: "You don’t need to code to get started.",
              },
              {
                title: "Built for Moroccan teams",
                desc: "Supports Arabic, French, and English by default.",
              },
              {
                title: "AI-first approach",
                desc: "Automation and analytics built into every workflow.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-row gap-6 items-start text-left"
              >
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="justify-center flex items-center">
            <div className="rounded-md w-full max-w-sm border p-8 gap-4 flex flex-col">
              <p className="text-lg font-medium">Book a meeting</p>

              {/* Date */}
              <div className="grid gap-1">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* First name */}
              <div className="grid gap-1">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="Your first name"
                />
              </div>

              {/* Last name */}
              <div className="grid gap-1">
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" type="text" placeholder="Your last name" />
              </div>

              {/* File (optional resume/demo brief upload) */}
              <div className="grid gap-1">
                <Label htmlFor="brief">Attach a document (optional)</Label>
                <Input id="brief" type="file" />
              </div>

              <Button className="gap-2 w-full">
                Book the meeting <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
