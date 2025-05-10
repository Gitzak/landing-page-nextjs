"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const navigationItems = [
    { title: "Features", href: "#features" },
    { title: "Use Cases", href: "#use-cases" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contact", href: "#contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  // Theme switching
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full z-40 fixed top-0 left-0 border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center p-4">
        {/* Left nav */}
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>
                      <Button variant="ghost" className="text-sm font-medium">
                        {item.title}
                      </Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Brand center */}
        <div className="flex lg:justify-center">
          <p className="font-semibold text-2xl">Moroccan Saas Ai</p>
        </div>

        {/* Right actions */}
        <div className="flex justify-end w-full gap-2 items-center">
          {/* Theme toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          )}

          <Link href="/login">
            <Button variant="ghost" className="text-sm hidden md:inline">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="text-sm">Start free trial</Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 p-5 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-6">
              {navigationItems.map((item) => (
                <Link key={item.title} href={item.href} className="text-lg">
                  {item.title}
                </Link>
              ))}
              <Link href="/login" className="text-muted-foreground text-sm">
                Sign in
              </Link>
              <Link href="/signup">
                <Button className="w-full mt-2">Start free trial</Button>
              </Link>

              {/* Dark/light mode toggle in mobile */}
              {mounted && (
                <Button
                  variant="ghost"
                  className="w-full justify-center gap-2"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="w-4 h-4" /> Dark mode
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4" /> Light mode
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
