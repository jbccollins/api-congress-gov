import {
  ChamberLongName,
  Paginated_ApiResponse,
  PartyName,
  State,
  TimeRange_Paginated_ApiRequest,
  TrueFalse,
} from "@/api/definitions";
import { doRequest } from "@/helpers/do-request";
import { AuthenticatedFetch } from "@/helpers/instantiate-authenticated-fetch";

export interface Depicition {
  attribution: string;
  imageUrl: string;
}

export interface TermsItem {
  chamber: ChamberLongName;
  endYear?: number;
  startYear: number;
}

// This is intentionally not an array because the API returns an object with a single key
// for whatever reason.
export interface Terms {
  item: TermsItem[];
}

export interface MemberList_MembersItem {
  bioGuideId: string;
  depiction?: Depicition;
  district?: number | null; // Always null for senators
  name: string;
  partyName: PartyName;
  state: State;
  terms: Terms;
  updateDate: string;
  url: string;
}

export interface MemberList_ApiResponse extends Paginated_ApiResponse {
  members: MemberList_MembersItem[];
}

export type MemberList_ApiRequest = TimeRange_Paginated_ApiRequest & {
  currentMember?: TrueFalse;
};

const memberList = (fetch: AuthenticatedFetch) => {
  return async (
    request: MemberList_ApiRequest = {}
  ): Promise<MemberList_ApiResponse> => {
    const url = "/member";
    return await doRequest<MemberList_ApiResponse>({
      url,
      request,
      fetch,
    });
  };
};

export default memberList;
