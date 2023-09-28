const express = require('express');
import { parseEdifact, parseX12 } from "./parsingService";

const port: any = 4000;
const app: any = express();

app.use(express.text());

app.post('/', (req: any, res: any) => {
    let ediMessage: string = req.body;
    res.send('Message received successfully');
    // Processing the EDI message   
    const interchangeHeader: string = ediMessage.substring(0, 3);
    if (interchangeHeader === 'UNB' || interchangeHeader === 'UNA') {
        if (interchangeHeader === 'UNA')
            ediMessage = split(ediMessage);
        console.log('***************EDIFACT message***************');
        parseEdifact(ediMessage);
    }
    //Processing the X12 message
    else if (interchangeHeader === 'ISA') {
        console.log('***************ANSI message***************');
        parseX12(ediMessage);
    }
    else {
        console.log('Invalid format');
    } 
});

app.listen(port, () => {
    console.log(`Receiver listening on port ${port}`);
});

function split(ediMessage: string): any{
    const arr = ediMessage.split('\n');
    const una = arr.shift();
    // console.log(una);
    return arr.join('\n');
}