"use client";
import React, { useState } from "react";
import type { NavigationLink } from "@/types/navigation";
import { X, ChevronDown } from "lucide-react";

const MobileNav = ({
  isOpen,
  onClose,
  mainLinks,
  secondaryLinks,
}: {
  isOpen: boolean;
  onClose: () => void;
  mainLinks: NavigationLink[];
  secondaryLinks: NavigationLink[];
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (text: string) => {
    setActiveDropdown(activeDropdown === text ? null : text);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-40 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] sm:w-[60%] transform transition-transform duration-300 ease-out lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full bg-black/30 backdrop-blur-2xl ring-1 ring-white/10">
          {/* Close */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-white hover:text-white/80"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="px-6 py-2">
            <div className="space-y-6">
              {mainLinks.map((link, i) => (
                <div key={`m-${link.text}-${i}`} className="relative">
                  {link.dropdownItems ? (
                    <button
                      onClick={() => toggleDropdown(link.text)}
                      className="w-full text-lg flex items-center justify-between text-white/90 hover:text-white"
                    >
                      {link.text}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === link.text ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block text-lg text-white/90 hover:text-white"
                    >
                      {link.text}
                    </a>
                  )}

                  {link.dropdownItems && activeDropdown === link.text && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.dropdownItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={onClose}
                          className="block text-sm text-white/70 hover:text-white"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="my-6 border-t border-white/10" />

            {/* Secondary / CTA */}
            <div className="space-y-3">
              {secondaryLinks.map((l, i) => (
                <a
                  key={`s-${l.text}-${i}`}
                  href={l.href}
                  target="_blank"
                  className="inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/10 transition-colors"
                  onClick={onClose}
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
