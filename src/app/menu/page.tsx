"use client";

import { Search, Plus, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import Layout from "@/src/components/Layout";

type Dish = {
  id: number;
  name: string;
  category: "Entradas" | "Principales" | "Postres" | "Bebidas";
  price: number;
  image: string;
  active: boolean;
};

const dishes: Dish[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    category: "Principales",
    price: 18.5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn7J0-0iwcePzxK4XMXkz0jTJSUdJeEPg9tQ5YC5JzjrhOH5SSwN_EbSzEFOqRoI-ZtTTByNWWppAROzoQZtQZ6e2Bkhoi1DlzMmdjXTZf4cMWcqXU42bykwZtC7ywwW4RXH3JiCAsuGudxw_Bu9ksIjJsVJ892V5VC2ltDoT9Heg1W_X-UO4wZSAN_z5k-jEm9YJU-JAqDMSybR8fLA_FUa3nAxHe_O5M5eeP0KrFNxz0UY6RuVv0KJujsleQLggc2tOKT6G5v-Y",
    active: true,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Principales",
    price: 15.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtts_ZlriAbd0GG5sPvTzo3Y5FfTYZc-P_mEN9qODP2AAxQhRRAF1Ysv1Wfni5BnhHaCFjOLyDj_UgXEVVizCx7DCubYdcyPm7dGYkrmUDp1xBr_STtTa2chVHWCSP7TK6OnpuizPcLp_dnAFmGkps9Lb1J2eZof44jWdkCri1_RaxeSB4ItiPtB6iQFmu7MRPyq7z4ynbM8YraH3gFyBgxfY-DFZDAV-Izfb39BXyhS5NV9c7Ueyepk0V7eYl15E-yRNnm7fXgGU",
    active: true,
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Entradas",
    price: 12.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGlbUkyQtX3d0o44wUjnsg6KGr2D5eABra9RWLd0RX-sMmEMgyUVr4NldEcSccSD-ZMJQ-9pzTRAfoyvWkI4STTzMcNTetj4-9fGWuSYYRzxp33Ur1mnE1CWgVDARP5H6stMS3Gkz8RktJ7aova0Sy4gwBX-gKgzAPPhhYrmH-S89qKkhqNDzd9JvnBrW656Di_ALDypzJvxJGgVLJAIgKHxU1cWTcWoc2q4dTr6h6xama8uY5P2iDBw2ylAGWMpJpdclG9--1MVk",
    active: false,
  },
  {
    id: 4,
    name: "Grilled Salmon",
    category: "Principales",
    price: 22.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-kKVQrmM-M0CiUdYPO8D7C8S_qkdslrdtP30MZOur8lJc1LvvttNvLcQW_bItj2IK9eqKueQEHhDhf86BDi2yeAqcJ89RLsjU_EMR7ar5i8zok7mZDYu4OshG6hd9kMXvj3mkh_-2rHWL_fHY8qI4HVTm7zUF99gO9eNufmp86X09QeDC68T3aShqlItpwASzS6V8DnWjzKmUcak77ZtAbpFhfIcLBO52hZnfY2WGK08srdslGws0QCLM_7kVMnbUk7-vI9TIY2Y",
    active: true,
  },
  {
    id: 5,
    name: "Tiramisu",
    category: "Postres",
    price: 9.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoKjbLWq9ny2N4zFqUrGNIR0RVpDkjZS7OoyuxNDMjrfBx5dky5v1njSEE_jAy1tjd-iY_Oe3vyzxFT6I3GnqOEVDnid5eKdZtWgubzsCSmchHAfX_Xx7Vhr8b0IVcmjuzYYkT4iHEGKvVvUD2n1LYfg6I4tg8EWjc0Wb79DSSd5n0DI0jPVTnnSbP1wPh8e4eU6FadKf80O47BXdU4X9Zr_137Cf_ZzSxkYa9tNSf_UcJwOurvnVLy6WL-GMk6lhAqM_mj0aMk3M",
    active: true,
  },
];

const categories = ["Todos", "Entradas", "Principales", "Postres", "Bebidas"];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredDishes = dishes.filter(
    (d) =>
      (selectedCategory === "Todos" || d.category === selectedCategory) &&
      d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
    {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <p className="text-4xl font-black tracking-tight">Menú</p>
            <p className="text-base text-slate-500 dark:text-slate-400">
              Administra los platos y categorías de tu restaurante
            </p>
          </div>
          <button className="flex items-center gap-2 h-10 px-5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition">
            <Plus className="size-4" />
            Agregar Nuevo Plato
          </button>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="flex items-stretch rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="flex items-center justify-center pl-4 bg-white dark:bg-[#1C242E] text-slate-500 dark:text-slate-400">
                <Search className="size-5" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre..."
                className="flex-1 px-4 py-2 bg-white dark:bg-[#1C242E] text-text-light dark:text-text-dark focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                  selectedCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white dark:bg-[#1C242E] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white dark:bg-[#1C242E] rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="relative mb-4">
                <div
                  className="w-full aspect-video bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${dish.image})` }}
                />
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="p-2 bg-white/80 dark:bg-black/60 rounded-full shadow">
                    <Edit2 className="size-4 text-slate-800 dark:text-slate-200" />
                  </button>
                  <button className="p-2 bg-white/80 dark:bg-black/60 rounded-full shadow">
                    <Trash2 className="size-4 text-red-500" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-bold">{dish.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {dish.category}
                  </p>
                  <p className="text-primary text-lg font-semibold mt-1">
                    ${dish.price.toFixed(2)}
                  </p>
                </div>

                {/* Toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dish.active}
                    onChange={() =>
                      console.log("toggle", dish.name, !dish.active)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-12 h-7 bg-slate-300 dark:bg-slate-700 peer-checked:bg-primary rounded-full after:content-[''] after:absolute after:left-1 after:top-1 after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>
            </div>
          ))}
        </div>
      </Layout>
  );
}
