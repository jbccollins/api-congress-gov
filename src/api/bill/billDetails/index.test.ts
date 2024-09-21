import { BillType } from "@/api/definitions";
import apiInstance from "@/helpers/test-api-instance";

describe('billDetails', () => {
  it('should fetch the bill details with no parameters', async () => {

    const response = await apiInstance.bill.billDetails({
      billNumber: '7377',
      billType: BillType.HR,
      congress: '118',

    });
    expect(response).toHaveProperty('bill');
    expect(response.bill).toHaveProperty('actions');
    expect(response.bill).toHaveProperty('cboCostEstimates');
    expect(response.bill).toHaveProperty('committeeReports');
    expect(response.bill).toHaveProperty('committees');
    expect(response.bill).toHaveProperty('congress');
    expect(response.bill).toHaveProperty('constitutionalAuthorityStatementText');
    expect(response.bill).toHaveProperty('cosponsors');
    expect(response.bill).toHaveProperty('introducedDate');
    expect(response.bill).toHaveProperty('latestAction');
    expect(response.bill).toHaveProperty('number');
    expect(response.bill).toHaveProperty('originChamber');
    expect(response.bill).toHaveProperty('originChamberCode');
    expect(response.bill).toHaveProperty('policyArea');
    expect(response.bill).toHaveProperty('sponsors');
    expect(response.bill).toHaveProperty('subjects');
    expect(response.bill).toHaveProperty('summaries');
    expect(response.bill).toHaveProperty('textVersions');
    expect(response.bill).toHaveProperty('title');
    expect(response.bill).toHaveProperty('titles');
    expect(response.bill).toHaveProperty('type');
    expect(response.bill).toHaveProperty('updateDate');
    expect(response.bill).toHaveProperty('updateDateIncludingText');
  });
})