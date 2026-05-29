import { useState } from "react";

import { registerUser }
from "../services/authService";

const Register = () => {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("Button Clicked");

    try {

      const response =
        await registerUser({
          name,
          email,
          password,
        });

      console.log(response);

      localStorage.setItem(
        "token",
        response.token
      );

      alert(
        "Registration Successful"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Registration Failed"
      );

    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111827] p-10 rounded-3xl">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-[#1F2937] text-white"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-[#1F2937] text-white"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-[#1F2937] text-white"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-white font-bold"
          >

            Create Account

          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;