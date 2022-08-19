import axios from "axios";

// BUG: API_URL below should reference .env, but can't get it to work
//  -broke when updating to global .env
//  -the lines below work elsewhere, but not in here:
//  -import dotenv from "dotenv";
//  -const env = dotenv.config({ path: "../../../../.env" });
//  -const API_URL = env.parsed.REACT_APP_API_URL;

// TODO: set path to global .env
const API_URL = "http://localhost:4000";




/**
 * Primary API utility to access the server
 */
export const api = {
    post: async (path = '/', variables = {}) => {
        try {
            return await axios.post(
                `${API_URL}${path}`,
                variables,
                {
                    withCredentials: true,
                }
            )
        } catch (e) {
            console.error('Server Error', e)
            // todo: give user feedback on error
        }
    }
}