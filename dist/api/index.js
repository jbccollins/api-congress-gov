"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instantiate_authenticated_fetch_1 = __importDefault(require("@/helpers/instantiate-authenticated-fetch"));
const bill_1 = __importDefault(require("./bill"));
const member_1 = __importDefault(require("./member"));
const api = (apiKey) => {
    const authenticatedFetch = (0, instantiate_authenticated_fetch_1.default)(apiKey);
    return {
        bill: (0, bill_1.default)(authenticatedFetch),
        member: (0, member_1.default)(authenticatedFetch),
    };
};
exports.default = api;
