export async function POST(req: Request) {
  const { url, scenario } = await req.json();

  // Call your Node.js Puppeteer agent
  const res = await fetch("http://localhost:5000/run-tests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, scenario }),
  });

  const data = await res.json();
  return Response.json(data);
}
