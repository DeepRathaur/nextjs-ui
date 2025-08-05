"use client";
import PaymentScreen from "@/app/components/PaymentScreen";
import { useSearchParams } from "next/navigation";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const mobile = searchParams.get("mobile") ?? "";
  const bundle = searchParams.get("bundle") ?? "Unknown Bundle";
  const price = searchParams.get("price") ?? "KES 0";

  return (
    <PaymentScreen
      mobile={mobile}
      bundle={{ name: bundle, benefits: "", price }}
      onCancel={() => window.history.back()}
      onConfirm={() => {
        window.location.href =
          "https://secure.3gdirectpay.com/dpopayment.php?ID=F3B17418-8A58-4A48-A562-4ED042B411C2";
      }}
    />
  );
}
