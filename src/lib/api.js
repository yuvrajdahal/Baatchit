import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const baseUrl = "http://localhost:5000/api/v1/";
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response || error.message);
  }
);
api.interceptors.response.use(
  (response) => {
    if (response.data.status === "failed") {
      return Promise.reject({ data: response.data, status: response.status });
    }
    return { data: response.data, status: response.status };
  },
  (error) => {
    return Promise.reject(
      error.response || error.message || "Something went wrong!"
    );
  }
);
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, body, params, headers }) => {
    try {
      const result = await api({
        url: baseUrl + url,
        method,
        data: body,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.status || err.response?.status,
          data: err.data || err.response?.data || err.message,
        },
      };
    }
  };
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({}),
});
