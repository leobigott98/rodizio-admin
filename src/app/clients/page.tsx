"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Layout from "@/src/components/Layout";

type Client = {
  name: string;
  email: string;
  phone: string;
  orders: number;
  avatar: string;
  lifetimeValue: number;
  avgOrderValue: number;
  orderFrequency: number; // percentage
  history: { id: string; amount: string }[];
};

const clients: Client[] = [
  {
    name: "Pedro Pérez",
    email: "pedro.perez@email.com",
    phone: "234-111-0001",
    orders: 15,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRg6z2xwAteTLQFGQob8N27b3cLWk8LDCPiXmpvnUuVzROAf20qg-hNwrH6F9ER7FauHE89NULDc1tvjQdAUQV-xk8Ae7wbMwwYJM6554JMtiQmS2z1RVVnMTW4LXfwU6JacgvF6Ek9jdFiYe4XXdihUIKPX6eRpaVuRGxzAY5oG_KkQ5Wi9U-Kda0a0dECKuye3-p3ZVtrBUrb44gHJuntHrxVRw78xvJehc4NM4kV51IUfkblEaXkcoOxv5g47e92HI0oEuVJ-o",
    lifetimeValue: 900,
    avgOrderValue: 60,
    orderFrequency: 65,
    history: [
      { id: "#12345", amount: "$45.50" },
      { id: "#12210", amount: "$62.00" },
      { id: "#12098", amount: "$33.75" },
    ],
  },
  {
    name: "María González",
    email: "maria.gonzalez@email.com",
    phone: "234-567-8901",
    orders: 23,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsGqXYIZ0axit-2zqn3aTUYx-U-HJ-UfpUV_D3HGE21i-Bn0Ae3W8F3DjHpVQHs8SxgQN9eFqWxJSYSKIlkJ3P0BX75i2W6qESS70RkJXmmL_xSwu631_awY4lm8UMup2N9ikh6TQr8G2YTl1SjdHuA0jHhsK4Uw03vVQOA5WD1YeXwtCuWMh1WvzitHCVqJfV5ThyU8l828YqWqbjH1FitCUnpem8d6OxSiw4RW5smjqhykuAwENohRDJ0To8cnOVzQJsravj_cU",
    lifetimeValue: 1234.56,
    avgOrderValue: 53.68,
    orderFrequency: 75,
    history: [
      { id: "#12345", amount: "$45.50" },
      { id: "#12210", amount: "$62.00" },
      { id: "#12098", amount: "$33.75" },
    ],
  },
  {
    name: "Juan Gutiérrez",
    email: "juan.gutierrez@email.com",
    phone: "234-333-4444",
    orders: 8,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoV4e8iBDrOOShXTWdr4qG1kAoAh4jbvaxqqY_FT_yPlyom2JlSeu_7fD5ErykA8mVBdIsC6h2YKDeCQjV6YuxkngglOnWdBCdGZfrg53OuvsJydEPy9jw_9IW9t4ucCdlQkmwpp-SF4qQ7k5duf7acPnxp1iPwmUgXNHaVhQoFQ9uNBVvv7zAKMuluEXu4DhKdLLQQuACEH1HfB9mswziV93UT9IsmRSsR-nJhNGdsX1snK628sRY6tmDrNnRkI8DmAnM19qe_8",
    lifetimeValue: 640,
    avgOrderValue: 80,
    orderFrequency: 40,
    history: [
      { id: "#11890", amount: "$42.00" },
      { id: "#11756", amount: "$52.00" },
    ],
  },
  {
    name: "José Jiménez",
    email: "jose.jimenez@email.com",
    phone: "234-222-7890",
    orders: 31,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp6qdnrq-8LixPqS_ceaz-UFSd-7QyLvybwjB357Pg-fmoUCZO8C06x9wXrl-kFV9csFzsKiNtK7PXnusEGeuBrbDdM2_ELK5VmU9q8XKj76PWdIiSJmBLGCe9RBwcGqvMqMtns59rGZOkeXQVLzbylvvs_IKgsglJu8EiTabLZz2ycOzt3bsFfyDRbisGCXqbhT8emlmzqA5VMck8GakoI_peRtW1yvFGvTtHrGbkXsphsPGIEH6AbxvFn-PkS6yjI50Sa_kPxHg",
    lifetimeValue: 1980,
    avgOrderValue: 63,
    orderFrequency: 90,
    history: [
      { id: "#12678", amount: "$80.00" },
      { id: "#12432", amount: "$60.00" },
    ],
  },
];

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<Client>(clients[1]);
  const [query, setQuery] = useState("");

  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
        {/* LEFT SECTION — List */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-black tracking-tight text-text-light dark:text-text-dark">
                Clientes
              </h1>
              <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                Administra la base de clientes de tu restaurante
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="mb-4">
            <div className="flex items-stretch rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="flex items-center justify-center pl-4 bg-component-light dark:bg-component-dark text-text-secondary-light dark:text-text-secondary-dark">
                <Search className="size-5" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre o informaciónn de contacto"
                className="flex-1 px-4 py-2 bg-component-light dark:bg-component-dark text-text-light dark:text-text-dark focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-component-light dark:bg-component-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-text-light dark:text-text-dark">
                    Nombre del Cliente
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-text-light dark:text-text-dark">
                    Información de Contacto
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-text-light dark:text-text-dark">
                    Total de Órdenes
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredClients.map((client) => (
                  <tr
                    key={client.name}
                    onClick={() => setSelectedClient(client)}
                    className={`cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                      selectedClient.name === client.name
                        ? "bg-primary/5 dark:bg-primary/10"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                       {/*  <div
                          className="bg-center bg-cover rounded-full size-8"
                          style={{ backgroundImage: `url(${client.avatar})` }}
                        /> */}
                        <span className="text-sm font-medium">
                          {client.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {client.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {client.orders}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary/80">
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT SECTION — Details */}
        <div className="lg:col-span-1 bg-component-light dark:bg-component-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 self-start flex flex-col">
          {/* Client Info */}
          <div className="flex flex-col items-center text-center">
            {/* <div
              className="bg-center bg-cover rounded-full w-32 h-32 mb-4"
              style={{ backgroundImage: `url(${selectedClient.avatar})` }}
            /> */}
            <p className="text-xl font-bold text-text-light dark:text-text-dark">
              {selectedClient.name}
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {selectedClient.email}
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {selectedClient.phone}
            </p>
            <div className="flex gap-3 mt-6 w-full">
              <button className="flex-1 py-2 px-4 rounded-lg bg-slate-200/60 dark:bg-slate-700/60 text-text-light dark:text-text-dark text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700">
                Editar
              </button>
              <button className="flex-1 py-2 px-4 rounded-lg bg-red-500/10 text-red-500 text-sm font-semibold hover:bg-red-500/20">
                Borrar
              </button>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 my-6" />

          {/* Analytics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Analíticas del Cliente</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Lifetime Value
                </span>
                <span className="text-sm font-bold">
                  ${selectedClient.lifetimeValue.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Valor Promedio por Orden
                </span>
                <span className="text-sm font-bold">
                  ${selectedClient.avgOrderValue.toFixed(2)}
                </span>
              </div>
              <div>
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-2 block">
                  Frecuencia de Órdenes
                </span>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${selectedClient.orderFrequency}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 my-6" />

          {/* Purchase History */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Historial de Compras</h3>
            <ul className="space-y-3">
              {selectedClient.history.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Orden {order.id}
                  </span>
                  <span className="text-text-light dark:text-text-dark">
                    {order.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
  );
}
