import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Globe,
  Lock,
  ScanSearch,
  MailCheck,
  Radar,
  Database,
  Fingerprint,
} from "lucide-react";
const Home = () => {
  const navigate = useNavigate();
 return (
  <div className="min-h-screen bg-[#0B1120] text-white overflow-hidden">

    <Navbar />

    {/* HERO SECTION */}
<section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">

  {/* CYBER GRID */}
  <div className="absolute inset-0 opacity-10">

    <div className="absolute inset-0 bg-[linear-gradient(#00ffff22_1px,transparent_1px),linear-gradient(to_right,#00ffff22_1px,transparent_1px)] bg-[size:60px_60px]"></div>

  </div>

  {/* GLOW EFFECTS */}
  <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

  {/* FLOATING CARD 1 */}
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="absolute left-10 top-40 hidden lg:block bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/20 p-5 rounded-2xl z-10"
  >

    <p className="text-gray-400 text-sm">
      Threats Blocked
    </p>

    <h2 className="text-3xl font-bold text-cyan-400 mt-2">
      12,847
    </h2>

  </motion.div>

  {/* FLOATING CARD 2 */}
  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="absolute right-10 top-56 hidden lg:block bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/20 p-5 rounded-2xl z-10"
  >

    <p className="text-gray-400 text-sm">
      URLs Scanned
    </p>

    <h2 className="text-3xl font-bold text-green-400 mt-2">
      89K+
    </h2>

  </motion.div>

  {/* CENTER CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center z-10"
  >

    {/* ICON */}
    <div className="flex justify-center mb-8">

      <ShieldCheck
        size={100}
        className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]"
      />

    </div>

    {/* TITLE */}
    <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">

      Secure Your

      <span className="block text-cyan-400 mt-4">
        Digital World
      </span>

    </h1>

    {/* SUBTITLE */}
    <p className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">

      Enterprise-grade AI cybersecurity platform for phishing detection,
      URL scanning, threat intelligence, and security analytics.

    </p>

    {/* BUTTONS */}
    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

      <button
  onClick={() => navigate("/scanner")}
  className="bg-cyan-500 hover:bg-cyan-600 px-10 py-5 rounded-2xl text-lg font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:scale-105"
>
  Start Free Scan
</button>

      <button
  onClick={() => navigate("/dashboard")}
  className="border border-cyan-500 hover:bg-cyan-500/10 px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105"
>
  View Dashboard
</button>

    </div>

    {/* LIVE STATS */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/10">

        <h2 className="text-5xl font-bold text-cyan-400">
          99.9%
        </h2>

        <p className="text-gray-400 mt-3">
          Detection Accuracy
        </p>

      </div>

      <div className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/10">

        <h2 className="text-5xl font-bold text-green-400">
          250K+
        </h2>

        <p className="text-gray-400 mt-3">
          Threats Analyzed
        </p>

      </div>

      <div className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-3xl border border-cyan-500/10">

        <h2 className="text-5xl font-bold text-red-400">
          24/7
        </h2>

        <p className="text-gray-400 mt-3">
          Threat Monitoring
        </p>

      </div>

    </div>

  </motion.div>

</section>

     {/* FEATURES SECTION */}
<section className="py-32 px-8 relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

  {/* TITLE */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-center mb-24"
  >

    <h2 className="text-6xl font-bold">

      Enterprise Security

      <span className="block text-cyan-400 mt-4">
        Modules
      </span>

    </h2>

    <p className="text-gray-400 mt-8 text-xl max-w-3xl mx-auto">

      Advanced cybersecurity tools designed for real-time
      phishing detection, security analytics, and enterprise protection.

    </p>

  </motion.div>

  {/* FEATURE GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

    {/* CARD 1 */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
  onClick={() => navigate("/scanner")}
  className="cursor-pointer bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
>
      <Globe
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        URL Scanner
      </h3>

      <p className="text-gray-400 leading-relaxed">

        Analyze suspicious URLs using phishing detection,
        domain reputation, and redirect analysis.

      </p>

    </motion.div>

    {/* CARD 2 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/email-analyzer")}
      className="bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
    >

      <MailCheck
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        Email Analyzer
      </h3>

      <p className="text-gray-400 leading-relaxed">

        Detect spoofed emails, malicious links,
        scam patterns, and social engineering attacks.

      </p>

    </motion.div>

    {/* CARD 3 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/password-security")}
      className="bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
    >

      <Lock
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        Password Security
      </h3>

      <p className="text-gray-400 leading-relaxed">

        Analyze password entropy, breach probability,
        and estimated crack time.

      </p>

    </motion.div>

    {/* CARD 4 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/dashboard")}
      className="bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
    >

      <Radar
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        Threat Intelligence
      </h3>

      <p className="text-gray-400 leading-relaxed">

        Monitor cyber threats in real time with AI-powered
        security analytics and risk scoring.

      </p>

    </motion.div>

    {/* CARD 5 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/history")}
      className="bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
    >

      <Database
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        Threat Database
      </h3>

      <p className="text-gray-400 leading-relaxed">

        Maintain threat logs, phishing reports,
        suspicious domains, and attack history.

      </p>

    </motion.div>

    {/* CARD 6 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/login")}
      className="bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
    >

      <Fingerprint
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        Identity Protection
      </h3>

      <p className="text-gray-400 leading-relaxed">

        Secure authentication system with monitoring,
        anomaly detection, and access protection.

      </p>

    </motion.div>

    {/* CARD 7 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/scanner")}
      className="bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
    >

      <ScanSearch
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        AI Detection
      </h3>

      <p className="text-gray-400 leading-relaxed">

        AI-driven detection engine for recognizing
        phishing attempts and suspicious activity.

      </p>

    </motion.div>

    {/* CARD 8 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate("/dashboard")}
      className="bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 hover:border-cyan-400/50 p-8 rounded-3xl transition-all group"
    >

      <ShieldCheck
        size={55}
        className="text-cyan-400 mb-6 group-hover:scale-110 transition-all"
      />

      <h3 className="text-2xl font-bold mb-4">
        Security Analytics
      </h3>

      <p className="text-gray-400 leading-relaxed">

        Interactive dashboards with cyber insights,
        risk reports, and enterprise-level monitoring.

      </p>

    </motion.div>

  </div>

</section>

    </div>
  );
};

export default Home;