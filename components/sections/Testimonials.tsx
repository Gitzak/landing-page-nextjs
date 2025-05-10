"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Sara",
      role: "Founder @ DigiSouk",
      quote:
        "Moroccan Saas Ai helped us automate our operations — saving us dozens of hours weekly. It's the smartest move we made.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Youssef",
      role: "CTO @ RabatTech",
      quote:
        "The platform is clean, localized, and very scalable. We onboarded clients 3x faster with the smart workflows.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Hajar",
      role: "Operations Lead @ Marradev",
      quote:
        "Managing our client pipeline used to be a mess. With Moroccan Saas Ai, we finally have clarity and speed.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 px-3">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  className="basis-full sm:basis-3/4 md:basis-2/3 lg:basis-1/3"
                  key={index}
                >
                  <div className="bg-muted rounded-md p-6 min-h-[220px] flex flex-col justify-between">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.quote}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name}</AvatarFallback>
                        </Avatar>
                        <span>
                          {testimonial.name}, {testimonial.role}
                        </span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
