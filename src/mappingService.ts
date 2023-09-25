import * as mapping from './m1';
import * as mappingX12 from './m2';

const edifactMappingObj: any = {
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

const x12MappingObj: any = {
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

export function setProperties(object: any, mappings: any) {
    for (const mapping of mappings) {
        let source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source === '>'){
            object[target] = '>';
            return;
        }
        if (typeof source === 'string') {
            source = source.split('>');
        }
        if (source && source.length > 0) {
            const filteredSource = source.filter((value: any) => value !== undefined && (typeof value !== 'string' || value.trim() !== ''));

            if (filteredSource.length > 0) {
                if (subkeys) {
                    const subkeysObject: any = subkeys.reduce((result: any, key: any, i: number) => {
                        const value = filteredSource[i];
                        if (value !== undefined && (typeof value !== 'string' || value.trim() !== '')) {
                            result[key] = value;
                        }
                        return result;
                    }, {});

                    object[target] = subkeysObject;
                }
                else {
                    object[target] = filteredSource[0];
                }
            }
        }
    }
}

export function x12Mapping(object: any) {
    let segment: any;
    const segmentCode: string = object.tag;
    const elements: any = object.elements;

    if (x12MappingObj.hasOwnProperty(segmentCode)) {
        segment = x12MappingObj[segmentCode](segmentCode, elements);
    }
    else {
        segment = {
            SegmentName: "Unknown segment code"
        };
    }
    return segment;
}

export function edifactMapping(object: any) {
    let segment: any;
    const segmentCode: string = object.name;
    const elements: any = object.elements;

    if (edifactMappingObj.hasOwnProperty(segmentCode)) {
        segment = edifactMappingObj[segmentCode](segmentCode, elements);
    }
    else {
        segment = {
            SegmentName: "Unknown segment code"
        };
    }
    return segment;
}