"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEdifact = exports.parseX12 = void 0;
const edifact_1 = require("edifact");
const mappingX12 = __importStar(require("./m2"));
const { X12Parser } = require('node-x12');
const mappingService_1 = require("./mappingService");
function parseX12(ediMessage) {
    const parser = new X12Parser();
    try {
        const result = parser.parse(ediMessage).toJSON();
        const arr = [];
        const interchangeHeaderElements = result.header;
        const groupHeaderElements = result.functionalGroups[0].header;
        const transactionHeaderElements = result.functionalGroups[0].transactions[0].header;
        const isa = mappingX12.ISA(interchangeHeaderElements);
        const gs = mappingX12.GS(groupHeaderElements);
        const st = mappingX12.ST(transactionHeaderElements);
        arr.push(isa);
        arr.push(gs);
        arr.push(st);
        const delimiter = isa.ComponentElementSeparator;
        const segments = result.functionalGroups[0].transactions[0].segments;
        for (let segment of segments) {
            const segmentObj = (0, mappingService_1.x12Mapping)(segment, delimiter);
            arr.push(segmentObj);
        }
        console.log(arr);
    }
    catch (err) {
        console.log(err);
    }
}
exports.parseX12 = parseX12;
function parseEdifact(edifactMessage) {
    const reader = new edifact_1.Reader({ autoDetectEncoding: true });
    const result = reader.parse(edifactMessage);
    const arr = [];
    for (const obj of result) {
        console.log(obj);
        const segmentObj = (0, mappingService_1.edifactMapping)(obj);
        arr.push(segmentObj);
    }
    console.log(arr);
}
exports.parseEdifact = parseEdifact;
