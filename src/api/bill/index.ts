import { AuthenticatedFetch } from "@/helpers/instantiate-authenticated-fetch";
import billDetails from "./billDetails";
import billListAll from "./billListAll";

const methods = (fetch: AuthenticatedFetch) => {
    return {
        billListAll: billListAll(fetch),
        billDetails: billDetails(fetch),
    } as const;
};

export default methods;