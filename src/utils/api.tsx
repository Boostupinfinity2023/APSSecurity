import axios from "axios";

export const google_login = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const client_id = '1064859701522-smu7lvrhg63tfqeh9q867c82ehvjegmj.apps.googleusercontent.com';
    const redirect_uri = 'https://harmanjeetsinghvirdi.com/APSSecurity/api/index.php?route=google/atuh/login/info';
    const scope = 'email profile';
    const googleLoginUrl = `${googleAuthUrl}?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}&access_type=offline`;

    window.location.href = googleLoginUrl;
};


const Api_Base_url = import.meta.env.VITE_API_LIVEHOST;
const Api_x_header_key = import.meta.env.VITE_API_KEY;
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_LIVEHOST,
    headers: {
        "x-api-key": import.meta.env.VITE_API_X_HEADER_KEY,
        "Content-Type": "application/json",
    },
});

export const api_calling = async (endpoint: string, body: any, customHeaders: Record<string, any> = {}) => {
    try {
        const response = await apiClient.post(endpoint, body, {
            headers: customHeaders,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const two_factor = async (endpoint: string, body: any, customHeaders: Record<string, any> = {}) => {
    try {
        const response = await apiClient.post(endpoint, body, {
            headers: customHeaders,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};