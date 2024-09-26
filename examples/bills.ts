// usage: npx ts-node -r tsconfig-paths/register examples/bills.ts

import api from "@/api";
import { API_KEY } from "@/env-vars";

if (!API_KEY) {
  throw new Error("API key is required");
}

const apiInstance = api(API_KEY);

const main = async () => {
  const bills = await apiInstance.bill.billListAll({
    offset: 0,
    limit: 20,
  });
};

main();
