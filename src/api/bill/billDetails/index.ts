import { Action, BillType, Chamber, ChamberCode, CountUrl, Party, ResponseRequest, StateAbbreviation, YesNo } from "@/api/definitions";
import { doRequest } from "@/helpers/do-request";
import { AuthenticatedFetch } from "@/helpers/instantiate-authenticated-fetch";

export interface CboCostEstimates {
    description: string;
    pubDate: string;
    title: string;
    url: string;
}

export interface CommitteeReports {
    citation: string;
    url: string;
}

export interface Cosponsors extends CountUrl {
    countIncludingWithdrawnCosponsors: number;
};

export interface PolicyArea {
    name: string;
}

export interface Sponsor {
    bioguideId: string;
    district: number;
    firstName: string;
    fullName: string;
    isByRequest: YesNo;
    lastName: string;
    party: Party;
    state: StateAbbreviation;
    url: string;
}

export interface Law {
    number: string;
    type: string; // TODO: Should this be an enum? Example is "Public Law"
}

export interface BillDetails {
    actions: CountUrl;
    amendments?: CountUrl;
    cboCostEstimates?: CboCostEstimates[];
    committeeReports?: CommitteeReports[];
    committees?: CountUrl;
    congress: number;
    constitutionalAuthorityStatementText?: string;
    cosponsors?: Cosponsors;
    introducedDate: string;
    latestAction: Action;
    laws?: Law[];
    number: string;
    originChamber: Chamber;
    originChamberCode: ChamberCode;
    policyArea?: PolicyArea;
    relatedBills?: CountUrl;
    sponsors?: Sponsor[];
    subjects?: CountUrl;
    summaries?: CountUrl;
    textVersions?: CountUrl;
    title: string;
    titles: CountUrl;
    type: BillType;
    updateDate: string;
    updateDateIncludingText: string;
}

export interface BillDetails_ApiRequest {
    billNumber: string;
    billType: BillType;
    congress: string;
}

export type BillDetails_ResponseRequest = ResponseRequest & BillDetails_ApiRequest;

export interface BillDetails_ApiResponse {
    bill: BillDetails;
    request: BillDetails_ResponseRequest
}


const billDetails = (fetch: AuthenticatedFetch) => {
    return async (request: BillDetails_ApiRequest): Promise<BillDetails_ApiResponse> => {
        const { billNumber, billType, congress } = request;
        const url = `/bill/${congress}/${billType}/${billNumber}`;
        return await doRequest<BillDetails_ApiResponse>({
            url,
            request,
            fetch,
        });

    };
}

export default billDetails;