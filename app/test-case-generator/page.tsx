"use client"; // Required if using useState, useEffect, etc.

import { useState } from "react";

export default function TestCaseGeneratorPage() {
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
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setTestCases(data.steps || "No test cases generated.");
    } catch (err) {
      console.error(err);
      setTestCases("Error generating test cases.");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 font-sans max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Test Case Generator</h1>
      {step === 1 && (
        <div>
          <label className="block font-semibold mb-2">Website URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-2 w-full mb-4 rounded text-black"
          />
          <button
            onClick={nextStep}
            disabled={!url}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label className="block font-semibold mb-2">Test Scenario</label>
          <textarea
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            className="border p-2 w-full mb-4 rounded text-black"
          />
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              disabled={!scenario}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <p><strong>URL:</strong> {url}</p>
          <p><strong>Scenario:</strong> {scenario}</p>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
          >
            {loading ? "Generating..." : "Generate Test Cases"}
          </button>
          {testCases && (
            <pre className="mt-4 bg-gray-100 p-4 rounded text-black whitespace-pre-wrap">
              {testCases}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
