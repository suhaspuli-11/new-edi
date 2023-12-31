const mandatoryFields: Record<any, any> = {
    UNB: ['HEAD'],
    RFF: ['SG1', 'SG3', 'SG34', 'SG36', 'SG42'],
    NAD: ['SG2', 'SG41'],
    DOC: ['SG4', 'SG43'],
    CTA: ['SG5', 'SG27', 'SG44', 'SG61'],
    TAX: ['SG6', 'SG24', 'SG40', 'SG50'],
    CUX: ['SG7'],
    PYT: ['SG8', 'SG31'],
    MOA: ['SG9', 'SG22', 'SG32', 'SG48'],
    TDT: ['SG10', 'SG51'],
    LOC: ['SG11', 'SG38', 'SG52'],
    TOD: ['SG12', 'SG53'],
    PAC: ['SG13', 'SG35'],
    PCI: ['SG14', 'SG37'],
    EQD: ['SG15', 'SG54'],
    SCC: ['SG16', 'SG55'],
    QTY: ['SG17', 'SG20', 'SG39', 'SG46', 'SG56', 'SG59'],
    APR: ['SG18'],
    ALC: ['SG19', 'SG45', 'SG63'],
    PCD: ['SG21', 'SG47'],
    RTE: ['SG23', 'SG49'],
    RCS: ['SG25', 'SG57'],
    DGS: ['SG26', 'SG60'],
    EFI: ['SG28', 'SG62'],
    LIN: ['SG29'],
    CCI: ['SG30'],
    PRI: ['SG33'],
    STG: ['SG58'],
    UNS: ['SUM'],
    UNT: ['LAST']
}

const mapping: Record<any, any> = {
    HEAD: ['UNB', 'UNH', 'BGM', 'DTM', 'PAI', 'ALI', 'IMD', 'FTX', 'GIR'],
    SG1: ['RFF', 'DTM'],
    SG2: ["NAD", "LOC", "FII"],
    SG3: ["RFF", "DTM"],
    SG4: ["DOC", "DTM"],
    SG5: ["CTA", "COM"],
    SG6: ["TAX", "MOA", "LOC"],
    SG7: ["CUX", "PTC", "DTM"],
    SG8: ["PYT", "DTM", "PCD"],
    SG9: ["MOA", "GIR", "RJL"],
    SG10: ["TDT"],
    SG11: ["LOC", "DTM"],
    SG12: ["TOD", "LOC"],
    SG13: ["PAC", "MEA"],
    SG14: ["PCI", "RFF", "DTM", "GIN"],
    SG15: ["EQD", "HAN", "MEA", "FTX"],
    SG16: ["SCC", "FTX", "RFF"],
    SG17: ["QTY", "DTM"],
    SG18: ["APR", "DTM", "RNG"],
    SG19: ["ALC", "ALI", "DTM"],
    SG20: ["QTY", "RNG"],
    SG21: ["PCD", "RNG"],
    SG22: ["MOA", "RNG"],
    SG23: ["RTE", "RNG"],
    SG24: ["TAX", "MOA"],
    SG25: ["RCS", "RFF", "DTM", "FTX"],
    SG26: ["DGS", "FTX"],
    SG27: ["CTA", "COM"],
    SG28: ["EFI", "CED", "COM", "RFF", "DTM", "QTY"],
    SG29: ["LIN", "PIA", "IMD", "MEA", "QTY", "PCD", "ALI", "DTM", "MOA", "GEI", "GIN", "GIR", "QVR", "DOC", "PAI", "MTD", "FTX"],
    SG30: ["CCI", "CAV", "MEA"],
    SG31: ["PYT", "DTM", "PCD"],
    SG32: ["MOA", "GIR"],
    SG33: ["PRI", "CUX", "APR", "RNG", "DTM"],
    SG34: ["RFF", "DTM", "GEI", "MOA"],
    SG35: ['PAC', 'MEA', 'QTY', 'DTM'],
    SG36: ['RFF', 'DTM'],
    SG37: ['PCI', 'RFF', 'DTM', 'GIN'],
    SG38: ['LOC', 'PCD', 'DTM'],
    SG39: ['QTY', 'STS'],
    SG40: ['TAX', 'MOA', 'LOC'],
    SG41: ['NAD', 'LOC', 'FII'],
    SG42: ['RFF', 'DTM'],
    SG43: ['DOC', 'DTM'],
    SG44: ['CTA', 'COM'],
    SG45: ['ALC', 'ALI', 'DTM'],
    SG46: ['QTY', 'RNG'],
    SG47: ['PCD', 'RNG'],
    SG48: ['MOA', 'RNG'],
    SG49: ['RTE', 'RNG'],
    SG50: ['TAX', 'MOA'],
    SG51: ['TDT'],
    SG52: ['LOC', 'DTM'],
    SG53: ['TOD', 'LOC'],
    SG54: ['EQD', 'HAN', 'MEA', 'FTX'],
    SG55: ['SCC', 'FTX', 'RFF'],
    SG56: ['QTY', 'DTM'],
    SG57: ['RCS', 'RFF', 'DTM', 'FTX'],
    SG58: ['STG'],
    SG59: ['QTY', 'MOA'],
    SG60: ['DGS', 'FTX'],
    SG61: ['CTA', 'COM'],
    SG62: ['EFI', 'CED', 'COM', 'RFF', 'DTM', 'QTY'],
    SG63: ['ALC', 'ALI', 'MOA'],
    SUM: ['UNS', 'MOA', 'CNT'],
    LAST: ['UNT']
}

let temp: any = -1;

export function group(arr: any) {
    const res: any = {};
    let newObj: any = {};
    for (let obj of arr) {
        const code: string = obj.code;
        const mandatoryFieldsArray: any = mandatoryFields[code];
        if (mandatoryFieldsArray && mandatoryFieldsArray.length === 1) {
            if (Object.keys(newObj).length === 0) {
                newObj[mandatoryFieldsArray[0]] = [obj];
            }
            else {
                const new_key = Object.keys(newObj);
                res[new_key[0]] = newObj[new_key[0]];
                newObj = {};
                newObj[mandatoryFieldsArray[0]] = [obj];
                temp = mandatoryFieldsArray[0];
            }
            
        }
        else if (mandatoryFieldsArray === undefined) {
            const keys = Object.keys(newObj);
            newObj[keys[0]].push(obj);
        }
        else {
            if (temp === 'HEAD') {
                if (Object.keys(newObj).length === 0) {
                    newObj[mandatoryFieldsArray[0]] = [obj];
                }
                else {
                    const new_key = Object.keys(newObj);
                    res[new_key[0]] = newObj[new_key[0]];
                    newObj = {};
                    newObj[mandatoryFieldsArray[0]] = [obj];
                    temp = mandatoryFieldsArray[0];
                }
            }
            else {
                
            }

        }
    }
}

const obj = {
    head: {
        UNB: {},
        UNH: {}
    },
    SG1: {
        RFF: {},
        DTM: {}
    }
}