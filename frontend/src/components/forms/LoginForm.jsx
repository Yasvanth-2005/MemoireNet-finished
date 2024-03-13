import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 2500);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === "" || password === "") {
      setError("All Fields are required");
      setLoading(false);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[350px] rounded-md px-5 py-4 bg-white"
    >
      <h2 className="text-center text-black font-semibold text-2xl mb-4">
        Sign In
      </h2>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="text-base font-medium block text-gray-900"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="bg-zinc-50 border w-full rounded text-base text-gray-900 font-medium px-2.5 py-1 border-gray-300"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="text-base font-medium text-gray-900 flex justify-between w-full items-center"
        >
          Your Password
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setIsShowPassword((p) => !p)}
          >
            {showPassword ? (
              <>
                <FaEyeSlash size={14} />
                <h1 className="text-sm text-gray-700">Hide</h1>
              </>
            ) : (
              <>
                <FaEye size={14} />
                <h1 className="text-gray-700 text-sm">Show</h1>
              </>
            )}
          </div>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="bg-zinc-50 border w-full rounded text-base text-gray-900 font-medium px-2.5 py-1 border-gray-300"
        />
      </div>
      {error && <div className="mb-1 text-red-600">{error}</div>}
      <button
        disabled={loading}
        className={`py-2 w-full rounded-full text-white my-2 ${
          loading ? "bg-gray-800" : "bg-black"
        }`}
      >
        {loading ? "Logging in..." : "Log in"}
      </button>
      <div className="my-3 flex items-center w-full justify-center gap-1">
        <div className="w-[20%] bg-gray-400 h-[1px]"></div>
        <h1 className="text-gray-500 text-sm">New to our community</h1>
        <div className="w-[20%] bg-gray-400 h-[1px]"></div>
      </div>
      <Link to="/register">
        <button className="mb-2 mt-1 py-2 w-full rounded-lg border border-gray-400 hover:bg-black hover:text-white transition-all">
          <h1 className="text-sm">Create an account</h1>
        </button>
      </Link>
    </form>
  );
};

export default LoginForm;
