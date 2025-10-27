"use client";

import Sidebar from "@/src/components/Sidebar";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";
import Layout from "@/src/components/Layout";

type TimeBlock = {
  time: string;
  reserved: number;
  capacity: number;
  walkIns: number;
  remaining: number;
  progress: number;
};

type Guest = {
  name: string;
  guests: number;
  status: "Confirmed" | "Pending" | "Cancelled";
};

const timeBlocks: TimeBlock[] = [
  { time: "12:00 PM - 2:00 PM", reserved: 150, capacity: 250, walkIns: 75, remaining: 25, progress: 60 },
  { time: "2:00 PM - 4:00 PM", reserved: 100, capacity: 250, walkIns: 75, remaining: 75, progress: 40 },
  { time: "4:00 PM - 6:00 PM", reserved: 50, capacity: 250, walkIns: 75, remaining: 125, progress: 20 },
  { time: "8:00 PM - 10:00 PM", reserved: 20, capacity: 250, walkIns: 75, remaining: 155, progress: 8 },
  { time: "10:00 PM - 12:00 AM", reserved: 0, capacity: 250, walkIns: 75, remaining: 175, progress: 0 },
];

const guestList: Guest[] = [
  { name: "Alex Johnson", guests: 4, status: "Confirmed" },
  { name: "Maria Garcia", guests: 2, status: "Pending" },
  { name: "David Smith", guests: 6, status: "Confirmed" },
  { name: "Emily White", guests: 3, status: "Cancelled" },
];

export default function ReservationsPage() {
  const [selectedBlock, setSelectedBlock] = useState<TimeBlock | null>(
    timeBlocks[3]
  );

  const getStatusBadge = (status: Guest["status"]) => {
    const styles = {
      Confirmed:
        "text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-200",
      Pending:
        "text-orange-800 bg-orange-100 dark:bg-orange-900 dark:text-orange-200",
      Cancelled:
        "text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-200",
    };
    return styles[status];
  };

  return (
   <Layout>
    {/* LEFT SIDE — Overview */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-3xl font-black leading-tight tracking-[-0.033em]">
                Reservations
              </p>
              <p className="text-base text-slate-500 dark:text-slate-400">
                Tuesday, 23 October 2024
              </p>
            </div>
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-[#1C242E] text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              Today
            </button>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center gap-2 bg-white dark:bg-[#1C242E] p-3 rounded-lg border border-slate-200 dark:border-slate-800">
            <div className="flex gap-2">
              <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <ChevronLeft className="size-5" />
              </button>
              <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <ChevronRight className="size-5" />
              </button>
            </div>
            <button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold px-4 hover:bg-primary/90">
              <Plus className="size-4" />
              Add Reservation
            </button>
          </div>

          {/* Reservation / Walk-in progress */}
          <div className="bg-white dark:bg-[#1C242E] p-4 rounded-lg border border-slate-200 dark:border-slate-800">
            <p className="text-base font-medium mb-2">
              Reservation / Walk-in Allocation
            </p>
            <div className="relative h-3 rounded-full bg-primary/20 dark:bg-primary/30 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: "70%" }}
              />
            </div>
            <div className="flex justify-between text-sm mt-2 text-slate-600 dark:text-slate-400">
              <p>70% Reserved</p>
              <p>30% Walk-ins</p>
            </div>
          </div>

          {/* Time blocks grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {timeBlocks.map((block) => (
              <div
                key={block.time}
                onClick={() => setSelectedBlock(block)}
                className={`flex flex-col gap-4 p-4 bg-white dark:bg-[#1C242E] rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer transition ${
                  selectedBlock?.time === block.time
                    ? "ring-2 ring-primary"
                    : "hover:shadow-md"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">{block.time}</p>
                  <button className="text-slate-500 dark:text-slate-400 hover:text-primary">
                    View Details
                  </button>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${block.progress}%` }}
                  />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Reserved: {block.reserved} / {block.capacity}, Walk-ins (est.):
                  {` ${block.walkIns}, Remaining: ${block.remaining}`}
                </p>
              </div>
            ))}

            {/* Add new block */}
            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-white dark:bg-[#1C242E] rounded-lg border border-dashed border-slate-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition">
              <Plus className="size-10 text-slate-400 dark:text-slate-500" />
              <p className="text-slate-500 dark:text-slate-400">
                Add New Time Block
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Details panel */}
        <div className="lg:col-span-1 flex flex-col gap-6 sticky top-8">
          <div className="bg-white dark:bg-[#1C242E] p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">
                {selectedBlock?.time || "Select a Block"}
              </h2>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 size-4" />
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1C242E]/70 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Guest list */}
              <div className="flex flex-col gap-4">
                {guestList.map((guest) => (
                  <div
                    key={guest.name}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-[#1C242E]/70"
                  >
                    <div className="flex-1 flex flex-col gap-1">
                      <p className="font-semibold">{guest.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {guest.guests} Guests
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
                        guest.status
                      )}`}
                    >
                      {guest.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <button className="flex-1 flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90">
                Manage
              </button>
              <button className="flex-1 flex items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-[#1C242E] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700">
                View Full List
              </button>
            </div>
          </div>
        </div>
      </Layout>
  );
}
