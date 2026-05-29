import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", threats: 20 },
  { day: "Tue", threats: 35 },
  { day: "Wed", threats: 50 },
  { day: "Thu", threats: 40 },
  { day: "Fri", threats: 70 },
  { day: "Sat", threats: 55 },
];

const ThreatChart = () => {
  return (
    <div className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/10">

      <h2 className="text-2xl font-bold mb-8">
        Threat Activity
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <XAxis dataKey="day" stroke="#9CA3AF" />

          <YAxis stroke="#9CA3AF" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="threats"
            stroke="#22d3ee"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};

export default ThreatChart;