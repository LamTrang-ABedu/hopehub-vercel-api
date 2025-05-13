export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  
    const { source, slug } = req.query;
    if (!source || !slug) return res.status(400).json({ error: "Missing source or slug" });
  
    const apiRes = await fetch(`https://cmanga.lam.io.vn/api/crawl-latest?source=${source}&slug=${slug}`, { method: "POST" });
    const data = await apiRes.text();
    res.status(apiRes.status).setHeader("Content-Type", "application/json").send(data);
  }
  