"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RechargePage() {
  const [mobile, setMobile] = useState("");
  const [selectedTab, setSelectedTab] = useState("Prepaid");

  const router = useRouter();

  const handleNext = () => {
    if (mobile.trim()) {
      router.push(`/recharge/bundles?mobile=${mobile}&tab=${selectedTab}`);
    } else {
      alert("Please enter mobile number");
    }
  };

  return (
    <div className="p-6">
      <div className="bg-[#b40000] text-white py-10 px-4 rounded-md flex flex-col gap-6 items-center sm:flex-row sm:justify-between">
        <h1 className="text-xl font-bold">Recharge & Pay bills</h1>

        <div className="flex gap-4 items-center">
          <div className="flex bg-white text-black rounded overflow-hidden">
            {["Prepaid", "Postpaid", "HBB"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium ${
                  selectedTab === tab ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-white rounded overflow-hidden text-black">
            <span className="px-2 font-bold border-r">+254</span>
            <input
              type="text"
              placeholder="Mobile number"
              id="mobileInput"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="px-2 py-1 outline-none"
            />
          </div>

          <button
            onClick={handleNext}
            id="buyAirtimeData"
            className="bg-white text-red-600 font-bold px-4 py-2 rounded"
          >
            BUY AIRTIME/DATA
          </button>
        </div>
      </div>
    </div>
  );
}
