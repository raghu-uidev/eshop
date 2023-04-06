import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AnyAaaaRecord } from "dns";

// user slice file
export interface UserRegisterObj {
  userName: string;
  email: string;
  password: string;
}

export interface UserState {
  userName: string;
  userId: string;
  cartId: string;
  isRegistrationInProgress: boolean;
  registrationStatus: {
    success: boolean;
    failed: boolean;
    statusMessage: string;

  }
}

const initialState: UserState = {
  userName: '',
  userId: '',
  cartId: '',
  isRegistrationInProgress: false,
  registrationStatus: {
    success: false,
    failed: false,
    statusMessage: ''
  }
}

/**
 *   {
 *       state: {
 *              userData: {
 *           userName: '',
                        userId: '',
                        cartId: '',
                        isRegistrationInProgress: false,
                        registrationStatus : {
                          success: false,
                          failed: false
                        }
 *                        }
 *         }
 *   }
 * 
 * 
 */


export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: UserRegisterObj, { rejectWithValue }) => {
    //const {userName, email, password} = userData;
    try {
      const API_URL = ' http://localhost:4000/api/v1/users/register';
      const response = await axios.post(API_URL, userData);
      //const data = await response.json();
      return response.data;
    } catch (err: any) {
      let errorMessage = 'Unable to register the user. Pleae try again.';
      if(err?.response?.data?.message) {
        errorMessage = err?.response?.data?.message;
      }
      return rejectWithValue({
        message: errorMessage
      })
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state, action) => {
       state.isRegistrationInProgress = true;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
       state.isRegistrationInProgress = false;
       state.registrationStatus.success = true;
       state.registrationStatus.failed = false;
       state.registrationStatus.statusMessage = 'User registered successfully!!';
    })
    .addCase(registerUser.rejected, (state, action: any) => {
      //const { payload } = action;
      state.isRegistrationInProgress = false;
      state.registrationStatus.success = false;
      state.registrationStatus.failed = true;
      state.registrationStatus.statusMessage = action.payload.message;
    })
  }
});

const { reducer } = userSlice;

export default reducer;
