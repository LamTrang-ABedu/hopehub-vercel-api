export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  
    const { source } = req.query;
    if (!source) return res.status(400).json({ error: "Missing source" });
  
    const apiRes = await fetch(`https://cmanga.lam.io.vn/api/crawl?source=${source}`, { method: "POST" });
    const data = await apiRes.text();
    res.status(apiRes.status).setHeader("Content-Type", "application/json").send(data);
  }
  