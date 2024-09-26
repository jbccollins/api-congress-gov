import { AuthenticatedFetch } from "@/helpers/instantiate-authenticated-fetch";
import memberList from "./memberList";

const methods = (fetch: AuthenticatedFetch) => {
  return {
    memberList: memberList(fetch),
  } as const;
};

export default methods;
