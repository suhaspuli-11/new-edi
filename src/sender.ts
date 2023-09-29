import axios from 'axios';

const receiverUrl = 'http://localhost:4000'; 

const edifact: string =  `UNB+UNOB:1+SENDER1:14:ZZUK+RECEIVER1:1:ZZUK+071101:1701+131++ORDERS++1++1'
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

const edifact1: string = `UNA:+.? '
UNB+UNOB:1+IRONWARE:14+098533326:14+011107:1500+186'
UNH+72+ORDERS:D:97A:UN'
BGM+220+123350+9'
DTM+4:20011107:102'
RFF+CT:97.8400.1734V'
NAD+DP+T01626003+++Hardware BV:Coal Lane+Bradford+Yorkshire+BD9 1SJ'
CTA+PD+:Karen Smith'
COM+030-567891:TE'
CUX+2:USD:9'
PAT+1++5:1:CD:45'
LIN+1++STU62001LW-K:BP'
IMD++3+:::SEAGATE VIPER EXT LVD 200G ULTRIUM'
QTY+21:3:EA'
DTM+2:20011108:102'
PRI+INF:3999'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:3:EA'
DTM+2:20011108:102'
LIN+2++STU42001LW-K:BP'
IMD++3+:::SEAGATE VIPER INT LVD 20G ULTRIUM?+'
QTY+21:2:EA'
DTM+2:20011108:102'
PRI+INF:3799'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:2:EA'
DTM+2:20011108:102'
LIN+3++STUL620001LW-K:BP'
IMD++3+:::SEAGATE VIPER EXT LVD ULTRIUM1 11CA'
QTY+21:1:EA'
DTM+2:20011108:102'
PRI+INF:7099'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:1:EA'
DTM+2:20011108:102'
LIN+4++STUQ:BP'
IMD++3+:::SEA AUTOLOADER RACKMOUNT KIT 5U'
QTY+21:1:EA'
DTM+2:20011108:102'
PRI+INF:379'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:1:EA'
DTM+2:20011108:102'
UNS+S'
UNT+41+72'
UNZ+1+186'`;

const x121: string = `ISA*00*          *00*          *ZZ*AMAZONDS       *01*RECEIVERID     *220428*1230*U*00401*000000040*1*P*>~
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

const x122: string = `ISA*00*          *00*          *ZZ*AMAZONDS       *01*RECEIVERID     *220428*1230*U*00401*000000013*0*P*>~
GS*PO*AMAZONDS*RECEIVERID*20220428*123038*96*X*004010~
ST*850*0001~
BEG*00*SS*T7Fd9Zn55**20220428~
CUR*BT*USD~
REF*OQ*002-9977742-6703449~
REF*ST*1~
DTM*010*20220503*2030*GM~
DTM*002*20220507*0659*GM~
N9*ZZ*03~
MSG*As you requested, we've sent this part of your order to ensure quicker service. The other items will ship separately.~
N9*ZZ*06~
MSG*For detailed information about your orders, please visit Your Account. You can also print invoices, change your e-mail address and payment settings, alter your communication preferences, and much more-24 hours a day-at http://www.amazon.com/your-account.~
N9*ZZ*07~
MSG*Visit http://www.amazon.com/returns to return any item-including gifts-in unopened or original condition within 30 days for a full refund(other restrictions apply). Please have your order ID ready. Thanks for shopping at Amazon.com, and please come again!~
N1*BT*Amazon.com.kydc,Inc.*92*KYDC~
N1*SF*WHSE*92*WHSE~
N1*ST*Jennifer Smith~
N3*93 Hardwood Ln~
N4*Rochester*NY*14616-1629*US*CC*United States~
TD5**92*UPS_GR_RES****ZZ*RES~
N1*LW*Jennifer Smith~
N3*93 Hardwood Ln~
N4*Rochester*NY*14616-1629*US~
PER*ZZ****TE*2065551214~
PO1*1*1*EA*2.41*NT*SK*1092189***TP*Kitchen*BL*1*ZZ*Amazon.com, LLC~
CTP**PUR*6.54~
MSG*Chicago Cutlery Essentials 3-1/2-Inch Parer Knife~
CTT*1*1~
SE*28*0001~
GE*1*96~
IEA*1*000000013~`;

const x123: string = `ISA*01*0000000000*01*ABCCO     *12*4405197800     *01*999999999      *101127*1719*U*00400*000003438*0*P*>~
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
        await axios.post(receiverUrl, edifact, {
            headers: {
                'Content-Type':'text/plain'
            }
        });
        console.log('EDI message sent successfully');
    } catch (err: any) {
        console.log('Error making a request ',err);
    }
}

main();