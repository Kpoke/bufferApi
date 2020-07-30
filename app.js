const express = require("express"),
  app = express(),
  port = process.env.PORT || 5002;

app.use(express.json());

app.post("/buffer", (req, res) => {
  try {
    const { time, data } = req.body;
    setTimeout(() => {
      res.status(200).send({ data });
    }, time * 1000);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.listen(port, () => {
  console.log("listening...");
});
