import { useState } from "react";

import axios from "axios";

const Scanner = () => {

  const [url, setUrl] =
    useState("");

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleScan = async () => {

    try {

      setLoading(true);

      const response =
        await axios.post(
          "http://127.0.0.1:5000/api/detect/scan",
          { url }
        );

      setResult(response.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Scan Failed");

    }
  };

  return (

    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-4xl bg-[#111827] rounded-3xl p-10 border border-cyan-500/10">

        <h1 className="text-5xl font-bold text-center mb-10">
          AI URL Phishing Detector
        </h1>

        {/* INPUT */}

        <div className="flex gap-4 mb-8">

          <input
            type="text"
            placeholder="Enter suspicious URL..."
            className="flex-1 p-4 rounded-2xl bg-[#1F2937] outline-none"
            value={url}
            onChange={(e) =>
              setUrl(e.target.value)
            }
          />

          <button
            onClick={handleScan}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-2xl font-bold"
          >

            Scan

          </button>

        </div>

        {/* LOADING */}

        {loading && (

          <div className="text-center text-cyan-400 text-xl">
            Scanning Threat...
          </div>

        )}

        {/* RESULTS */}

        {result && (

          <div className="mt-10 space-y-6">

            <div className="bg-[#1F2937] p-6 rounded-2xl">

              <h2 className="text-3xl font-bold mb-4">
                Scan Results
              </h2>

              <p className="text-lg mb-2">
                <span className="font-bold">
                  URL:
                </span>{" "}
                {result.url}
              </p>

              <p className="text-lg mb-2">
                <span className="font-bold">
                  Risk Level:
                </span>{" "}

                <span
                  className={
                    result.riskLevel === "High"
                      ? "text-red-400"
                      : result.riskLevel ===
                        "Medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }
                >

                  {result.riskLevel}

                </span>

              </p>

              <p className="text-lg">
                <span className="font-bold">
                  Phishing Score:
                </span>{" "}
                {result.phishingScore}
              </p>

            </div>

            {/* WARNINGS */}

            <div className="bg-[#1F2937] p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-4">
                Threat Warnings
              </h2>

              <ul className="space-y-3">

                {result.warnings.map(
                  (warning, index) => (

                    <li
                      key={index}
                      className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl"
                    >

                      {warning}

                    </li>

                  )
                )}

              </ul>

            </div>

          </div>

        )}

      </div>

    </div>

  );
};

export default Scanner;