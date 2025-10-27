"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Utensils,
  BookOpen,
  Settings,
  Sun,
  Moon,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: ShoppingCart, label: "Orders", href: "/orders" },
  { icon: Users, label: "Clients", href: "/clients" },
  { icon: Utensils, label: "Menu", href: "/menu" },
  { icon: BookOpen, label: "Reservations", href: "/reservations" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [isOpen, setIsOpen] = useState(false); // responsive toggle

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Determine active link from current pathname
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* ✅ Mobile Header Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 flex items-center justify-center p-2 rounded-md bg-white dark:bg-[#1C242E] shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* ✅ Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-screen w-64 bg-white dark:bg-[#1C242E] shadow-lg transition-transform duration-300 z-40 flex flex-col justify-between p-4",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0" // always visible on large screens
        )}
      >
        <div className="flex flex-col gap-8 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8x35bqTmXBbSb3xFDsLAsjAMYvTzcIAky2_RGC-4uTdPtefwy2R-AZAB2XWxG_Bx6YvgiAcm0udXadseeYYJT_yf9Hf-3AUP9kRANKoXMDjoguv6GOhk362aujwFCv7uQ5sBdmkZ9C9w-tJ8xUc2PSoRcMkcj4BA3wuPVVSBzaBZqgAG208fjz8tX5YG-lk0o7HH4iw-SN34HhqYXMUGBqzz1R7PcizuIbjDnPNsKS6oP5BBL-ExadToHJIErY2Svd72xJTFql_8")',
              }}
            />
            <div>
              <h1 className="text-[#0e151b] dark:text-white text-base font-medium">
                The Gourmet
              </h1>
              <p className="text-[#4e7697] dark:text-gray-400 text-sm">
                Admin Panel
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {menuItems.map(({ icon: Icon, label, href }) => (
              <Link key={label} href={href} onClick={() => setIsOpen(false)}>
                <div
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors",
                    isActive(href)
                      ? "bg-primary/10 dark:bg-primary/20 text-primary font-semibold"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-[#0e151b] dark:text-gray-300"
                  )}
                >
                  <Icon className="size-5" />
                  <p className="text-sm font-medium">{label}</p>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 mt-6">
          {/* 🌓 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center gap-2 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium transition-colors"
          >
            {theme === "light" ? (
              <>
                <Moon className="size-4" /> Dark Mode
              </>
            ) : (
              <>
                <Sun className="size-4" /> Light Mode
              </>
            )}
          </button>

          <button className="w-full h-10 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
            New Order
          </button>

          <div className="flex flex-col gap-1 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <User className="size-5" />
              <p className="text-sm font-medium">Profile</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <LogOut className="size-5 text-red-500" />
              <p className="text-red-500 text-sm font-medium">Logout</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ✅ Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

