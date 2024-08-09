// src/features/api/slices.ts
import {
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  fetchVisitors,
  fetchCustomers,
  fetchRevenues,
  fetchSalesMap,
  fetchVolumService,
} from "./thunks";
import {
  Visitor,
  CustomersState,
  RevenueState,
  SalesMapState,
  VolumeServiceState,
} from "./types";

interface ApiState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

function createInitState<T>(): ApiState<T> {
  return {
    data: [],
    loading: false,
    error: null,
  };
}

// 공통 Slice 생성 함수
function createGenericSlice<T>(
  name: string,
  asyncThunk: ReturnType<typeof createAsyncThunk<T[], void>>
) {
  return createSlice({
    name,
    initialState: createInitState<T>(),
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(asyncThunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(asyncThunk.fulfilled, (state, action: PayloadAction<T[]>) => {
          state.loading = false;
          // 상태를 직접 변경하지 않고 데이터를 푸시
          state.data = action.payload as Draft<T[]>;
        })
        .addCase(asyncThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || `Failed to fetch ${name}`;
        });
    },
  });
}

export const visitorReducer = createGenericSlice<Visitor>(
  "visitores",
  fetchVisitors
).reducer;
export const customerReducer = createGenericSlice<CustomersState>(
  "customer",
  fetchCustomers
).reducer;
export const revenueReducer = createGenericSlice<RevenueState>(
  "revenue",
  fetchRevenues
).reducer;
export const salesMapReducer = createGenericSlice<SalesMapState>(
  "salesMap",
  fetchSalesMap
).reducer;

export const volumServiceReducer = createGenericSlice<VolumeServiceState>(
  "volumeService",
  fetchVolumService
).reducer;
