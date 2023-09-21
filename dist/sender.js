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
const x121 = `ISA*00*          *00*          *ZZ*AMAZONDS       *01*RECEIVERID     *220428*1230*U*00401*000000040*1*P*>~
GS*PO*AMAZONDS*RECEIVERID*20220428*123038*95*X*004010~
ST*850*0001~
BEG*00*DS*T7Fd9Zn54**20220428~
CUR*BT*USD~
REF*OQ*111-3973054-1555434*hello*OS>hi~
REF*ST*1~
DTM*010*20220503*2030*GM~
DTM*002*20220507*0659*GM~
N9*ZZ*01*****ZD>family~
MSG*This shipment completes your order.~
N9*ZZ*06~
MSG*For detailed information about your orders, please visit Your Account. You can also print invoices, change your e-mail address and payment settings, alter your communication preferences, and much more-24 hours a day-at http://www.amazon.com/your-account.~
N9*ZZ*07~
MSG*Visit http://www.amazon.com/returns to return any item-including gifts-in unopened or original condition within 30 days for a full refund(other restrictions apply). Please have your order ID ready. Thanks for shopping at Amazon.com, and please come again!~
N1*BT*Amazon.com.kydc,Inc.*92*KYDC~
N1*SF*WHSE*92*WHSE~
N1*ST*Charlie Smith~
N2*Darla Smith~
N3*11254 Main St*Suite 112~
N4*Seattle*WA*98104*US*CC*United States~
TD5**92*UPS_GR_RES****ZZ*RES~
N1*LW*Amber Smith~
N3*123 Anderson Avenue~
N4*Seattle*WA*98103*US~
PER*ZZ****TE*2065551212~
PO1*1*3*EA*18.04*NT*SK*1617*****BL*1*ZZ*Amazon.com~
CTP**PUR*19.99~
MSG*Wide Tracker Activity Walker~
PO1*2*2*EA*54.42*NT*SK*4927*****BL*1*ZZ*Amazon.com~
CTP**PUR*59.99~
MSG*Deluxe Cozy Convertible~
PO1*3*1*EA*18*NT*SK*9876*****BL*1*ZZ*Amazon.com~
CTP**PUR*34.99~
MSG*Red Rattle~
CTT*3*6~
SE*35*0001~
GE*1*95~
IEA*1*000000040~`;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield axios_1.default.post(receiverUrl, x121, {
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
