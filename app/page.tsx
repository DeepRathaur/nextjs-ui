"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [url, setUrl] = useState("");
  const [scenario, setScenario] = useState("");
  const [loading, setLoading] = useState(false);
  const [testCases, setTestCases] = useState<string | null>(null);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/run-tests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, scenario }),
      });
      if (!res.ok) {
        const text = await res.text();  // read raw response
        console.error("Error response:", text);
        throw new Error("Request failed with status " + res.status);
      }

      const data = await res.json();  // safe to parse now
      setTestCases(data.steps || "No test cases generated.");
      
    } catch (error) {
      console.error(error);
      setTestCases("Error generating test cases.");
    }
    setLoading(false);
  };

  return (
<div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Automation Suite</h1>
      <p className="text-gray-700 text-lg mb-4">
        Choose a module from the menu to get started:
      </p>
      <ul className="list-disc pl-6 text-blue-600 underline space-y-2">
        <li><a href="/test-case-generator">Test Case Generator</a></li>
        <li><a href="/recharge">Recharge & Bundles</a></li>
      </ul>
    </div>
  );
}
