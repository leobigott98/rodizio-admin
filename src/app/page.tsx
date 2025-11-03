"use client";

import Sidebar from "@/src/components/Sidebar";
import {
  Search,
  CalendarDays,
  ChevronDown,
  TrendingUp,
  Bot,
} from "lucide-react";
import { RevenueChart } from "../components/RevenueChart";
import Layout from "../components/Layout";

export default function Page() {
  const summaryCards = [
    { label: "Total de Órdenes", value: "1,234" },
    { label: "Total de Clientes", value: "567" },
    { label: "Ganancia Total", value: "$12,345" },
    { label: "Monto Promedio", value: "$21.75" },
  ];

  const orders = [
    {
      id: "#12345",
      name: "Pedro Pérez",
      type: "Delivery",
      amount: "$25.50",
      status: "Entregado",
      color: "green",
    },
    {
      id: "#12344",
      name: "María González",
      type: "En sitio",
      amount: "$42.00",
      status: "Completado",
      color: "green",
    },
    {
      id: "#12343",
      name: "Miguel Ramírez",
      type: "Delivery",
      amount: "$15.75",
      status: "En Proceso",
      color: "yellow",
    },
    {
      id: "#12342",
      name: "Emily Echeverría",
      type: "Delivery",
      amount: "$33.20",
      status: "Cancelado",
      color: "red",
    },
    {
      id: "#12341",
      name: "Christian Rodríguez",
      type: "En sitio",
      amount: "$55.00",
      status: "Completado",
      color: "green",
    },
  ];

  const reservations = [
    { time: "11:00 AM", percent: 30, color: "green" },
    { time: "12:00 PM", percent: 65, color: "yellow" },
    { time: "01:00 PM", percent: 95, color: "red" },
    { time: "06:00 PM", percent: 100, color: "red" },
  ];

  return (
    <Layout>
    <div className="relative flex min-h-screen w-full font-display">
          {/* Main content */}
          <main className="flex-1 p-8 overflow-y-auto">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
              <p className="text-[#0e151b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                Dashboard
              </p>

              <div className="flex items-center gap-4">
                {/* Search bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1C242E] text-sm text-[#0e151b] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                    
                  />
                </div>

                {/* Date range selector */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1C242E]">
                  <CalendarDays
                    className="text-gray-500 dark:text-gray-400"
                    size={18}
                  />
                  <span className="text-[#0e151b] dark:text-white text-sm">
                    Oct 1, 2025 - Oct 31, 2025
                  </span>
                  <ChevronDown
                    className="text-gray-500 dark:text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {summaryCards.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1C242E] shadow-sm"
                >
                  <p className="text-[#4e7697] dark:text-gray-400 text-base font-medium leading-normal">
                    {label}
                  </p>
                  <p className="text-[#0e151b] dark:text-white tracking-tight text-3xl font-bold leading-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Main analytics section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Revenue trends */}
              <div className="lg:col-span-2 flex flex-col gap-2 rounded-xl bg-white dark:bg-[#1C242E] p-6 shadow-sm">
                <p className="text-[#0e151b] dark:text-white text-base font-medium leading-normal">
                  Tendencias de Ganancias
                </p>

                <div className="flex gap-1 items-baseline">
                  <p className="text-[#0e151b] dark:text-white text-[32px] font-bold leading-tight truncate">
                    $8,900
                  </p>
                  <p className="text-[#078838] text-base font-medium leading-normal">
                    +5.2%
                  </p>
                  <TrendingUp className="ml-2 text-[#078838]" size={18} />
                </div>

                <p className="text-[#4e7697] dark:text-gray-400 text-sm font-normal leading-normal">
                  vs últimos 7 días
                </p>

                {/* SVG Chart */}
                <RevenueChart />
              </div>

              {/* Last 5 Orders */}
              <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1C242E] p-6 shadow-sm">
                <h3 className="text-[#0e151b] dark:text-white text-lg font-semibold leading-tight">
                  Órdenes Recientes
                </h3>

                <div className="flex flex-col gap-4">
                  {orders.map(({ id, name, type, amount, status, color }) => (
                    <div
                      key={id}
                      className="flex items-center justify-between p-3 rounded-lg bg-(--background)"
                    >
                      <div className="flex flex-col">
                        <p className="text-[#0e151b] dark:text-white text-sm font-medium">
                          {id} - {name}
                        </p>
                        <p className="text-xs text-[#4e7697] dark:text-gray-400">
                          {type}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-sm font-semibold text-[#0e151b] dark:text-white">
                          {amount}
                        </p>
                        <span
                          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-${color}-100 text-${color}-700 dark:bg-${color}-900 dark:text-${color}-300`}
                        >
                          {status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reservation Occupancy + Order Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-[#1C242E] rounded-xl shadow-sm p-6">
                <h2 className="text-[#0e151b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                  Ocupación de Reservaciones de Hoy
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {reservations.map(({ time, percent, color }) => (
                    <div
                      key={time}
                      className="flex flex-col gap-2 items-center p-3 rounded-lg bg-(--background)"
                    >
                      <span className="text-sm text-[#4e7697] dark:text-gray-400">
                        {time}
                      </span>
                      <div
                        className={`w-full h-24 bg-${color}-100 dark:bg-${color}-900/50 rounded-lg flex items-end`}
                      >
                        <div
                          className={`bg-${color}-400 dark:bg-${color}-500 w-full rounded-lg`}
                          style={{ height: `${percent}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-[#0e151b] dark:text-white">
                        {percent}% Lleno
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Breakdown Chart */}
              <div className="bg-white dark:bg-[#1C242E] rounded-xl shadow-sm p-6">
                <h2 className="text-[#0e151b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                  Desglose de Pedidos
                </h2>

                <div className="flex items-center justify-center flex-grow h-full">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="4"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                        fill="none"
                        stroke="#34d399"
                        strokeDasharray="65, 100"
                        strokeWidth="4"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-[#0e151b] dark:text-white">
                        65%
                      </span>
                      <span className="text-sm text-[#4e7697] dark:text-gray-400">
                        Delivery
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-around mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#34d399]" />
                    <span className="text-sm text-[#0e151b] dark:text-white">
                      Delivery
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#60a5fa]" />
                    <span className="text-sm text-[#0e151b] dark:text-white">
                      En sitio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI assistant button */}
            {/* <div className="fixed bottom-8 right-8">
          <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
            <Bot size={32} />
          </button>
        </div> */}
          </main>
        </div>
      </Layout> 
  );
}
