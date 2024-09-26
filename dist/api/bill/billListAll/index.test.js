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
const definitions_1 = require("@/api/definitions");
const test_api_instance_1 = __importDefault(require("@/helpers/test-api-instance"));
describe("billListAll", () => {
    it("should fetch the bill list with no parameters", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield test_api_instance_1.default.bill.billListAll();
        expect(response).toHaveProperty("bills");
        expect(Array.isArray(response.bills)).toBe(true);
        expect(response.bills.length).toBeGreaterThan(0);
    }));
    it("should fetch the bill list with parameters", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield test_api_instance_1.default.bill.billListAll({
            offset: 20,
            limit: 5,
            sort: definitions_1.UpdateDateSort.updateDateDesc,
            fromDateTime: "2021-01-01T00:00:00Z",
            toDateTime: "2021-12-31T23:59:59Z",
        });
        expect(response).toHaveProperty("bills");
        expect(Array.isArray(response.bills)).toBe(true);
        expect(response.bills.length).toBe(5);
    }));
});
