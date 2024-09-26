import api from "@/api";
import { API_KEY } from "@/env-vars";

if (!API_KEY) {
  throw new Error("API key is required");
}

const apiInstance = api(API_KEY);

export default apiInstance;
