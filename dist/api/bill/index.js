"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const billDetails_1 = __importDefault(require("./billDetails"));
const billListAll_1 = __importDefault(require("./billListAll"));
const methods = (fetch) => {
    return {
        billListAll: (0, billListAll_1.default)(fetch),
        billDetails: (0, billDetails_1.default)(fetch),
    };
};
exports.default = methods;
