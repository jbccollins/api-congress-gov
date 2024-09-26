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
const do_request_1 = require("@/helpers/do-request");
const billDetails = (fetch) => {
    return (request) => __awaiter(void 0, void 0, void 0, function* () {
        const { billNumber, billType, congress } = request;
        const url = `/bill/${congress}/${billType}/${billNumber}`;
        return yield (0, do_request_1.doRequest)({
            url,
            request,
            fetch,
        });
    });
};
exports.default = billDetails;
