const BASE_URL = "https://api.congress.gov/v3";

import { ENVIRONMENT } from "@/env-vars";

export default function instantiateAuthenticatedFetch(apiKey: string) {
  return async <T>(partialUrl: string, init?: RequestInit): Promise<T> => {
    const url = new URL(`${BASE_URL}${partialUrl}`);
    // Add the api_key query parameter
    url.searchParams.append("api_key", apiKey);
    if (ENVIRONMENT === "development") {
      console.log("fetching", url.toString());
    }
    const response = await fetch(url, init);

    const data: T = await response.json();
    if (ENVIRONMENT === "development") {
      console.log("response", data);
      console.log("fetched", url.toString());
    }
    return data;
  };
}

export type AuthenticatedFetch = ReturnType<
  typeof instantiateAuthenticatedFetch
>;
