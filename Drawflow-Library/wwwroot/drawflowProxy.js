"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDrawflow = void 0;
const drawflow_1 = __importDefault(require("drawflow"));
let GlobalDrawFlows = [];
function CreateDrawflow(proxyID, ID, options) {
    try {
        if (typeof proxyID !== 'number')
            throw new Error("proxyID must be type of Number.");
        GlobalDrawFlows[proxyID] = new drawflow_1.default(ID);
        let workingDrawflow = GlobalDrawFlows[proxyID];
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.CreateDrawflow = CreateDrawflow;
