import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Fleet" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                <path d="M20 4L4 20L20 36L36 20L20 4Z" className="stroke-blue-500 fill-blue-500/10" strokeWidth="2"/>
                <path d="M12 20H28M20 12V28" className="stroke-blue-500" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="20" r="4" className="fill-blue-500"/>
              </svg> */}
              {/* Replace the SVG logo with an IMG tag for custom logo */}
              <img 
               src="/assets/logo.png"
               alt="SkyLuxe Logo"
               className="relative w-120 h-16 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
               />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href}>
                    <a
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        location === item.href && "bg-accent"
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Add click handler
                  >
                    <a
                      className={cn(
                        "block px-2 py-1 text-lg font-medium hover:text-primary text-slate-50",
                        location === item.href && "text-primary"
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}