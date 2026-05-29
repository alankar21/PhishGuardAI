import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Scanner from "./pages/Scanner";
import PasswordSecurity
from "./pages/PasswordSecurity";
import EmailAnalyzer from "./pages/EmailAnalyzer";
import History
from "./pages/History";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
         <Route
           path="/scanner"
           element={<Scanner />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/password-security"
          element={<PasswordSecurity />}
        />
        <Route
        path="/email-analyzer"
        element={<EmailAnalyzer />}
        />
        <Route
        path="/history"
        element={<History />}
        />
        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;