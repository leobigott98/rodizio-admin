import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", revenue: 8200 },
  { day: "Tue", revenue: 7500 },
  { day: "Wed", revenue: 9100 },
  { day: "Thu", revenue: 8800 },
  { day: "Fri", revenue: 9400 },
  { day: "Sat", revenue: 12000 },
  { day: "Sun", revenue: 10500 },
];

export function RevenueChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#177ccf" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#177ccf" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={{ fill: "#4e7697" }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#177ccf"
            fillOpacity={1}
            fill="url(#colorPrimary)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
