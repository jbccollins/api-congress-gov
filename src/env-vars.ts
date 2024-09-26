import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Access the API_KEY environment variable
const API_KEY = process.env.API_KEY ?? "";
const ENVIRONMENT = process.env.ENVIRONMENT ?? "";

export { API_KEY, ENVIRONMENT };
