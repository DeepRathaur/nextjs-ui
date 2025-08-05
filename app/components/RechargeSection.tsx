"use client";
import { useState } from "react";

export default function RechargeSection() {
  const [selectedTab, setSelectedTab] = useState("Prepaid");
  const tabs = ["Prepaid", "Postpaid", "HBB"];

  return (
    <div className="bg-[#b40000] text-white py-10 px-4 flex flex-col items-center sm:flex-row sm:justify-center sm:gap-6">
      <div className="mb-6 sm:mb-0 text-xl font-semibold sm:text-2xl">
        Recharge & Pay bills
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        {/* Tab buttons */}
        <div className="flex bg-white rounded-md overflow-hidden text-black font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`flex items-center gap-1 px-4 py-2 text-sm ${
                selectedTab === tab
                  ? "bg-red-700 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {/* Optional icon placeholders */}
              <span className="text-lg">📶</span>
              {tab}
            </button>
          ))}
        </div>

        {/* Input section */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-[250px] sm:w-[300px]">
          <div className="px-3 py-2 border-r text-black font-medium">+254</div>
          <input
            type="text"
            placeholder="Enter mobile number"
            className="w-full px-3 py-2 outline-none text-black"
          />
        </div>

        {/* Action button */}
        <button className="bg-white text-red-600 font-bold px-4 py-2 rounded">
          BUY AIRTIME/DATA
        </button>
      </div>
    </div>
  );
}
