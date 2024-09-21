export enum UpdateDateSort {
  "updateDateAsc" = "updateDate+asc",
  "updateDateDesc" = "updateDate+desc",
}

export interface Base_Paginated_ApiRequest {
  offset?: number;
  limit?: number;
}

export interface UpdatedDateSortable_ApiRequest {
  sort?: UpdateDateSort;
}

export type UpdatedDateSortable_Paginated_ApiRequest =
  Base_Paginated_ApiRequest & UpdatedDateSortable_ApiRequest;

export interface TimeRangeApiRequest {
  fromDateTime?: string;
  toDateTime?: string;
}

export type TimeRange_UpdatedDateSortable_Paginated_ApiRequest =
  UpdatedDateSortable_Paginated_ApiRequest & TimeRangeApiRequest;

export interface ResponseRequest {
  contentType: "application/json";
  format: "json";
}

export interface Base_ApiResponse {
  request: ResponseRequest;
}

export interface Pagination {
  count: number;
  next?: string;
  prev?: string;
}

export interface Base_Paginated_ApiResponse extends Base_ApiResponse {
  pagination: Pagination;
}

export interface Action {
  actionDate: string;
  text: string;
}

export enum Chamber {
  House = "House",
  Senate = "Senate",
}

export enum ChamberCode {
  House = "H",
  Senate = "S",
}

export enum BillType {
  HR = "HR",
  S = "S",
  HJRES = "HJRES",
  SJRES = "SJRES",
  HCONRES = "HCONRES",
  SCONRES = "SCONRES",
  HRES = "HRES",
  SRES = "SRES",
}

export enum Party {
  D = "D",
  R = "R",
  I = "I", // TODO: Confirm this exists
}

export enum YesNo {
  Y = "Y",
  N = "N",
}

export enum StateAbbreviation {
  AL = "AL",
  AK = "AK",
  AZ = "AZ",
  AR = "AR",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DE = "DE",
  FL = "FL",
  GA = "GA",
  HI = "HI",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  IA = "IA",
  KS = "KS",
  KY = "KY",
  LA = "LA",
  ME = "ME",
  MD = "MD",
  MA = "MA",
  MI = "MI",
  MN = "MN",
  MS = "MS",
  MO = "MO",
  MT = "MT",
  NE = "NE",
  NV = "NV",
  NH = "NH",
  NJ = "NJ",
  NM = "NM",
  NY = "NY",
  NC = "NC",
  ND = "ND",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PA = "PA",
  RI = "RI",
  SC = "SC",
  SD = "SD",
  TN = "TN",
  TX = "TX",
  UT = "UT",
  VT = "VT",
  VA = "VA",
  WA = "WA",
  WV = "WV",
  WI = "WI",
  WY = "WY",
}

export interface CountUrl {
  count: number;
  url: string;
}
