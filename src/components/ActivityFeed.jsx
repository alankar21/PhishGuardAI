const ActivityFeed = () => {
  return (
    <div className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/10">

      <h2 className="text-2xl font-bold mb-8">
        Activity Feed
      </h2>

      <div className="space-y-6">

        <div>
          <p className="text-cyan-400">
            Threat blocked
          </p>

          <span className="text-gray-400 text-sm">
            2 minutes ago
          </span>
        </div>

        <div>
          <p className="text-green-400">
            Secure login detected
          </p>

          <span className="text-gray-400 text-sm">
            15 minutes ago
          </span>
        </div>

        <div>
          <p className="text-red-400">
            Suspicious domain detected
          </p>

          <span className="text-gray-400 text-sm">
            1 hour ago
          </span>
        </div>

      </div>

    </div>
  );
};

export default ActivityFeed;