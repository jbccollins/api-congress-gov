import instantiateAuthenticatedFetch from "@/helpers/instantiate-authenticated-fetch";
import bill from "./bill";
import member from "./member";

const api = (apiKey: string) => {
  const authenticatedFetch = instantiateAuthenticatedFetch(apiKey);

  return {
    bill: bill(authenticatedFetch),
    member: member(authenticatedFetch),
  } as const;
};

export default api;
