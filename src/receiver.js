"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var edifact_1 = require("edifact");
var mapping = require("./m1");
var port = 4000;
var app = express();
app.use(express.text());
app.post('/', function (req, res) {
    var ediMessage = req.body;
    res.send('Message received successfully');
    // Processing the EDI message   
    parseEdifact(ediMessage);
});
app.listen(port, function () {
    console.log("Receiver listening on port ".concat(port));
});
function parseEdifact(edifactMessage) {
    var reader = new edifact_1.Reader({ autoDetectEncoding: true });
    var result = reader.parse(edifactMessage);
    var arr = [];
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var obj = result_1[_i];
        var segmentObj = newFun(obj);
        arr.push(segmentObj);
    }
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var obj = arr_1[_a];
        console.log('=================================================================');
        console.log(obj);
    }
}
function newFun(object) {
    var segment;
    var segmentCode = object.name;
    var elements = object.elements;
    var segmentMappingObj = {
        UNB: mapping.UNB,
        UNH: mapping.UNH,
        BGM: mapping.BGM,
        DTM: mapping.DTM,
        PAI: mapping.PAI,
        FTX: mapping.FTX,
        GIR: mapping.GIR,
        IMD: mapping.IMD,
        RFF: mapping.RFF,
        NAD: mapping.NAD,
        CTA: mapping.CTA,
        COM: mapping.COM,
        CUX: mapping.CUX,
        TDT: mapping.TDT,
        TOD: mapping.TOD,
        LOC: mapping.LOC,
        LIN: mapping.LIN,
        PIA: mapping.PIA,
        QTY: mapping.QTY,
        PYT: mapping.PYT,
        EQD: mapping.EQD,
        SCC: mapping.SCC,
        MOA: mapping.MOA,
        RTE: mapping.RTE,
        PRI: mapping.PRI,
        PAC: mapping.PAC,
        PCI: mapping.PCI,
        TAX: mapping.TAX,
        ALI: mapping.ALI,
        FII: mapping.FII,
        DOC: mapping.DOC,
        PCD: mapping.PCD,
        RJL: mapping.RJL,
        MEA: mapping.MEA,
        GIN: mapping.GIN,
        HAN: mapping.HAN,
        APR: mapping.APR,
        RNG: mapping.RNG,
        ALC: mapping.ALC,
        RCS: mapping.RCS,
        DGS: mapping.DGS,
        EFI: mapping.EFI,
        CED: mapping.CED,
        GEI: mapping.GEI,
        QVR: mapping.QVR,
        MTD: mapping.MTD,
        CCI: mapping.CCI,
        CAV: mapping.CAV,
        STS: mapping.STS,
        STG: mapping.STG,
        UNS: mapping.UNS,
        CNT: mapping.CNT,
        UNT: mapping.UNT,
        UNZ: mapping.UNZ
    };
    if (segmentMappingObj.hasOwnProperty(segmentCode)) {
        segment = segmentMappingObj[segmentCode](elements);
    }
    else {
        segment = {
            SegmentName: "Unknown segment code"
        };
    }
    return segment;
}
