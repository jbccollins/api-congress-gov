
import { UpdateDateSort } from "@/api/definitions";
import apiInstance from "@/helpers/test-api-instance";

describe('billListAll', () => {
    it('should fetch the bill list with no parameters', async () => {
        
        const response = await apiInstance.bill.billListAll();
        expect(response).toHaveProperty('bills');
        expect(Array.isArray(response.bills)).toBe(true);
        expect(response.bills.length).toBeGreaterThan(0);
    });
    it('should fetch the bill list with parameters', async () => {
        const response = await apiInstance.bill.billListAll({
            offset: 20,
            limit: 5,
            sort: UpdateDateSort.updateDateDesc,
            fromDateTime: '2021-01-01T00:00:00Z',
            toDateTime: '2021-12-31T23:59:59Z',
            
        });
        expect(response).toHaveProperty('bills');
        expect(Array.isArray(response.bills)).toBe(true);
        expect(response.bills.length).toBe(5);
    });
});