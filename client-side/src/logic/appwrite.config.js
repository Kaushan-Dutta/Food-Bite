import { Client, Storage } from "appwrite";

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_KEY) 
;
export default storage;

