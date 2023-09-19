"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const receiverUrl = 'http://localhost:4000';
const edifact = `UNB+UNOB:1+SENDER1:14:ZZUK+RECEIVER1:1:ZZUK+071101:1701+131++ORDERS++1++1'
UNH+000000101+ORDERS:D:96A:UN'
BGM+220+128576+9'
DTM+137:20020830:102'
PAI+::42'
FTX+ZZZ+1+001::91'
RFF+CT:652744'
DTM+171:20020825:102'
NAD+BY+5412345000013::9'
RFF+VA:87765432'
CTA+OC+:P FORGET'
COM+0044715632478:TE'
NAD+SU+4012345500004::9'
RFF+VA:56225432'
CUX+2:GBP:9+3:EUR:4+1.67'
DTM+134:2002080120020831:718'
TDT+20++30+31'
TOD+3++CIF:23:9'
LOC+1+BE-BRU'
LIN+1++4000862141404:SRS'
PIA+1+ABC1234:IN'
IMD+C++TU::9'
QTY+21:48'
MOA+203:699.84'
PRI+AAA:14.58:CT:AAE:1:KGM'
RFF+PL:AUG93RNG04'
DTM+171:20020801:102'
PAC+2+:51+CS'
PCI+14'
LOC+7+3312345502000::9'
QTY+11:24'
DTM+2:20020915:102'
LOC+7+3312345501003::9'
QTY+11:24'
DTM+2:20020913:102'
TAX+7+VAT+++:::17.5+S'
UNS+S'
CNT+2:1'
UNT+38+000000101'
UNZ+1+131'`;
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield axios_1.default.post(receiverUrl, x12, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            console.log('EDI message sent successfully');
        }
        catch (err) {
            console.log('Error making a request ', err);
        }
    });
}
main();
