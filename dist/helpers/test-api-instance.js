"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("@/api"));
const env_vars_1 = require("@/env-vars");
if (!env_vars_1.API_KEY) {
    throw new Error("API key is required");
}
const apiInstance = (0, api_1.default)(env_vars_1.API_KEY);
exports.default = apiInstance;
