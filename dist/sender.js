"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const receiverUrl = 'http://localhost:4000';
console.log('Sender ');
const edifactMessage = `
blah
blah`;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios_1.default.post(receiverUrl, edifactMessage, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            console.log('EDIFACT message sent successfully');
            console.log(result.data);
        }
        catch (err) {
            console.log('Error making a request ', err);
        }
    });
}
main();
