"use client";

import { Plus, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/src/components/Layout";

type Order = {
  id: string;
  client: string;
  amount: string;
  date: string;
  status: "Entregado" | "Preparando" | "Pendiente" | "Cancelado";
};

const orders: Order[] = [
  { id: "#12345", client: "Pedro Pérez", amount: "$25.50", date: "2023-10-27", status: "Entregado" },
  { id: "#12346", client: "María González", amount: "$42.00", date: "2023-10-27", status: "Preparando" },
  { id: "#12347", client: "Juan Gutiérrez", amount: "$15.75", date: "2023-10-26", status: "Pendiente" },
  { id: "#12348", client: "José Jiménez", amount: "$30.00", date: "2023-10-26", status: "Cancelado" },
];

const statusColors: Record<Order["status"], string> = {
  Entregado: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Preparando: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Pendiente: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Cancelado: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(orders[1]);

  return (
    <Layout>
    {/* Left Section - Orders Table */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 mb-6">
            <h1 className="text-4xl font-black tracking-tight">Órdenes de Delivery</h1>
            <button className="bg-primary text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors">
              <Plus className="size-5" /> Nueva Orden
            </button>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["Filtrar por Fecha", "Estatus del Pago", "Estatus de la Orden"].map((label) => (
              <button
                key={label}
                className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#1C242E] border border-gray-200 dark:border-gray-700 px-4 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <p className="text-sm font-medium">{label}</p>
                <ChevronDown className="text-gray-500 size-4" />
              </button>
            ))}
          </div>

          {/* Orders Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1C242E]/70 shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-[#1C242E]">
                <tr>
                  {["ID de Orden", "Nombre de Cliente", "Monto", "Fecha", "Estatus", ""].map((head) => (
                    <th
                      key={head}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                      selectedOrder?.id === order.id
                        ? "bg-primary/10 dark:bg-primary/20"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {order.client}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {order.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {order.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary/80">
                        Ver Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section - Order Details */}
        <div className="bg-white dark:bg-[#1C242E]/70 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-6">
          <h2 className="text-lg font-bold">Detalle de la Orden</h2>

          {selectedOrder ? (
            <>
              {/* Client Details */}
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-semibold mb-2">Detalle del Cliente</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selectedOrder.client}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">+58 (412) 123-4567</p>
              </div>

              {/* Order Summary */}
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-semibold mb-2">Resumen de la Orden</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Monto:</span>
                  <span className="font-medium">{selectedOrder.amount}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600 dark:text-gray-300">Fecha:</span>
                  <span className="font-medium">{selectedOrder.date}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-semibold mb-2">Artículos de la Orden</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">1x Spaghetti Carbonara</span>
                    <span className="font-medium">$18.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">1x Tiramisu</span>
                    <span className="font-medium">$8.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">2x San Pellegrino</span>
                    <span className="font-medium">$6.00</span>
                  </li>
                </ul>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Nota: Sin cebolla en la pasta.
                  </p>
                </div>
              </div>

              {/* Payment Info */}
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-semibold mb-2">Información del Pago</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Método:</span>
                  <span>Tarjeta de Crédito</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600 dark:text-gray-300">Estatus:</span>
                  <span className="font-medium text-green-600">Pagado</span>
                </div>
              </div>

              {/* Order Status */}
              <div className="mt-auto">
                <h3 className="font-semibold mb-2">Estatus de la Orden</h3>
                <select className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-[#1C242E] dark:text-white focus:border-primary focus:ring-primary">
                  <option>Pendiente</option>
                  <option>Preparando</option>
                  <option>Entregada</option>
                  <option>Cancelada</option>
                </select>
                <button className="w-full mt-4 bg-primary text-white font-medium py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Actualizar Estatus
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Selecciona una Orden para Ver Detalles</p>
          )}
        </div>
      </Layout>
  );
}
