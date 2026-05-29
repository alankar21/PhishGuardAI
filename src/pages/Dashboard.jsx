import Sidebar from "../components/Sidebar";
import AnalyticsCard from "../components/AnalyticsCard";
import ThreatChart from "../components/ThreatChart";
import RecentScans from "../components/RecentScans";
import ActivityFeed from "../components/ActivityFeed";

import { useEffect, useState } from "react";
import axios from "axios";

import { Navigate } from "react-router-dom";

const Dashboard = () => {

  const token =
    localStorage.getItem("token");

  if (!token) {

    return <Navigate to="/login" />;

  }

  const [stats, setStats] =
    useState({

      totalScans: 0,

      highRisk: 0,

      mediumRisk: 0,

      lowRisk: 0,

    });

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats =
    async () => {

      try {

        const response =
         await axios.get(
  "https://phishguardai-y5a0.onrender.com/api/stats"
);

        setStats(response.data);

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div className="flex bg-[#0B1120] text-white min-h-screen">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1 p-10">

        {/* TITLE */}

        <h1 className="text-5xl font-bold mb-10">
          Security Dashboard
        </h1>

        {/* ANALYTICS */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <AnalyticsCard
            title="Total Scans"
            value={stats.totalScans}
            color="text-cyan-400"
          />

          <AnalyticsCard
            title="High Risk"
            value={stats.highRisk}
            color="text-red-400"
          />

          <AnalyticsCard
            title="Medium Risk"
            value={stats.mediumRisk}
            color="text-yellow-400"
          />

          <AnalyticsCard
            title="Low Risk"
            value={stats.lowRisk}
            color="text-green-400"
          />

        </div>

        {/* CHART + ACTIVITY */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

          <div className="lg:col-span-2">

            <ThreatChart />

          </div>

          <ActivityFeed />

        </div>

        {/* RECENT SCANS */}

        <RecentScans />

      </div>

    </div>

  );

};

export default Dashboard;