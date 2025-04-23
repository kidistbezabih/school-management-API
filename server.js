const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schools');

const app = express();
app.use(bodyParser.json());
app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
