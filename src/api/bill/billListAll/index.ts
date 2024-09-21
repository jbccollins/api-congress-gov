import { Action, Base_Paginated_ApiResponse, BillType, Chamber, ChamberCode, TimeRange_UpdatedDateSortable_Paginated_ApiRequest } from "@/api/definitions";
import { doRequest } from "@/helpers/do-request";
import { AuthenticatedFetch } from "@/helpers/instantiate-authenticated-fetch";

export interface BillListAll_Item {
    congress: number;
    latestAction: Action;
    number: string;
    originChamber: Chamber;
    originChamberCode: ChamberCode;
    title: string;
    type: BillType;
    updateDate: string;
    updateDateIncludingText: string;
    url: string;
}

export interface BillListAll_ApiResponse extends Base_Paginated_ApiResponse {
    bills: BillListAll_Item[];
}

export type BillListAll_ApiRequest = TimeRange_UpdatedDateSortable_Paginated_ApiRequest;

const billListAll = (fetch: AuthenticatedFetch) => {
    return async (request: BillListAll_ApiRequest = {}): Promise<BillListAll_ApiResponse> => {
        const url = "/bill";
        return await doRequest<BillListAll_ApiResponse>({
            url,
            request,
            fetch,
        });
    };
};

export default billListAll;