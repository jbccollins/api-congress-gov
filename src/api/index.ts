import instantiateAuthenticatedFetch from "@/helpers/instantiate-authenticated-fetch";
import bill from "./bill";

const api = (apiKey: string) => {
    const authenticatedFetch = instantiateAuthenticatedFetch(apiKey);

    return {
        bill: bill(authenticatedFetch),
    } as const;
}

export default api;