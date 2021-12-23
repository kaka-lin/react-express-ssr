const express = require('express');
const compression = require('compression');

const ssrRoutes = require('./routes/ssrRoutes');

const app = express();

// Middleware
app.use(compression());
app.use(express.static("public"));

// Routes
app.use('/', ssrRoutes);
app.get('/hello', (req, res) => res.send("Hello World"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
