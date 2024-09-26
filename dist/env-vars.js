"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENVIRONMENT = exports.API_KEY = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Access the API_KEY environment variable
const API_KEY = (_a = process.env.API_KEY) !== null && _a !== void 0 ? _a : "";
exports.API_KEY = API_KEY;
const ENVIRONMENT = (_b = process.env.ENVIRONMENT) !== null && _b !== void 0 ? _b : "";
exports.ENVIRONMENT = ENVIRONMENT;
