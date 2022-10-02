const express = require('express');
const api = require('./api');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors())
app.use('/', api)

export default {
    path: '/api',
    handler: app,
}