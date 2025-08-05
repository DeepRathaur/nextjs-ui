"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BundleListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mobile = searchParams.get("mobile") ?? "";
  const tab = searchParams.get("tab") ?? "Prepaid";

  const [selectedPrice, setSelectedPrice] = useState("");

  const bundles = [
    {
      name: "UnlimiNET 20 Daily",
      benefits: "100 MB, 10 Minutes, 20 SMS",
      price: "KES 20",
    },
    {
      name: "UnlimiNET 50 Daily",
      benefits: "200 MB, 25 Minutes, 100 SMS",
      price: "KES 50",
    },
  ];

  const handleBuy = (bundle: any) => {
    setSelectedPrice(bundle.price);
    router.push(
      `/recharge/confirm?mobile=${mobile}&bundle=${encodeURIComponent(
        bundle.name
      )}&price=${bundle.price}`
    );
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Select a Bundle</h1>

      {/* Mobile and amount input */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center bg-white border rounded overflow-hidden text-black">
          <span className="px-2 font-bold border-r bg-gray-100">+254</span>
          <input
            id="mobileInput"
            type="text"
            value={mobile}
            className="px-2 py-1 outline-none w-40"
          />
        </div>

          <input
            id="amountField"
            type="text"
            placeholder="Enter amount"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="px-2 py-1 rounded border text-black w-40"
        />

        <button
            id="buyAirtimeButton"
            onClick={() => {
                if (!mobile || !selectedPrice) {
                alert("Please enter both mobile number and amount.");
                return;
                }

                // Navigate to confirm screen
                router.push(
                `/recharge/confirm?mobile=${mobile}&bundle=Airtime&price=KES ${selectedPrice}`
                );
            }}
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded"
            >
            Buy Airtime
            </button>
      </div>

      {/* Bundle list */}
      <table className="w-full border text-sm" id="bundleTable">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="p-2">Bundle</th>
            <th className="p-2">Benefits</th>
            <th className="p-2">Price</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {bundles.map((bundle) => (
            <tr key={bundle.name} className="border-t">
              <td className="p-2 font-semibold">{bundle.name}</td>
              <td className="p-2">{bundle.benefits}</td>
              <td className="p-2 text-red-600">{bundle.price}</td>
              <td className="p-2">
                <button
                  id={`buyButton-${bundle.name.replace(/\s+/g, "-")}`}
                  onClick={() => handleBuy(bundle)}
                  className="bg-red-600 text-white px-4 py-1 rounded"
                >
                  BUY
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
