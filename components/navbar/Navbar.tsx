"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import type { NavigationLink } from "@/types/navigation";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.svg";
import NicklesLogo from "@/public/Nickels Vc greyscale.svg";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const mainLinks: NavigationLink[] = [
    { text: "Home", href: "/" },
    // { text: "Award Categories", href: "#awardcategories" },
    // { text: "Nominees", href: "#nominees" },
    { text: "About Us", href: "/about-us" },
    { text: "Votes", href: "/votes" },
    { text: "Organizers", href: "/organizers" },
    { text: "Sponsors", href: "/sponsors" },
  ];

  const secondaryLinks: NavigationLink[] = [
    {
      text: "Become A Sponsor",
      href: "/sponsors",
      className:
        "bg-[#00000014] inline-flex items-center justify-center rounded-full px-5 py-2 text-xl font-medium text-[#FFFFFF] ring-1 ring-[#FFFFFF] hover:bg-white/10 transition-colors",
    },
  ];

  return (
    <>
      {/* Transparent bar floating over page */}
      <nav className="absolute inset-x-0 top-0 z-40 px-3 py-2 lg:py-4">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
          {/* Left: Logo */}
          <div className="flex flex-1 justify-start">
            <div className="w-[360px] flex items-center gap-1">
              <button
                onClick={() => router.push("/")}
                aria-label="Home"
                className="relative h-10 w-[180px] shrink-0 lg:h-12 lg:w-[110px]"
              >
                <Image
                  src={logo}
                  alt="Techfiesta"
                  fill
                  priority
                  className="object-contain brightness-0 invert"
                />
              </button>

              <span className="text-gray-500 text-xl font-light">×</span>

              <button
                onClick={() => router.push("/")}
                aria-label="Partner"
                className="relative h-10 w-[180px] shrink-0 lg:h-12 lg:w-[210px]"
              >
                <Image
                  src={NicklesLogo}
                  alt="Partner Logo"
                  fill
                  priority
                  className="object-contain invert"
                />
              </button>
            </div>
          </div>
          {/* Center: pill group */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="bg-[#CFD3EB1A] rounded-[100px] text-[#FFFFFFCC] text-base font-normal ring-1 ring-[#FFFFFF]">
              <div className="flex items-center gap-1 rounded-full px-2 py-1">
                {mainLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <NavLink
                      key={link.text}
                      href={link.href}
                      className={cn(
                        "text-[14px] px-5 py-3 rounded-full",
                        active && "bg-white/10"
                      )}
                    >
                      {link.text}
                      {link.text === "Company" && (
                        <ChevronDown
                          size={16}
                          className="ml-1 inline-block align-middle"
                        />
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right: CTA */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-3">
            {secondaryLinks.map((l) => (
              <a key={l.text} href={l.href} className={l.className}>
                {l.text}
              </a>
            ))}
          </div>
          {/* Mobile: menu button */}
          <button
            className="ml-auto text-white/90 lg:hidden"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        mainLinks={mainLinks}
        secondaryLinks={secondaryLinks}
      />
    </>
  );
};

export default Navbar;
