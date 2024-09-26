export enum UpdateDateSort {
  "updateDateAsc" = "updateDate+asc",
  "updateDateDesc" = "updateDate+desc",
}

export interface Paginated_ApiRequest {
  offset?: number;
  limit?: number;
}

export interface UpdateDateSortable_ApiRequest {
  sort?: UpdateDateSort;
}

export type UpdateDateSortable_Paginated_ApiRequest = Paginated_ApiRequest &
  UpdateDateSortable_ApiRequest;

export interface TimeRange_ApiRequest {
  fromDateTime?: string;
  toDateTime?: string;
}

export type TimeRange_UpdateDateSortable_Paginated_ApiRequest =
  UpdateDateSortable_Paginated_ApiRequest & TimeRange_ApiRequest;

export type TimeRange_Paginated_ApiRequest = Paginated_ApiRequest &
  TimeRange_ApiRequest;

export interface Base_ApiResponse_Request {
  contentType: "application/json";
  format: "json";
}

export interface Base_ApiResponse {
  request: Base_ApiResponse_Request;
}

export interface Paginated_ApiResponse_Pagination {
  count: number;
  next?: string;
  prev?: string;
}

export interface Paginated_ApiResponse extends Base_ApiResponse {
  pagination: Paginated_ApiResponse_Pagination;
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

export enum ChamberLongName {
  HouseOfRepresentatives = "House of Representatives",
  Senate = "Senate",
}

export enum TrueFalse {
  True = "true",
  False = "false",
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

// TODO: Confirm all of these (and if more exist)
export enum PartyName {
  Democratic = "Democratic",
  Republican = "Republican",
  Independent = "Independent",
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

export enum State {
  Alabama = "Alabama",
  Alaska = "Alaska",
  Arizona = "Arizona",
  Arkansas = "Arkansas",
  California = "California",
  Colorado = "Colorado",
  Connecticut = "Connecticut",
  Delaware = "Delaware",
  Florida = "Florida",
  Georgia = "Georgia",
  Hawaii = "Hawaii",
  Idaho = "Idaho",
  Illinois = "Illinois",
  Indiana = "Indiana",
  Iowa = "Iowa",
  Kansas = "Kansas",
  Kentucky = "Kentucky",
  Louisiana = "Louisiana",
  Maine = "Maine",
  Maryland = "Maryland",
  Massachusetts = "Massachusetts",
  Michigan = "Michigan",
  Minnesota = "Minnesota",
  Mississippi = "Mississippi",
  Missouri = "Missouri",
  Montana = "Montana",
  Nebraska = "Nebraska",
  Nevada = "Nevada",
  NewHampshire = "New Hampshire",
  NewJersey = "New Jersey",
  NewMexico = "New Mexico",
  NewYork = "New York",
  NorthCarolina = "North Carolina",
  NorthDakota = "North Dakota",
  Ohio = "Ohio",
  Oklahoma = "Oklahoma",
  Oregon = "Oregon",
  Pennsylvania = "Pennsylvania",
  RhodeIsland = "Rhode Island",
  SouthCarolina = "South Carolina",
  SouthDakota = "South Dakota",
  Tennessee = "Tennessee",
  Texas = "Texas",
  Utah = "Utah",
  Vermont = "Vermont",
  Virginia = "Virginia",
  Washington = "Washington",
  WestVirginia = "West Virginia",
  Wisconsin = "Wisconsin",
  Wyoming = "Wyoming",
}

export interface CountUrl {
  count: number;
  url: string;
}
