// usage: npx ts-node -r tsconfig-paths/register examples/bills-manual.ts

import api from "@/api";

const apiInstance = api("ItlviSbxwipD7PBOPbcp8ZQvAFF5tVdWdOoVNrqh");

const main = async () => {
    const bills = await apiInstance.bill.billListAll({
        offset: 0,
        limit: 20,
    });
    console.log(bills);
}

main();