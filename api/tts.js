export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Method not allowed");
  
    const apiRes = await fetch("https://voice.lam.io.vn/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
  
    res.status(apiRes.status);
    for (const [key, value] of apiRes.headers.entries()) {
      res.setHeader(key, value);
    }
    apiRes.body.pipe(res);
  }
  