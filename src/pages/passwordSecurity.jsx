import { useState } from "react";

import axios from "axios";

const PasswordSecurity = () => {

  const [password, setPassword] =
    useState("");

  const [result, setResult] =
    useState(null);

  const analyzePassword =
    async () => {

      try {

        const response =
         await axios.post(
  "https://phishguardai-y5a0.onrender.com/api/password/analyze",
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

      <div className="w-full max-w-3xl bg-[#111827] rounded-3xl p-10 border border-cyan-500/10">

        <h1 className="text-5xl font-bold text-center mb-10">
          Password Security Analyzer
        </h1>

        {/* INPUT */}

        <div className="flex gap-4 mb-8">

          <input
            type="password"
            placeholder="Enter Password"
            className="flex-1 p-4 rounded-2xl bg-[#1F2937] outline-none"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={analyzePassword}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-2xl font-bold"
          >

            Analyze

          </button>

        </div>

        {/* RESULTS */}

        {result && (

          <div className="space-y-6">

            {/* REPORT */}

            <div className="bg-[#1F2937] p-6 rounded-2xl">

              <h2 className="text-3xl font-bold mb-4">
                Security Report
              </h2>

              <p className="text-xl mb-3">

                Strength:
                {" "}

                <span
                  className={
                    result.passwordStrength ===
                    "Strong"
                      ? "text-green-400"
                      : result.passwordStrength ===
                        "Medium"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }
                >

                  {result.passwordStrength}

                </span>

              </p>

              <p className="text-xl mb-3">

                Score:
                {" "}
                {result.score}/100

              </p>

              <p className="text-xl">

                Crack Time:
                {" "}
                {result.crackTime}

              </p>

            </div>

            {/* WARNINGS */}

            <div className="bg-[#1F2937] p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-4">
                Security Warnings
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

export default PasswordSecurity;