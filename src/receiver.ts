const express = require('express');
import { Reader } from 'edifact';
import * as mapping from './m1';
import * as mappingX12 from './m2';
const { X12Parser } = require('node-x12');
import { group } from './segmentGrouping';
import { printObject } from './extra';

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
    try {
        const res: any = parser.parse(ediMessage);
        printObject(res);
        const result: any = res.toJSON();
        // printObject(result);
        const arr: any = [];
        const interchangeHeaderElements: any = result.header;
        const groupHeaderElements: any = result.functionalGroups[0].header;
        const transactionHeaderElements: any = result.functionalGroups[0].transactions[0].header;

        const isa: any = mappingX12.ISA(interchangeHeaderElements);
        const gs: any = mappingX12.GS(groupHeaderElements);
        const st: any = mappingX12.ST(transactionHeaderElements);
        arr.push(isa);
        arr.push(gs);
        arr.push(st);
        
        const segments: any = result.functionalGroups[0].transactions[0].segments;
        for (let segment of segments) {
            const segmentObj: any = x12Mapping(segment);
            arr.push(segmentObj);
        }

        // console.log(arr);
    } catch (err) {
        console.log(err);
    }
}

function x12Mapping(object: any) {
    let segment: any;
    const segmentCode: string = object.tag;
    const elements: any = object.elements;
    const segmentMappingObj: any = {
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
};

function parseEdifact(edifactMessage: any) {
    const reader: any = new Reader({ autoDetectEncoding: true });
    const result: any = reader.parse(edifactMessage);
    for (let obj of result)
        console.log(obj);
    const arr: any = [];
    for (const obj of result) {
        const segmentObj: any = edifactMapping(obj);
        arr.push(segmentObj);
    }
    console.log(arr);
    const obj: any = group(arr);
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
        segment = segmentMappingObj[segmentCode](segmentCode, elements);
    }
    else {
        segment = {
            SegmentName: "Unknown segment code"
        };
    }
    return segment;
}