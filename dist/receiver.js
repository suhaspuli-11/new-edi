"use strict";
const express = require('express');
const port = 4000;
const app = express();
app.use(express.text());
app.post('/', (req, res) => {
    const edifactMessage = req.body;
    console.log('Received: ', edifactMessage);
    res.send('Message received successfully');
});
app.listen(port, () => {
    console.log(`Receiver listening on port ${port}`);
});
