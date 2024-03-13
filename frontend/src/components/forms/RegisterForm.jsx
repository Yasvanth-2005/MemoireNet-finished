import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [showPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
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

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    if (password === cpassword) {
      setError("Passwords Doesn't match");
      setLoading(false);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[380px] rounded-md px-5 py-4 bg-white"
    >
      <h2 className="text-center text-black font-semibold text-2xl">
        Create an Account
      </h2>
      <p className="text-sm text-center text-black mb-4">
        Already Have an account?{" "}
        <Link to="/login" className="underline cursor-pointer">
          Login Here
        </Link>
      </p>

      <div className="mb-5">
        <label
          htmlFor="username"
          className="text-base font-medium block text-gray-900"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="username"
          className="bg-zinc-50 border w-full rounded text-base text-gray-900 font-medium px-2.5 py-1 border-gray-300"
        />
      </div>

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

      <div className="mb-5 grid grid-cols-2 gap-2">
        <div>
          <label
            htmlFor="password"
            className="text-base font-medium text-gray-900 flex justify-between w-full items-center"
          >
            Password
            <div
              className="cursor-pointer pr-1"
              onClick={() => setIsShowPassword((p) => !p)}
            >
              {showPassword ? (
                <>
                  <FaEyeSlash size={14} />
                </>
              ) : (
                <>
                  <FaEye size={14} />
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
        <div>
          <label
            htmlFor="cpassword"
            className="text-base font-medium block text-gray-900"
          >
            Confirm Password
          </label>
          <input
            type="text"
            name="cpassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            id="cpassword"
            className="bg-zinc-50 border w-full rounded text-base text-gray-900 font-medium px-2.5 py-1 border-gray-300"
          />
        </div>
      </div>
      {error && <div className="mb-1 text-red-600">{error}</div>}
      <button
        disabled={loading}
        className={`py-2 w-full rounded-full text-white my-2 ${
          loading ? "bg-gray-800" : "bg-black"
        }`}
      >
        {loading ? "Registring..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
