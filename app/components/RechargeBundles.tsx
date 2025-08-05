"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function BundleListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mobile = searchParams.get("mobile") ?? "";
  const tab = searchParams.get("tab") ?? "Prepaid";

  const bundles = [
    {
      name: "UnlimiNET 20 Daily",
      benefits: "100 MB, 10 Minutes, 20 SMS",
      price: "KES 20",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Select a Bundle</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Bundle</th>
            <th className="p-2">Benefits</th>
            <th className="p-2">Price</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {bundles.map((bundle, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{bundle.name}</td>
              <td className="p-2">{bundle.benefits}</td>
              <td className="p-2 text-red-600">{bundle.price}</td>
              <td className="p-2">
                <button
                  className="bg-red-600 text-white px-4 py-1 rounded"
                  onClick={() =>
                    router.push(
                      `/recharge/confirm?mobile=${mobile}&bundle=${encodeURIComponent(
                        bundle.name
                      )}&price=${bundle.price}`
                    )
                  }
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
