"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODE = exports.PO1 = exports.N3 = exports.N2 = exports.N1 = exports.N9 = exports.CTP = exports.FOB = exports.TAX = exports.REF = exports.DTM = exports.PER = exports.CUR = exports.BEG = void 0;
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
    (0, mappingService_1.addProperties)(BeginningSegmentForPurchaseOrder, mappings);
    return BeginningSegmentForPurchaseOrder;
}
exports.BEG = BEG;
function CUR(name, elements) {
    const Currency = {
        code: name
    };
    const mappings = [
        {
            target: "EntityIdentifierCode",
            source: elements[0]
        },
        {
            target: "CurrencyCode",
            source: elements[1]
        },
        {
            target: "ExchangeRate",
            source: elements[2]
        },
        {
            target: "EntityIdentifierCode",
            source: elements[3]
        },
        {
            target: "CurrencyCode",
            source: elements[4]
        },
        {
            target: "CurrencyMarketOrExchangeCode",
            source: elements[5]
        },
        {
            target: "DateOrTimeQualifier",
            source: elements[6]
        },
        {
            target: "Date",
            source: elements[7]
        },
        {
            target: "Time",
            source: elements[8]
        },
        {
            target: "DateOrTimeQualifier",
            source: elements[9]
        },
        {
            target: "Date",
            source: elements[10]
        },
        {
            target: "Time",
            source: elements[11]
        },
        {
            target: "DateOrTimeQualifier",
            source: elements[12]
        },
        {
            target: "Date",
            source: elements[13]
        },
        {
            target: "Time",
            source: elements[14]
        },
        {
            target: "DateOrTimeQualifier",
            source: elements[15]
        },
        {
            target: "Date",
            source: elements[16]
        },
        {
            target: "Time",
            source: elements[17]
        },
        {
            target: "DateOrTimeQualifier",
            source: elements[18]
        },
        {
            target: "Date",
            source: elements[19]
        },
        {
            target: "Time",
            source: elements[20]
        },
    ];
    (0, mappingService_1.addProperties)(Currency, mappings);
    return Currency;
}
exports.CUR = CUR;
function PER(name, elements) {
    const AdministrativeCommunicationsContact = {
        code: name
    };
    const mappings = [
        {
            target: "ContactFunctionCode",
            source: elements[0]
        },
        {
            target: "Name",
            source: elements[1]
        },
        {
            target: "CommunicationNumberQualifier",
            source: elements[2]
        },
        {
            target: "CommunicationNumber",
            source: elements[3]
        },
        {
            target: "CommunicationNumberQualifier",
            source: elements[4]
        },
        {
            target: "CommunicationNumber",
            source: elements[5]
        },
        {
            target: "CommunicationNumberQualifier",
            source: elements[6]
        },
        {
            target: "CommunicationNumber",
            source: elements[7]
        },
        {
            target: "ContactInquiryReference",
            source: elements[8]
        }
    ];
    (0, mappingService_1.addProperties)(AdministrativeCommunicationsContact, mappings);
    return AdministrativeCommunicationsContact;
}
exports.PER = PER;
function DTM(name, elements) {
    const DateTimeReference = {
        code: name
    };
    const mappings = [
        {
            target: "DateTimeQualifier",
            source: elements[0]
        },
        {
            target: "Date",
            source: elements[1]
        },
        {
            target: "Time",
            source: elements[2]
        },
        {
            target: "TimeCode",
            source: elements[3]
        },
        {
            target: "DateTimePeriodFormatQualifier",
            source: elements[4]
        },
        {
            target: "DateTimePeriod",
            source: elements[5]
        }
    ];
    (0, mappingService_1.addProperties)(DateTimeReference, mappings);
    return DateTimeReference;
}
exports.DTM = DTM;
function REF(name, elements) {
    const ReferenceInformation = {
        code: name
    };
    const mappings = [
        {
            target: "ReferenceIdentificationQualifier",
            source: elements[0]
        },
        {
            target: "ReferenceIdentification",
            source: elements[1]
        },
        {
            target: "Description",
            source: elements[2]
        },
        {
            target: "ReferenceIdentifier",
            source: elements[3],
            subkeys: ['ReferenceIdentificationQualifier', 'ReferenceIdentification', 'ReferenceIdentificationQualifier', 'ReferenceIdentification', 'ReferenceIdentificationQualifier', 'ReferenceIdentification']
        }
    ];
    (0, mappingService_1.addProperties)(ReferenceInformation, mappings);
    return ReferenceInformation;
}
exports.REF = REF;
function TAX(name, elements) {
    const TaxReference = {
        code: name
    };
    const mappings = [
        {
            target: "TaxIdentificationNumber",
            source: elements[0]
        },
        {
            target: "LocationQualifier",
            source: elements[1]
        },
        {
            target: "LocationIdentifier",
            source: elements[2]
        },
        {
            target: "LocationQualifier",
            source: elements[3]
        },
        {
            target: "LocationIdentifier",
            source: elements[4]
        },
        {
            target: "LocationQualifier",
            source: elements[5]
        },
        {
            target: "LocationIdentifier",
            source: elements[6]
        },
        {
            target: "LocationQualifier",
            source: elements[7]
        },
        {
            target: "LocationIdentifier",
            source: elements[8]
        },
        {
            target: "LocationQualifier",
            source: elements[9]
        },
        {
            target: "LocationIdentifier",
            source: elements[10]
        },
        {
            target: "TaxExemptCode",
            source: elements[11]
        },
        {
            target: "CustomsEntryTypeGroupCode",
            source: elements[12]
        }
    ];
    (0, mappingService_1.addProperties)(TaxReference, mappings);
    return TaxReference;
}
exports.TAX = TAX;
function FOB(name, elements) {
    const FOBRelatedInstructions = {
        code: name
    };
    const mappings = [
        {
            target: "ShipmentMethodOfPaymentCode",
            source: elements[0]
        },
        {
            target: "LocationQualifier",
            source: elements[1]
        },
        {
            target: "Description",
            source: elements[2]
        },
        {
            target: "TransportationTermsQualifierCode",
            source: elements[3]
        },
        {
            target: "TransportationTermsCode",
            source: elements[4]
        },
        {
            target: "LocationQualifier",
            source: elements[5]
        },
        {
            target: "Description",
            source: elements[6]
        },
        {
            target: "RiskOfLossCode",
            source: elements[7]
        },
        {
            target: "Description",
            source: elements[8]
        }
    ];
    (0, mappingService_1.addProperties)(FOBRelatedInstructions, mappings);
    return FOBRelatedInstructions;
}
exports.FOB = FOB;
function CTP(name, elements) {
    const PricingInformation = {
        code: name
    };
    const mappings = [
        {
            target: "ClassOfTradeCode",
            source: elements[0]
        },
        {
            target: "PriceIdentifierCode",
            source: elements[1]
        },
        {
            target: "UnitPrice",
            source: elements[2]
        },
        {
            target: "Quantity",
            source: elements[3]
        },
        {
            target: "CompositeUnitOfMeasure",
            source: elements[4],
            subkeys: ['UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier']
        },
        {
            target: "PriceMultiplierQualifier",
            source: elements[5]
        },
        {
            target: "Multiplier",
            source: elements[6]
        },
        {
            target: "MonetaryAmount",
            source: elements[7]
        },
        {
            target: "BasisOfUnitPriceCode",
            source: elements[8]
        },
        {
            target: "ConditionValue",
            source: elements[9]
        },
        {
            target: "MultiplePriceQuantity",
            source: elements[10]
        }
    ];
    (0, mappingService_1.addProperties)(PricingInformation, mappings);
    return PricingInformation;
}
exports.CTP = CTP;
function N9(name, elements) {
    const ExtendedReferenceInformation = {
        code: name
    };
    const mappings = [
        {
            target: "ReferenceIdentificationQualifier",
            source: elements[0]
        },
        {
            target: "ReferenceIdentification",
            source: elements[1]
        },
        {
            target: "FreeFormDescription",
            source: elements[2]
        },
        {
            target: "Date",
            source: elements[3]
        },
        {
            target: "Time",
            source: elements[4]
        },
        {
            target: "TimeCode",
            source: elements[5]
        },
        {
            target: "ReferenceIdentifier",
            source: elements[6],
            subkeys: ['ReferenceIdentificationQualifier', 'ReferenceIdentification', 'ReferenceIdentificationQualifier', 'ReferenceIdentification', 'ReferenceIdentificationQualifier', 'ReferenceIdentification']
        }
    ];
    (0, mappingService_1.addProperties)(ExtendedReferenceInformation, mappings);
    return ExtendedReferenceInformation;
}
exports.N9 = N9;
function N1(name, elements) {
    const PartyIdentification = {
        code: name
    };
    const mappings = [
        {
            target: "EntityIdentifierCode",
            source: elements[0]
        },
        {
            target: "Name",
            source: elements[1]
        },
        {
            target: "IdentificationCodeQualifier",
            source: elements[2]
        },
        {
            target: "IdentificationCode",
            source: elements[3]
        },
        {
            target: "EntityRelationshipCode",
            source: elements[4]
        },
        {
            target: "EntityIdentifierCode",
            source: elements[5]
        }
    ];
    (0, mappingService_1.addProperties)(PartyIdentification, mappings);
    return PartyIdentification;
}
exports.N1 = N1;
function N2(name, elements) {
    const AdditionalNameInformation = {
        code: name
    };
    const mappings = [
        {
            target: "Name",
            source: elements[0]
        },
        {
            target: "Name",
            source: elements[1]
        }
    ];
    (0, mappingService_1.addProperties)(AdditionalNameInformation, mappings);
    return AdditionalNameInformation;
}
exports.N2 = N2;
function N3(name, elements) {
    const PartyLocation = {
        code: name
    };
    const mappings = [
        {
            target: "AddressInformation",
            source: elements[0]
        },
        {
            target: "AddressInformation",
            source: elements[1]
        }
    ];
    (0, mappingService_1.addProperties)(PartyLocation, mappings);
    return PartyLocation;
}
exports.N3 = N3;
function PO1(name, elements) {
    const BaselineItemData = {
        code: name
    };
    const mappings = [
        {
            target: "AssignedIdentification",
            source: elements[0]
        },
        {
            target: "Quantity",
            source: elements[1]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[2]
        },
        {
            target: "UnitPrice",
            source: elements[3]
        },
        {
            target: "BasisOfUnitPriceCode",
            source: elements[4]
        },
        {
            target: "ProductServiceIDQualifier1",
            source: elements[5]
        },
        {
            target: "ProductServiceID1",
            source: elements[6]
        },
        {
            target: "ProductServiceIDQualifier2",
            source: elements[7]
        },
        {
            target: "ProductServiceID2",
            source: elements[8]
        },
        {
            target: "ProductServiceIDQualifier3",
            source: elements[9]
        },
        {
            target: "ProductServiceID3",
            source: elements[10]
        },
        {
            target: "ProductServiceIDQualifier4",
            source: elements[11]
        },
        {
            target: "ProductServiceID4",
            source: elements[12]
        },
        {
            target: "ProductServiceIDQualifier5",
            source: elements[13]
        },
        {
            target: "ProductServiceID5",
            source: elements[14]
        },
        {
            target: "ProductServiceIDQualifier6",
            source: elements[15]
        },
        {
            target: "ProductServiceID6",
            source: elements[16]
        },
        {
            target: "ProductServiceIDQualifier7",
            source: elements[17]
        },
        {
            target: "ProductServiceID7",
            source: elements[18]
        },
        {
            target: "ProductServiceIDQualifier8",
            source: elements[19]
        },
        {
            target: "ProductServiceID8",
            source: elements[20]
        },
        {
            target: "ProductServiceIDQualifier9",
            source: elements[21]
        },
        {
            target: "ProductServiceID9",
            source: elements[22]
        },
        {
            target: "ProductServiceIDQualifier10",
            source: elements[23]
        },
        {
            target: "ProductServiceID10",
            source: elements[24]
        }
    ];
    (0, mappingService_1.addProperties)(BaselineItemData, mappings);
    return BaselineItemData;
}
exports.PO1 = PO1;
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
    (0, mappingService_1.addProperties)(SegmentName, mappings);
    return SegmentName;
}
exports.CODE = CODE;
