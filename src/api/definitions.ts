export enum UpdateDateSort {
    "updateDateAsc" = "updateDate+asc",
    "updateDateDesc" = "updateDate+desc",
}

export interface Base_Paginated_ApiRequest {
    offset: number;
    limit: number;
}

export interface UpdatedDateSortable_ApiRequest {
    sort: UpdateDateSort;
}

export type UpdatedDateSortable_Paginated_ApiRequest = Base_Paginated_ApiRequest & UpdatedDateSortable_ApiRequest;

export interface TimeRangeApiRequest {
    fromDateTime: string;
    toDateTime: string;
}

export type TimeRange_UpdatedDateSortable_Paginated_ApiRequest = UpdatedDateSortable_Paginated_ApiRequest & TimeRangeApiRequest;

export interface Base_ApiResponse {
    contentType: string;
    format: string;
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
    hr = "hr",
    s = "s",
    hjres = "hjres",
    sjres = "sjres",
    hconres = "hconres",
    sconres = "sconres",
    hres = "hres",
    sres = "sres",
}