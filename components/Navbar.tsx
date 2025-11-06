"use client";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/20 border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Leaf className="text-primary" /> ARCAT
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Link className="px-3 py-1 rounded hover:underline" href="/features">{t("features")}</Link>
          <Link className="px-3 py-1 rounded hover:underline" href="/architecture">{t("architecture")}</Link>
          <Link className="px-3 py-1 rounded hover:underline" href="/dashboard">{t("dashboard")}</Link>
          <Link className="px-3 py-1 rounded hover:underline" href="/admin">{t("admin")}</Link>
          <LanguageSwitcher />
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}

