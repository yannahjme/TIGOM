import React from "react";

export default function Profile() {
  const user = {
    name: "Maria Santos",
    email: "maria.santos@pup.edu.ph",
    school: "PUP Main Campus",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg flex justify-between">
          <p>
            Demo preview ito gamit ang sample account.
          </p>

          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Mag-log in
          </button>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div>
            <p className="text-green-700 font-bold uppercase">
              Iyong Account
            </p>

            <h1 className="text-5xl font-bold">
              Profile
            </h1>
          </div>

          <button className="bg-green-700 text-white px-6 py-3 rounded-lg">
            Pumunta sa Dashboard
          </button>
        </div>

        {/* Profile Card */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-3xl font-bold">
                  MS
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    {user.name}
                  </h2>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                    Student Plan
                  </span>

                  <p className="mt-3 text-gray-500">
                    {user.email}
                  </p>

                  <p className="text-gray-500">
                    {user.school}
                  </p>
                </div>
              </div>

              <button className="border px-4 py-2 rounded-lg">
                Mag-log in para i-edit
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>Gastos Ngayong Buwan</p>
                <h3 className="text-2xl font-bold">
                  ₱3,935
                </h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p>Naititira</p>
                <h3 className="text-2xl font-bold">
                  ₱365
                </h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p>No-Spend Streak</p>
                <h3 className="text-2xl font-bold">
                  1 Araw
                </h3>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p>Ipon Goals</p>
                <h3 className="text-2xl font-bold">
                  3
                </h3>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-xl mb-4">
              Setup Checklist
            </h2>

            <ul className="space-y-4">
              <li>✅ Nagawa ang account</li>
              <li>✅ Nakumpleto ang profile</li>
              <li>✅ May naitalang gastos</li>
            </ul>
          </div>
        </div>

        {/* Bottom Menus */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-5 rounded-xl shadow">
            Categories
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            Allowance & Baon
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            Ipon Goals
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            Settings
          </div>
        </div>
      </div>
    </div>
  );
}