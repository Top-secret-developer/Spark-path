import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'SparkPath API' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({
      ok: false,
      message: 'Email and password are required',
    });
  }

  return res.json({
    ok: true,
    user: {
      name: 'SparkBuilder',
      email,
      role: 'Builder',
    },
  });
});

app.listen(port, () => {
  console.log(`SparkPath API running on http://localhost:${port}`);
});
