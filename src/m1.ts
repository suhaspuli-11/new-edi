import { addProperties } from './mappingService';

export function UNB(name: string, elements: any[][]): Record<any, any> {
    const InterchangeHeader = {
        code: name
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
            subkeys: ["SenderId", "PartnerIdentificationCodeQualifier", "AddressForReverseRouting"],
        },
        {
            target: "InterchangeRecipient",
            source: elements[2],
            subkeys: ["RecipientId", "PartnerIdentificationCodeQualifier", "RoutingAddress"],
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
    addProperties(InterchangeHeader, mappings);
    return InterchangeHeader;
}

export function UNH(name: string, elements: any[][]): Record<any, any> {
    const MessageHeader = {
        code: name
    };

    const mappings = [
        { target: "MessageReferenceNumber", source: elements[0] },
        {
            target: "messageIdentifier",
            source: elements[1],
            subkeys: ["messageType", "messageVersionNumber", "MessageReleaseNumber", "controllingAgency"],
        },
        { target: "CommonAccessReference", source: elements[2] },
        {
            target: "StatusOfTheTransfer",
            source: elements[3],
            subkeys: ["SequenceOfTransfers", "FirstAndLastTransfers"],
        },
    ];
    addProperties(MessageHeader, mappings);
    return MessageHeader;
}

export function BGM(name: string, elements: any[][]): Record<any, any> {
    const BeginningOfMessage = {
        code: name
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
    addProperties(BeginningOfMessage, mappings);
    return BeginningOfMessage;
}

export function DTM(name: string, elements: any[][]): Record<any, any> {
    const DateTimePeriod = {
        code: name
    };

    const mappings = [
        {
            target: "DateTimePeriod",
            source: elements[0],
            subkeys: ["Qualifier", "Date", "FormatQualifier"],
        },
    ];
    addProperties(DateTimePeriod, mappings);
    return DateTimePeriod;
}

export function PAI(name: string, elements: any[][]): Record<any, any> {
    const PaymentInstructionDetails = {
        code: name
    };

    const mappings = [
        {
            target: "PaymentInstructionDetails",
            source: elements[0],
            subkeys: ["PaymentConditionsCode", "PaymentGuaranteemeansCode", "PaymentMeansCode"],
        },
    ];
    addProperties(PaymentInstructionDetails, mappings);
    return PaymentInstructionDetails;
}

export function FTX(name: string, elements: any[][]): Record<any, any> {
    const FreeText = {
        code: name
    }

    const mappings = [
        { target: "TextSubjectCodeQualifier", source: elements[0] },
        { target: "FreeTextFunctionCode", source: elements[1] },
        {
            target: "TextReference",
            source: elements[2],
            subkeys: ["FreeTextCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
        {
            target: "TextLiteral",
            source: elements[3],
            subkeys: ["FreeText0", "FreeText1", "FreeText2", "FreeText3", "FreeText4"],
        },
        { target: "LanguageNameCode", source: elements[4] },
        { target: "FreeTextFormatCode", source: elements[5] },
    ];
    addProperties(FreeText, mappings);

    return FreeText;
}

export function GIR(name: string, elements: any[][]): Record<any, any> {
    const RelatedIdentificationNumbers = {
        code: name
    }

    const mappings = [
        { target: "SetTypeCodeQualifier", source: elements[0] },
        {
            target: "IdentificationNumber1",
            source: elements[1],
            subkeys: ["Identifier", "IdentificationCodeQualifier", "StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber2",
            source: elements[2],
            subkeys: ["Identifier", "IdentificationCodeQualifier", "StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber3",
            source: elements[3],
            subkeys: ["Identifier", "IdentificationCodeQualifier", "StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber4",
            source: elements[4],
            subkeys: ["Identifier", "IdentificationCodeQualifier", "StatusDescriptionCode"],
        },
        {
            target: "IdentificationNumber5",
            source: elements[5],
            subkeys: ["Identifier", "IdentificationCodeQualifier", "StatusDescriptionCode"],
        },
    ];

    addProperties(RelatedIdentificationNumbers, mappings);
    return RelatedIdentificationNumbers;
}

export function IMD(name: string, elements: any[][]): Record<any, any> {
    const ItemDescription = {
        code: name
    }

    const mappings = [
        { target: "DescriptionFormatCode", source: elements[0] },
        {
            target: "ItemCharacteristic",
            source: elements[1],
            subKeys: ["ItemCharacteristicCode", "CodeListIdentificationCode", "CodeListResponsibleAgency"],
        },
        {
            target: "ItemDescription",
            source: elements[2],
            subKeys: ["ItemDescriptionCode", "CodeListIdentificationCode", "CodeListResponsibleAgency", "ItemDescription1", "ItemDescription2", "LanguageNameCode"],
        },
        { target: "SurfaceOrLayerCode", source: elements[3] },
    ];

    addProperties(ItemDescription, mappings);
    return ItemDescription;
}

export function RFF(name: string, elements: any[][]): Record<any, any> {
    const Reference = {
        code: name
    }
    const mappings = [
        {
            target: "Reference",
            source: elements[0],
            subkeys: ["ReferenceCodeQualifier", "ReferenceIdentifier", "DocumentLineIdentifier", "VersionIdentifier", "RevisionIdentifier"],
        },
    ];
    addProperties(Reference, mappings);
    return Reference;
}

export function NAD(name: string, elements: any[][]): Record<any, any> {
    const NameAndAddress = {
        code: name
    }
    const mappings = [
        {
            target: "PartyFunctionCodeQualifier",
            source: elements[0],
        },
        {
            target: "PartyIdentificationDetails",
            source: elements[1],
            subkeys: ["PartyIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgency"],
        },
        {
            target: "NameAndAddress",
            source: elements[2],
            subkeys: ["NameAndAddressDescription1", "NameAndAddressDescription2", "NameAndAddressDescription3", "NameAndAddressDescription4", "NameAndAddressDescription5"],
        },
        {
            target: "PartyName",
            source: elements[3],
            subkeys: ["PartyName1", "PartyName2", "PartyName3", "PartyName4", "PartyName", "PartyNameFormatCode"],
        },
        {
            target: "Street",
            source: elements[4],
            subkeys: ["StreetAndNumberOrPostOfficeBoxIdentifier1", "StreetAndNumberOrPostOfficeBoxIdentifier2", "StreetAndNumberOrPostOfficeBoxIdentifier3", "StreetAndNumberOrPostOfficeBoxIdentifier4"],
        },
        {
            target: "CityName",
            source: elements[5],
        },
        {
            target: "CountrySubdivisionDetails",
            source: elements[6],
            subkeys: ["CountrySubdivisionIdentifier", "Code list identification code", "CodeListResponsibleAgencyCode", "CountrySubdivisionName"],
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
    addProperties(NameAndAddress, mappings);
    return NameAndAddress;
}

export function CUX(name: string, elements: any[][]): Record<any, any> {
    const Currencies = {
        code: name
    }
    const mappings = [
        {
            target: "CurrencyDetails1",
            source: elements[0],
            subkeys: ["CurrencyUsageCodeQualifier", "CurrencyIdentificationCode", "CurrencyTypeCodeQualifier", "CurrencyRate"],
        },
        {
            target: "CurrencyDetails2",
            source: elements[1],
            subkeys: ["CurrencyUsageCodeQualifier", "CurrencyIdentificationCode", "CurrencyTypeCodeQualifier", "CurrencyRate"],
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
    addProperties(Currencies, mappings);
    return Currencies;
}

export function TOD(name: string, elements: any[][]): Record<any, any> {
    const TermsOfDeliveryOrTransport = {
        code: name
    }
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
            subkeys: ["DeliveryOrTransportTermsDescriptionCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "DeliveryOrTransportTermsDescription1", "DeliveryOrTransportTermsDescription2"],
        },
    ];
    addProperties(TermsOfDeliveryOrTransport, mappings);
    return TermsOfDeliveryOrTransport;
}

export function LIN(name: string, elements: any[][]): Record<any, any> {
    const LineItem = {
        code: name
    }
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
    addProperties(LineItem, mappings);
    return LineItem;
}

export function QTY(name: string, elements: any[][]): Record<any, any> {
    const Quantity = {
        code: name
    }
    const mappings = [
        {
            target: "QuantityDetails",
            source: elements[0],
            subkeys: ["QuantityTypeCodeQualifier", "Quantity", "MeasurementUnitCode"],
        },
    ];
    addProperties(Quantity, mappings);
    return Quantity;
}

export function EQD(name: string, elements: any[][]): Record<any, any> {
    const EquipmentDetails = {
        code: name
    }
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
    addProperties(EquipmentDetails, mappings);
    return EquipmentDetails;
}

export function PRI(name: string, elements: any[][]): Record<any, any> {
    const PriceDetails = {
        code: name
    }
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
    addProperties(PriceDetails, mappings);
    return PriceDetails;
}

export function PCI(name: string, elements: any[][]): Record<any, any> {
    const PackageIdentification = {
        code: name
    }
    const mappings = [
        {
            target: "MarkingInstructionsCode",
            source: elements[0],
        },
        {
            target: "MarksAndLabels",
            source: elements[1],
            subkeys: ["ShippingMarksDescription1", "ShippingMarksDescription2", "ShippingMarksDescription3", "ShippingMarksDescription4", "ShippingMarksDescription5", "ShippingMarksDescription6", "ShippingMarksDescription7", "ShippingMarksDescription8", "ShippingMarksDescription9", "ShippingMarksDescription10"],
        },
        {
            target: "FullOrEmptyIndicatorCode",
            source: elements[2],
        },
        {
            target: "TypeOfMarking",
            source: elements[3],
            subkeys: ["MarkingTypeCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
    ];
    addProperties(PackageIdentification, mappings);
    return PackageIdentification;
}

export function TAX(name: string, elements: any[][]): Record<any, any> {
    const DutyTaxFeeDetails = {
        code: name
    }
    const mappings = [
        {
            target: "DutyOrTaxOrFeeFunctionCodeQualifier",
            source: elements[0],
        },
        {
            target: "DutyTaxFeeType",
            source: elements[1],
            subkeys: ["DutyTaxFeeTypeNameCode", "CodeListIdentificationCode", "CodeListResponsibleAgency", "DutyTaxFeeTypeName"],
        },
        {
            target: "DutyTaxFeeAccountDetails",
            source: elements[2],
            subkeys: ["DutyTaxFeeAccountCode", "CodeListIdentificationCode", "CodeListResponsibleAgency"],
        },
        {
            target: "DutyOrTaxOrFeeAssessmentBasisQuantity",
            source: elements[3],
        },
        {
            target: "DutyTaxFeeDetail",
            source: elements[4],
            subkeys: ["DutyOrTaxOrFeeRateCode", "CodeListIdentificationCode1", "CodeListResponsibleAgency1", "DutyOrTaxOrFeeRate", "DutyOrTaxOrFeeRateBasisCode", "CodeListIdentificationCode2", "CodeListResponsibleAgency2"],
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
    addProperties(DutyTaxFeeDetails, mappings);
    return DutyTaxFeeDetails;
}

export function CTA(name: string, elements: any[][]): Record<any, any> {
    const ContactInformation = {
        code: name
    }
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

    addProperties(ContactInformation, mappings);
    return ContactInformation;
}

export function COM(name: string, elements: any[][]): Record<any, any> {
    const CommunicationContact = {
        code: name
    }
    const mappings = [
        {
            target: "CommunicationContact",
            source: elements[0],
            subkeys: ["CommunicationAddressIdentifier", "CommunicationMeansTypeCode"],
        },
    ];
    addProperties(CommunicationContact, mappings);
    return CommunicationContact;
}

export function TDT(name: string, elements: any[][]): Record<any, any> {
    const TransportInformation = {
        code: name
    }
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
            subkeys: ["TransportMeansDescriptionCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "TransportMeansDescription"],
        },
        {
            target: "Carrier",
            source: elements[4],
            subkeys: ["CarrierIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "CarrierName"],
        },
        {
            target: "TransitDirectionIndicatorCode",
            source: elements[5],
        },
        {
            target: "ExcessTransportationInformation",
            source: elements[6],
            subkeys: ["ExcessTransportationReasonCode", "ExcessTransportationResponsibilityCode", "CustomerShipmentAuthorisationIdentifier"],
        },
        {
            target: "TransportIdentification",
            source: elements[7],
            subkeys: ["TransportMeansIdentificationNameIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "TransportMeansIdentificationName", "TransportMeansNationalityCode"],
        },
        {
            target: "TransportMeansOwnershipIndicatorCode",
            source: elements[8],
        },
        {
            target: "PowerType",
            source: elements[9],
            subkeys: ["PowerTypeCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "PowerTypeDescription"],
        },
        {
            target: "TransportService",
            source: elements[10],
            subkeys: ["TransportServiceIdentificationCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "TransportServiceName", "TransportServiceDescription"],
        },
    ];
    addProperties(TransportInformation, mappings);
    return TransportInformation;
}

export function LOC(name: string, elements: any[][]): Record<any, any> {
    const PlaceLocationIdentification = {
        code: name
    }
    const mappings = [
        {
            target: "LocationFunctionCodeQualifier",
            source: elements[0],
        },
        {
            target: "LocationIdentification",
            source: elements[1],
            subkeys: ["LocationIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "LocationName"],
        },
        {
            target: "RelatedLocationOneIdentification",
            source: elements[2],
            subkeys: ["FirstRelatedLocationIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "FirstRelatedLocationName"],
        },
        {
            target: "RelatedLocationTwoIdentification",
            source: elements[3],
            subkeys: ["SecondRelatedLocationIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "SecondRelatedLocationName"],
        },
        {
            target: "RelationCode",
            source: elements[4],
        },
    ];
    addProperties(PlaceLocationIdentification, mappings);
    return PlaceLocationIdentification;
}

export function PIA(name: string, elements: any[][]): Record<any, any> {
    const AdditionalProductId = {
        code: name
    }
    const mappings = [
        {
            target: "ProductIdentifierCodeQualifier",
            source: elements[0],
        },
        {
            target: "ItemNumberIdentification1",
            source: elements[1],
            subkeys: ["ItemIdentifier", "ItemTypeIdentificationCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification2",
            source: elements[2],
            subkeys: ["ItemIdentifier", "ItemTypeIdentificationCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification3",
            source: elements[3],
            subkeys: ["ItemIdentifier", "ItemTypeIdentificationCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification4",
            source: elements[4],
            subkeys: ["ItemIdentifier", "ItemTypeIdentificationCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
        {
            target: "ItemNumberIdentification5",
            source: elements[5],
            subkeys: ["ItemIdentifier", "ItemTypeIdentificationCode", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode"],
        },
    ];

    addProperties(AdditionalProductId, mappings);

    return AdditionalProductId;
}

export function PYT(name: string, elements: any[][]): Record<any, any> {
    const PaymentTerms = {
        code: name
    }
    const mappings = [
        {
            target: "PaymentTermsTypeCodeQualifier",
            source: elements[0],
        },
        {
            target: "PaymentTerms",
            source: elements[1],
            subkeys: ["PaymentermsDescriptionIdentifier", "CodeListIdentificationCode", "CodeListResponsibleAgencyCode", "PaymentTermsDescription"],
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
    addProperties(PaymentTerms, mappings);
    return PaymentTerms;
}

export function SCC(name: string, elements: any[][]): Record<any, any> {
    const SchedulingConditions = {
        code: name
    }
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
            subkeys: ["FrequencyCode", "DespatchPatternCode", "DespatchPatternTimingCode"],
        },
    ];
    addProperties(SchedulingConditions, mappings);
    return SchedulingConditions;
}

export function MOA(name: string, elements: any[][]): Record<any, any> {
    const MonetaryAmount = {
        code: name
    }
    const mappings = [
        {
            target: "MonetaryAmount",
            source: elements[0],
            subkeys: ["MonetaryAmountTypeCodeQualifier", "MonetaryAmount", "CurrencyIdentificationCode", "CurrencyTypeCodeQualifier", "StatusDescriptionCode"],
        },
    ];
    addProperties(MonetaryAmount, mappings);
    return MonetaryAmount;
}

export function RTE(name: string, elements: any[][]): Record<any, any> {
    const RateDetails = {
        code: name
    }
    const mappings = [
        {
            target: "RateDetails",
            source: elements[0],
            subkeys: ["RateTypeCodeQualifier", "UnitPriceBasisRate", "UnitPriceBasisQuantity", "MeasurementUnitCode"],
        },
        {
            target: "StatusDescriptionCode",
            source: elements[1],
        },
    ];
    addProperties(RateDetails, mappings);
    return RateDetails;
}

export function PAC(name: string, elements: any[][]): Record<any, any> {
    const Package = {
        code: name
    }
    const mappings = [
        {
            target: "PackageQuantity",
            source: elements[0],
        },
        {
            target: "PackagingDetails",
            source: elements[1],
            subkeys: ["PackagingLevelCode", "PackagingRelatedDescriptionCode", "PackagingTermsAndConditionsCode"],
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
    addProperties(Package, mappings);
    return Package;
}

export function DOC(name: string, elements: any[][]): Record<any, any> {
    const DocumentMessageDetails = {
        code: name
    }
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
    addProperties(DocumentMessageDetails, mappings);
    return DocumentMessageDetails;
}

export function PCD(name: string, elements: any[][]): Record<any, any> {
    const PercentageDetails = {
        code: name
    }
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
    addProperties(PercentageDetails, mappings);
    return PercentageDetails;
}

export function MEA(name: string, elements: any[][]): Record<any, any> {
    const Measurements = {
        code: name
    }
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
    addProperties(Measurements, mappings);
    return Measurements;
}

export function APR(name: string, elements: any[][]): Record<any, any> {
    const AdditionalPriceInformation = {
        code: name
    }
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
    addProperties(AdditionalPriceInformation, mappings);
    return AdditionalPriceInformation;
}

export function RCS(name: string, elements: any[][]): Record<any, any> {
    const RequirementsAndConditions = {
        code: name
    }
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
    addProperties(RequirementsAndConditions, mappings);
    return RequirementsAndConditions;
}

export function EFI(name: string, elements: any[][]): Record<any, any> {
    const ExternalFileLinkIdentification = {
        code: name
    }
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
    addProperties(ExternalFileLinkIdentification, mappings);
    return ExternalFileLinkIdentification;
}

export function CED(name: string, elements: any[][]): Record<any, any> {
    const ComputerEnvironmentDetails = {
        code: name
    }
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
    addProperties(ComputerEnvironmentDetails, mappings);
    return ComputerEnvironmentDetails;
}

export function QVR(name: string, elements: any[][]): Record<any, any> {
    const QuantityVariances = {
        code: name
    }
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
    addProperties(QuantityVariances, mappings);
    return QuantityVariances;
}

export function CCI(name: string, elements: any[][]): Record<any, any> {
    const CharacteristicOrClassId = {
        code: name
    }
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
    addProperties(CharacteristicOrClassId, mappings);
    return CharacteristicOrClassId;
}

export function STG(name: string, elements: any[][]): Record<any, any> {
    const Reference = {
        code: name
    }
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
    addProperties(Reference, mappings);
    return Reference;
}

export function ALI(name: string, elements: any[][]): Record<any, any> {
    const AdditionalInformation = {
        code: name
    }
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
    addProperties(AdditionalInformation, mappings);
    return AdditionalInformation;
}

export function FII(name: string, elements: any[][]): Record<any, any> {
    const FinancialInstitutionInformation = {
        code: name
    }
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
    addProperties(FinancialInstitutionInformation, mappings);
    return FinancialInstitutionInformation;
}

export function RJL(name: string, elements: any[][]): Record<any, any> {
    const AccountingJournalIdentification = {
        code: name
    }
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
    addProperties(AccountingJournalIdentification, mappings);
    return AccountingJournalIdentification;
}

export function GIN(name: string, elements: any[][]): Record<any, any> {
    const GoodsIdentityNumber = {
        code: name
    }
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
    addProperties(GoodsIdentityNumber, mappings);
    return GoodsIdentityNumber;
}

export function HAN(name: string, elements: any[][]): Record<any, any> {
    const HandlingInstructions = {
        code: name
    }
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
    addProperties(HandlingInstructions, mappings);
    return HandlingInstructions;
}

export function RNG(name: string, elements: any[][]): Record<any, any> {
    const RangeDetails = {
        code: name
    }
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
    addProperties(RangeDetails, mappings);
    return RangeDetails;
}

export function ALC(name: string, elements: any[][]): Record<any, any> {
    const AllowanceOrCharge = {
        code: name
    }
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
    addProperties(AllowanceOrCharge, mappings);
    return AllowanceOrCharge;
}

export function DGS(name: string, elements: any[][]): Record<any, any> {
    const DangerousGoods = {
        code: name
    }
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
    addProperties(DangerousGoods, mappings);
    return DangerousGoods;
}

export function GEI(name: string, elements: any[][]): Record<any, any> {
    const ProcessingInformation = {
        code: name
    }
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
    addProperties(ProcessingInformation, mappings);
    return ProcessingInformation;
}

export function MTD(name: string, elements: any[][]): Record<any, any> {
    const MaintenanceOperationDetails = {
        code: name
    }
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
    addProperties(MaintenanceOperationDetails, mappings);
    return MaintenanceOperationDetails;
}

export function CAV(name: string, elements: any[][]): Record<any, any> {
    const CharacteristicValue = {
        code: name
    }
    const mappings = [
        {
            target: "CharacteristicValue",
            source: elements[0],
            subkeys: ['CharacteristicValueDescriptionCode', 'CodeListIdentificationCode', 'CodeListResponsibleAgencyCode', 'CharacteristicValueDescription1', 'CharacteristicValueDescription2']
        }
    ];
    addProperties(CharacteristicValue, mappings);
    return CharacteristicValue;
}

export function STS(name: string, elements: any[][]): Record<any, any> {
    const Status = {
        code: name
    }
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
    addProperties(Status, mappings);
    return Status;
}

export function UNS(name: string, elements: any[][]): Record<any, any> {
    const SectionControl = {
        code: name
    }
    const mappings = [
        {
            target: "SectionIdentification",
            source: elements[0],
        },
    ];
    addProperties(SectionControl, mappings);
    return SectionControl;
}

export function CNT(name: string, elements: any[][]): Record<any, any> {
    const ControlTotal = {
        code: name
    }
    const mappings = [
        {
            target: "Control",
            source: elements[0],
            subkeys: ["ControlTotalTypeCodeQualifier", "ControlTotalQuantity", "MeasurementUnitCode"],
        },
    ];
    addProperties(ControlTotal, mappings);
    return ControlTotal;
}

export function UNT(name: string, elements: any[][]): Record<any, any> {
    const MessageTrailer = {
        code: name
    }
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
    addProperties(MessageTrailer, mappings);
    return MessageTrailer;
}

export function UNZ(name: string, elements: any[][]): Record<any, any> {
    const InterchangeTrailer = {
        code: name
    }
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
    addProperties(InterchangeTrailer, mappings);
    return InterchangeTrailer;
}   