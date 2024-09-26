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
describe("memberList", () => {
    it("should fetch the member list with no parameters", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield test_api_instance_1.default.member.memberList();
        expect(response).toHaveProperty("members");
        expect(Array.isArray(response.members)).toBe(true);
        expect(response.members.length).toBeGreaterThan(0);
    }));
    it("should fetch the member list with only current members", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield test_api_instance_1.default.member.memberList({
            offset: 1,
            limit: 5,
            currentMember: definitions_1.TrueFalse.True,
        });
        expect(response).toHaveProperty("members");
        expect(Array.isArray(response.members)).toBe(true);
        expect(response.members.length).toBe(5);
    }));
    // TOOD: This test fails because for some reason the fromDateTime and toDateTime parameters
    // cause the API to return an empty list. This is likely a bug in the API.
    xit("should fetch the member list for 2021", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield test_api_instance_1.default.member.memberList({
            fromDateTime: "2021-01-01T00:00:00Z",
            toDateTime: "2021-12-31T23:59:59Z",
        });
        expect(response).toHaveProperty("members");
        expect(Array.isArray(response.members)).toBe(true);
        expect(response.members.length).toBeGreaterThan(0);
    }));
    // TODO: This doesn't seem to be working as expected. The API returns current members.
    xit("Should fetch the member list offset with non-current members", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield test_api_instance_1.default.member.memberList({
            offset: 1,
            limit: 5,
            currentMember: definitions_1.TrueFalse.False,
        });
        expect(response).toHaveProperty("members");
        expect(Array.isArray(response.members)).toBe(true);
        expect(response.members.length).toBe(5);
    }));
});
