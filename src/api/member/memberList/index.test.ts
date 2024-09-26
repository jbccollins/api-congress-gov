import { TrueFalse } from "@/api/definitions";
import apiInstance from "@/helpers/test-api-instance";

describe("memberList", () => {
  it("should fetch the member list with no parameters", async () => {
    const response = await apiInstance.member.memberList();
    expect(response).toHaveProperty("members");
    expect(Array.isArray(response.members)).toBe(true);
    expect(response.members.length).toBeGreaterThan(0);
  });
  it("should fetch the member list with only current members", async () => {
    const response = await apiInstance.member.memberList({
      offset: 1,
      limit: 5,
      currentMember: TrueFalse.True,
    });
    expect(response).toHaveProperty("members");
    expect(Array.isArray(response.members)).toBe(true);
    expect(response.members.length).toBe(5);
  });
  // TOOD: This test fails because for some reason the fromDateTime and toDateTime parameters
  // cause the API to return an empty list. This is likely a bug in the API.
  xit("should fetch the member list for 2021", async () => {
    const response = await apiInstance.member.memberList({
      fromDateTime: "2021-01-01T00:00:00Z",
      toDateTime: "2021-12-31T23:59:59Z",
    });
    expect(response).toHaveProperty("members");
    expect(Array.isArray(response.members)).toBe(true);
    expect(response.members.length).toBeGreaterThan(0);
  });
  // TODO: This doesn't seem to be working as expected. The API returns current members.
  xit("Should fetch the member list offset with non-current members", async () => {
    const response = await apiInstance.member.memberList({
      offset: 1,
      limit: 5,
      currentMember: TrueFalse.False,
    });
    expect(response).toHaveProperty("members");
    expect(Array.isArray(response.members)).toBe(true);
    expect(response.members.length).toBe(5);
  });
});
