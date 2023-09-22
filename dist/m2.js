"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODE = exports.IEA = exports.GE = exports.SE = exports.PWK = exports.MEA = exports.PID = exports.SI = exports.LIN = exports.INC = exports.DIS = exports.ITD = exports.SAC = exports.TC2 = exports.CSH = exports.PAM = exports.CTT = exports.TD5 = exports.MSG = exports.N4 = exports.PO1 = exports.N3 = exports.N2 = exports.N1 = exports.N9 = exports.CTP = exports.FOB = exports.TAX = exports.REF = exports.DTM = exports.PER = exports.CUR = exports.BEG = exports.ST = exports.GS = exports.ISA = void 0;
const mappingService_1 = require("./mappingService");
function ISA(elements) {
    const InterchangeControlHeader = {
        code: "ISA"
    };
    const mappings = [
        {
            target: "AuthorizationInformationQualifier",
            source: elements[0]
        },
        {
            target: "AuthorizationInformation",
            source: elements[1]
        },
        {
            target: "SecurityInformationQualifier",
            source: elements[2]
        },
        {
            target: "SecurityInformation",
            source: elements[3]
        },
        {
            target: "InterchangeIDQualifier",
            source: elements[4]
        },
        {
            target: "InterchangeSenderID",
            source: elements[5]
        },
        {
            target: "InterchangeIDQualifier",
            source: elements[6]
        },
        {
            target: "InterchangeReceiverID",
            source: elements[7]
        },
        {
            target: "InterchangeDate",
            source: elements[8]
        },
        {
            target: "InterchangeTime",
            source: elements[9]
        },
        {
            target: "RepetitionSeparator",
            source: elements[10]
        },
        {
            target: "InterchangeControlVersionNumberCode",
            source: elements[11]
        },
        {
            target: "InterchangeControlNumber",
            source: elements[12]
        },
        {
            target: "AcknowledgmentRequestedCode",
            source: elements[13]
        },
        {
            target: "InterchangeUsageIndicatorCode",
            source: elements[14]
        },
        {
            target: "ComponentElementSeparator",
            source: elements[15]
        }
    ];
    (0, mappingService_1.setProperties)(InterchangeControlHeader, mappings);
    return InterchangeControlHeader;
}
exports.ISA = ISA;
function GS(elements) {
    const FunctionalGroupHeader = {
        code: 'GS'
    };
    const mappings = [
        {
            target: "FunctionalIdentifierCode",
            source: elements[0]
        },
        {
            target: "ApplicationSendersCode",
            source: elements[1]
        },
        {
            target: "ApplicationReceiversCode",
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
            target: "GroupControlNumber",
            source: elements[5]
        },
        {
            target: "ResponsibleAgencyCode",
            source: elements[6]
        },
        {
            target: "VersionReleaseIndustryIdentifierCode",
            source: elements[7]
        }
    ];
    (0, mappingService_1.setProperties)(FunctionalGroupHeader, mappings);
    return FunctionalGroupHeader;
}
exports.GS = GS;
function ST(elements) {
    const TransactionSetHeader = {
        code: 'ST'
    };
    const mappings = [
        {
            target: "TransactionSetIdentifierCode",
            source: elements[0]
        },
        {
            target: "TransactionSetControlNumber",
            source: elements[1]
        },
        {
            target: "ImplementationConventionReference",
            source: elements[2]
        }
    ];
    (0, mappingService_1.setProperties)(TransactionSetHeader, mappings);
    return TransactionSetHeader;
}
exports.ST = ST;
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
    (0, mappingService_1.setProperties)(BeginningSegmentForPurchaseOrder, mappings);
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
    (0, mappingService_1.setProperties)(Currency, mappings);
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
    (0, mappingService_1.setProperties)(AdministrativeCommunicationsContact, mappings);
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
    (0, mappingService_1.setProperties)(DateTimeReference, mappings);
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
    (0, mappingService_1.setProperties)(ReferenceInformation, mappings);
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
    (0, mappingService_1.setProperties)(TaxReference, mappings);
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
    (0, mappingService_1.setProperties)(FOBRelatedInstructions, mappings);
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
    (0, mappingService_1.setProperties)(PricingInformation, mappings);
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
    (0, mappingService_1.setProperties)(ExtendedReferenceInformation, mappings);
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
    (0, mappingService_1.setProperties)(PartyIdentification, mappings);
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
    (0, mappingService_1.setProperties)(AdditionalNameInformation, mappings);
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
    (0, mappingService_1.setProperties)(PartyLocation, mappings);
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
    (0, mappingService_1.setProperties)(BaselineItemData, mappings);
    return BaselineItemData;
}
exports.PO1 = PO1;
function N4(name, elements) {
    const GeographicLocation = {
        code: name
    };
    const mappings = [
        {
            target: "",
            source: elements[0]
        },
    ];
    (0, mappingService_1.setProperties)(GeographicLocation, mappings);
    return GeographicLocation;
}
exports.N4 = N4;
function MSG(name, elements) {
    const MessageText = {
        code: name
    };
    const mappings = [
        {
            target: "FreeFormMessageText",
            source: elements[0]
        },
        {
            target: "PrinterCarriageControlCode",
            source: elements[1]
        },
        {
            target: "Number",
            source: elements[2]
        },
    ];
    (0, mappingService_1.setProperties)(MessageText, mappings);
    return MessageText;
}
exports.MSG = MSG;
function TD5(name, elements) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "RoutingSequenceCode",
            source: elements[0]
        },
        {
            target: "IdentificationCodeQualifier",
            source: elements[1]
        },
        {
            target: "IdentificationCode",
            source: elements[2]
        },
        {
            target: "TransportationMethodTypeCode",
            source: elements[3]
        },
        {
            target: "Routing",
            source: elements[4]
        },
        {
            target: "ShipmentOrderStatusCode",
            source: elements[5]
        },
        {
            target: "LocationQualifier",
            source: elements[6]
        },
        {
            target: "LocationIdentifier",
            source: elements[7]
        },
        {
            target: "TransitDirectionCode",
            source: elements[8]
        },
        {
            target: "TransitTimeDirectionQualifier",
            source: elements[9]
        },
        {
            target: "TransitTime",
            source: elements[10]
        },
        {
            target: "ServiceLevelCode",
            source: elements[11]
        },
        {
            target: "ServiceLevelCode",
            source: elements[12]
        },
        {
            target: "ServiceLevelCode",
            source: elements[13]
        },
        {
            target: "CountryCode",
            source: elements[14]
        }
    ];
    (0, mappingService_1.setProperties)(SegmentName, mappings);
    return SegmentName;
}
exports.TD5 = TD5;
function CTT(name, elements) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "NumberOfLineItems",
            source: elements[0]
        },
        {
            target: "HashTotal",
            source: elements[1]
        },
        {
            target: "Weight",
            source: elements[2]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[3]
        },
        {
            target: "Volume",
            source: elements[4]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[5]
        },
        {
            target: "Description",
            source: elements[6]
        }
    ];
    (0, mappingService_1.setProperties)(SegmentName, mappings);
    return SegmentName;
}
exports.CTT = CTT;
function PAM(name, elements) {
    const PeriodAmount = {
        code: name
    };
    const mappings = [
        {
            target: "QuantityQualifier",
            source: elements[0]
        },
        {
            target: "Quantity",
            source: elements[1]
        },
        {
            target: "CompositeUnitOfMeasure",
            source: elements[2],
            subkeys: ['UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier']
        },
        {
            target: "AmountQualifierCode",
            source: elements[3]
        },
        {
            target: "MonetaryAmount",
            source: elements[4]
        },
        {
            target: "UnitOfTimePeriodOrIntervalCode",
            source: elements[5]
        },
        {
            target: "DateTimeQualifier",
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
            target: "DateTimeQualifier",
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
            target: "PercentQualifier",
            source: elements[12]
        },
        {
            target: "PercentageAsDecimal",
            source: elements[13]
        },
        {
            target: "YesOrNoConditionOrResponseCode",
            source: elements[14]
        }
    ];
    (0, mappingService_1.setProperties)(PeriodAmount, mappings);
    return PeriodAmount;
}
exports.PAM = PAM;
function CSH(name, elements) {
    const SalesRequirements = {
        code: name
    };
    const mappings = [
        {
            target: "SalesRequirementCode",
            source: elements[0]
        },
        {
            target: "ActionCode",
            source: elements[1]
        },
        {
            target: "Amount",
            source: elements[2]
        },
        {
            target: "AccountNumber",
            source: elements[3]
        },
        {
            target: "Date",
            source: elements[4]
        },
        {
            target: "AgencyQualifierCode",
            source: elements[5]
        },
        {
            target: "SpecialServicesCode",
            source: elements[6]
        },
        {
            target: "ProductServiceSubstitutionCode",
            source: elements[7]
        },
        {
            target: "PercentageAsDecimal",
            source: elements[8]
        },
        {
            target: "PercentQualifier",
            source: elements[9]
        }
    ];
    (0, mappingService_1.setProperties)(SalesRequirements, mappings);
    return SalesRequirements;
}
exports.CSH = CSH;
function TC2(name, elements) {
    const Commodity = {
        code: name
    };
    const mappings = [
        {
            target: "CommodityCodeQualifier",
            source: elements[0]
        },
        {
            target: "CommodityCode",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(Commodity, mappings);
    return Commodity;
}
exports.TC2 = TC2;
function SAC(name, elements) {
    const ServicePromotionAllowanceOrChargeInformation = {
        code: name
    };
    const mappings = [
        {
            target: "AllowanceOrChargeIndicatorCode",
            source: elements[0]
        },
        {
            target: "ServicePromotionAllowanceOrChargeCode",
            source: elements[1]
        },
        {
            target: "AgencyQualifierCode",
            source: elements[2]
        },
        {
            target: "AgencyServicePromotionAllowanceOrChargeCode",
            source: elements[3]
        },
        {
            target: "Amount",
            source: elements[4]
        },
        {
            target: "AllowanceChargePercentQualifier",
            source: elements[5]
        },
        {
            target: "PercentDecimalFormat",
            source: elements[6]
        },
        {
            target: "Rate",
            source: elements[7]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[8]
        },
        {
            target: "Quantity",
            source: elements[9]
        },
        {
            target: "Quantity",
            source: elements[10]
        },
        {
            target: "AllowanceOrChargeMethodOfHandlingCode",
            source: elements[11]
        },
        {
            target: "ReferenceIdentification",
            source: elements[12]
        },
        {
            target: "OptionNumber",
            source: elements[13]
        },
        {
            target: "Description",
            source: elements[14]
        },
        {
            target: "LanguageCode",
            source: elements[15]
        }
    ];
    (0, mappingService_1.setProperties)(ServicePromotionAllowanceOrChargeInformation, mappings);
    return ServicePromotionAllowanceOrChargeInformation;
}
exports.SAC = SAC;
function ITD(name, elements) {
    const TermsOfSaleOrDeferredTermsOfSale = {
        code: name
    };
    const mappings = [
        {
            target: "TermsTypeCode",
            source: elements[0]
        },
        {
            target: "TermsBasisDateCode",
            source: elements[1]
        },
        {
            target: "TermsDiscountPercent",
            source: elements[2]
        },
        {
            target: "TermsDiscountDueDate",
            source: elements[3]
        },
        {
            target: "TermsDiscountDaysDue",
            source: elements[4]
        },
        {
            target: "TermsNetDueDate",
            source: elements[5]
        },
        {
            target: "TermsNetDays",
            source: elements[6]
        },
        {
            target: "TermsDiscountAmount",
            source: elements[7]
        },
        {
            target: "TermsDeferredDueDate",
            source: elements[8]
        },
        {
            target: "DeferredAmountDue",
            source: elements[9]
        },
        {
            target: "PercentOfInvoicePayable",
            source: elements[10]
        },
        {
            target: "Description",
            source: elements[11]
        },
        {
            target: "DayOfMonth",
            source: elements[12]
        },
        {
            target: "PaymentMethodTypeCode",
            source: elements[13]
        },
        {
            target: "PercentageAsDecimal",
            source: elements[14]
        }
    ];
    (0, mappingService_1.setProperties)(TermsOfSaleOrDeferredTermsOfSale, mappings);
    return TermsOfSaleOrDeferredTermsOfSale;
}
exports.ITD = ITD;
function DIS(name, elements) {
    const DiscountDetail = {
        code: name
    };
    const mappings = [
        {
            target: "DiscountTermsTypeCode",
            source: elements[0]
        },
        {
            target: "DiscountBaseQualifier",
            source: elements[1]
        },
        {
            target: "DiscountBaseValue",
            source: elements[2]
        },
        {
            target: "DiscountControlLimitQualifier",
            source: elements[3]
        },
        {
            target: "DiscountControlLimit",
            source: elements[4]
        },
        {
            target: "DiscountControlLimit",
            source: elements[5]
        }
    ];
    (0, mappingService_1.setProperties)(DiscountDetail, mappings);
    return DiscountDetail;
}
exports.DIS = DIS;
function INC(name, elements) {
    const InstallmentInformation = {
        code: name
    };
    const mappings = [
        {
            target: "TermsTypeCode",
            source: elements[0]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[1],
            subkeys: ['UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier']
        },
        {
            target: "Quantity",
            source: elements[2]
        },
        {
            target: "Quantity",
            source: elements[3]
        },
        {
            target: "MonetaryAmount",
            source: elements[4]
        },
        {
            target: "AmountQualifierCode",
            source: elements[5]
        }
    ];
    (0, mappingService_1.setProperties)(InstallmentInformation, mappings);
    return InstallmentInformation;
}
exports.INC = INC;
function LIN(name, elements) {
    const ItemIdentification = {
        code: name
    };
    const mappings = [
        {
            target: "AssignedIdentification",
            source: elements[0]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[1]
        },
        {
            target: "ProductServiceID",
            source: elements[2]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[3]
        },
        {
            target: "ProductServiceID",
            source: elements[4]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[5]
        },
        {
            target: "ProductServiceID",
            source: elements[6]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[7]
        },
        {
            target: "ProductServiceID",
            source: elements[8]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[9]
        },
        {
            target: "ProductServiceID",
            source: elements[10]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[11]
        },
        {
            target: "ProductServiceID",
            source: elements[12]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[13]
        },
        {
            target: "ProductServiceID",
            source: elements[14]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[15]
        },
        {
            target: "ProductServiceID",
            source: elements[16]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[17]
        },
        {
            target: "ProductServiceID",
            source: elements[18]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[19]
        },
        {
            target: "ProductServiceID",
            source: elements[20]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[21]
        },
        {
            target: "ProductServiceID",
            source: elements[22]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[23]
        },
        {
            target: "ProductServiceID",
            source: elements[24]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[25]
        },
        {
            target: "ProductServiceID",
            source: elements[26]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[27]
        },
        {
            target: "ProductServiceID",
            source: elements[28]
        },
        {
            target: "ProductServiceIDQualifier",
            source: elements[29]
        },
        {
            target: "ProductServiceID",
            source: elements[30]
        }
    ];
    (0, mappingService_1.setProperties)(ItemIdentification, mappings);
    return ItemIdentification;
}
exports.LIN = LIN;
function SI(name, elements) {
    const ServiceCharacteristicIdentification = {
        code: name
    };
    const mappings = [
        {
            target: "AgencyQualifierCode",
            source: elements[0]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[1]
        },
        {
            target: "ProductServiceID",
            source: elements[2]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[3]
        },
        {
            target: "ProductServiceID",
            source: elements[4]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[5]
        },
        {
            target: "ProductServiceID",
            source: elements[6]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[7]
        },
        {
            target: "ProductServiceID",
            source: elements[8]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[9]
        },
        {
            target: "ProductServiceID",
            source: elements[10]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[11]
        },
        {
            target: "ProductServiceID",
            source: elements[12]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[13]
        },
        {
            target: "ProductServiceID",
            source: elements[14]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[15]
        },
        {
            target: "ProductServiceID",
            source: elements[16]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[17]
        },
        {
            target: "ProductServiceID",
            source: elements[18]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[19]
        },
        {
            target: "ProductServiceID",
            source: elements[20]
        }
    ];
    (0, mappingService_1.setProperties)(ServiceCharacteristicIdentification, mappings);
    return ServiceCharacteristicIdentification;
}
exports.SI = SI;
function PID(name, elements) {
    const ProductItemDescription = {
        code: name
    };
    const mappings = [
        {
            target: "ItemDescriptionTypeCode",
            source: elements[0]
        },
        {
            target: "ProductProcessCharacteristicCode",
            source: elements[1]
        },
        {
            target: "AgencyQualifierCode",
            source: elements[2]
        },
        {
            target: "ProductDescriptionCode",
            source: elements[3]
        },
        {
            target: "Description",
            source: elements[4]
        },
        {
            target: "SurfaceLayerPositionCode",
            source: elements[5]
        },
        {
            target: "SourceSubqualifier",
            source: elements[6]
        },
        {
            target: "YesOrNoConditionOrResponseCode",
            source: elements[7]
        },
        {
            target: "LanguageCode",
            source: elements[8]
        },
        {
            target: "ProductServiceConditionCode",
            source: elements[9]
        }
    ];
    (0, mappingService_1.setProperties)(ProductItemDescription, mappings);
    return ProductItemDescription;
}
exports.PID = PID;
function MEA(name, elements) {
    const Measurements = {
        code: name
    };
    const mappings = [
        {
            target: "MeasurementReferenceIDCode",
            source: elements[0]
        },
        {
            target: "MeasurementQualifier",
            source: elements[1]
        },
        {
            target: "MeasurementValue",
            source: elements[2]
        },
        {
            target: "CompositeUnitOfMeasure",
            source: elements[3],
            subkeys: ['UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier', 'UnitOrBasisForMeasurementCode', 'Exponent', 'Multiplier']
        },
        {
            target: "RangeMinimum",
            source: elements[4]
        },
        {
            target: "RangeMaximum",
            source: elements[5]
        },
        {
            target: "MeasurementSignificanceCode",
            source: elements[6]
        },
        {
            target: "MeasurementAttributeCode",
            source: elements[7]
        },
        {
            target: "SurfaceLayerPositionCode",
            source: elements[8]
        },
        {
            target: "MeasurementMethodOrDeviceCode",
            source: elements[9]
        },
        {
            target: "CodeListQualifierCode",
            source: elements[10]
        },
        {
            target: "IndustryCode",
            source: elements[11]
        }
    ];
    (0, mappingService_1.setProperties)(Measurements, mappings);
    return Measurements;
}
exports.MEA = MEA;
function PWK(name, elements) {
    const Paperwork = {
        code: name
    };
    const mappings = [
        {
            target: "ReportTypeCode",
            source: elements[0]
        },
        {
            target: "ReportTransmissionCode",
            source: elements[1]
        },
        {
            target: "ReportCopiesNeeded",
            source: elements[2]
        },
        {
            target: "EntityIdentifierCode",
            source: elements[3]
        },
        {
            target: "IdentificationCodeQualifier",
            source: elements[4]
        },
        {
            target: "IdentificationCode",
            source: elements[5]
        },
        {
            target: "Description",
            source: elements[6]
        },
        {
            target: "ActionsIndicated",
            source: elements[7]
        },
        {
            target: "RequestCategoryCode",
            source: elements[8]
        },
        {
            target: "CodeListQualifierCode",
            source: elements[9]
        },
        {
            target: "IndustryCode",
            source: elements[10]
        }
    ];
    (0, mappingService_1.setProperties)(Paperwork, mappings);
    return Paperwork;
}
exports.PWK = PWK;
function SE(elements) {
    const TransactionSetTrailer = {
        code: "SE"
    };
    const mappings = [
        {
            target: "NumberOfIncludedSegments",
            source: elements[0]
        },
        {
            target: "TransactionSetControlNumber",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(TransactionSetTrailer, mappings);
    return TransactionSetTrailer;
}
exports.SE = SE;
function GE(elements) {
    const FunctionalGroupTrailer = {
        code: "GE"
    };
    const mappings = [
        {
            target: "NumbeOfTransactionSetsIncluded",
            source: elements[0]
        },
        {
            target: "GroupControlNumber",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(FunctionalGroupTrailer, mappings);
    return FunctionalGroupTrailer;
}
exports.GE = GE;
function IEA(elements) {
    const InterchangeControlTrailer = {
        code: "IEA"
    };
    const mappings = [
        {
            target: "NumberOfIncludedFunctionalGroups",
            source: elements[0]
        },
        {
            target: "InterchangeControlNumber",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(InterchangeControlTrailer, mappings);
    return InterchangeControlTrailer;
}
exports.IEA = IEA;
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
    (0, mappingService_1.setProperties)(SegmentName, mappings);
    return SegmentName;
}
exports.CODE = CODE;
