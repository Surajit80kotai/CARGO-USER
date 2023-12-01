import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ALLAIRLINE, BOOKING, DELETEFILE, GETALLCATEGORYPRICE, GETALLFLIGHTS, SAVEBOOKINGDETAILS, SEARCHFLIGHTS, SHAREBOOKINGVIAEMAIL } from "../api/Api";
import { toast } from "react-toastify";



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


// Save Booking Details
export const saveBookingDetails = createAsyncThunk("/save/booking/details", async ({ data, header }, { rejectWithValue }) => {
    try {
        const result = await SAVEBOOKINGDETAILS(data, header);
        // react toast message
        toast.success(result?.data?.message, {
            autoClose: 4000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});


// Share Booking Via Email
export const shareBookingViaEmail = createAsyncThunk("/share/via/email", async ({ data, header }, { rejectWithValue }) => {
    try {
        const result = await SHAREBOOKINGVIAEMAIL(data, header);
        // react toast message
        toast.info(result?.data?.message, {
            autoClose: 4000
        });
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});


// Booking
export const cargoBooking = createAsyncThunk("/take/booking", async ({ data, header }, { rejectWithValue }) => {
    try {
        const result = await BOOKING(data, header);
        if (result?.data?.success) {
            // react toast message
            toast.info(result?.data?.message, {
                autoClose: 4000
            });
        }
        return result?.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});


//AsyncThunk For fileDelete 
export const fileDelete = createAsyncThunk("/delete/file", async (body, { rejectWithValue }) => {
    try {
        await DELETEFILE(body);
    } catch (err) {
        return rejectWithValue(err.response.data);
    }

})



// Creating Slice
const UtilitySlice = createSlice({
    name: "utilitySlice",
    initialState: {
        searchData: null,
        flightData: [],
        airline_data: null,
        all_category_data: null,
        create_booking_stat: {},
        status: null,
        loading: false
    },
    reducers: {
        clearSearchData: (state, { payload }) => {
            state.searchData = null;
        },
        clearCreateBookingStatus(state) {
            state.create_booking_stat = null;
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

        //States for cargoBooking
        builder.addCase(cargoBooking.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(cargoBooking.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.create_booking_stat = payload;
        })
        builder.addCase(cargoBooking.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { clearSearchData, clearCreateBookingStatus } = UtilitySlice.actions;
export default UtilitySlice.reducer;