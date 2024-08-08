import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "redux/store";
import { CustomersState, RevenueState, Visitor } from "../apiTypes"
import { BASEURL } from "constants/apiUrl";

type AsyncThunkConfig = {
  state: Visitor[]
  rejectValue: string
}

export const getVisitors = createAsyncThunk<Visitor[], void, AsyncThunkConfig>(
  'fetch/visitors',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASEURL}/visitors`)
      return (await response.json())
    } catch (error) {
      console.error('Error fetching visitors: ', error)
      return thunkAPI.rejectWithValue('Error fetching visitors')
    }
  }
)


export const apiCallSlice = createSlice({
  name: 'apis',
  initialState: {
    visitorsState: [] as Visitor[],
    customersState: [],
    revenueState: []
  },
  reducers:{
  },
  extraReducers: (builder) => {
    builder.addCase(getVisitors.fulfilled, (state, action) => {
      state.visitorsState = action.payload
    })
  }
})

export const visitorsApiCall = (state:RootState) => state.apis.visitorsState
export const customerApiCall = (state:RootState) => state.apis.customersState
export const revenueApiCall = (state:RootState) => state.apis.revenueState

export default apiCallSlice.reducer