"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const parsingService_1 = require("./parsingService");
const port = 4000;
const app = express();
app.use(express.text());
app.post('/', (req, res) => {
    const ediMessage = req.body;
    res.send('Message received successfully');
    // Processing the EDI message   
    const interchangeHeader = ediMessage.substring(0, 3);
    if (interchangeHeader === 'UNB') {
        console.log('***************EDIFACT message***************');
        (0, parsingService_1.parseEdifact)(ediMessage);
    }
    //Processing the X12 message
    else if (interchangeHeader === 'ISA') {
        console.log('***************ANSI message***************');
        (0, parsingService_1.parseX12)(ediMessage);
    }
    else {
        console.log('Invalid format');
    }
});
app.listen(port, () => {
    console.log(`Receiver listening on port ${port}`);
});
