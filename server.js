const express = require('express');
const app = express();
const port = 3000;

// JSON形式のリクエストボディをパースするミドルウェア
app.use(express.json());

// すべてのリクエストに対して200ステータスコードを返すミドルウェア
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  if (req.body) {
    console.log('Body:', req.body);
  }
  res.status(200).send('OK');
});

// サーバを起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
