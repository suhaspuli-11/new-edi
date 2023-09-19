const axios = require('axios');
const express = require('express');
const {X12Parser,X12Interchange} = require('node-x12')

const port = 3000;
const app = express();

app.use(express.text());

app.post('/', (req, res) => {
    const x12Msg = req.body;
    res.send('Message received successfully');
    // Processing the EDI message   
    parsex12(x12Msg);
});

app.listen(port, () => {
    console.log(`Receiver listening on port ${port}`);
});

function parsex12(x12Msg) {
    const parser = new X12Parser(false,'utf8');
    const interchange = parser.parse(x12Msg);
    // const interchanger = new X12Interchange();
    console.log(interchange);
    console.log('=========================================================================================');
    const obj = interchange.toJSON();   
    console.log(obj);
}

const receiverUrl = 'http://localhost:3000';

const x12 = `ISA*01*0000000000*01*ABCCO     *12*4405197800     *01*999999999      *101127*1719*U*00400*000003438*0*P*>~
GS*PO*4405197800*999999999*20101127*1719*1421*X*004010VICS~
ST*850*000000010~
BEG*00*SA*08292233294**20101127*610385385~
REF*DP*038~
REF*PS*R~
ITD*14*3*2**45**46~
DTM*002*20101214~
PKG*F*68***PALLETIZE SHIPMENT~
PKG*F*66***REGULAR~
TD5*A*92*P3**SEE XYZ RETAIL ROUTING GUIDE~
N1*ST*XYZ RETAIL*9*0003947268292~
N3*31875 SOLON RD~
N4*SOLON*OH*44139~
PO1*1*120*EA*9.25*TE*CB*065322-117*PR*RO*VN*AB3542~
PID*F****SMALL WIDGET~
PO4*4*4*EA*01**3*LR*15*CT~
PO1*2*220*EA*13.79*TE*CB*066850-116*PR*RO*VN*RD5322~
PID*F****MEDIUM WIDGET~
PO4*2*2*EA~
PO1*3*126*EA*10.99*TE*CB*060733-110*PR*RO*VN*XY5266~
PID*F****LARGE WIDGET~
PO4*6*1*EA*01**3*LR*12*CT~
PO1*4*76*EA*4.35*TE*CB*065308-116*PR*RO*VN*VX2332~
PID*F****NANO WIDGET~
PO4*4*4*EA*01**6*LR*19*CT~
PO1*5*72*EA*7.5*TE*CB*065374-118*PR*RO*VN*RV0524~
PID*F****BLUE WIDGET~
PO4*4*4*EA~
PO1*6*696*EA*9.55*TE*CB*067504-118*PR*RO*VN*DX1875~
PID*F****ORANGE WIDGET~
PO4*6*6*EA*01**3*LR*10*CT~
CTT*6~
AMT*1*13045.94~
SE*33*000000010~
GE*1*1421~
IEA*1*000003438~`;

async function main() {
    try {
        const result = await axios.post(receiverUrl, x12, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    } catch (err) {
        console.log('Error making a request ', err);
    }
}

main();