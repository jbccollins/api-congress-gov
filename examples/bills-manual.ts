// usage: npx ts-node -r tsconfig-paths/register examples/bills-manual.ts

import api from "@/api";
import apiKey from "@/api-key";

if (!apiKey) {
    throw new Error("API key is required");
}

const apiInstance = api(apiKey);

const main = async () => {
    const bills = await apiInstance.bill.billListAll({
        offset: 0,
        limit: 20,
    });
    console.log(bills);
}

main();