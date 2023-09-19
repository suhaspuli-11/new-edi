import { addProperties } from './mappingService';

export function UNB(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        InterchangeHeader: {},
    };

    const mappings = [
        {
            target: "SyntaxIdentifier",
            source: elements[0],
            subkeys: ["Identifier", "Version"],
        },
        {
            target: "InterchangeSender",
            source: elements[1],
            subkeys: ["SenderId","PartnerIdentificationCodeQualifier","AddressForReverseRouting"],
        },
        {
            target: "InterchangeRecipient",
            source: elements[2],
            subkeys: ["RecipientId","PartnerIdentificationCodeQualifier","RoutingAddress"],
        },
        {
            target: "DateTimePreparation",
            source: elements[3],
            subkeys: ["Date", "Time"],
        },
        { target: "InterchangeControlReference", source: elements[4] },
        {
            target: "RecipientsReferencePassword",
            source: elements[5],
            subkeys: ["RecipientsReferencePassword", "Qualifier"],
        },
        { target: "ApplicationReference", source: elements[6] },
        { target: "ProcessingPriorityCode", source: elements[7] },
        { target: "AcknowledgementRequest", source: elements[8] },
        { target: "CommunicationsAgreementID", source: elements[9] },
        { target: "TestIndicator", source: elements[10] },
    ];
    addProperties(object, mappings);
    return object;
}

export function UNH(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        MessageHeader: {},
    };

    const mappings = [
        { target: "MessageReferenceNumber", source: elements[0] },
        {
            target: "messageIdentifier",
            source: elements[1],
            subkeys: ["messageType","messageVersionNumber","MessageReleaseNumber","controllingAgency"],
        },
        { target: "CommonAccessReference", source: elements[2] },
        {
            target: "StatusOfTheTransfer",
            source: elements[3],
            subkeys: ["SequenceOfTransfers", "FirstAndLastTransfers"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function BGM(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        BeginningOfMessage: {},
    };

    const mappings = [
        {
            target: "DocumentName",
            source: elements[0],
            subkeys: ["DocumentNameCode"],
        },
        {
            target: "DocumentIdentification",
            source: elements[1],
            subkeys: ["DocumentIdentifier"],
        },
        { target: "MessageFunctionCode", source: elements[2] },
        { target: "ResponseTypeCode", source: elements[3] },
        { target: "DocumentStatusCode", source: elements[4] },
        { target: "LanguageNameCode", source: elements[5] },
    ];
    addProperties(object, mappings);
    return object;
}

export function DTM(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        DateTimePeriod: {},
    };

    const mappings = [
        {
            target: "DateTimePeriod",
            source: elements[0],
            subkeys: ["Qualifier", "Date", "FormatQualifier"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function PAI(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        PaymentInstructionDetails: {},
    };

    const mappings = [
        {
            target: "PaymentInstructionDetails",
            source: elements[0],
            subkeys: ["PaymentConditionsCode","PaymentGuaranteemeansCode","PaymentMeansCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function FTX(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        FreeText: {},
    };
    const mappings = [
        { target: "TextSubjectCodeQualifier", source: elements[0] },
        { target: "FreeTextFunctionCode", source: elements[1] },
        {
            target: "TextReference",
            source: elements[2],
            subkeys: ["FreeTextCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode"],
        },
        {
            target: "TextLiteral",
            source: elements[3],
            subkeys: ["FreeText0","FreeText1","FreeText2","FreeText3","FreeText4"],
        },
        { target: "LanguageNameCode", source: elements[4] },
        { target: "FreeTextFormatCode", source: elements[5] },
    ];
    addProperties(object, mappings);

    return object;
}

export function GIR(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        RelatedIdentificationNumbers: {},
    };

    const mappings = [
        { target: "SetTypeCodeQualifier", source: elements[0] },
        {
            target: "IdentificationNumber1",
            source: elements[1],
            subkeys: ["Identifier","IdentificationCodeQualifier","StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber2",
            source: elements[2],
            subkeys: ["Identifier","IdentificationCodeQualifier","StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber3",
            source: elements[3],
            subkeys: ["Identifier","IdentificationCodeQualifier","StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber4",
            source: elements[4],
            subkeys: ["Identifier","IdentificationCodeQualifier","StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber5",
            source: elements[5],
            subkeys: ["Identifier","IdentificationCodeQualifier","StatusDescriptionCode"],
        },
    ];

    addProperties(object, mappings);
    return object;
}

export function IMD(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        ItemDescription: {},
    };

    const mappings = [
        { target: "DescriptionFormatCode", source: elements[0] },
        {
            target: "ItemCharacteristic",
            source: elements[1],
            subKeys: ["ItemCharacteristicCode","CodeListIdentificationCode","CodeListResponsibleAgency"],
        },
        {
            target: "ItemDescription",
            source: elements[2],
            subKeys: ["ItemDescriptionCode","CodeListIdentificationCode","CodeListResponsibleAgency","ItemDescription1","ItemDescription2","LanguageNameCode"],
        },
        { target: "SurfaceOrLayerCode", source: elements[3] },
    ];

    addProperties(object, mappings);
    return object;
}

export function RFF(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        Reference: {},
    };
    const mappings = [
        {
            target: "Reference",
            source: elements[0],
            subkeys: ["ReferenceCodeQualifier","ReferenceIdentifier","DocumentLineIdentifier","VersionIdentifier","RevisionIdentifier"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function NAD(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        NameAndAddress: {},
    };
    const mappings = [
        {
            target: "PartyFunctionCodeQualifier",
            source: elements[0],
        },
        {
            target: "PartyIdentificationDetails",
            source: elements[1],
            subkeys: ["PartyIdentifier","CodeListIdentificationCode","CodeListResponsibleAgency"],
        },
        {
            target: "NameAndAddress",
            source: elements[2],
            subkeys: ["NameAndAddressDescription1","NameAndAddressDescription2","NameAndAddressDescription3","NameAndAddressDescription4","NameAndAddressDescription5"],
        },
        {
            target: "PartyName",
            source: elements[3],
            subkeys: ["PartyName1","PartyName2","PartyName3","PartyName4","PartyName","PartyNameFormatCode"],
        },
        {
            target: "Street",
            source: elements[4],
            subkeys: ["StreetAndNumberOrPostOfficeBoxIdentifier1","StreetAndNumberOrPostOfficeBoxIdentifier2","StreetAndNumberOrPostOfficeBoxIdentifier3","StreetAndNumberOrPostOfficeBoxIdentifier4"],
        },
        {
            target: "CityName",
            source: elements[5],
        },
        {
            target: "CountrySubdivisionDetails",
            source: elements[6],
            subkeys: ["CountrySubdivisionIdentifier","Code list identification code","CodeListResponsibleAgencyCode","CountrySubdivisionName"],
        },
        {
            target: "PostalIdentificationCode",
            source: elements[7],
        },
        {
            target: "CountryIdentifier",
            source: elements[8],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function CUX(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        Currencies: {},
    };
    const mappings = [
        {
            target: "CurrencyDetails1",
            source: elements[0],
            subkeys: ["CurrencyUsageCodeQualifier","CurrencyIdentificationCode","CurrencyTypeCodeQualifier","CurrencyRate"],
        },
        {
            target: "CurrencyDetails2",
            source: elements[1],
            subkeys: ["CurrencyUsageCodeQualifier","CurrencyIdentificationCode","CurrencyTypeCodeQualifier","CurrencyRate"],
        },
        {
            target: "CurrencyExchangeRate",
            source: elements[2],
        },
        {
            target: "ExchangeRateCurrencyMarketIdentifier",
            source: elements[3],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function TOD(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        TermsOfDeliveryOrTransport: {},
    };
    const mappings = [
        {
            target: "DeliveryOrTransportTermsFunctionCode",
            source: elements[0],
        },
        {
            target: "TransportChargesPaymentMethodCode",
            source: elements[1],
        },
        {
            target: "TermsOfDeliveryOrTransport",
            source: elements[2],
            subkeys: ["DeliveryOrTransportTermsDescriptionCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode","DeliveryOrTransportTermsDescription1","DeliveryOrTransportTermsDescription2"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function LIN(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        LineItem: {},
    };
    const mappings = [
        {
            target: "LineItemIdentifier",
            source: elements[0],
        },
        {
            target: "ActionCode",
            source: elements[1],
        },
        {
            target: "ItemNumberIdentification",
            source: elements[2],
            subkeys: ["ItemIdentifier", "ItemTypeIdentificationCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
        {
            target: "SublineInformation",
            source: elements[3],
            subkeys: ["SublineIndicatorCode", "LineItemIdentifier"],
        },
        {
            target: "ConfigurationLevelNumber",
            source: elements[4],
        },
        {
            target: "ConfigurationOperationCode",
            source: elements[5],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function QTY(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        Quantity: {},
    };
    const mappings = [
        {
            target: "QuantityDetails",
            source: elements[0],
            subkeys: ["QuantityTypeCodeQualifier", "Quantity", "MeasurementUnitCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function EQD(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        EquipmentDetails: {},
    };
    const mappings = [
        {
            target: "EquipmentTypeCodeQualifier",
            source: elements[0],
        },
        {
            target: "EquipmentIdentification",
            source: elements[1],
            subkeys: ["EquipmentIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "CountryIdentifier"]
        },
        {
            target: "EquipmentSizeAndType",
            source: elements[2],
            subkeys: ["EquipmentSizeAndTypeDescriptionCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "EquipmentSizeAndTypeDescription"],
        },
        {
            target: "EquipmentSupplierCode",
            source: elements[3],
        },
        {
            target: "EquipmentStatusCode",
            source: elements[4],
        },
        {
            target: "FullOrEmptyIndicatorCode",
            source: elements[5],
        },
        {
            target: "MarkingInstructionsCode",
            source: elements[6],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function PRI(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        PriceDetails: {},
    };
    const mappings = [
        {
            target: "PriceInformation",
            source: elements[0],
            subkeys: ["PriceCodeQualifier", "PriceAmount", "PriceTypeCode", "PriceSpecificationCode", "UnitPriceBasisQuantity", "MeasurementUnitCode"],
        },
        {
            target: "SublineItemPriceChangeOperationCode",
            source: elements[1],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function PCI(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        PackageIdentification: {},
    };
    const mappings = [
        {
            target: "MarkingInstructionsCode",
            source: elements[0],
        },
        {
            target: "MarksAndLabels",
            source: elements[1],
            subkeys: ["ShippingMarksDescription1","ShippingMarksDescription2","ShippingMarksDescription3","ShippingMarksDescription4","ShippingMarksDescription5","ShippingMarksDescription6","ShippingMarksDescription7","ShippingMarksDescription8","ShippingMarksDescription9","ShippingMarksDescription10"],
        },
        {
            target: "FullOrEmptyIndicatorCode",
            source: elements[2],
        },
        {
            target: "TypeOfMarking",
            source: elements[3],
            subkeys: ["MarkingTypeCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function TAX(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        DutyTaxFeeDetails: {},
    };
    const mappings = [
        {
            target: "DutyOrTaxOrFeeFunctionCodeQualifier",
            source: elements[0],
        },
        {
            target: "DutyTaxFeeType",
            source: elements[1],
            subkeys: ["DutyTaxFeeTypeNameCode","CodeListIdentificationCode","CodeListResponsibleAgency","DutyTaxFeeTypeName"],
        },
        {
            target: "DutyTaxFeeAccountDetails",
            source: elements[2],
            subkeys: ["DutyTaxFeeAccountCode","CodeListIdentificationCode","CodeListResponsibleAgency"],
        },
        {
            target: "DutyOrTaxOrFeeAssessmentBasisQuantity",
            source: elements[3],
        },
        {
            target: "DutyTaxFeeDetail",
            source: elements[4],
            subkeys: ["DutyOrTaxOrFeeRateCode","CodeListIdentificationCode1","CodeListResponsibleAgency1","DutyOrTaxOrFeeRate","DutyOrTaxOrFeeRateBasisCode","CodeListIdentificationCode2","CodeListResponsibleAgency2"],
        },
        {
            target: "DutyOrTaxOrFeeCategoryCode",
            source: elements[5],
        },
        {
            target: "PartyTaxIdentifier",
            source: elements[6],
        },
        {
            target: "CalculationSequenceCode",
            source: elements[7],
        },
        {
            target: "TaxOrDutyOrFeePaymentDueDateCode",
            source: elements[8],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function CTA(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        ContactInformation: {},
    };
    const mappings = [
        {
            target: "ContactFunctionCode",
            source: elements[0],
        },
        {
            target: "ContactDetails",
            source: elements[1],
            subkeys: ["ContactIdentifier", "ContactName"],
        },
    ];

    addProperties(object, mappings);
    return object;
}

export function COM(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        CommunicationContact: {},
    };
    const mappings = [
        {
            target: "CommunicationContact",
            source: elements[0],
            subkeys: ["CommunicationAddressIdentifier", "CommunicationMeansTypeCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function TDT(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        TransportInformation: {},
    };
    const mappings = [
        {
            target: "TransportStageCodeQualifier",
            source: elements[0],
        },
        {
            target: "MeansOfTransportJourneyIdentifier",
            source: elements[1],
        },
        {
            target: "ModeOfTransport",
            source: elements[2],
            subkeys: ["TransportModeNameCode", "TransportModeName"],
        },
        {
            target: "TransportMeans",
            source: elements[3],
            subkeys: ["TransportMeansDescriptionCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode","TransportMeansDescription"],
        },
        {
            target: "Carrier",
            source: elements[4],
            subkeys: ["CarrierIdentifier","CodeListIdentificationCode","CodeListResponsibleAgencyCode","CarrierName"],
        },
        {
            target: "TransitDirectionIndicatorCode",
            source: elements[5],
        },
        {
            target: "ExcessTransportationInformation",
            source: elements[6],
            subkeys: ["ExcessTransportationReasonCode","ExcessTransportationResponsibilityCode","CustomerShipmentAuthorisationIdentifier"],
        },
        {
            target: "TransportIdentification",
            source: elements[7],
            subkeys: ["TransportMeansIdentificationNameIdentifier","CodeListIdentificationCode","CodeListResponsibleAgencyCode","TransportMeansIdentificationName","TransportMeansNationalityCode"],
        },
        {
            target: "TransportMeansOwnershipIndicatorCode",
            source: elements[8],
        },
        {
            target: "PowerType",
            source: elements[9],
            subkeys: ["PowerTypeCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode","PowerTypeDescription"],
        },
        {
            target: "TransportService",
            source: elements[10],
            subkeys: ["TransportServiceIdentificationCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode","TransportServiceName","TransportServiceDescription"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function LOC(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        PlaceLocationIdentification: {},
    };
    const mappings = [
        {
            target: "LocationFunctionCodeQualifier",
            source: elements[0],
        },
        {
            target: "LocationIdentification",
            source: elements[1],
            subkeys: ["LocationIdentifier","CodeListIdentificationCode","CodeListResponsibleAgencyCode","LocationName"],
        },
        {
            target: "RelatedLocationOneIdentification",
            source: elements[2],
            subkeys: ["FirstRelatedLocationIdentifier","CodeListIdentificationCode","CodeListResponsibleAgencyCode","FirstRelatedLocationName"],
        },
        {
            target: "RelatedLocationTwoIdentification",
            source: elements[3],
            subkeys: ["SecondRelatedLocationIdentifier","CodeListIdentificationCode","CodeListResponsibleAgencyCode","SecondRelatedLocationName"],
        },
        {
            target: "RelationCode",
            source: elements[4],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function PIA(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        AdditionalProductId: {},
    };
    const mappings = [
        {
            target: "ProductIdentifierCodeQualifier",
            source: elements[0],
        },
        {
            target: "ItemNumberIdentification1",
            source: elements[1],
            subkeys: ["ItemIdentifier","ItemTypeIdentificationCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification2",
            source: elements[2],
            subkeys: ["ItemIdentifier","ItemTypeIdentificationCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification3",
            source: elements[3],
            subkeys: ["ItemIdentifier","ItemTypeIdentificationCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification4",
            source: elements[4],
            subkeys: ["ItemIdentifier","ItemTypeIdentificationCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification5",
            source: elements[5],
            subkeys: ["ItemIdentifier","ItemTypeIdentificationCode","CodeListIdentificationCode","CodeListResponsibleAgencyCode"],
        },
    ];

    addProperties(object, mappings);

    return object;
}

export function PYT(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        PaymentTerms: {},
    };
    const mappings = [
        {
            target: "PaymentTermsTypeCodeQualifier",
            source: elements[0],
        },
        {
            target: "PaymentTerms",
            source: elements[1],
            subkeys: ["PaymentermsDescriptionIdentifier","CodeListIdentificationCode","CodeListResponsibleAgencyCode","PaymentTermsDescription"],
        },
        {
            target: "EventTimeReferenceCode",
            source: elements[2],
        },
        {
            target: "TermsTimeRelationCode",
            source: elements[3],
        },
        {
            target: "PeriodTypeCode",
            source: elements[4],
        },
        {
            target: "PeriodCountQuantity",
            source: elements[5],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function SCC(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        SchedulingConditions: {},
    };
    const mappings = [
        {
            target: "DeliveryPlanCommitmentLevelCode",
            source: elements[0],
        },
        {
            target: "DeliveryInstructionCode",
            source: elements[1],
        },
        {
            target: "PatternDescription",
            source: elements[2],
            subkeys: ["FrequencyCode","DespatchPatternCode","DespatchPatternTimingCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function MOA(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        MonetaryAmount: {},
    };
    const mappings = [
        {
            target: "MonetaryAmount",
            source: elements[0],
            subkeys: ["MonetaryAmountTypeCodeQualifier","MonetaryAmount","CurrencyIdentificationCode","CurrencyTypeCodeQualifier","StatusDescriptionCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function RTE(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        RateDetails: {},
    };
    const mappings = [
        {
            target: "RateDetails",
            source: elements[0],
            subkeys: ["RateTypeCodeQualifier","UnitPriceBasisRate","UnitPriceBasisQuantity","MeasurementUnitCode"],
        },
        {
            target: "StatusDescriptionCode",
            source: elements[1],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function PAC(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        Package: {},
    };
    const mappings = [
        {
            target: "PackageQuantity",
            source: elements[0],
        },
        {
            target: "PackagingDetails",
            source: elements[1],
            subkeys: ["PackagingLevelCode","PackagingRelatedDescriptionCode","PackagingTermsAndConditionsCode"],
        },
        {
            target: "PackageType",
            source: elements[2],
            subkeys: ["PackageTypeDescriptionCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "TypeOfPackages"]
        },
        {
            target: "PackageTypeIdentification",
            source: elements[3],
            subkeys: ["DescriptionFormatCode", "TypeOfPackages1", "ItemTypeIdentificationCode1", "TypeOfPackages2", "ItemTypeIdentificationCode2"],
        },
        {
            target: "ReturnablePackageDetails",
            source: elements[4],
            subkeys: ["ReturnablePackageFreightPaymentResponsibilityCode", "ReturnablePackageLoadContentsCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function DOC(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        DocumentMessageDetails: {}
    };
    const mappings = [
        {
            target: "DocumentMessageName",
            source: elements[0],
            subkeys: ['DocumentNameCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'DocumentName']
        },
        {
            target: "DocumentMessageDetails",
            source: elements[1],
            subkeys: ['DocumentIdentifier', 'DocumentStatusCode', 'DocumentSourceDescription', 'LanguageNameCode', 'VersionIdentifier', 'RevisionIdentifier']
        },
        {
            target: "CommunicationMediumTypeCode",
            source: elements[2],
        },
        {
            target: "DocumentCopiesRequiredQuantity",
            source: elements[3],
        },
        {
            target: "DocumentOriginalsRequiredQuantity",
            source: elements[4],
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function PCD(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        PercentageDetails: {}
    };
    const mappings = [
        {
            target: "PercentageDetails",
            source: elements[0],
            subkeys: ['PercentageTypeCodeQualifier', 'Percentage', 'PercentageBasisIdentificationCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode']
        },
        {
            target: "StatusDescriptionCode",
            source: elements[1],
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function MEA(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        Measurements: {}
    };
    const mappings = [
        {
            target: "MeasurementPurposeCodeQualifier",
            source: elements[0],
        },
        {
            target: "MeasurementDetails",
            source: elements[1],
            subkeys: ['MeasuredAttributeCode', 'MeasurementSignificanceCode', 'NondiscreteMeasurementNameCode', 'NondiscreteMeasurementName']
        },
        {
            target: "ValueOrRange",
            source: elements[2],
            subkeys: ['MeasurementUnitCode', 'Measure', 'RangeMinimumQuantity', 'RangeMaximumQuantity', 'SignificantDigitsQuantity']
        },
        {
            target: "SurfaceOrLayerCode",
            source: elements[3],
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function APR(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        AdditionalPriceInformation: {}
    };
    const mappings = [
        {
            target: 'TradeClassCode',
            source: elements[0],
        },
        {
            target: "PriceMultiplierInformation",
            source: elements[0],
            subkeys: ['PriceMultiplierRate', 'PriceMultiplierTypeCodeQualifier']
        },
        {
            target: "ReasonForChange",
            source: elements[0],
            subkeys: ['ChangeReasonDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'ChangeReasonDescription']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function RCS(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        RequirementsAndConditions: {}
    };
    const mappings = [
        {
            target: "SectorAreaIdentificationCodeQualifier",
            source: elements[0]
        },
        {
            target: "RequirementConditionIdentification",
            source: elements[1],
            subkeys: ['RequirementOrConditionDescriptionIdentifier', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'RequirementOrConditionDescription']
        },
        {
            target: "ActionCode",
            source: elements[2],
        },
        {
            target: "CountryIdentifier",
            source: elements[3]
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function EFI(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        ExternalFileLinkIdentification: {}
    };
    const mappings = [
        {
            target: "FileIdentification",
            source: elements[0],
            subkeys: ['FileName', 'ItemDescription']
        },
        {
            target: "FileDetails",
            source: elements[1],
            subkeys: ['FileFormatName', 'VersionIdentifier', 'DataFormatDescriptionCode', 'DataFormatDescription']
        },
        {
            target: "SequencePositionIdentifier",
            source: elements[2],
        },
        {
            target: "FileCompressionTechniqueName",
            source: elements[3],
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function CED(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        ComputerEnvironmentDetails: {}
    };
    const mappings = [
        {
            target: "ComputerEnvironmentDetailsCodeQualifier",
            source: elements[0],
        },
        {
            target: "ComputerEnvironmentIdentification",
            source: elements[1],
            subkeys: ['ComputerEnvironmentNameCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'ComputerEnvironmentName', 'VersionIdentifier', 'ReleaseIdentifier', 'ObjectIdentifier']
        },
        {
            target: "FileGenerationCommandName",
            source: elements[2]
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function QVR(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        QuantityVariances: {}
    };
    const mappings = [
        {
            target: "QuantityDifferenceInformation",
            source: elements[0],
            subkeys: ['', '', '', '', '']
        },
        {
            target: "DiscrepancyNatureIdentificationCode",
            source: elements[1]
        },
        {
            target: "ReasonForChange",
            source: elements[2],
            subkeys: ['ChangeReasonDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'ChangeReasonDescription']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function CCI(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        CharacteristicOrClassId: {}
    };
    const mappings = [
        {
            target: "ClassTypeCode",
            source: elements[0]
        },
        {
            target: "MeasurementDetails",
            source: elements[1],
            subkeys: ['MeasuredAttributeCode', 'MeasurementSignificanceCode', 'NondiscreteMeasurementNameCode', 'NondiscreteMeasurementName']
        },
        {
            target: "CharacteristicDescription",
            source: elements[2],
            subkeys: ['CharacteristicDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'CharacteristicDescription1', 'CharacteristicDescription2']
        },
        {
            target: "CharacteristicRelevanceCode",
            source: elements[3],
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function STG(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        Reference: {}
    };
    const mappings = [
        {
            target: "ProcessStageCodeQualifier",
            source: elements[0],
        },
        {
            target: "ProcessStagesQuantity",
            source: elements[1],
        },
        {
            target: "ProcessStagesActualQuantity",
            source: elements[2],
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function ALI(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        AdditionalInformation: {}
    };
    const mappings = [
        {
            target: "CountryOfOriginIdentifier",
            source: elements[0]
        },
        {
            target: "DutyRegimeTypeCode",
            source: elements[1]
        },
        {
            target: "SpecialConditionCode1",
            source: elements[2]
        },
        {
            target: "SpecialConditionCode2",
            source: elements[3]
        },
        {
            target: "SpecialConditionCode3",
            source: elements[4]
        },
        {
            target: "SpecialConditionCode4",
            source: elements[5]
        },
        {
            target: "SpecialConditionCode5",
            source: elements[6]
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function FII(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        FinancialInstitutionInformation: {}
    };
    const mappings = [
        {
            target: "PartyFunctionCodeQualifier",
            source: elements[0]
        },
        {
            target: "AccountHolderIdentification",
            source: elements[1],
            subkeys: ['AccountHolderIdentifier', 'AccountHolderName', 'AccountHolderName', 'CurrencyIdentificationCode']
        },
        {
            target: "InstitutionIdentification",
            source: elements[2],
            subkeys: ['InstitutionNameCode', 'CodeListIdentificationCode1', 'CodeListResponsibleAgencyCode1', 'InstitutionBranchIdentifier', 'CodeListIdentificationCode2', 'CodeListResponsibleAgencyCode2', 'InstitutionName', 'InstitutionBranchLocationName']
        },
        {
            target: "CountryIdentifier",
            source: elements[3]
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function RJL(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        AccountingJournalIdentification: {}
    };
    const mappings = [
        {
            target: "AccountingJournalIdentification",
            source: elements[0],
            subkeys: ['AccountingJournalIdentifier', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'AccountingJournalName']
        },
        {
            target: "AccountingEntryTypeDetails",
            source: elements[1],
            subkeys: ['AccountingEntryTypeNameCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'AccountingEntryTypeName']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function GIN(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        GoodsIdentityNumber: {}
    };
    const mappings = [
        {
            target: "ObjectIdentificationCodeQualifier",
            source: elements[0]
        },
        {
            target: "IdentityNumberRange1",
            source: elements[1],
            subkeys: ['ObjectIdentifier1', 'ObjectIdentifier2']
        },
        {
            target: "IdentityNumberRange2",
            source: elements[2],
            subkeys: ['ObjectIdentifier1', 'ObjectIdentifier2']
        },
        {
            target: "IdentityNumberRange3",
            source: elements[3],
            subkeys: ['ObjectIdentifier1', 'ObjectIdentifier2']
        },
        {
            target: "IdentityNumberRange4",
            source: elements[4],
            subkeys: ['ObjectIdentifier1', 'ObjectIdentifier2']
        },
        {
            target: "IdentityNumberRange5",
            source: elements[5],
            subkeys: ['ObjectIdentifier1', 'ObjectIdentifier2']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function HAN(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        HandlingInstructions: {}
    };
    const mappings = [
        {
            target: "HandlingInstructions",
            source: elements[0],
            subkeys: ['HandlingInstructionDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'HandlingInstructionDescription']
        },
        {
            target: "HazardousMaterial",
            source: elements[1],
            subkeys: ['HazardousMaterialCategoryNameCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'HazardousMaterialCategoryName']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function RNG(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        RangeDetails: {}
    };
    const mappings = [
        {
            target: "RangeTypeCodeQualifier",
            source: elements[0]
        },
        {
            target: "Range",
            source: elements[1],
            subkeys: ['MeasurementUnitCode', 'RangeMinimumQuantity', 'RangeMaximumQuantity']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function ALC(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        AllowanceOrCharge: {}
    };
    const mappings = [
        {
            target: "AllowanceOrChargeCodeQualifier",
            source: elements[0]
        },
        {
            target: "AllowanceChargeInformation",
            source: elements[1],
            subkeys: ['AllowanceOrChargeIdentifier', 'AllowanceOrChargeIdentificationCode']
        },
        {
            target: "SettlementMeansCode",
            source: elements[2]
        },
        {
            target: "CalculationSequenceCode",
            source: elements[3]
        },
        {
            target: "SpecialServicesIdentification",
            source: elements[4],
            subkeys: ['SpecialServiceDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'SpecialServiceDescription1', 'SpecialServiceDescription2']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function DGS(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        DangerousGoods: {}
    };
    const mappings = [
        {
            target: "DangerousGoodsRegulationsCode",
            source: elements[0]
        },
        {
            target: "HazardCode",
            source: elements[1],
            subkeys: ['HazardIdentificationCode', 'AdditionalHazardClassificationIdentifier', 'HazardCodeVersionIdentifier']
        },
        {
            target: "UNDGInformation",
            source: elements[2],
            subkeys: ['UnitedNationsDangerousGoodsIdentifier', 'DangerousGoodsFlashpointDescription']
        },
        {
            target: "DangerousGoodsShipmentFlashpoint",
            source: elements[3],
            subkeys: ['ShipmentFlashpointDegree', 'MeasurementUnitCode']
        },
        {
            target: "PackagingDangerLevelCode",
            source: elements[4]
        },
        {
            target: "EmergencyProcedureForShipsIdentifier",
            source: elements[5]
        },
        {
            target: "HazardMedicalFirstAidGuideIdentifier",
            source: elements[6]
        },
        {
            target: "TransportEmergencyCardIdentifier",
            source: elements[7]
        },
        {
            target: "HazardIdentificationPlacardDetails",
            source: elements[8],
            subkeys: ['OrangeHazardPlacardUpperPartIdentifier', 'OrangeHazardPlacardLowerPartIdentifier']
        },
        {
            target: "DangerousGoodsLabel",
            source: elements[9],
            subkeys: ['DangerousGoodsMarkingIdentifier1', 'DangerousGoodsMarkingIdentifier2', 'DangerousGoodsMarkingIdentifier3', 'DangerousGoodsMarkingIdentifier4']
        },
        {
            target: "PackingInstructionTypeCode",
            source: elements[10]
        },
        {
            target: "TransportMeansDescriptionCode",
            source: elements[11]
        },
        {
            target: "HazardousCargoTransportAuthorisationCode",
            source: elements[12]
        },
        {
            target: "TunnelRestriction",
            source: elements[13],
            subkeys: ['TunnelRestrictionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function GEI(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        ProcessingInformation: {}
    };
    const mappings = [
        {
            target: "ProcessingInformationCodeQualifier",
            source: elements[0]
        },
        {
            target: "ProcessingIndicator",
            source: elements[1],
            subkeys: ['ProcessingIndicatorDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'ProcessingIndicatorDescription']
        },
        {
            target: "ProcessTypeDescriptionCode",
            source: elements[2]
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function MTD(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        MaintenanceOperationDetails: {}
    };
    const mappings = [
        {
            target: "ObjectTypeCodeQualifier",
            source: elements[0]
        },
        {
            target: "MaintenanceOperationCode",
            source: elements[1]
        },
        {
            target: "MaintenanceOperationOperatorCode",
            source: elements[2]
        },
        {
            target: "MaintenanceOperationPayerCode",
            source: elements[3]
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function CAV(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        CharacteristicValue: {}
    };
    const mappings = [
        {
            target: "CharacteristicValue",
            source: elements[0],
            subkeys: ['CharacteristicValueDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'CharacteristicValueDescription1', 'CharacteristicValueDescription2']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function STS(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        Status: {}
    };
    const mappings = [
        {
            target: "StatusCategory",
            source: elements[0],
            subkeys: ['StatusCategoryCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode']
        },
        {
            target: "Status",
            source: elements[1],
            subkeys: ['StatusDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'StatusDescription']
        },
        {
            target: "StatusReason1",
            source: elements[2],
            subkeys: ['StatusReasonDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'StatusReasonDescription']
        },
        {
            target: "StatusReason2",
            source: elements[3],
            subkeys: ['StatusReasonDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'StatusReasonDescription']
        },
        {
            target: "StatusReason3",
            source: elements[4],
            subkeys: ['StatusReasonDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'StatusReasonDescription']
        },
        {
            target: "StatusReason4",
            source: elements[5],
            subkeys: ['StatusReasonDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'StatusReasonDescription']
        },
        {
            target: "StatusReason5",
            source: elements[6],
            subkeys: ['StatusReasonDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'StatusReasonDescription']
        }
    ];
    addProperties(object, mappings);
    return object;
}

export function UNS(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        SectionControl: {},
    };
    const mappings = [
        {
            target: "SectionIdentification",
            source: elements[0],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function CNT(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        ControlTotal: {},
    };
    const mappings = [
        {
            target: "Control",
            source: elements[0],
            subkeys: ["ControlTotalTypeCodeQualifier", "ControlTotalQuantity", "MeasurementUnitCode"],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function UNT(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        MessageTrailer: {},
    };
    const mappings = [
        {
            target: "NumberOfSegmentsInTheMessage",
            source: elements[0],
        },
        {
            target: "MessageReferenceNumber",
            source: elements[1],
        },
    ];
    addProperties(object, mappings);
    return object;
}

export function UNZ(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        InterchangeTrailer: {},
    };
    const mappings = [
        {
            target: "InterchangeControlCount",
            source: elements[0],
        },
        {
            target: "InterchangeControlReference",
            source: elements[1],
        },
    ];
    addProperties(object, mappings);
    return object;
}   