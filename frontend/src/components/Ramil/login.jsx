import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary Login
    if (formData.email && formData.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 bg-green-900 text-white p-12 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-8">TIGOM</h1>

          <h2 className="text-5xl font-bold mb-4">
            Alam mo kung saan napupunta ang baon mo.
          </h2>

          <p className="text-lg text-green-100">
            Isang simpleng tracker para sa allowance, baon, utang at ipon.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            alt="budget"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[450px] bg-white p-8 rounded-xl shadow"
        >
          <p className="text-green-700 font-bold uppercase">
            Hakbang 2 ng 3
          </p>

          <h1 className="text-4xl font-bold mt-2 mb-2">
            Mag-log in sa TIGOM
          </h1>

          <p className="text-gray-500 mb-6">
            Balik ka na. Handa na ang dashboard mo.
          </p>

          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="juan@email.com"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div className="flex justify-between mb-6">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />{" "}
              Tandaan ako
            </label>

            <button
              type="button"
              className="text-green-700 font-semibold"
            >
              Nakalimutan ang password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg"
          >
            Mag-log in
          </button>
        </form>
      </div>
    </div>
  );
}