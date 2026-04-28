'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, User, Mail, Cpu, FolderKanban } from "lucide-react";
import Marquee from "./marque";
import Cv from "./cv";
import { useTheme } from "./context";

const links = [
  { name: "About",    href: "/about",   icon: User },
  { name: "Skills",   href: "/skills",  icon: Cpu },
  { name: "Projects", href: "/project", icon: FolderKanban },
  { name: "Contact",  href: "/contact", icon: Mail },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* ── Mobile Top Bar ── */}
      <div className="md:hidden w-full flex justify-between items-center px-4 py-3 bg-[var(--portfolio-bg)] border-b border-[var(--portfolio-surface-soft)] shadow-sm z-30 fixed">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--portfolio-surface)] border border-[var(--portfolio-surface-soft)] text-[var(--portfolio-text)] hover:border-[var(--portfolio-primary-purple)] hover:text-[var(--portfolio-primary-purple)] transition-all duration-200"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <Marquee />
      </div>

      {/* ── Sidebar ── */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-64 z-50
          bg-[var(--portfolio-bg)]
          border-r border-[var(--portfolio-surface-soft)]
          shadow-xl flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >

        {/* ── Profile section ── */}
        <div className="relative flex flex-col items-center px-6 pt-8 pb-6">

          {/* Decorative top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--portfolio-primary-purple)] rounded-t-none" />

          {/* Avatar with ring */}
          <div className="relative mb-4">
            <div className="w-[5.5rem] h-[5.5rem] rounded-2xl border-2 border-[var(--portfolio-primary-purple)] p-0.5 shadow-lg">
              <Image
                src="/profile.jpeg"
                alt="Emmanuel Naomi"
                width={84}
                height={84}
                className="w-full h-full object-cover rounded-xl"
                priority
              />
            </div>
            {/* Online indicator */}
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[var(--portfolio-bg)] rounded-full" />
          </div>

          <h1 className="text-[var(--portfolio-text)] font-bold text-base text-center leading-tight">
            Emmanuel Naomi
          </h1>
          <p className="text-[var(--portfolio-primary-purple)] text-xs font-semibold text-center mt-1 tracking-wide uppercase">
            AI Engineer
          </p>

          {/* Divider */}
          <div className="w-full mt-5 border-t border-[var(--portfolio-surface-soft)]" />
        </div>

        {/* ── Navigation Links ── */}
        <div className="flex flex-col px-4 gap-1.5 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--portfolio-text-muted)] px-3 mb-1">
            Navigation
          </p>

          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-200 group relative overflow-hidden
                  ${isActive
                    ? "bg-[var(--portfolio-primary-purple)] text-white shadow-sm"
                    : "text-[var(--portfolio-text-muted)] hover:bg-[var(--portfolio-surface)] hover:text-[var(--portfolio-text)]"
                  }
                `}
              >
                {/* Active left bar */}
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-0.5 bg-white/50 rounded-full" />
                )}
                <Icon
                  size={16}
                  className={`flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-white" : "text-[var(--portfolio-primary-purple)]"
                  }`}
                />
                {link.name}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── Bottom section ── */}
        <div className="px-4 pb-6 pt-4 space-y-3 border-t border-[var(--portfolio-surface-soft)] mt-4">

          {/* CV Button */}
          <Cv />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium border border-[var(--portfolio-surface-soft)] bg-[var(--portfolio-surface)] text-[var(--portfolio-text-muted)] hover:border-[var(--portfolio-primary-purple)] hover:text-[var(--portfolio-primary-purple)] transition-all duration-200 group"
          >
            {theme === "light" ? (
              <>
                <Moon size={16} className="text-[var(--portfolio-primary-purple)] group-hover:rotate-12 transition-transform duration-300" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun size={16} className="text-[var(--portfolio-primary-purple)] group-hover:rotate-45 transition-transform duration-300" />
                <span>Light Mode</span>
              </>
            )}
            {/* Toggle pill */}
            <span className="ml-auto w-8 h-4 rounded-full bg-[var(--portfolio-primary-purple)]/20 relative flex items-center px-0.5">
              <span
                className={`w-3 h-3 rounded-full bg-[var(--portfolio-primary-purple)] transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Overlay (mobile) ── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
