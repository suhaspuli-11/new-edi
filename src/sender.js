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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var receiverUrl = 'http://localhost:4000';
var edifactMessage = "UNB+UNOB:1+SENDER1:14:ZZUK+RECEIVER1:1:ZZUK+071101:1701+131++ORDERS++1++1'\nUNH+000000101+ORDERS:D:96A:UN'\nBGM+220+128576+9'\nDTM+137:20020830:102'\nPAI+::42'\nFTX+ZZZ+1+001::91'\nRFF+CT:652744'\nDTM+171:20020825:102'\nNAD+BY+5412345000013::9'\nRFF+VA:87765432'\nCTA+OC+:P FORGET'\nCOM+0044715632478:TE'\nNAD+SU+4012345500004::9'\nRFF+VA:56225432'\nCUX+2:GBP:9+3:EUR:4+1.67'\nDTM+134:2002080120020831:718'\nTDT+20++30+31'\nTOD+3++CIF:23:9'\nLOC+1+BE-BRU'\nLIN+1++4000862141404:SRS'\nPIA+1+ABC1234:IN'\nIMD+C++TU::9'\nQTY+21:48'\nMOA+203:699.84'\nPRI+AAA:14.58:CT:AAE:1:KGM'\nRFF+PL:AUG93RNG04'\nDTM+171:20020801:102'\nPAC+2+:51+CS'\nPCI+14'\nLOC+7+3312345502000::9'\nQTY+11:24'\nDTM+2:20020915:102'\nLOC+7+3312345501003::9'\nQTY+11:24'\nDTM+2:20020913:102'\nTAX+7+VAT+++:::17.5+S'\nUNS+S'\nCNT+2:1'\nUNT+38+000000101'\nUNZ+1+131'";
var edifactMessage1 = "UNB+UNOB:1+SENDER1:14:ZZUK+RECEIVER1:1:ZZUK+071101:1701+131++ORDERS++1++1'\nUNH+1+ORDERS:D:01B:UN'\nBGM+220+PO357893+9'\nDTM+2:20020830:102'\nDTM+2:200808131430:203'\nFTX+DEL+1++INCLUDE TIME IN DELIVERY DATE'\nRFF+AAN:APPTNO123445'\nNAD+AA+BuyerId12345::1'\nLOC+1+Buyer Place Warehouse 678::1'\nCTA+PD+BuyerEmployee1234:John Smith'\nCOM+Buyeremail:EM'\nNAD+AA+ShipToId87654::1'\nLOC+1+ShipToId87654::1'\nCTA+PD+BuyerEmployee1234:John Smith'\nCOM+ShipToId87654:EM'\nLIN+1+1+1'\nPIA+5+ENT93474:BH'\nIMD+F++:::Product Description'\nMEA+AAA++EA:1'\nQTY+21:3:A1B'\nPRI+INV:3455.58'\nLIN+2+1+2'\nPIA+5+PRO-23872:BH'\nIMD+F++:::Product Description'\nMEA+AAA++EA:1'\nQTY+21:5:A1B'\nPRI+INV:950.99'\nUNS+S'\nMOA+1:4406.57'\nCNT+2:2'\nUNT+30+1'\nUNZ+1+1'";
var a = "\nUNB+UNOB:1+SENDER1:14:ZZUK+RECEIVER1:1:ZZUK+071101:1701+131++ORDERS++1++1'\nUNH+1+ORDERS:D:01B:UN'\nBGM+220+PO357893+9'\nDTM+2:20020830:102'\nUNS+S'\nUNT+30+1'\nUNZ+1+1'";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post(receiverUrl, edifactMessage1, {
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        })];
                case 1:
                    result = _a.sent();
                    console.log('EDIFACT message sent successfully');
                    console.log(result.data);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log('Error making a request ', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
