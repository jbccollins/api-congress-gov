import { Api } from "../api";

function customFetchWithApiKey(apiKey: string) {
  return async (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> => {
    let url: URL;

    if (input instanceof URL) {
      url = input;
    } else if (typeof input === "string") {
      url = new URL(input);
    } else {
      url = new URL(input.url);
    }

    // Add the api_key query parameter
    url.searchParams.append("api_key", apiKey);

    const modifiedInput =
      input instanceof URL || typeof input === "string"
        ? url.toString()
        : new Request(url.toString(), input);

    return fetch(modifiedInput, init);
  };
}

async function main() {
  console.log("Hello, world!");

  const apiKey = "ItlviSbxwipD7PBOPbcp8ZQvAFF5tVdWdOoVNrqh";
  const customFetch = customFetchWithApiKey(apiKey);

  const api = new Api({
    customFetch,
    baseUrl: "https://api.congress.gov/v3",
  });
  console.log("Alive");

  try {
    const bills = await api.bill.billListAll({
      format: "json",
      offset: 0,
      limit: 20,
    });
    const billsJson = await bills.json();
    console.log(billsJson);
  } catch (e) {
    console.error(e);
  }
}

main();
