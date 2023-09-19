const express = require('express');
import { Reader } from 'edifact';
import * as mapping from './m1';
const { X12Parser } = require('node-x12');

const port: any = 4000;
const app: any = express();

app.use(express.text());

app.post('/', (req: any, res: any) => {
    const ediMessage: string = req.body;
    res.send('Message received successfully');
    // Processing the EDI message   
    const interchangeHeader: string = ediMessage.substring(0, 3);
    if (interchangeHeader === 'UNB') {
        console.log('***************EDIFACT message***************');
        parseEdifact(ediMessage);
    }
    else if(interchangeHeader === 'ISA'){
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

function parseX12(ediMessage: string) {
    const parser = new X12Parser();
    const interchange = parser.parse(ediMessage);
    printObject(interchange);
}

function parseEdifact(edifactMessage: any) {
    const reader: any = new Reader({ autoDetectEncoding: true });
    const result: any = reader.parse(edifactMessage);
    const arr: any = [];
    for (const obj of result) {
        const segmentObj: any = edifactMapping(obj);
        arr.push(segmentObj);
    }
    for (const obj of arr) {
        console.log('=================================================================');
        console.log(obj);
    }
}

function edifactMapping(object: any) {
    let segment: any;
    const segmentCode: string = object.name;
    const elements: any = object.elements;
    const segmentMappingObj: any = {
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
    }
    
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

function printObject(obj: Record<any,any>, indent = 0) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            console.log(' '.repeat(indent) + key + ':');
            printObject(obj[key], indent + 2);
        } else {
            console.log(' '.repeat(indent) + key + ': ' + obj[key]);
        }
    }
}