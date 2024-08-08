import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_CUSTOMERS_API_URL, GET_REVENUE_API_URL, GET_VISITORS_API_URL, REST_COUNTRIES_API_URL } from "constants/apiUrl";
import { getRequest } from "constants/requestMethods";
import { ApiBaseType, CustomersState, RevenueState } from "./apiTypes";

export function createFetchThunk (actionType:string, apiURL:string) {
  return createAsyncThunk(
    actionType, 
    async () => {
      return await getRequest(apiURL)
    }
  )
}

// export const fetchVisitors = createFetchThunk(
//   "fetchVisitors",
//   GET_VISITORS_API_URL
// )

// export const fetchCustomer = createFetchThunk(
//   "fetchCustomer",
//   GET_CUSTOMERS_API_URL
// )

// export const fetchRevenu = createFetchThunk(
//   "fetchRevenu",
//   GET_REVENUE_API_URL
// )









// const apiSlice = createSlice({
//   name: 'apis',
//   initialState: {
//     visitorsData: initVisitorState,
//     customersData: initCustomerState,
//     revenueData: initRevenuState,
//     isError: false,
//   },
//   reducers:{
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchVisitors.fulfilled, (state,action) => state["visitorsData"] = action.payload)
//     builder.addCase(fetchCustomer.fulfilled, (state,action) => state["customersData"] = action.payload)
//     builder.addCase(fetchRevenu.fulfilled, (state,action) => state["revenueData"] = action.payload)
//     builder.addCase(fetchVisitors.rejected, (state,action) => {
//       state.isError = true
//       console.log('Error', action.payload)
//     } )
//     builder.addCase(fetchCustomer.rejected, (state,action) => {
//       state.isError = true
//       console.log('Error', action.payload)
//     } )
//     builder.addCase(fetchRevenu.rejected, (state,action) => {
//       state.isError = true
//       console.log('Error', action.payload)
//     } )
//   },
// });

// export const {} = apiSlice.actions
// export default  apiSlice.reducer;