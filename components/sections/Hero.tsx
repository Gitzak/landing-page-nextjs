"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { ChevronDown, MoveRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["faster", "smarter", "easier", "automated", "AI-powered"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full mt-10">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Discover Moroccan Saas Ai <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-blue-600">
                Make your SaaS business
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-5">
              Moroccan Saas Ai helps entrepreneurs launch and grow smarter SaaS
              products. From automating workflows to analyzing growth —
              everything is built for the future, and made in Morocco.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-2" variant="outline">
              Book a demo <Sparkles className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-2">
              Get started free <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {showScrollIndicator && (
          <a href="#trusted-by" className="mt-5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </a>
        )}
      </div>
    </div>
  );
};
