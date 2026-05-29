import { useState } from "react";

import axios from "axios";

const EmailAnalyzer = () => {

  const [emailText, setEmailText] =
    useState("");

  const [result, setResult] =
    useState(null);

  const analyzeEmail =
    async () => {

      try {

        const response =
          await axios.post(
  "https://phishguardai-y5a0.onrender.com/api/email/analyze",
  data
);
        setResult(response.data);

      } catch (error) {

        console.log(error);

        alert("Analysis Failed");

      }
    };

  return (

    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-4xl bg-[#111827] rounded-3xl p-10">

        <h1 className="text-5xl font-bold text-center mb-10">
          AI Email Analyzer
        </h1>

        <textarea
          rows="8"
          placeholder="Paste suspicious email content..."
          className="w-full p-6 rounded-2xl bg-[#1F2937] outline-none mb-6"
          value={emailText}
          onChange={(e) =>
            setEmailText(e.target.value)
          }
        />

        <button
          onClick={analyzeEmail}
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-bold"
        >

          Analyze Email

        </button>

        {result && (

          <div className="mt-10 space-y-6">

            <div className="bg-[#1F2937] p-6 rounded-2xl">

              <h2 className="text-3xl font-bold mb-4">
                Analysis Report
              </h2>

              <p className="text-xl mb-3">

                Risk Level:
                {" "}

                <span
                  className={
                    result.riskLevel ===
                    "High"
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

              <p className="text-xl">
                Phishing Score:
                {" "}
                {result.phishingScore}
              </p>

            </div>

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

export default EmailAnalyzer;