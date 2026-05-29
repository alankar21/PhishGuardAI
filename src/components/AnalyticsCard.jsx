const AnalyticsCard = ({
  title,
  value,
  color,
}) => {
  return (
    <div className="bg-[#111827]/70 backdrop-blur-lg p-6 rounded-3xl border border-cyan-500/10">

      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <p className={`text-5xl font-bold mt-4 ${color}`}>
        {value}
      </p>

    </div>
  );
};

export default AnalyticsCard;