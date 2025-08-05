"use client";
export default function RechargeIntro({ url, setUrl, scenario, setScenario, nextStep }: any) {
  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-lg">
      <h1 className="text-xl font-bold">Step 1: Recharge Setup</h1>

      <input
        type="text"
        placeholder="Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 w-full rounded text-black"
      />

      <textarea
        placeholder="Describe test scenario"
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        className="border p-2 w-full rounded text-black"
        rows={4}
      />

      <button
        onClick={nextStep}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={!url || !scenario}
      >
        Next
      </button>
    </div>
  );
}
