const express = require("express");

const app = express();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const htmlResponse = `
  <html>
    <head>
      <title>Node js y express en Vercel</title>
    </head>
    <body>
      <h1>Soy un proyecto back end en vercel</h1>
    </body>
  </html>
  `;
  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`port runing in http://localhost:${port}`)
})