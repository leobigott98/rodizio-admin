"use client";

import Sidebar from "@/src/components/Sidebar";
import { useState } from "react";
import { Moon, Sun, Bell, Globe, Lock, Trash2, Palette } from "lucide-react";

export default function SettingsPage() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });
  const [accent, setAccent] = useState("#177ccf");
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("America/New_York");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleAccentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccent(e.target.value);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-64 p-8 bg-background-light dark:bg-background-dark text-[#0e151b] dark:text-slate-50 overflow-y-auto">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <header>
            <h1 className="text-4xl font-black mb-2">Settings</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Manage general, appearance, and system preferences.
            </p>
          </header>

          {/* GENERAL SETTINGS */}
          <section className="bg-white dark:bg-[#1C242E] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-4">General</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121a21] p-2"
                  defaultValue="The Gourmet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121a21] p-2"
                  defaultValue="admin@restaurant.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121a21] p-2"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121a21] p-2"
                  defaultValue="123 Main Street, Miami, FL"
                />
              </div>
            </div>
          </section>

          {/* APPEARANCE SETTINGS */}
          <section className="bg-white dark:bg-[#1C242E] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Palette className="size-5" />
              Appearance
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-sm font-medium mb-2">Theme</p>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 bg-primary/10 text-primary dark:bg-primary/20 px-4 py-2 rounded-lg hover:bg-primary/15 dark:hover:bg-primary/30"
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="size-4" /> Switch to Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="size-4" /> Switch to Light Mode
                    </>
                  )}
                </button>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Accent Color</p>
                <input
                  type="color"
                  value={accent}
                  onChange={handleAccentChange}
                  className="w-16 h-10 rounded-lg border border-slate-300 dark:border-slate-600 cursor-pointer"
                />
              </div>
            </div>
          </section>

          {/* NOTIFICATIONS */}
          <section className="bg-white dark:bg-[#1C242E] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Bell className="size-5" />
              Notifications
            </h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) =>
                    setNotifications({ ...notifications, email: e.target.checked })
                  }
                  className="size-4 accent-primary"
                />
                <span>Email Notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={(e) =>
                    setNotifications({ ...notifications, sms: e.target.checked })
                  }
                  className="size-4 accent-primary"
                />
                <span>SMS Notifications</span>
              </label>
            </div>
          </section>

          {/* SYSTEM SETTINGS */}
          <section className="bg-white dark:bg-[#1C242E] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Globe className="size-5" />
              System
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121a21] p-2"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Timezone</label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121a21] p-2"
                >
                  <option value="America/New_York">America/New_York (EST)</option>
                  <option value="America/Caracas">America/Caracas (VET)</option>
                  <option value="America/Los_Angeles">America/Los_Angeles (PST)</option>
                  <option value="Europe/London">Europe/London (GMT)</option>
                </select>
              </div>
            </div>
          </section>

          {/* ACCOUNT SETTINGS */}
          <section className="bg-white dark:bg-[#1C242E] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Lock className="size-5" />
              Account
            </h2>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                <Lock className="size-4" /> Change Password
              </button>
              <button className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/20 transition">
                <Trash2 className="size-4" /> Delete Account
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
