import * as mapping from './m1';

const edi: string = `
UNA:+.? '
UNB+UNOA:1+IRONWARE:ZZ+098533326:ZZ+011107:1500+186'
UNH+72+ORDERS:D:97A:UN'
BGM+220+123350+9'
DTM+4:20011107:102'
RFF+CT:97.8400.1734V'
NAD+DP+T01626003+++Hardware BV:Coal Lane+Bradford+Yorkshire+BD9 1SJ'
CTA+PD+:Karen Smith'
COM+030-567891:TE'
CUX+2:USD:9'
PAT+1++5:1:CD:45'
LIN+1++STU62001LW-K:BP'
IMD++3+:::SEAGATE VIPER EXT LVD 200G ULTRIUM'
QTY+21:3:EA'
DTM+2:20011108:102'
PRI+INF:3999'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:3:EA'
DTM+2:20011108:102'
LIN+2++STU42001LW-K:BP'
IMD++3+:::SEAGATE VIPER INT LVD 200G ULTRIUM?+'
QTY+21:2:EA'
DTM+2:20011108:102'
PRI+INF:3799'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:2:EA'
DTM+2:20011108:102'
LIN+3++STUL620001LW-K:BP'
IMD++3+:::SEAGATE VIPER EXT LVD ULTRIUM1 11CA'
QTY+21:1:EA'
DTM+2:20011108:102'
PRI+INF:7099'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:1:EA'
DTM+2:20011108:102'
LIN+4++STUQ:BP'
IMD++3+:::SEA AUTOLOADER RACKMOUNT KIT 5U'
QTY+21:1:EA'
DTM+2:20011108:102'
PRI+INF:379'
TDT+20++++EXEL GLOBAL LOGIS:172:92'
SCC+1'
QTY+113:1:EA'
DTM+2:20011108:102'
UNS+S'
UNT+41+72'
UNZ+1+186'`;

const msg: string = `
UNA:+.? '
UNB+UNOC:3+SENDER:ZZ+RECEIVER:ZZ+210911:1111+1'
UNG+ORDERS+SENDER:ZZ+RECEIVER:ZZ+210911:1111+2'
UNH+1+ORDERS:1:1:UN:EQU001'
BGM+220:::ORDER-12345+9'
DTM+137:20230920:102'
NAD+BY+SELLER COMPANY::92++SELLER ADDRESS:STREET NAME:ZIPCODE:CITY:REGION'
NAD+SU+BUYER COMPANY::92++BUYER ADDRESS:STREET NAME:ZIPCODE:CITY:REGION'
LIN+1++PRODUCT-A:EN'
PIA+1+UPC:1234567890123+IB'
PIA+1+ISBN:9876543210+IB'
IMD+F++:::PRODUCT DESCRIPTION'
QTY+1:10'
QTY+2:20'
UNS+S'
LIN+2++PRODUCT-B:EN'
PIA+1+UPC:9876543210987+IB'
IMD+F++:::ANOTHER PRODUCT DESCRIPTION'
QTY+1:5'
UNS+S'
UNS+S'
CNT+1:2'
UNT+20+1'
UNE+2'
UNZ+1+1'
`;

const validMsg: string = `UNB+UNOA:2+925485MX00:8+MYCHAINCM:55+080909:1357+807'
UNH+1+ORDERS:D:97A:UN'
BGM+220::9+8900140287+9'
DTM+137:20080909:102'
DTM+137:20080914:102'
DTM+10:20080909:102'
FTX+SPH+++=============================='
FTX+SPH+++SI HAY ENTREGA A MULTIPLES'
FTX+SPH+++DESTINOS EN LA MISMA FECHA,'   
FTX+SPH+++PRIMERO EMBARQUE AL DESTINO'   
FTX+SPH+++MAS LEJANO Y LUEGO AL MAS'     
FTX+SPH+++CERCANO.'                      
FTX+SPH+++=============================='
RFF+SD:46'
RFF+ZZZ:63'
RFF+PD:APER3884'
NAD+BY+7507003106959::9++WAL-MART DC 7471'
NAD+SF+++YOUR WAREHOUSE MEXICO SA CV'
RFF+IA:330470000'
NAD+FR+7507003100025::9++BODEGA'
NAD+SN+7507003138844::9++CHALCO 2000     3884'
CUX+2:MXN:9'
PAT+1++21:3:D:60'
TDT+20++30+31+:::VENDOR ROUTE'
TOD+6+PO'
LIN+1++3412245410013:EN'
PIA+1+004663000:IN+11700005:VN'
IMD+C+35+TROPIC::92'
IMD+C+98+50ML::92'
QTY+21:18'
MOA+203:1553.64'
PRI+AAB:86.3133::EUP::EA'
PAC+6+3'
UNS+S'
MOA+86:1553.64'
CNT+2:1'
UNT+36+1'
UNZ+1+807'`;

export function placeholder(elements: any[][]): Record<any, any> {
    const object: Record<any, any> = {
        SegmentName: "",
        Reference: {}
    };
    const mappings = [
        {
            target: "",
            source: elements[0],
            subkeys: ['', '', '', '', '']
        }
    ];
    map(object, mappings);
    return object;
}

export function map(object: any, mappings: any) {
    const segment: any = Object.keys(object)[1];
    for (const mapping of mappings) {
        const source = mapping.source,
            target = mapping.target,
            subkeys = mapping.subkeys;
        if (source) {
            object[segment][target] = subkeys
                ? Object.fromEntries(
                    subkeys.map((key: any, i: number) => [key, source[i]])
                )
                : source[0];
        }
    }
}

function getSegmentObj1(object: any) {
    let segment;
    const segmentCode: string = object.name;

    switch (segmentCode) {
        case "UNB":
            segment = {
                SegmentName: "Interchange header",
                InterchangeHeader: {
                    SyntaxIdentifier: {
                        Identifier: object.elements[0][0],
                        Version: object.elements[0][1]
                    },
                    InterchangeSender: {
                        SenderId: object.elements[1][0],
                        PartnerIdentificationCodeQualifier: object.elements[1][1],
                        AddressForReverseRouting: object.elements[1][2]
                    },
                    InterchangeRecipient: {
                        RecipientId: object.elements[2][0],
                        PartnerIdentificationCodeQualifier: object.elements[2][1],
                        RoutingAddress: object.elements[2][2]
                    },
                    DateTimePreparation: {
                        Date: object.elements[3][0],
                        Time: object.elements[3][1],
                    },
                    InterchangeControlReference: object.elements[4][0],
                    RecipientsReferencePassword: {
                        RecipientsReferencePassword: object.elements[5][0],
                        Qualifier: object.elements[5][1]
                    },
                    ApplicationReference: object.elements[6][0],
                    ProcessingPriorityCode: object.elements[7][0],
                    AcknowledgementRequest: object.elements[8][0],
                    CommunicationsAgreementID: object.elements[9][0],
                    TestIndicator: object.elements[10][0]
                }
            };
            break;
        
        case "UNH":
            segment = {
                SegmentName: "Message header",
                MessageHeader: {
                    MessageReferenceNumber: object.elements[0][0],
                    messageIdentifier: {
                        messageType: object.elements[1][0],
                        messageVersionNumber: object.elements[1][1],
                        MessageReleaseNumber: object.elements[1][2],
                        controllingAgency: object.elements[1][3]
                    }
                }
            };
            break;
        
        case "BGM":
            segment = {
                SegmentName: "Beginning of message",
                DocumentName: {
                    DocumentNameCode: object.elements[0][0],
                },
                DocumentIdentification: {
                    DocumentIdentifier:object.elements[1][0]
                },
                MessageFunctionCode: object.elements[2][0]
            };
            break;
        
        case "DTM":
            segment = {
                SegmentName: "Date/time/period",
                DateTimePeriod: {
                    Qualifier: object.elements[0][0],
                    Date: object.elements[0][1],
                    FormatQualifier: object.elements[0][2]
                }
            };
            break;
        
        case "PAI":
            segment = {
                SegmentName: "Payment instructions",
                PaymentInstructionDetails: {
                    PaymentConditionsCode: object.elements[0][0],
                    PaymentGuaranteemeansCode:object.elements[0][1],
                    PaymentMeansCode:object.elements[0][2]
                }
            };
            break;
        
        case "FTX":
            segment = {
                SegmentName: "Free text",
                FreeText: {
                    Qualifier: object.elements[0][0],
                    FunctionCode: object.elements[1][0],
                    TextReference: {
                        FreeTextCode: object.elements[2][0],
                        CodeListIdentificationCode: object.elements[2][1],
                        CodeListResponsibleAgencyCode:object.elements[2][2]
                    }
                }
            };
            break;
        
        case "GIR":
            segment = {
                SegmentName: "Related identification numbers",
                RealatedIdentificationNumbers: {
                    SetTypeCodeQualifier: object.elements[0][0],
                    IdentificationNumber: {
                        ObjectIdentifier: object.elements[1][0],
                        ObjectIdentificationCodeQualifier: object.elements[1][1],
                        StatusDescriptionCode: object.elements[1][2]
                    }
                }
            };
            break;
        
        case "IMD":
            segment = {
                SegmentName: "Item description",
                ItemDescription: {
                    ItemDescriptionTypeCoded: object.elements[0][0],
                    ItemCharacteristic: {
                        ItemCharacteristicCode: object.elements[1][0],
                        CodeListIdentificationCode: object.elements[1][1],
                        CodeListResponsibleAgency: object.elements[1][2]
                    },
                    ItemDescription: {
                        ItemDescriptionCode: object.elements[2][0],
                        CodeListIdentificationCode: object.elements[2][1],
                        CodeListResponsibleAgency: object.elements[2][2],
                        ItemDescription1: object.elements[2][3],
                        ItemDescription2: object.elements[2][4],
                        LanguageNameCode: object.elements[2][5]
                    }
                }
            };
            break;
        
        case "RFF":
            segment = {
                SegmentName: "Reference",
                Reference: {
                    ReferenceCodeQualifier: object.elements[0][0],
                    ReferenceIdentifier: object.elements[0][1],
                    DocumentLineIdentifier: object.elements[0][2],
                    VersionIdentifier: object.elements[0][3],
                    RevisionIdentifier: object.elements[0][4]
                }
            };
            break;
        
        case "NAD":
            segment = {
                SegmentName: "Name and address",
                NameAndAddress: {
                    PartyQualifier: object.elements[0][0],
                    PartyIdentificationDetails: {
                        PartyIdentifier: object.elements[1][0],
                        CodeListIdentificationCode: object.elements[1][1],
                        CodeListResponsibleAgency: object.elements[1][2]
                    }
                }
            };
            break;
        
        case "CTA":
            segment = {
                SegmentName: "Contact Information",
                ContactFunctionCode: object.elements[0][0],
                ContactDetails: {
                    ContactIdentifier: object.elements[1][0],
                    ContactName: object.elements[1][1]
                }
            };
            break;
        
        case "COM":
            segment = {
                SegmentName: "Communication contact",
                CommunicationContact: {
                    CommunicationAddressIdentifier: object.elements[0][0],
                    CommunicationMeansTypeCode: object.elements[0][1]
                }
            };
            break;
        
        case "CUX":
            segment = {
                SegmentName: "Currencies",
                Currencies: {
                    CurrencyDetails1: {
                        CurrencyUsageQualifier: object.elements[0][0],
                        CurrencyIdentificationCode: object.elements[0][1],
                        CurrencyTypeCodeQualifier: object.elements[0][2],
                        CurrencyRate: object.elements[0][3]
                    },
                    CurrencyDetails2: {
                        CurrencyUsageQualifier: object.elements[1][0],
                        CurrencyIdentificationCode: object.elements[1][1],
                        CurrencyTypeCodeQualifier: object.elements[1][2],
                        CurrencyRate: object.elements[0][3]
                    },
                    CurrencyExchangeRate: object.elements[2][0]
                }
            };
            break;
        
        case "TDT":
            segment = {
                SegmentName: "Transport information",
                TransportStageQualifier: object.elements[0][0],
                MeansOfTransportJourneyIdentifier: object.elements[1],
                ModeOfTransport: {
                    Code: object.elements[2][0]
                },
                TransportMeans: {
                    TypeOfMeansOfTransportIdentification: object.elements[3][0]
                }
            };
            break;
        
        case "TOD":
            segment = {
                SegmentName: "Terms of delivery or transport",
                TermsOfDeliveryOrTransport: {
                    FunctionCode: object.elements[0][0],
                    TransportChargesMethodOfPaymentCoded: object.elements[1][0],
                    TermsOfDeliveryOrTransport: {
                        Code: object.elements[2][0],
                        CodeQualifier: object.elements[2][1],
                        CodeListResponsibleAgency: object.elements[2][2]
                    }
                }
            };
            break;
        
        case "LOC":
            segment = {
                SegmentName: "Place/location identification",
                PlaceOrLocationIdentification: {
                    Qualifier: object.elements[0][0],
                    LocationIdentification: {
                        PlaceOrLocationIdentification: object.elements[1][0],
                        CodeListIdentificationCode: object.elements[1][1],
                        CodeListResponsibleAgencyCode: object.elements[1][2],
                        LocationName: object.elements[1][3]
                    }
                }
            };
            break;
        
        case "LIN":
            segment = {
                SegmentName: "Line item",
                LineItem: {
                    LineItemNumber: object.elements[0][0],
                    ActionCode: object.elements[1][0],
                    ItemNumberIdentification: {
                        ItemNumber: object.elements[2][0],
                        ItemNumberTypeCode: object.elements[2][1]
                    }
                }
            };
            break;
        
        case "PIA":
            segment = {
                SegmentName: "Additional product id",
                AdditionalProductId: {
                    ProductIdFunctionQualifier: object.elements[0][0],
                    ItemNumberIdentification: {
                        ItemNumber: object.elements[1][0],
                        ItemNumberTypeCode: object.elements[1][1]
                    }
                }
            };
            break;
        
        case "QTY":
            segment = {
                SegmentName: "Quantity",
                Quantity: {
                    QuantityTypeCodeQualifier: object.elements[0][0],
                    Quantity: object.elements[0][1],
                    MeasurementUnitCode: object.elements[0][2]
                }
            };
            break;
        
        case "PYT":
            segment = {
                SegmentName: "Payment terms",
                PaymentTerms: {
                    PaymentTermsTypeCodeQualifier: object.elements[0][0],
                    PaymentTerms: {
                        PaymentTermsDescriptionIdentifier: object.elements[1][0],
                        CodeListIdentificationCode: object.elements[1][1],
                        CodeListResponsibleAgencyCode: object.elements[1][2],
                        PaymentTermsDescription: object.elements[1][3]
                    },
                    EventTimeReferenceCode: object.elements[2][0],
                    TermsTimeRelationCode: object.elements[3][0],
                    PeriodTypeCode: object.elements[4][0],
                    PeriodCountQuantity: object.elements[5][0]
                }
            };
            break;
        
        case "EQD":
            segment = {
                SegmentName: "Equipment details",
                EquipmentDetails: {
                    EquipmentTypeCodeQualifier: object.elements[0][0],
                    EquipmentIdentification: {
                        EquipmentIdentifier: object.elements[1][0],
                        CodeListIdentificationCode: object.elements[1][1],
                        CodeListResponsibleAgencyCode: object.elements[1][2],
                        CountryIdentifier: object.elements[1][3]
                    },
                    EquipmentSizeAndType: {
                        EquipmentSizeAndTypeDescriptionCode: object.elements[2][0],
                        CodeListIdentificationCode: object.elements[2][1],
                        CodeListResponsibleAgencyCode: object.elements[2][2],
                        EquipmentSizeAndTypeDescription: object.elements[2][3]
                    },
                    EquipmentSupplierCode: object.elements[3][0],
                    EquipmentStatusCode: object.elements[4][0],
                    FullOrEmptyIndicatorCode: object.elements[5][0],
                    MarkingInstructionsCode: object.elements[6][0]
                }
            };
            break;
        
        case "SCC":
            segment = {
                SegmentName: "Scheduling conditions",
                SchedulingConditions: {
                    DeliveryPlanCommitmentLevelCode: object.elements[0][0],
                    DeliveryInstructionCode: object.elements[1][0],
                    PatternDescription: {
                        FrequencyCode: object.elements[2][0],
                        DespatchPatternCode: object.elements[2][1],
                        DespatchPatternTimingCode: object.elements[2][2]
                    }
                }
            };
            break;        
        
        case "MOA":
            segment = {
                SegmentName: "Monetary amount",
                MonetaryAmount: {
                    MonetaryAmountTypeCodeQualifier: object.elements[0][0],
                    MonetaryAmount: object.elements[0][1],
                    CurrencyIdentificationCode: object.elements[0][2],
                    CurrencyTypeCodeQualifier: object.elements[0][3],
                    StatusDescriptionCode: object.elements[0][4]
                }
            };
            break;
        
        case "RTE":
            segment = {
                SegmentName: "Rate Details",
                RateDetails: {
                    RateTypeCodeQualifier: object.elements[0][0],
                    UnitPriceBasisRate: object.elements[0][1],
                    UnitPriceBasisQuantity: object.elements[0][2],
                    MeasurementUnitCode: object.elements[0][3]
                },
                StatusDescriptionCode: object.elements[1][0]
            };
            break;
        
        case "PRI":
            segment = {
                SegmentName: "Price details",
                PriceDetails: {
                    PriceInformation: {
                        PriceCodeQualifier: object.elements[0][0],
                        PriceAmount: object.elements[0][1],
                        PriceTypeCode: object.elements[0][2],
                        PriceSpecificationCode: object.elements[0][3],
                        UnitPriceBasisQuantity: object.elements[0][4],
                        MeasurementUnitCode: object.elements[0][5]
                    }
                }
            };
            break;
        
        case "PAC":
            segment = {
                SegmentName: "Package",
                Package: {
                    PackageQuantity: object.elements[0][0],
                    PackagingDetails: {
                        PackagingLevelCode: object.elements[1][0],
                        PackagingRelatedDescriptionCode: object.elements[1][1],
                        PackagingTermsAndConditionsCode: object.elements[1][2]
                    },
                    PackageType: {
                        PackageTypeDescriptionCode: object.elements[2][0],
                        CodeListIdentificationCode: object.elements[2][1],
                        CodeListResponsibleAgencyCode: object.elements[2][2],
                        TypesOfPackages: object.elements[2][3]
                    }
                }
            };
            break;
        
        case "PCI":
            segment = {
                SegmentName: "Package identification",
                PackageIdentification: {
                    MarkingInstructionsCode: object.elements[0][0]
                }
            };
            break;
        
        case "TAX":
            segment = {
                SegmentName: "Duty/tax/fee details",
                DutyTaxFeeDetails: {
                    DutyTaxFeeFunctionCodeQualifier: object.elements[0][0],
                    DutyTaxFeeType: {
                        DutyTaxFeeTypeNameCode: object.elements[1][0],
                        CodeListIdentificationCode: object.elements[1][1],
                        CodeListResponsibleAgency: object.elements[1][2],
                        DutyTaxFeeTypeName: object.elements[1][3]
                    },
                    DutyTaxFeeAccountDetails: {
                        DutyTaxFeeAccountCode: object.elements[2][0],
                        CodeListIdentificationCode: object.elements[2][1],
                        CodeListResponsibleAgency: object.elements[2][2],
                    },
                    DutyTaxFeeAssessmentBasisQuantity: object.elements[3][0],
                    DutyTaxFeeDetails: {
                        DutyTaxFeeRateCode: object.elements[4][0],
                        CodeListIdentificationCode: object.elements[4][1],
                        CodeListResponsibleAgency: object.elements[4][2],
                        DutyTaxFeeRate: object.elements[4][3],
                        DutyTaxFeeRateBasisCode: object.elements[4][4]
                    },
                    DutyTaxFeeCategoryCode: object.elements[5][0]

                }
            };
            break;
        
        case "UNS":
            segment = {
                SegmentName: "Section Identification",
                SectionIdentification: object.elements[0][0]
            };
            break;
    
        case "CNT":
            segment = {
                SegmentName: "Control",
                Control: {
                    ControlTotalTypeCodeQualifier: object.elements[0][0],
                    ControlTotalQuantity: object.elements[0][1],
                    MeasurementUnitCode: object.elements[0][2]
                }
            };
            break;
    
        case "UNT":
            segment = {
                SegmentName: "Message Trailer",
                MessageTrailer: {
                    NumberOfSegments: object.elements[0][0],
                    MessageReferenceNumber: object.elements[1][0]
                }
            };
            break;
        
        case "UNZ":
            segment = {
                SegmentName: "Interchange Trailer",
                InterchangeTrailer: {
                    InterchangeControlCount: object.elements[0][0],
                    InterchangeControlReference: object.elements[1][0]
                }
            };
            break;    
        
        default:
            segment = {
                SegmentName: "Unknown segment code"
            };
            break;
    }

    return segment;
}

function getSegmentObj(object: any) {
    let segment;
    const segmentCode: string = object.name;
    const elements: any = object.elements;

    switch (segmentCode) {
        case "UNB":
            segment = mapping.UNB(elements);
            break;

        case "UNH":
            segment = mapping.UNH(elements);
            break;

        case "BGM":
            segment = mapping.BGM(elements);
            break;

        case "DTM":
            segment = mapping.DTM(elements);
            break;

        case "PAI":
            segment = mapping.PAI(elements);
            break;

        case "FTX":
            segment = mapping.FTX(elements);
            break;

        case "GIR":
            segment = mapping.GIR(elements);
            break;

        case "IMD":
            segment = mapping.IMD(elements);
            break;

        case "RFF":
            segment = mapping.RFF(elements);
            break;

        case "NAD":
            segment = mapping.NAD(elements);
            break;

        case "CTA":
            segment = mapping.CTA(elements);
            break;

        case "COM":
            segment = mapping.COM(elements);
            break;

        case "CUX":
            segment = mapping.CUX(elements);
            break;

        case "TDT":
            segment = mapping.TDT(elements);
            break;

        case "TOD":
            segment = mapping.TOD(elements);
            break;

        case "LOC":
            segment = mapping.LOC(elements);
            break;

        case "LIN":
            segment = mapping.LIN(elements);
            break;

        case "PIA":
            segment = mapping.PIA(elements);
            break;

        case "QTY":
            segment = mapping.QTY(elements);
            break;

        case "PYT":
            segment = mapping.PYT(elements);
            break;

        case "EQD":
            segment = mapping.EQD(elements);
            break;

        case "SCC":
            segment = mapping.SCC(elements);
            break;

        case "MOA":
            segment = mapping.MOA(elements);
            break;

        case "RTE":
            segment = mapping.RTE(elements);
            break;

        case "PRI":
            segment = mapping.PRI(elements);
            break;

        case "PAC":
            segment = mapping.PAC(elements);
            break;

        case "PCI":
            segment = mapping.PCI(elements);
            break;

        case "TAX":
            segment = mapping.TAX(elements);
            break;

        case "ALI":
            segment = mapping.ALI(elements);
            break;

        case "FII":
            segment = mapping.FII(elements);
            break;

        case "DOC":
            segment = mapping.DOC(elements);
            break;

        case "PCD":
            segment = mapping.PCD(elements);
            break;

        case "RJL":
            segment = mapping.RJL(elements);
            break;

        case "MEA":
            segment = mapping.MEA(elements);
            break;

        case "GIN":
            segment = mapping.GIN(elements);
            break;

        case "HAN":
            segment = mapping.HAN(elements);
            break;
        case "APR":
            segment = mapping.APR(elements);
            break;
        case "RNG":
            segment = mapping.RNG(elements);
            break;

        case "ALC":
            segment = mapping.ALC(elements);
            break;
        case "RCS":
            segment = mapping.RCS(elements);
            break;
        case "DGS":
            segment = mapping.DGS(elements);
            break;
        case "EFI":
            segment = mapping.EFI(elements);
            break;
        case "CED":
            segment = mapping.CED(elements);
            break;
        case "GEI":
            segment = mapping.GEI(elements);
            break;
        case "QVR":
            segment = mapping.QVR(elements);
            break;
        case "MTD":
            segment = mapping.MTD(elements);
            break;
        case "CCI":
            segment = mapping.CCI(elements);
            break;
        case "CAV":
            segment = mapping.CAV(elements);
            break;
        case "STS":
            segment = mapping.STS(elements);
            break;
        case "STG":
            segment = mapping.STG(elements);
            break;
        case "UNS":
            segment = mapping.UNS(elements);
            break;

        case "CNT":
            segment = mapping.CNT(elements);
            break;

        case "UNT":
            segment = mapping.UNT(elements);
            break;

        case "UNZ":
            segment = mapping.UNZ(elements);
            break;

        default:
            segment = {
                SegmentName: "Unknown segment code"
            };
            break;
    }

    return segment;
}