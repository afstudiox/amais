require('dotenv').config();
require('express-async-errors');

const app = require('./app');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));