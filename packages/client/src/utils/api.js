/**
 * Primary API utility to access the server
 */
import axios from "axios";

// load variables from .env
const API_URL = process.env.REACT_APP_SERVER_API_URL;

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
            console.error('Server Error, tried to POST', e)
            // todo: give user feedback on error
        }
    },
    put: async (path = '/', variables = {}) => {
        try {
            return await axios.put(
                `${API_URL}${path}`,
                variables,
                {
                    withCredentials: true,
                }
            )
        } catch (e) {
            console.error('Server Error, tried to PUT', e)
            // todo: give user feedback on error
        }
    }
}