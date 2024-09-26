"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memberList_1 = __importDefault(require("./memberList"));
const methods = (fetch) => {
    return {
        memberList: (0, memberList_1.default)(fetch),
    };
};
exports.default = methods;
