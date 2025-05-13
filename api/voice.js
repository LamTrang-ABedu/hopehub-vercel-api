export default async function handler(req, res) {
    const apiRes = await fetch("https://voice.lam.io.vn/api/voices");
    const data = await apiRes.text();
    res.status(apiRes.status).setHeader("Content-Type", "application/json").send(data);
  }
  