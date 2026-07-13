const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/videos', (req, res) => {
  res.json([
    { id: 1, title: "Test Video 1" },
    { id: 2, title: "Test Video 2" }
  ]);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Running on port ${port}`));