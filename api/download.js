export default async function handler(req, res) {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ status: "error", message: "Missing URL" });
    }
  
    try {
      const backendRes = await fetch(`https://download.lam.io.vn/api/media-downloader?url=${encodeURIComponent(url)}`);
      const data = await backendRes.text();
      res.status(backendRes.status).setHeader("Content-Type", "application/json").send(data);
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  }
  