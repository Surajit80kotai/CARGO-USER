import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ALLAIRLINE, GETALLCATEGORYPRICE, GETALLFLIGHTS, SEARCHFLIGHTS } from "../api/Api";



//AsyncThunk For Search Flight 
export const userSearchFlights = createAsyncThunk("/user/search/flights", async ({ data, navigate, header }, { rejectWithValue }) => {
    try {
        const result = await SEARCHFLIGHTS(data, header);
        if (result?.data?.success) {
            navigate("/serchresult", {
                state: {
                    resultData: result?.data?.data,
                    requestData: data
                }
            });
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


// All Airlines 
export const getAllAirlines = createAsyncThunk("/all/airline", async (payload, { rejectWithValue }) => {
    try {
        const result = await ALLAIRLINE();
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
})


// All category price
export const getAllCategoryPrice = createAsyncThunk("/all/category/price", async (payload, { rejectWithValue }) => {
    try {
        const result = await GETALLCATEGORYPRICE();
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
        airline_data: null,
        all_category_data: null,
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

        //States for getAllAirlines
        builder.addCase(getAllAirlines.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(getAllAirlines.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.airline_data = payload;
        })
        builder.addCase(getAllAirlines.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for getAllCategoryPrice
        builder.addCase(getAllCategoryPrice.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(getAllCategoryPrice.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.all_category_data = payload;
        })
        builder.addCase(getAllCategoryPrice.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { clearSearchData } = UtilitySlice.actions;
export default UtilitySlice.reducer;