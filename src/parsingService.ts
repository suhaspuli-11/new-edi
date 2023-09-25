import { Reader } from 'edifact';
import * as mappingX12 from './m2';
const { X12Parser } = require('node-x12');
import { x12Mapping,edifactMapping } from './mappingService';

export function parseX12(ediMessage: string) {
    const parser = new X12Parser();
    try {
        const result: any = parser.parse(ediMessage).toJSON();
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

        console.log(arr);
    } catch (err) {
        console.log(err);
    }
}

export function parseEdifact(edifactMessage: any) {
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
    // const obj: any = group(arr);
}