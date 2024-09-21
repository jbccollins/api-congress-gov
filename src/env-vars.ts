import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Access the API_KEY environment variable
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY is not defined in the environment variables");
}

const ENVIRONMENT = process.env.ENVIRONMENT ?? 'development';


export {
    API_KEY,
    ENVIRONMENT
};
