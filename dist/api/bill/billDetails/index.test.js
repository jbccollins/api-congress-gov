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
describe("billDetails", () => {
    it("should fetch the bill details with no parameters", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield test_api_instance_1.default.bill.billDetails({
            billNumber: "7377",
            billType: definitions_1.BillType.HR,
            congress: "118",
        });
        expect(response).toHaveProperty("bill");
        expect(response.bill).toHaveProperty("actions");
        expect(response.bill).toHaveProperty("cboCostEstimates");
        expect(response.bill).toHaveProperty("committeeReports");
        expect(response.bill).toHaveProperty("committees");
        expect(response.bill).toHaveProperty("congress");
        expect(response.bill).toHaveProperty("constitutionalAuthorityStatementText");
        expect(response.bill).toHaveProperty("cosponsors");
        expect(response.bill).toHaveProperty("introducedDate");
        expect(response.bill).toHaveProperty("latestAction");
        expect(response.bill).toHaveProperty("number");
        expect(response.bill).toHaveProperty("originChamber");
        expect(response.bill).toHaveProperty("originChamberCode");
        expect(response.bill).toHaveProperty("policyArea");
        expect(response.bill).toHaveProperty("sponsors");
        expect(response.bill).toHaveProperty("subjects");
        expect(response.bill).toHaveProperty("summaries");
        expect(response.bill).toHaveProperty("textVersions");
        expect(response.bill).toHaveProperty("title");
        expect(response.bill).toHaveProperty("titles");
        expect(response.bill).toHaveProperty("type");
        expect(response.bill).toHaveProperty("updateDate");
        expect(response.bill).toHaveProperty("updateDateIncludingText");
    }));
});
