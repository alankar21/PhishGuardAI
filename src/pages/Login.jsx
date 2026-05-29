import { useState } from "react";
import { useNavigate }
from "react-router-dom";
import { loginUser }
from "../services/authService";
const Login = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response =
      await loginUser({
        email,
        password,
      });

    localStorage.setItem(
      "token",
      response.token
    );

    alert("Login Successful");
   navigate("/dashboard");
    console.log(response);

  } catch (error) {

    console.log(error);

    alert("Invalid Credentials");

  }
};
  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111827]/70 backdrop-blur-lg border border-cyan-500/10 rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl bg-[#1F2937] text-white outline-none border border-transparent focus:border-cyan-400"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-2xl bg-[#1F2937] text-white outline-none border border-transparent focus:border-cyan-400"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl text-lg font-semibold transition-all"
          >

            Login

          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;