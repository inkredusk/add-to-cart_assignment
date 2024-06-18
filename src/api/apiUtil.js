import axios from 'axios';

// Adjust the base URL according to your backend's base URL
const apiUrl = process.env.REACT_APP_API_BASE_URL;  

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getHeaders = () => {
  // Construct your headers object here
  const headers = {
    'Content-Type': 'application/json',
    // Add any other headers you need here
  };

  return headers;
};

export const genericApiCall = async (method, endpoint, data, params) => {
  try {
    const response = await api({
      method: method,
      url: endpoint,
      data: data,
      params: params,
      headers: getHeaders(),  // Use the getHeaders function here
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
};
