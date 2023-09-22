"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const edifact_1 = require("edifact");
const mapping = __importStar(require("./m1"));
const mappingX12 = __importStar(require("./m2"));
const { X12Parser } = require('node-x12');
const segmentGrouping_1 = require("./segmentGrouping");
const extra_1 = require("./extra");
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
        parseEdifact(ediMessage);
    }
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
function parseX12(ediMessage) {
    const parser = new X12Parser();
    try {
        const res = parser.parse(ediMessage);
        (0, extra_1.printObject)(res);
        const result = res.toJSON();
        // printObject(result);
        const arr = [];
        const interchangeHeaderElements = result.header;
        const groupHeaderElements = result.functionalGroups[0].header;
        const transactionHeaderElements = result.functionalGroups[0].transactions[0].header;
        const isa = mappingX12.ISA(interchangeHeaderElements);
        const gs = mappingX12.GS(groupHeaderElements);
        const st = mappingX12.ST(transactionHeaderElements);
        arr.push(isa);
        arr.push(gs);
        arr.push(st);
        const segments = result.functionalGroups[0].transactions[0].segments;
        for (let segment of segments) {
            const segmentObj = x12Mapping(segment);
            arr.push(segmentObj);
        }
        // console.log(arr);
    }
    catch (err) {
        console.log(err);
    }
}
function x12Mapping(object) {
    let segment;
    const segmentCode = object.tag;
    const elements = object.elements;
    const segmentMappingObj = {
        BEG: mappingX12.BEG,
        CUR: mappingX12.CUR,
        REF: mappingX12.REF,
        TAX: mappingX12.TAX,
        DTM: mappingX12.DTM,
        PER: mappingX12.PER,
        FOB: mappingX12.FOB,
        CTP: mappingX12.CTP,
        N9: mappingX12.N9,
        N1: mappingX12.N1,
        N2: mappingX12.N2,
        N3: mappingX12.N3,
        N4: mappingX12.N4,
        PO1: mappingX12.PO1,
        MSG: mappingX12.MSG,
        TD5: mappingX12.TD5,
        CTT: mappingX12.CTT
    };
    if (segmentMappingObj.hasOwnProperty(segmentCode)) {
        segment = segmentMappingObj[segmentCode](segmentCode, elements);
    }
    else {
        segment = {
            SegmentName: "Unknown segment code"
        };
    }
    return segment;
}
;
function parseEdifact(edifactMessage) {
    const reader = new edifact_1.Reader({ autoDetectEncoding: true });
    const result = reader.parse(edifactMessage);
    for (let obj of result)
        console.log(obj);
    const arr = [];
    for (const obj of result) {
        const segmentObj = edifactMapping(obj);
        arr.push(segmentObj);
    }
    console.log(arr);
    const obj = (0, segmentGrouping_1.group)(arr);
}
function edifactMapping(object) {
    let segment;
    const segmentCode = object.name;
    const elements = object.elements;
    const segmentMappingObj = {
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
        segment = segmentMappingObj[segmentCode](segmentCode, elements);
    }
    else {
        segment = {
            SegmentName: "Unknown segment code"
        };
    }
    return segment;
}
