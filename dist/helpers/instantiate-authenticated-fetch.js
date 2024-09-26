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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = instantiateAuthenticatedFetch;
const BASE_URL = "https://api.congress.gov/v3";
const env_vars_1 = require("@/env-vars");
function instantiateAuthenticatedFetch(apiKey) {
    return (partialUrl, init) => __awaiter(this, void 0, void 0, function* () {
        const url = new URL(`${BASE_URL}${partialUrl}`);
        // Add the api_key query parameter
        url.searchParams.append("api_key", apiKey);
        if (env_vars_1.ENVIRONMENT === "development") {
            console.log("fetching", url.toString());
        }
        const response = yield fetch(url, init);
        const data = yield response.json();
        if (env_vars_1.ENVIRONMENT === "development") {
            console.log("response", data);
            console.log("fetched", url.toString());
        }
        return data;
    });
}
