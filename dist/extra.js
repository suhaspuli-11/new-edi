"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printObject = exports.addProperties1 = void 0;
function addProperties1(object, mappings) {
    const segment = Object.keys(object)[1];
    for (const mapping of mappings) {
        const source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source && source.length > 0) {
            object[segment][target] = subkeys
                ? Object.fromEntries(subkeys.map((key, i) => [key, source[i]]))
                : source[0];
        }
    }
}
exports.addProperties1 = addProperties1;
function printObject(obj, indent = 0) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            console.log(' '.repeat(indent) + key + ':');
            printObject(obj[key], indent + 2);
        }
        else {
            console.log(' '.repeat(indent) + key + ': ' + obj[key]);
        }
    }
}
exports.printObject = printObject;
const edifact1 = `UNA:+.? '
UNB+UNOA:1+IRONWARE:ZZ+098533326:ZZ+011107:1500+186'
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
const ansi1 = `ISA*00*          *00*          *ZZ*A1STORES    *12*5142645505     *190510*0728*|*00403*100000013*0*P*
GS*PO*A1STORES*5142645505*20200510*0728*1013*X*004030
ST*850*1013
BEG*00*SA*2332233**20200510
REF*IA*66910
PER*BD*Contact Name*TE*123-455-7880
FOB*DF
DTM*010*20200517
DTM*001*20200525
TD5*****Carrier Routing*******CG
N1*ST*Towner Square Schooms*92*006
N3*Williston Towner Square*2100 11th St SW
N4*Williston*ND*58701
PO1*1*4*EA*4.15**UP*066810348563*IT*WACT750SP16-BLK
CTP**RTL*7.99
PID*F*08***Nike Boy Short Black sz M
PO1*2*6*EA*5.00**UP*066810349983*IT*WACT170SP16-AMP
CTP**RTL*7.99
PID*F*08*** Reebok Boy Short Abstract Print sz M
PO1*3*4*EA*5.25**UP*066810349747*IT*WACT790SP16-BLK
CTP**RTL*9.99
PID*F*08*** Puma Boy Short Red sz M
CTT*3
SE*22*1013
GE*1*1013
IEA*1*100000013`;
const ansi2 = `ISA*01*0000000000*01*ABCCO     *12*4405197800     *01*999999999      *101127*1719*U*00400*000003438*0*P*>~
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
