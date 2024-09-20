import { AuthenticatedFetch } from "@/helpers/instantiate-authenticated-fetch";
import { Action, Chamber, ChamberCode, Base_Paginated_ApiResponse, BillType, Base_Paginated_ApiRequest } from "@/api/definitions";

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

export interface BillListAll_ApiResponse extends Base_Paginated_ApiResponse{
    bills: BillListAll_Item[];
}

const billListAll = (fetch: AuthenticatedFetch) => {
    return async (request: Base_Paginated_ApiRequest): Promise<BillListAll_ApiResponse> => {
        const path = "/bill";
        const searchParams = new URLSearchParams();

        for (const [key, value] of Object.entries(request)) {
            searchParams.append(key, value.toString());
        }

        const url = `${path}?${searchParams.toString()}`;

        const response = await fetch<BillListAll_ApiResponse>(url, {});
        return response;
    };
};

export default billListAll;