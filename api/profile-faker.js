export default async function handler(req, res) {
    const { locale = "en_US" } = req.query;
  
    try {
      const backendRes = await fetch(`https://faker.lam.io.vn/api/profile-faker?locale=${locale}`);
      const data = await backendRes.text();
      res.status(backendRes.status).setHeader("Content-Type", "application/json").send(data);
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  }
  