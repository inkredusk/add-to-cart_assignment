import axios from "axios";

// Adjust the base URL according to your backend's base URL
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  return headers;
};

export const genericApiCall = async (
  method,
  endpoint,
  data = null,
  params = null,
  responseType = "json"
) => {
  try {
    const config = {
      method: method,
      url: endpoint,
      headers: getHeaders(),
      responseType: responseType, // Specify the response type
    };

    if (method.toLowerCase() === "get" && params) {
      config.params = params;
    } else if (method.toLowerCase() === "post" && data) {
      config.data = data;
    }

    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(
      "API Error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
