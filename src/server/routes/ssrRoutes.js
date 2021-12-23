import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../client/components/App";

const router = express.Router();

router.get('/', async (req, res) => {
  // is where React SSR works
  const content = renderToString(<App />);

  const html = `
    <html>
      <head>
        <title>React Server Side Render Example</title>
      <head>
      <body>
        <h1>Server Side Rendering With React and Express</h1>
        <div id="root">${content}</div>
        <script src="/bundle.js" charset="utf-8"></script>
      </body>
    </html>
  `;

  res.send(html);
});

module.exports = router;
