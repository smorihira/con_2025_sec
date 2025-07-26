const express = require('express');
const app = express();
const port = 3000;

// 全てのリクエストに対して200ステータスコードを返すミドルウェア
app.use((req, res, next) => {
  res.status(200).send('OK');
});

// サーバを起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
