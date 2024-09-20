const BASE_URL = "https://api.congress.gov/v3";

export default function instantiateAuthenticatedFetch<T>(apiKey: string) {
  return async <T>(partialUrl: string, init?: RequestInit): Promise<T> => {
    const url = new URL(`${BASE_URL}${partialUrl}`);
    // Add the api_key query parameter
    url.searchParams.append("api_key", apiKey);
    const response = await fetch(url, init);
    const data: T = await response.json();
    return data;
  };
}


export type AuthenticatedFetch = ReturnType<typeof instantiateAuthenticatedFetch>;