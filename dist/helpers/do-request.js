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
exports.doRequest = void 0;
const keys = ["offset", "limit", "sort", "fromDateTime", "toDateTime"];
const extractSearchParams = (obj) => {
    const searchParams = new URLSearchParams();
    const _obj = obj !== null && obj !== void 0 ? obj : {};
    for (const key of keys) {
        if (key in _obj) {
            searchParams.append(key, _obj[key].toString());
        }
    }
    return searchParams;
};
const doRequest = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, request, fetch } = params;
    const searchParams = extractSearchParams(request);
    const _url = `${url}?${searchParams.toString()}`;
    const response = yield fetch(_url);
    return response;
});
exports.doRequest = doRequest;
