// src/features/thunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_CUSTOMERS_API_URL,
  GET_REVENUE_API_URL,
  GET_SALES_MAP_API_URL,
  GET_VISITORS_API_URL,
  GET_VOLUME_SERVICES_API_URL,
} from "constants/apiUrl";
import {
  CustomersState,
  RevenueState,
  SalesMapState,
  Visitor,
  VolumeServiceState,
} from "./types";

function createFetchThunk<T>(typePrefix: string, apiUrl: string) {
  return createAsyncThunk<T[], void>(typePrefix, async () => {
    const response = await axios.get<T[]>(apiUrl);
    return response.data;
  });
}
export const fetchVisitors = createFetchThunk<Visitor>(
  "api/fetchVisitors",
  GET_VISITORS_API_URL
);
export const fetchCustomers = createFetchThunk<CustomersState>(
  "api/fetchCustomers",
  GET_CUSTOMERS_API_URL
);
export const fetchRevenues = createFetchThunk<RevenueState>(
  "api/fetchRevenues",
  GET_REVENUE_API_URL
);
export const fetchSalesMap = createFetchThunk<SalesMapState>(
  "api/fetchSalesMap",
  GET_SALES_MAP_API_URL
);
export const fetchVolumService = createFetchThunk<VolumeServiceState>(
  "api/fetchVolumService",
  GET_VOLUME_SERVICES_API_URL
);
