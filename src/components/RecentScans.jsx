const scans = [
  {
    url: "paypal-secure-login.xyz",
    status: "High Risk",
  },
  {
    url: "google.com",
    status: "Safe",
  },
  {
    url: "crypto-airdrop.net",
    status: "Medium Risk",
  },
];

const RecentScans = () => {
  return (
    <div className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/10">

      <h2 className="text-2xl font-bold mb-8">
        Recent Scans
      </h2>

      <div className="space-y-5">

        {scans.map((scan, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-700 pb-4"
          >

            <p className="text-gray-300">
              {scan.url}
            </p>

            <span className={`font-bold ${
              scan.status === "High Risk"
                ? "text-red-400"
                : scan.status === "Safe"
                ? "text-green-400"
                : "text-yellow-400"
            }`}>
              {scan.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RecentScans;