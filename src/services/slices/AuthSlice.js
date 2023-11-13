import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { FORGETPASSWORD, LOGIN, SIGNUP } from "../api/Api";



//AsyncThunk For Signup 
export const userSignup = createAsyncThunk("/user/signup", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await SIGNUP(data);
        // console.log(result);
        // return;
        if (result?.data?.success) {
            window.localStorage.setItem("token", JSON.stringify(result?.data?.token));
            window.localStorage.setItem("user", JSON.stringify(result?.data?.data));
            navigate('/');
            // react toast message
            toast.success(result?.data?.message, {
                autoClose: 3000
            });
        }
        return result?.data;
    } catch (err) {
        // console.log(err);
        return rejectWithValue(err.response.data);
    }

});


//AsyncThunk For Login 
export const userLogin = createAsyncThunk("/user/login", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await LOGIN(data);
        // console.log(result);
        // return;
        if (result?.data?.success) {
            window.localStorage.setItem("token", JSON.stringify(result?.data?.token));
            window.localStorage.setItem("user", JSON.stringify(result?.data?.data));
            navigate('/');
            // react toast message
            toast.success(result?.data?.message, {
                autoClose: 3000
            });
        }
        return result?.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue(err.response.data);
    }

});


//AsyncThunk For userForgetPassword 
export const userForgetPassword = createAsyncThunk("/user/forget/password", async ({ data, navigate }, { rejectWithValue }) => {
    try {
        const result = await FORGETPASSWORD(data);
        // console.log(result);
        // return;
        if (result?.data?.success) {
            navigate('/login');
            // react toast message
            toast.success(result?.data?.message, {
                autoClose: 3000
            });
        }
        return result?.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue(err.response.data);
    }

});




// Creating Slice
const AuthSlice = createSlice({
    name: "authSlice",
    initialState: {
        authData: null,
        status: null,
        error: null,
        loading: false
    },
    reducers: {
        // Logout reducer
        doLogOut: (state) => {
            window.localStorage.clear();
            state.token = "";
        },
        clearAuthError: (state) => {
            state.error = null;
        },
        clearAuthData: (state, { payload }) => {
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        //States for Signup
        builder.addCase(userSignup.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(userSignup.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.authData = payload;
        })
        builder.addCase(userSignup.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for Login
        builder.addCase(userLogin.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.authData = payload;
        })
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })

        //States for forget password
        builder.addCase(userForgetPassword.pending, (state, { payload }) => {
            state.status = "Loading...";
            state.loading = true;
        })
        builder.addCase(userForgetPassword.fulfilled, (state, { payload }) => {
            state.status = "Success";
            state.loading = false;
            state.authData = payload;
        })
        builder.addCase(userForgetPassword.rejected, (state, { payload }) => {
            state.status = "Failed";
            state.loading = false;
            state.error = payload;
        })
    }
})

export const { doLogOut, clearAuthError, clearAuthData } = AuthSlice.actions;
export default AuthSlice.reducer;