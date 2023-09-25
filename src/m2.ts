import { setProperties } from './mappingService';

export function ISA(elements: any) {
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
    ]
    setProperties(InterchangeControlHeader, mappings);
    return InterchangeControlHeader;
}

export function GS(elements: any) {
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
    ]
    setProperties(FunctionalGroupHeader, mappings);
    return FunctionalGroupHeader;
}

export function ST(elements: any) {
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
    ]
    setProperties(TransactionSetHeader, mappings);
    return TransactionSetHeader;
}

export function BEG(name: string, elements: any) {
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
    setProperties(BeginningSegmentForPurchaseOrder, mappings);
    return BeginningSegmentForPurchaseOrder;
}

export function CUR(name: string, elements: any) {
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
    setProperties(Currency, mappings);
    return Currency;
}

export function PER(name: string, elements: any) {
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
    ]
    setProperties(AdministrativeCommunicationsContact, mappings);
    return AdministrativeCommunicationsContact;
}

export function DTM(name: string, elements: any) {
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
    ]
    setProperties(DateTimeReference, mappings);
    return DateTimeReference;
}

export function REF(name: string, elements: any) {
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
    ]
    setProperties(ReferenceInformation, mappings);
    return ReferenceInformation;
}

export function TAX(name: string, elements: any) {
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
    ]
    setProperties(TaxReference, mappings);
    return TaxReference;
}

export function FOB(name: string, elements: any) {
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
    ]
    setProperties(FOBRelatedInstructions, mappings);
    return FOBRelatedInstructions;
}

export function CTP(name: string, elements: any) {
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
    ]
    setProperties(PricingInformation, mappings);
    return PricingInformation;
}

export function N9(name: string, elements: any) {
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
    ]
    setProperties(ExtendedReferenceInformation, mappings);
    return ExtendedReferenceInformation;
}

export function N1(name: string, elements: any) {
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
    ]
    setProperties(PartyIdentification, mappings);
    return PartyIdentification;
}

export function N2(name: string, elements: any) {
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
    ]
    setProperties(AdditionalNameInformation, mappings);
    return AdditionalNameInformation;
}

export function N3(name: string, elements: any) {
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
    ]
    setProperties(PartyLocation, mappings);
    return PartyLocation;
}

export function PO1(name: string, elements: any) {
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
    ]
    setProperties(BaselineItemData, mappings);
    return BaselineItemData;
}

export function N4(name: string, elements: any) {
    const GeographicLocation = {
        code: name
    };
    const mappings = [
        {
            target: "",
            source: elements[0]
        },
    ]
    setProperties(GeographicLocation, mappings);
    return GeographicLocation;
}

export function MSG(name: string, elements: any) {
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
    ]
    setProperties(MessageText, mappings);
    return MessageText;
}

export function TD5(name: string, elements: any) {
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
    ]
    setProperties(SegmentName, mappings);
    return SegmentName;
}

export function PAM(name: string, elements: any) {
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
    ]
    setProperties(PeriodAmount, mappings);
    return PeriodAmount;
}

export function CSH(name: string, elements: any) {
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
    ]
    setProperties(SalesRequirements, mappings);
    return SalesRequirements;
}

export function TC2(name: string, elements: any) {
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
    ]
    setProperties(Commodity, mappings);
    return Commodity;
}

export function SAC(name: string, elements: any) {
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
    ]
    setProperties(ServicePromotionAllowanceOrChargeInformation, mappings);
    return ServicePromotionAllowanceOrChargeInformation;
}

export function ITD(name: string, elements: any) {
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
    ]
    setProperties(TermsOfSaleOrDeferredTermsOfSale, mappings);
    return TermsOfSaleOrDeferredTermsOfSale;
}

export function DIS(name: string, elements: any) {
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
    ]
    setProperties(DiscountDetail, mappings);
    return DiscountDetail;
}

export function INC(name: string, elements: any) {
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
    ]
    setProperties(InstallmentInformation, mappings);
    return InstallmentInformation;
}

export function LIN(name: string, elements: any) {
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
    ]
    setProperties(ItemIdentification, mappings);
    return ItemIdentification;
}

export function SI(name: string, elements: any) {
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
    ]
    setProperties(ServiceCharacteristicIdentification, mappings);
    return ServiceCharacteristicIdentification;
}

export function PID(name: string, elements: any) {
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
    ]
    setProperties(ProductItemDescription, mappings);
    return ProductItemDescription;
}

export function MEA(name: string, elements: any) {
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
    ]
    setProperties(Measurements, mappings);
    return Measurements;
}

export function PWK(name: string, elements: any) {
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
    ]
    setProperties(Paperwork, mappings);
    return Paperwork;
}

export function PKG(name: string, elements: any) {
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
    ]
    setProperties(MarkingPackagingLoading, mappings);
    return MarkingPackagingLoading;
}

export function TD4(name: string, elements: any) {
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
    ]
    setProperties(CarrierDetails, mappings);
    return CarrierDetails;
}

export function TXI(name: string, elements: any) {
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
    ]
    setProperties(TaxInformation, mappings);
    return TaxInformation;
}

export function AMT(name: string, elements: any) {
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
    ]
    setProperties(MonetaryAmountInformation, mappings);
    return MonetaryAmountInformation;
}

export function EFI(name: string, elements: any) {
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
    ]
    setProperties(ElectronicFormatIdentification, mappings);
    return ElectronicFormatIdentification;
}

export function G61(name: string, elements: any) {
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
    ]
    setProperties(Contact, mappings);
    return Contact;
}

export function CN1(name: string, elements: any) {
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
    ]
    setProperties(ContractInformation, mappings);
    return ContractInformation;
}

export function PO3(name: string, elements: any) {
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
    ]
    setProperties(AdditionalItemDetail, mappings);
    return AdditionalItemDetail;
}

export function YNQ(name: string, elements: any) {
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
    ]
    setProperties(YesOrNoQuestion, mappings);
    return YesOrNoQuestion;
}

export function IT8(name: string, elements: any) {
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
    ]
    setProperties(ConditionsOfSale, mappings);
    return ConditionsOfSale;
}

export function LS(name: string, elements: any) {
    const LoopHeader = {
        code: name
    };
    const mappings = [
        {
            target: "LoopIdentifierCode",
            source: elements[0]
        }
    ]
    setProperties(LoopHeader, mappings);
    return LoopHeader;
}

export function LE(name: string, elements: any) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "LoopIdentifierCode",
            source: elements[0]
        },
    ]
    setProperties(SegmentName, mappings);
    return SegmentName;
}

export function TD3(name: string, elements: any) {
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
    ]
    setProperties(CarrierDetails, mappings);
    return CarrierDetails;
}

export function MAN(name: string, elements: any) {
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
    ]
    setProperties(MarksAndNumbersInformation, mappings);
    return MarksAndNumbersInformation;
}

export function CTB(name: string, elements: any) {
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
    ]
    setProperties(RestrictionsOrConditions, mappings);
    return RestrictionsOrConditions;
}

export function QTY(name: string, elements: any) {
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
    ]
    setProperties(QuantityInformation, mappings);
    return QuantityInformation;
}

export function PCT(name: string, elements: any) {
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
    ]
    setProperties(PercentAmounts, mappings);
    return PercentAmounts;
}

export function FA2(name: string, elements: any) {
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
    ]
    setProperties(AccountingData, mappings);
    return AccountingData;
}

export function NX2(name: string, elements: any) {
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
    ]
    setProperties(LocationIDComponent, mappings);
    return LocationIDComponent;
}

export function LQ(name: string, elements: any) {
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
    ]
    setProperties(IndustryCodeIdentification, mappings);
    return IndustryCodeIdentification;
}

export function SPI(name: string, elements: any) {
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
    ]
    setProperties(SpecificationIdentifier, mappings);
    return SpecificationIdentifier;
}

export function PAL(name: string, elements: any) {
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
    ]
    setProperties(PalletTypeAndLoadCharacteristics, mappings);
    return PalletTypeAndLoadCharacteristics;
}

export function IT3(name: string, elements: any) {
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
    ]
    setProperties(AdditionalItemData, mappings);
    return AdditionalItemData;
}

export function CTT(name: string, elements: any) {
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
    ]
    setProperties(TransactionTotals, mappings);
    return TransactionTotals;
}

export function SE(elements: any) {
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
    ]
    setProperties(TransactionSetTrailer, mappings);
    return TransactionSetTrailer;
}

export function GE(elements: any) {
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
    ]
    setProperties(FunctionalGroupTrailer, mappings);
    return FunctionalGroupTrailer;
}

export function IEA(elements: any) {
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
    ]
    setProperties(InterchangeControlTrailer, mappings);
    return InterchangeControlTrailer;
}

export function CODE(name: string, elements: any) {
    const SegmentName = {
        code: name
    };
    const mappings = [
        {
            target: "",
            source: elements[0]
        },
    ]
    setProperties(SegmentName, mappings);
    return SegmentName;
}