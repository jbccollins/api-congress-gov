import { AuthenticatedFetch } from "@/helpers/instantiate-authenticated-fetch";
import billListAll from "./bill";

const methods = (fetch: AuthenticatedFetch) => {
    return {
        billListAll: billListAll(fetch),
    } as const;
}; 

export default methods;