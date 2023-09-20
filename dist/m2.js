"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODE = exports.BEG = void 0;
const mappingService_1 = require("./mappingService");
function BEG(name, elements) {
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
    (0, mappingService_1.addPropertiesX12)(BeginningSegmentForPurchaseOrder, mappings);
    return BeginningSegmentForPurchaseOrder;
}
exports.BEG = BEG;
function CODE(name, elements) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "",
            source: elements[0]
        },
    ];
    (0, mappingService_1.addPropertiesX12)(SegmentName, mappings);
    return SegmentName;
}
exports.CODE = CODE;
