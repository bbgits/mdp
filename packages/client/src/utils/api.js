import axios from "axios";
import { API_URL } from "../config";

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