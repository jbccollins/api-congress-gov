import { AuthenticatedFetch } from "./instantiate-authenticated-fetch";


const keys = ['offset', 'limit', 'sort', 'fromDateTime', 'toDateTime'];

const extractSearchParams = (obj?: object) => {
  const searchParams = new URLSearchParams();
  const _obj = obj ?? {} as Record<string, unknown>;
  for (const key of keys) {
    if (key in _obj) {
      searchParams.append(key, (_obj as Record<string, any>)[key].toString());
    }
  }
  return searchParams;
};

export interface DoRequestParams {
  url: string;
  request: object;
  fetch: AuthenticatedFetch;
}

export const doRequest = async <T>(params: DoRequestParams): Promise<T> => {
  const { url, request, fetch } = params;
  const searchParams = extractSearchParams(request);
  const _url = `${url}?${searchParams.toString()}`;
  const response = await fetch<T>(_url);
  return response;
}