import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GETALLFLIGHTS, SEARCHFLIGHTS } from "../api/Api";



//AsyncThunk For Search Flight 
export const userSearchFlights = createAsyncThunk("/user/signup", async ({ data, navigate, header }, { rejectWithValue }) => {
    try {
        const result = await SEARCHFLIGHTS(data, header);
        if (result?.data?.success) {
            navigate("/serchresult", { state: result?.data });
        }
        return result?.data;
    } catch (err) {
        // console.log(err);
        return rejectWithValue(err.response.data);
    }

});


//AsyncThunk For All Flight
export const getAllFlight = createAsyncThunk("/all/flight", async (payload, { rejectWithValue }) => {
    try {
        const result = await GETALLFLIGHTS();
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

});



// Creating Slice
const UtilitySlice = createSlice({
    name: "utiltiySlice",
    initialState: {
        searchData: null,
        flightData: [],
        status: null,
        loading: false
    },
    reducers: {
        clearSearchData: (state, { payload }) => {
            state.searchData = null;
        }
    },
    extraReducers: (builder) => {
        //States for Search flights
        builder.addCase(userSearchFlights.pending, (state, { payload }) => {
            state.loading = true;
            state.status = "Loading...";
        })
        builder.addCase(userSearchFlights.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.status = "Success";
            state.searchData = payload;
        })
        builder.addCase(userSearchFlights.rejected, (state, { payload }) => {
            state.loading = false;
            state.status = "Rejected";
            state.error = payload;
        })

        //States for all flights
        builder.addCase(getAllFlight.pending, (state, { payload }) => {
            state.loading = true;
            state.status = "Loading...";
        })
        builder.addCase(getAllFlight.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.status = "Success";
            state.flightData = payload;
        })
        builder.addCase(getAllFlight.rejected, (state, { payload }) => {
            state.loading = false;
            state.status = "Rejected";
            state.error = payload;
        })

    }
})

export const { clearSearchData } = UtilitySlice.actions;
export default UtilitySlice.reducer;