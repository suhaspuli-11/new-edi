"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NX2 = exports.FA2 = exports.PCT = exports.QTY = exports.CTB = exports.MAN = exports.TD3 = exports.LE = exports.LS = exports.IT8 = exports.YNQ = exports.PO3 = exports.CN1 = exports.G61 = exports.EFI = exports.AMT = exports.TXI = exports.TD4 = exports.PKG = exports.PWK = exports.MEA = exports.PID = exports.SI = exports.LIN = exports.INC = exports.DIS = exports.ITD = exports.SAC = exports.TC2 = exports.CSH = exports.PAM = exports.TD5 = exports.MSG = exports.N4 = exports.PO1 = exports.N3 = exports.N2 = exports.N1 = exports.N9 = exports.CTP = exports.FOB = exports.TAX = exports.REF = exports.DTM = exports.PER = exports.CUR = exports.BEG = exports.ST = exports.GS = exports.ISA = void 0;
exports.CODE = exports.IEA = exports.GE = exports.SE = exports.SDQ = exports.PO4 = exports.ADV = exports.CB1 = exports.LM = exports.IN2 = exports.FA1 = exports.MTX = exports.LDT = exports.TD1 = exports.CTT = exports.IT3 = exports.PAL = exports.SPI = exports.LQ = void 0;
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
function BEG(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(BeginningSegmentForPurchaseOrder, mappings, delimiter);
    return BeginningSegmentForPurchaseOrder;
}
exports.BEG = BEG;
function CUR(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(Currency, mappings, delimiter);
    return Currency;
}
exports.CUR = CUR;
function PER(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(AdministrativeCommunicationsContact, mappings, delimiter);
    return AdministrativeCommunicationsContact;
}
exports.PER = PER;
function DTM(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(DateTimeReference, mappings, delimiter);
    return DateTimeReference;
}
exports.DTM = DTM;
function REF(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(ReferenceInformation, mappings, delimiter);
    return ReferenceInformation;
}
exports.REF = REF;
function TAX(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(TaxReference, mappings, delimiter);
    return TaxReference;
}
exports.TAX = TAX;
function FOB(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(FOBRelatedInstructions, mappings, delimiter);
    return FOBRelatedInstructions;
}
exports.FOB = FOB;
function CTP(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(PricingInformation, mappings, delimiter);
    return PricingInformation;
}
exports.CTP = CTP;
function N9(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(ExtendedReferenceInformation, mappings, delimiter);
    return ExtendedReferenceInformation;
}
exports.N9 = N9;
function N1(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(PartyIdentification, mappings, delimiter);
    return PartyIdentification;
}
exports.N1 = N1;
function N2(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(AdditionalNameInformation, mappings, delimiter);
    return AdditionalNameInformation;
}
exports.N2 = N2;
function N3(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(PartyLocation, mappings, delimiter);
    return PartyLocation;
}
exports.N3 = N3;
function PO1(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(BaselineItemData, mappings, delimiter);
    return BaselineItemData;
}
exports.PO1 = PO1;
function N4(name, elements, delimiter) {
    const GeographicLocation = {
        code: name
    };
    const mappings = [
        {
            target: "CityName",
            source: elements[0]
        },
        {
            target: "StateOrProvinceCode",
            source: elements[1]
        },
        {
            target: "PostalCode",
            source: elements[2]
        },
        {
            target: "CountryCode",
            source: elements[3]
        },
        {
            target: "LocationQualifier",
            source: elements[4]
        },
        {
            target: "LocationIdentifier",
            source: elements[5]
        },
        {
            target: "CountrySubdivisionCode",
            source: elements[6]
        },
        {
            target: "PostalCodeFormatted",
            source: elements[7]
        }
    ];
    (0, mappingService_1.setProperties)(GeographicLocation, mappings, delimiter);
    return GeographicLocation;
}
exports.N4 = N4;
function MSG(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(MessageText, mappings, delimiter);
    return MessageText;
}
exports.MSG = MSG;
function TD5(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(SegmentName, mappings, delimiter);
    return SegmentName;
}
exports.TD5 = TD5;
function PAM(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(PeriodAmount, mappings, delimiter);
    return PeriodAmount;
}
exports.PAM = PAM;
function CSH(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(SalesRequirements, mappings, delimiter);
    return SalesRequirements;
}
exports.CSH = CSH;
function TC2(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(Commodity, mappings, delimiter);
    return Commodity;
}
exports.TC2 = TC2;
function SAC(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(ServicePromotionAllowanceOrChargeInformation, mappings, delimiter);
    return ServicePromotionAllowanceOrChargeInformation;
}
exports.SAC = SAC;
function ITD(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(TermsOfSaleOrDeferredTermsOfSale, mappings, delimiter);
    return TermsOfSaleOrDeferredTermsOfSale;
}
exports.ITD = ITD;
function DIS(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(DiscountDetail, mappings, delimiter);
    return DiscountDetail;
}
exports.DIS = DIS;
function INC(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(InstallmentInformation, mappings, delimiter);
    return InstallmentInformation;
}
exports.INC = INC;
function LIN(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(ItemIdentification, mappings, delimiter);
    return ItemIdentification;
}
exports.LIN = LIN;
function SI(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(ServiceCharacteristicIdentification, mappings, delimiter);
    return ServiceCharacteristicIdentification;
}
exports.SI = SI;
function PID(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(ProductItemDescription, mappings, delimiter);
    return ProductItemDescription;
}
exports.PID = PID;
function MEA(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(Measurements, mappings, delimiter);
    return Measurements;
}
exports.MEA = MEA;
function PWK(name, elements, delimiter) {
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
    (0, mappingService_1.setProperties)(Paperwork, mappings, delimiter);
    return Paperwork;
}
exports.PWK = PWK;
function PKG(name, elements, delimiter) {
    const MarkingPackagingLoading = {
        code: name
    };
    const mappings = [
        {
            target: "ItemDescriptionTypeCode",
            source: elements[0]
        },
        {
            target: "PackagingCharacteristicCode",
            source: elements[1]
        },
        {
            target: "AgencyQualifierCode",
            source: elements[2]
        },
        {
            target: "PackagingDescriptionCode",
            source: elements[3]
        },
        {
            target: "Description",
            source: elements[4]
        },
        {
            target: "UnitLoadOptionCode",
            source: elements[5]
        },
        {
            target: "LanguageCode",
            source: elements[6]
        }
    ];
    (0, mappingService_1.setProperties)(MarkingPackagingLoading, mappings, delimiter);
    return MarkingPackagingLoading;
}
exports.PKG = PKG;
function TD4(name, elements, delimiter) {
    const CarrierDetails = {
        code: name
    };
    const mappings = [
        {
            target: "SpecialHandlingCode",
            source: elements[0]
        },
        {
            target: "HazardousMaterialCodeQualifier",
            source: elements[1]
        },
        {
            target: "HazardousMaterialClassCode",
            source: elements[2]
        },
        {
            target: "Description",
            source: elements[3]
        },
        {
            target: "YesOrNoConditionOrResponseCode",
            source: elements[4]
        },
        {
            target: "HazardousMaterialShippingName ",
            source: elements[5]
        },
        {
            target: "DangerousGoodsPrimaryClassificationCode",
            source: elements[6]
        },
        {
            target: "PrimaryClassificationCode",
            source: elements[7]
        }
    ];
    (0, mappingService_1.setProperties)(CarrierDetails, mappings, delimiter);
    return CarrierDetails;
}
exports.TD4 = TD4;
function TXI(name, elements, delimiter) {
    const TaxInformation = {
        code: name
    };
    const mappings = [
        {
            target: "TaxTypeCode",
            source: elements[0]
        },
        {
            target: "MonetaryAmount",
            source: elements[1]
        },
        {
            target: "PercentageAsDecimal",
            source: elements[2]
        },
        {
            target: "TaxJurisdictionCodeQualifier",
            source: elements[3]
        },
        {
            target: "TaxJurisdictionCode",
            source: elements[4]
        },
        {
            target: "TaxExemptCode",
            source: elements[5]
        },
        {
            target: "RelationshipCode",
            source: elements[6]
        },
        {
            target: "DollarBasisForPercent",
            source: elements[7]
        },
        {
            target: "TaxIdentificationNumber",
            source: elements[8]
        },
        {
            target: "AssignedIdentification",
            source: elements[9]
        },
        {
            target: "Description",
            source: elements[10]
        },
        {
            target: "Quantity",
            source: elements[11]
        },
        {
            target: "NameLastOrOrganizationName",
            source: elements[12]
        }
    ];
    (0, mappingService_1.setProperties)(TaxInformation, mappings, delimiter);
    return TaxInformation;
}
exports.TXI = TXI;
function AMT(name, elements, delimiter) {
    const MonetaryAmountInformation = {
        code: name
    };
    const mappings = [
        {
            target: "AmountQualifierCode",
            source: elements[0]
        },
        {
            target: "MonetaryAmount",
            source: elements[1]
        },
        {
            target: "CreditOrDebitFlagCode",
            source: elements[2]
        }
    ];
    (0, mappingService_1.setProperties)(MonetaryAmountInformation, mappings, delimiter);
    return MonetaryAmountInformation;
}
exports.AMT = AMT;
function EFI(name, elements, delimiter) {
    const ElectronicFormatIdentification = {
        code: name
    };
    const mappings = [
        {
            target: "SecurityLevelCode",
            source: elements[0]
        },
        {
            target: "FreeFormMessageText",
            source: elements[1]
        },
        {
            target: "SecurityTechniqueCode",
            source: elements[2]
        },
        {
            target: "VersionIdentifier",
            source: elements[3]
        },
        {
            target: "ProgramIdentifier",
            source: elements[4]
        },
        {
            target: "VersionIdentifier",
            source: elements[5]
        },
        {
            target: "InterchangeFormat",
            source: elements[6]
        },
        {
            target: "VersionIdentifier",
            source: elements[7]
        },
        {
            target: "CompressionTechnique",
            source: elements[8]
        },
        {
            target: "DrawingSheetSizeCode",
            source: elements[9]
        },
        {
            target: "FileName",
            source: elements[10]
        },
        {
            target: "BlockType",
            source: elements[11]
        },
        {
            target: "RecordLength",
            source: elements[12]
        },
        {
            target: "BlockLength",
            source: elements[13]
        },
        {
            target: "VersionIdentifier",
            source: elements[14]
        },
        {
            target: "Filter ID Code",
            source: elements[15]
        }
    ];
    (0, mappingService_1.setProperties)(ElectronicFormatIdentification, mappings, delimiter);
    return ElectronicFormatIdentification;
}
exports.EFI = EFI;
function G61(name, elements, delimiter) {
    const Contact = {
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
            target: "ContactInquiryReference",
            source: elements[4]
        }
    ];
    (0, mappingService_1.setProperties)(Contact, mappings, delimiter);
    return Contact;
}
exports.G61 = G61;
function CN1(name, elements, delimiter) {
    const ContractInformation = {
        code: name
    };
    const mappings = [
        {
            target: "ContractTypeCode",
            source: elements[0]
        },
        {
            target: "MonetaryAmount",
            source: elements[1]
        },
        {
            target: "PercentDecimalFormat",
            source: elements[2]
        },
        {
            target: "ReferenceIdentification",
            source: elements[3]
        },
        {
            target: "TermsDiscountPercent",
            source: elements[4]
        },
        {
            target: "VersionIdentifier",
            source: elements[5]
        }
    ];
    (0, mappingService_1.setProperties)(ContractInformation, mappings, delimiter);
    return ContractInformation;
}
exports.CN1 = CN1;
function PO3(name, elements, delimiter) {
    const AdditionalItemDetail = {
        code: name
    };
    const mappings = [
        {
            target: "ChangeReasonCode",
            source: elements[0]
        },
        {
            target: "Date",
            source: elements[1]
        },
        {
            target: "PriceIdentifierCode",
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
            target: "Quantity",
            source: elements[5]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[6]
        },
        {
            target: "Description",
            source: elements[7]
        }
    ];
    (0, mappingService_1.setProperties)(AdditionalItemDetail, mappings, delimiter);
    return AdditionalItemDetail;
}
exports.PO3 = PO3;
function YNQ(name, elements, delimiter) {
    const YesOrNoQuestion = {
        code: name
    };
    const mappings = [
        {
            target: "ConditionIndicatorCode",
            source: elements[0]
        },
        {
            target: "YesOrNoConditionOrResponseCode",
            source: elements[1]
        },
        {
            target: "DateTimePeriodFormatQualifier",
            source: elements[2]
        },
        {
            target: "DateTimePeriod",
            source: elements[3]
        },
        {
            target: "FreeFormMessageText1",
            source: elements[4]
        },
        {
            target: "FreeFormMessageText2",
            source: elements[5]
        },
        {
            target: "FreeFormMessageText3",
            source: elements[6]
        },
        {
            target: "CodeListQualifierCode",
            source: elements[7]
        },
        {
            target: "IndustryCode",
            source: elements[8]
        },
        {
            target: "FreeFormMessageText4",
            source: elements[9]
        }
    ];
    (0, mappingService_1.setProperties)(YesOrNoQuestion, mappings, delimiter);
    return YesOrNoQuestion;
}
exports.YNQ = YNQ;
function IT8(name, elements, delimiter) {
    const ConditionsOfSale = {
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
            target: "ProductOrServiceSubstitutionCode",
            source: elements[6]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[7]
        },
        {
            target: "ProductOrServiceID",
            source: elements[8]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[9]
        },
        {
            target: "ProductOrServiceID",
            source: elements[10]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[11]
        },
        {
            target: "ProductOrServiceID",
            source: elements[12]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[13]
        },
        {
            target: "ProductOrServiceID",
            source: elements[14]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[15]
        },
        {
            target: "ProductOrServiceID",
            source: elements[16]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[17]
        },
        {
            target: "ProductOrServiceID",
            source: elements[18]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[19]
        },
        {
            target: "ProductOrServiceID",
            source: elements[20]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[21]
        },
        {
            target: "ProductOrServiceID",
            source: elements[22]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[23]
        },
        {
            target: "ProductOrServiceID",
            source: elements[24]
        },
        {
            target: "ProductOrServiceIDQualifier",
            source: elements[25]
        },
        {
            target: "ProductOrServiceID",
            source: elements[26]
        }
    ];
    (0, mappingService_1.setProperties)(ConditionsOfSale, mappings, delimiter);
    return ConditionsOfSale;
}
exports.IT8 = IT8;
function LS(name, elements, delimiter) {
    const LoopHeader = {
        code: name
    };
    const mappings = [
        {
            target: "LoopIdentifierCode",
            source: elements[0]
        }
    ];
    (0, mappingService_1.setProperties)(LoopHeader, mappings, delimiter);
    return LoopHeader;
}
exports.LS = LS;
function LE(name, elements, delimiter) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "LoopIdentifierCode",
            source: elements[0]
        },
    ];
    (0, mappingService_1.setProperties)(SegmentName, mappings, delimiter);
    return SegmentName;
}
exports.LE = LE;
function TD3(name, elements, delimiter) {
    const CarrierDetails = {
        code: name
    };
    const mappings = [
        {
            target: "EquipmentDescriptionCode",
            source: elements[0]
        },
        {
            target: "EquipmentInitial",
            source: elements[1]
        },
        {
            target: "EquipmentNumber",
            source: elements[2]
        },
        {
            target: "WeightQualifier",
            source: elements[3]
        },
        {
            target: "Weight",
            source: elements[4]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[5]
        },
        {
            target: "OwnershipCode",
            source: elements[6]
        },
        {
            target: "SealStatusCode",
            source: elements[7]
        },
        {
            target: "SealNumber",
            source: elements[8]
        },
        {
            target: "EquipmentTypeCode",
            source: elements[9]
        }
    ];
    (0, mappingService_1.setProperties)(CarrierDetails, mappings, delimiter);
    return CarrierDetails;
}
exports.TD3 = TD3;
function MAN(name, elements, delimiter) {
    const MarksAndNumbersInformation = {
        code: name
    };
    const mappings = [
        {
            target: "MarksAndNumbersQualifier1",
            source: elements[0]
        },
        {
            target: "MarksAndNumbers1",
            source: elements[1]
        },
        {
            target: "MarksAndNumbers2",
            source: elements[2]
        },
        {
            target: "MarksAndNumbersQualifier2",
            source: elements[3]
        },
        {
            target: "MarksAndNumbers3",
            source: elements[4]
        },
        {
            target: "MarksAndNumbers4",
            source: elements[5]
        }
    ];
    (0, mappingService_1.setProperties)(MarksAndNumbersInformation, mappings, delimiter);
    return MarksAndNumbersInformation;
}
exports.MAN = MAN;
function CTB(name, elements, delimiter) {
    const RestrictionsOrConditions = {
        code: name
    };
    const mappings = [
        {
            target: "RestrictionsOrConditionsQualifier",
            source: elements[0]
        },
        {
            target: "Description",
            source: elements[1]
        },
        {
            target: "QuantityQualifier",
            source: elements[2]
        },
        {
            target: "Quantity",
            source: elements[3]
        },
        {
            target: "AmountQualifierCode",
            source: elements[4]
        },
        {
            target: "Amount",
            source: elements[5]
        },
        {
            target: "CompositeUnitOfMeasure",
            source: elements[6],
            subkeys: ['UnitOrBasisForMeasurementCode1', 'Exponent1', 'Multiplier1', 'UnitOrBasisForMeasurementCode2', 'Exponent2', 'Multiplier2', 'UnitOrBasisForMeasurementCode3', 'Exponent3', 'Multiplier3', 'UnitOrBasisForMeasurementCode4', 'Exponent4', 'Multiplier4', 'UnitOrBasisForMeasurementCode5', 'Exponent5', 'Multiplier5']
        }
    ];
    (0, mappingService_1.setProperties)(RestrictionsOrConditions, mappings, delimiter);
    return RestrictionsOrConditions;
}
exports.CTB = CTB;
function QTY(name, elements, delimiter) {
    const QuantityInformation = {
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
        ,
        {
            target: "CompositeUnitOfMeasure",
            source: elements[2],
            subkeys: ['UnitOrBasisForMeasurementCode1', 'Exponent1', 'Multiplier1', 'UnitOrBasisForMeasurementCode2', 'Exponent2', 'Multiplier2', 'UnitOrBasisForMeasurementCode3', 'Exponent3', 'Multiplier3', 'UnitOrBasisForMeasurementCode4', 'Exponent4', 'Multiplier4', 'UnitOrBasisForMeasurementCode5', 'Exponent5', 'Multiplier5']
        },
        {
            target: "FreeFormInformation",
            source: elements[3]
        }
    ];
    (0, mappingService_1.setProperties)(QuantityInformation, mappings, delimiter);
    return QuantityInformation;
}
exports.QTY = QTY;
function PCT(name, elements, delimiter) {
    const PercentAmounts = {
        code: name
    };
    const mappings = [
        {
            target: "PercentQualifier",
            source: elements[0]
        },
        {
            target: "PercentageAsDecimal",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(PercentAmounts, mappings, delimiter);
    return PercentAmounts;
}
exports.PCT = PCT;
function FA2(name, elements, delimiter) {
    const AccountingData = {
        code: name
    };
    const mappings = [
        {
            target: "BreakdownStructureDetailCode",
            source: elements[0]
        },
        {
            target: "FinancialInformationCode",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(AccountingData, mappings, delimiter);
    return AccountingData;
}
exports.FA2 = FA2;
function NX2(name, elements, delimiter) {
    const LocationIDComponent = {
        code: name
    };
    const mappings = [
        {
            target: "AddressComponentQualifier1",
            source: elements[0]
        },
        {
            target: "AddressInformation1",
            source: elements[1]
        },
        {
            target: "CountyDesignatorCode",
            source: elements[2]
        },
        {
            target: "AddressComponentQualifier2",
            source: elements[3]
        },
        {
            target: "AddressInformation2",
            source: elements[4]
        }
    ];
    (0, mappingService_1.setProperties)(LocationIDComponent, mappings, delimiter);
    return LocationIDComponent;
}
exports.NX2 = NX2;
function LQ(name, elements, delimiter) {
    const IndustryCodeIdentification = {
        code: name
    };
    const mappings = [
        {
            target: "CodeListQualifierCode",
            source: elements[0]
        },
        {
            target: "IndustryCode",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(IndustryCodeIdentification, mappings, delimiter);
    return IndustryCodeIdentification;
}
exports.LQ = LQ;
function SPI(name, elements, delimiter) {
    const SpecificationIdentifier = {
        code: name
    };
    const mappings = [
        {
            target: "SecurityLevelCode1",
            source: elements[0]
        },
        {
            target: "ReferenceIdentificationQualifier",
            source: elements[1]
        },
        {
            target: "ReferenceIdentification",
            source: elements[2]
        },
        {
            target: "EntityTitle",
            source: elements[3]
        },
        {
            target: "EntityPurpose",
            source: elements[4]
        },
        {
            target: "EntityStatusCode",
            source: elements[5]
        },
        {
            target: "TransactionSetPurposeCode",
            source: elements[6]
        },
        {
            target: "ReportTypeCode",
            source: elements[7]
        },
        {
            target: "SecurityLevelCode2",
            source: elements[8]
        },
        {
            target: "AgencyQualifierCode",
            source: elements[9]
        },
        {
            target: "SourceSubqualifier",
            source: elements[10]
        },
        {
            target: "AssignedNumber",
            source: elements[11]
        },
        {
            target: "CertificationTypeCode",
            source: elements[12]
        },
        {
            target: "ProposalDataDetailIdentifierCode",
            source: elements[13]
        },
        {
            target: "HierarchicalStructureCode",
            source: elements[14]
        }
    ];
    (0, mappingService_1.setProperties)(SpecificationIdentifier, mappings, delimiter);
    return SpecificationIdentifier;
}
exports.SPI = SPI;
function PAL(name, elements, delimiter) {
    const PalletTypeAndLoadCharacteristics = {
        code: name
    };
    const mappings = [
        {
            target: "PalletTypeCode",
            source: elements[0]
        },
        {
            target: "PalletTiers",
            source: elements[1]
        },
        {
            target: "PalletBlocks",
            source: elements[2]
        },
        {
            target: "Pack",
            source: elements[3]
        },
        {
            target: "UnitWeight",
            source: elements[4]
        },
        {
            target: "UnitOrBasisForMeasurementCode1",
            source: elements[5]
        },
        {
            target: "Length",
            source: elements[6]
        },
        {
            target: "Width",
            source: elements[7]
        },
        {
            target: "Height",
            source: elements[8]
        },
        {
            target: "UnitOrBasisForMeasurementCode2",
            source: elements[9]
        },
        {
            target: "GrossWeightPerPack",
            source: elements[10]
        },
        {
            target: "UnitOrBasisForMeasurementCode3",
            source: elements[11]
        },
        {
            target: "GrossVolumePerPack",
            source: elements[12]
        },
        {
            target: "UnitOrBasisForMeasurementCode4",
            source: elements[13]
        },
        {
            target: "PalletExchangeCode",
            source: elements[14]
        },
        {
            target: "InnerPack",
            source: elements[15]
        },
        {
            target: "PalletStructureCode",
            source: elements[16]
        },
        {
            target: "Quantity",
            source: elements[17]
        },
        {
            target: "YesOrNoConditionOrResponseCode",
            source: elements[18]
        },
        {
            target: "Description",
            source: elements[19]
        }
    ];
    (0, mappingService_1.setProperties)(PalletTypeAndLoadCharacteristics, mappings, delimiter);
    return PalletTypeAndLoadCharacteristics;
}
exports.PAL = PAL;
function IT3(name, elements, delimiter) {
    const AdditionalItemData = {
        code: name
    };
    const mappings = [
        {
            target: "NumberOfUnitsShipped",
            source: elements[0]
        },
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[1]
        },
        {
            target: "ShipmentOrOrderStatusCode",
            source: elements[2]
        },
        {
            target: "QuantityDifference",
            source: elements[3]
        },
        {
            target: "ChangeReasonCode",
            source: elements[4]
        }
    ];
    (0, mappingService_1.setProperties)(AdditionalItemData, mappings, delimiter);
    return AdditionalItemData;
}
exports.IT3 = IT3;
function CTT(name, elements, delimiter) {
    const TransactionTotals = {
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
            target: "UnitOrBasisForMeasurementCode1",
            source: elements[3]
        },
        {
            target: "Volume",
            source: elements[4]
        },
        {
            target: "UnitOrBasisForMeasurementCode2",
            source: elements[5]
        },
        {
            target: "Description",
            source: elements[3]
        }
    ];
    (0, mappingService_1.setProperties)(TransactionTotals, mappings, delimiter);
    return TransactionTotals;
}
exports.CTT = CTT;
function TD1(name, elements, delimiter) {
    const CarrierDetails = {
        code: name
    };
    const mappings = [
        {
            target: "PackagingCode",
            source: elements[0]
        },
        {
            target: "LadingQuantity",
            source: elements[1]
        },
        {
            target: "CommodityCodeQualifier",
            source: elements[2]
        },
        {
            target: "CommodityCode",
            source: elements[3]
        },
        {
            target: "LadingDescription",
            source: elements[4]
        },
        {
            target: "WeightQualifier",
            source: elements[5]
        },
        {
            target: "Weight",
            source: elements[6]
        },
        {
            target: "UnitOrBasisForMeasurementCode1",
            source: elements[7]
        },
        {
            target: "Volume",
            source: elements[8]
        },
        {
            target: "UnitOrBasisForMeasurementCode2",
            source: elements[9]
        },
    ];
    (0, mappingService_1.setProperties)(CarrierDetails, mappings, delimiter);
    return CarrierDetails;
}
exports.TD1 = TD1;
function LDT(name, elements, delimiter) {
    const LeadTime = {
        code: name
    };
    const mappings = [
        {
            target: "LeadTimeCode",
            source: elements[0]
        },
        {
            target: "Quantity",
            source: elements[1]
        },
        {
            target: "UnitOfTimePeriodOrIntervalCode",
            source: elements[2]
        },
        {
            target: "Date",
            source: elements[3]
        }
    ];
    (0, mappingService_1.setProperties)(LeadTime, mappings, delimiter);
    return LeadTime;
}
exports.LDT = LDT;
function MTX(name, elements, delimiter) {
    const Text = {
        code: name
    };
    const mappings = [
        {
            target: "NoteReferenceCode",
            source: elements[0]
        },
        {
            target: "TextualData1",
            source: elements[1]
        },
        {
            target: "TextualData2",
            source: elements[2]
        },
        {
            target: "PrinterCarriageControlCode",
            source: elements[3]
        },
        {
            target: "Number",
            source: elements[4]
        },
        {
            target: "LanguageCode",
            source: elements[5]
        }
    ];
    (0, mappingService_1.setProperties)(Text, mappings, delimiter);
    return Text;
}
exports.MTX = MTX;
function FA1(name, elements, delimiter) {
    const TypeOfFinancialAccountingData = {
        code: name
    };
    const mappings = [
        {
            target: "AgencyQualifierCode",
            source: elements[0]
        },
        {
            target: "ServicePromotionAllowanceOrChargeCode",
            source: elements[1]
        },
        {
            target: "AllowanceOrChargeIndicatorCode",
            source: elements[2]
        },
    ];
    (0, mappingService_1.setProperties)(TypeOfFinancialAccountingData, mappings, delimiter);
    return TypeOfFinancialAccountingData;
}
exports.FA1 = FA1;
function IN2(name, elements, delimiter) {
    const IndividualNameStructureComponents = {
        code: name
    };
    const mappings = [
        {
            target: "NameComponentQualifier",
            source: elements[0]
        },
        {
            target: "Name1",
            source: elements[1]
        },
        {
            target: "Name2",
            source: elements[2]
        },
    ];
    (0, mappingService_1.setProperties)(IndividualNameStructureComponents, mappings, delimiter);
    return IndividualNameStructureComponents;
}
exports.IN2 = IN2;
function LM(name, elements, delimiter) {
    const CodeSourceInformation = {
        code: name
    };
    const mappings = [
        {
            target: "AgencyQualifierCode",
            source: elements[0]
        },
        {
            target: "SourceSubqualifier",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(CodeSourceInformation, mappings, delimiter);
    return CodeSourceInformation;
}
exports.LM = LM;
function CB1(name, elements, delimiter) {
    const ContractAndCostAccountingStandardsData = {
        code: name
    };
    const mappings = [
        {
            target: "AcquisitionDataCode",
            source: elements[0]
        },
        {
            target: "FinancingTypeCode",
            source: elements[1]
        }
    ];
    (0, mappingService_1.setProperties)(ContractAndCostAccountingStandardsData, mappings, delimiter);
    return ContractAndCostAccountingStandardsData;
}
exports.CB1 = CB1;
function ADV(name, elements, delimiter) {
    const AdvertisingDemographicInformation = {
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
            target: "RangeMinimum1",
            source: elements[2]
        },
        {
            target: "RangeMinimum2",
            source: elements[3]
        },
        {
            target: "Category",
            source: elements[4]
        },
        {
            target: "ServiceCharacteristicsQualifier",
            source: elements[5]
        },
        {
            target: "MeasurementValue",
            source: elements[6]
        },
    ];
    (0, mappingService_1.setProperties)(AdvertisingDemographicInformation, mappings, delimiter);
    return AdvertisingDemographicInformation;
}
exports.ADV = ADV;
function PO4(name, elements, delimiter) {
    const ItemPhysicalDetails = {
        code: name
    };
    const mappings = [
        {
            target: "Pack",
            source: elements[0]
        },
        {
            target: "Size",
            source: elements[1]
        },
        {
            target: "UnitOrBasisForMeasurementCode1",
            source: elements[2]
        },
        {
            target: "PackagingCode",
            source: elements[3]
        },
        {
            target: "WeightQualifier",
            source: elements[4]
        },
        {
            target: "GrossWeightPerPack",
            source: elements[5]
        },
        {
            target: "UnitOrBasisForMeasurementCode2",
            source: elements[6]
        },
        {
            target: "GrossVolumePerPack",
            source: elements[7]
        },
        {
            target: "UnitOrBasisForMeasurementCode3",
            source: elements[8]
        },
        {
            target: "Length",
            source: elements[9]
        },
        {
            target: "Width",
            source: elements[10]
        },
        {
            target: "Height",
            source: elements[11]
        },
        {
            target: "UnitOrBasisForMeasurementCode4",
            source: elements[12]
        },
        {
            target: "InnerPack",
            source: elements[13]
        },
        {
            target: "SurfaceOrLayerOrPositionCode",
            source: elements[14]
        },
        {
            target: "AssignedIdentification1",
            source: elements[15]
        },
        {
            target: "AssignedIdentification2",
            source: elements[16]
        },
        {
            target: "Number",
            source: elements[17]
        }
    ];
    (0, mappingService_1.setProperties)(ItemPhysicalDetails, mappings, delimiter);
    return ItemPhysicalDetails;
}
exports.PO4 = PO4;
function SDQ(name, elements, delimiter) {
    const DestinationQuantity = {
        code: name
    };
    const mappings = [
        {
            target: "UnitOrBasisForMeasurementCode",
            source: elements[0]
        },
        {
            target: "IdentificationCodeQualifier",
            source: elements[1]
        },
        {
            target: "IdentificationCode1",
            source: elements[2]
        },
        {
            target: "Quantity1",
            source: elements[3]
        },
        {
            target: "IdentificationCode2",
            source: elements[4]
        },
        {
            target: "Quantity2",
            source: elements[5]
        },
        {
            target: "IdentificationCode3",
            source: elements[6]
        },
        {
            target: "Quantity3",
            source: elements[7]
        },
        {
            target: "IdentificationCode4",
            source: elements[8]
        },
        {
            target: "Quantity4",
            source: elements[9]
        },
        {
            target: "IdentificationCode5",
            source: elements[10]
        },
        {
            target: "Quantity5",
            source: elements[11]
        },
        {
            target: "IdentificationCode6",
            source: elements[12]
        },
        {
            target: "Quantity6",
            source: elements[13]
        },
        {
            target: "IdentificationCode7",
            source: elements[14]
        },
        {
            target: "Quantity7",
            source: elements[15]
        },
        {
            target: "IdentificationCode8",
            source: elements[16]
        },
        {
            target: "Quantity8",
            source: elements[17]
        },
        {
            target: "IdentificationCode9",
            source: elements[18]
        },
        {
            target: "Quantity9",
            source: elements[19]
        },
        {
            target: "IdentificationCode10",
            source: elements[20]
        },
        {
            target: "Quantity10",
            source: elements[21]
        },
        {
            target: "LocationIdentifier",
            source: elements[22]
        }
    ];
    (0, mappingService_1.setProperties)(DestinationQuantity, mappings, delimiter);
    return DestinationQuantity;
}
exports.SDQ = SDQ;
function SE(elements, delimiter) {
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
    (0, mappingService_1.setProperties)(TransactionSetTrailer, mappings, delimiter);
    return TransactionSetTrailer;
}
exports.SE = SE;
function GE(elements, delimiter) {
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
    (0, mappingService_1.setProperties)(FunctionalGroupTrailer, mappings, delimiter);
    return FunctionalGroupTrailer;
}
exports.GE = GE;
function IEA(elements, delimiter) {
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
    (0, mappingService_1.setProperties)(InterchangeControlTrailer, mappings, delimiter);
    return InterchangeControlTrailer;
}
exports.IEA = IEA;
function CODE(name, elements, delimiter) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "",
            source: elements[0]
        },
    ];
    (0, mappingService_1.setProperties)(SegmentName, mappings, delimiter);
    return SegmentName;
}
exports.CODE = CODE;
