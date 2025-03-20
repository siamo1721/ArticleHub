const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);
require('dotenv').config();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});