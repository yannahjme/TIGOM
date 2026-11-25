import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        fullname: formData.fullname,
        email: formData.email,
      })
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="w-1/2 bg-green-800 text-white p-12 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-10">TIGOM</h1>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Simulan ang pag-track ng iyong baon.
          </h2>

          <p className="text-green-100 text-lg">
            Gumawa ng account at simulang i-manage ang iyong
            allowance, gastos, at ipon goals.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            alt="Budget"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <p className="text-green-700 font-semibold uppercase tracking-widest">
            Hakbang 1 ng 3
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Gumawa ng Account
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Sumali sa TIGOM at simulan ang financial tracking
            journey mo.
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="font-medium">
                Buong Pangalan
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Juan Dela Cruz"
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            <div className="mb-4">
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="juan@email.com"
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            <div className="mb-4">
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            <div className="mb-6">
              <label className="font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full border p-3 rounded-lg mt-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
            >
              Gumawa ng Account
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            May account na?
            <Link
              to="/"
              className="text-green-700 font-semibold ml-1"
            >
              Mag-log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}