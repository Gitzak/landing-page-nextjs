"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const navigationItems = [
    { title: "Product", href: "/#features" },
    { title: "Pricing", href: "/#pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Docs", href: "/docs" },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background border-b">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center p-4">
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
        <div className="flex lg:justify-center">
          <p className="font-semibold text-2xl">Moroccan Saas Ai</p>
        </div>
        <div className="flex justify-end w-full gap-2">
          <Link href="/login">
            <Button variant="ghost" className="text-sm hidden md:inline">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="text-sm">Start free trial</Button>
          </Link>
        </div>
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
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
