"use client";
import { useState } from "react";

export default function PaymentScreen({
  mobile = "736924878",
  bundle = {
    name: "UnlimiNET 20 Daily",
    benefits: "100.0MB",
    price: "KES 20",
  },
  onCancel,
  onConfirm,
}: {
  mobile?: string;
  bundle?: { name: string; benefits: string; price: string };
  onCancel?: () => void;
  onConfirm?: () => void;
}) {
  const [selectedMethod, setSelectedMethod] = useState("Airtel Money");
  const paymentOptions = ["Airtel Money", "Airtime", "Debit/Credit Card", "M-PESA"];

  return (
    <div className="grid grid-cols-[200px_1fr_250px] min-h-screen">
      {/* Left Panel */}
      <div className="bg-red-800 text-white flex flex-col items-start py-10 px-4 gap-4">
        {paymentOptions.map((method) => (
          <button
            key={method}
            id={`paymentMethod-${method}`}
            onClick={() => setSelectedMethod(method)}
            className={`text-left w-full px-2 py-1 rounded ${
              selectedMethod === method ? "bg-white text-red-800 font-bold" : ""
            }`}
          >
            {method}
          </button>
        ))}
      </div>

      {/* Middle Panel */}
      <div className="p-10 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-6">How will you pay</h1>
          <hr className="mb-6" />
          <p className="text-gray-800 text-lg">+254 {mobile}</p>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={onCancel}
            className="text-red-600 font-semibold hover:underline"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            id="continueToPay"
            className="bg-red-600 text-white px-6 py-2 rounded"
          >
            Continue to pay
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-gray-100 p-6 flex flex-col gap-4 text-sm">
        <h2 className="text-lg font-semibold border-b pb-2">BUNDLE PURCHASE</h2>
        <div>
          <p className="text-gray-500">MOBILE NUMBER</p>
          <p className="font-medium">{mobile}</p>
        </div>
        <div>
          <p className="text-gray-500">PLAN DETAILS</p>
          <p className="text-red-600 font-bold">{bundle.price}</p>
        </div>
        <div>
          <p className="text-gray-500">BUNDLE</p>
          <p className="font-semibold">{bundle.name}</p>
          <p className="text-gray-700">{bundle.benefits}</p>
        </div>

        <div className="mt-auto border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>KES</span>
            <span>{bundle.price.replace("KES", "").trim()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
