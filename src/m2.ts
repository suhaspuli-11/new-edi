import { addProperties, addPropertiesX12 } from './mappingService';

export function BEG(name: string, elements: any[][]): Record<any, any> {
    const BeginningSegmentForPurchaseOrder = {
        code: name
    };
    const mappings = [
        {
            target: "TransactionSetPurposeCode",
            source: elements[0],
        },
        {
            target: "PurchaseOrderTypeCode",
            source: elements[1],
        },
        {
            target: "PurchaseOrderNumber",
            source: elements[2],
        },
        {
            target: "ReleaseNumber",
            source: elements[3],
        },
        {
            target: "Date",
            source: elements[4]
        },
        {
            target: "ContractNumber",
            source: elements[5],
        },
        {
            target: "AcknowledgmentTypeCode",
            source: elements[6]
        },
        {
            target: "InvoiceTypeCode",
            source: elements[7]
        },
        {
            target: "ContractTypeCode",
            source: elements[8]
        },
        {
            target: "PurchaseCategoryCode",
            source: elements[9]
        },
        {
            target: "SecurityLevelCode",
            source: elements[10]
        },
        {
            target: "TransactionTypeCode",
            source: elements[11]
        }
    ];
    addPropertiesX12(BeginningSegmentForPurchaseOrder, mappings);
    return BeginningSegmentForPurchaseOrder;
}

export function CODE(name: string, elements: any[][]) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "",
            source: elements[0]
        },
    ]
    addPropertiesX12(SegmentName, mappings);
    return SegmentName;
}

