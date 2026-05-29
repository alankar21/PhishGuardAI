import { useEffect, useState }
from "react";

import axios from "axios";

const History = () => {

  const [scans, setScans] =
    useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory =
    async () => {

      try {

        const response =
          await axios.get(
            "http://127.0.0.1:5000/api/history"
          );
   console.log(response.data);
        setScans(response.data);

      } catch (error) {

        console.log(error);

      }
    };

  return (

    <div className="min-h-screen bg-[#0B1120] text-white px-8 py-10">

      <h1 className="text-5xl font-bold mb-10">
        Threat Database
      </h1>

      <div className="space-y-6">

        {scans.map((scan) => (

          <div
            key={scan._id}
            className="bg-[#111827] border border-cyan-500/10 rounded-2xl p-6"
          >

            <div className="flex justify-between mb-4">

              <h2 className="text-2xl font-bold">
                {scan.scanType}
              </h2>

              <span
                className={
                  scan.riskLevel === "High"
                    ? "text-red-400"
                    : scan.riskLevel ===
                      "Medium"
                    ? "text-yellow-400"
                    : "text-green-400"
                }
              >

                {scan.riskLevel}

              </span>

            </div>

            <p className="text-gray-300 mb-3 break-all">

              {scan.inputData}

            </p>

            <p className="mb-3">

              Score:
              {" "}
              {scan.score}

            </p>

            <div className="space-y-2">

              {scan.warnings.map(
                (warning, index) => (

                  <div
                    key={index}
                    className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl"
                  >

                    {warning}

                  </div>

                )
              )}

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default History;