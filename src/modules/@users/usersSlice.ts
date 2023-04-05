import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    failed: boolean
  }
}

const initialState: UserState = {
  userName: '',
  userId: '',
  cartId: '',
  isRegistrationInProgress: false,
  registrationStatus: {
    success: false,
    failed: false
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
    } catch (err) {
      return rejectWithValue({
        message: 'Unable to register the user'
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
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.isRegistrationInProgress = false;
      state.registrationStatus.success = false;
      state.registrationStatus.failed = true;
    })
  }
});

const { reducer } = userSlice;

export default reducer;
