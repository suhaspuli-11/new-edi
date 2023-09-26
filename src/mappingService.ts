import * as mapping from './m1';
import * as mapping2 from './m2';

export function setProperties(object: any, mappings: any, delimiter?: any) {
    for (const mapping of mappings) {
        let source = mapping.source, target = mapping.target, subkeys = mapping.subkeys;
        if (source === undefined)
            continue;
        if (source === delimiter) {
            object[target] = delimiter;
            return;
        }
        if (typeof source === 'string') {
            source = source.split(delimiter);
        }
        if (source && source.length > 0) {
            const filteredSource = source.filter((value: any) => value !== undefined && (typeof value !== 'string' || value.trim() !== ''));
            if (filteredSource && filteredSource.length > 0) {
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

export function x12Mapping(object: any, delimiter: any) {
    let segment: any;
    const segmentCode: string = object.tag;
    const elements: any = object.elements;

    const x12MappingObj: any = {
        BEG: mapping2.BEG,
        CUR: mapping2.CUR,
        REF: mapping2.REF,
        TAX: mapping2.TAX,
        DTM: mapping2.DTM,
        PER: mapping2.PER,
        FOB: mapping2.FOB,
        CTP: mapping2.CTP,
        N9: mapping2.N9,
        N1: mapping2.N1,
        N2: mapping2.N2,
        N3: mapping2.N3,
        N4: mapping2.N4,
        PO1: mapping2.PO1,
        MSG: mapping2.MSG,
        TD5: mapping2.TD5,
        CTT: mapping2.CTT,
        PAM: mapping2.PAM,
        CSH: mapping2.CSH,
        TC2: mapping2.TC2,
        SAC: mapping2.SAC,
        ITD: mapping2.ITD,
        DIS: mapping2.DIS,
        INC: mapping2.INC,
        LIN: mapping2.LIN,
        SI: mapping2.SI,
        PID: mapping2.PID,
        MEA: mapping2.MEA,
        PWK: mapping2.PWK,
        PKG: mapping2.PKG,
        TD4: mapping2.TD4,
        TXI: mapping2.TXI,
        AMT: mapping2.AMT,
        EFI: mapping2.EFI,
        G61: mapping2.G61,
        CN1: mapping2.CN1,
        PO3: mapping2.PO3,
        YNQ: mapping2.YNQ,
        IT8: mapping2.IT8,
        LS: mapping2.LS,
        LE: mapping2.LE,
        TD3: mapping2.TD3,
        MAN: mapping2.MAN,
        CTB: mapping2.CTB,
        QTY: mapping2.QTY,
        PCT: mapping2.PCT,
        FA2: mapping2.FA2,
        NX2: mapping2.NX2,
        LQ: mapping2.LQ,
        SPI: mapping2.SPI,
        PAL: mapping2.PAL,
        IT3: mapping2.IT3,
        TD1: mapping2.TD1,
        LDT: mapping2.LDT,
        MTX: mapping2.MTX,
        FA1: mapping2.FA1,
        IN2: mapping2.IN2,
        LM: mapping2.LM,
        CB1: mapping2.CB1,
        ADV: mapping2.ADV,
        PO4: mapping2.PO4,
        SDQ: mapping2.SDQ,
        SE: mapping2.SE,
        GE: mapping2.GE,
        IEA: mapping2.IEA
    };
    
    if (x12MappingObj.hasOwnProperty(segmentCode)) {
        segment = x12MappingObj[segmentCode](segmentCode, elements, delimiter);
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