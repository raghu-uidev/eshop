import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AnyARecord } from "dns";

export interface ProductsData {
    products: Array<object>;
    isProductsFetched: boolean;
    errorMessage: string;
    isProductDetailsFetchProgress: boolean;
    productDetails: object;
}

const initialState: ProductsData = {
    products: [],
    isProductsFetched: false,
    errorMessage: '',
    isProductDetailsFetchProgress: false,
    productDetails: {}
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (payload: any, { rejectWithValue }) => {
        try {
            const API_URL = `http://localhost:4000/api/v1/products/getProducts?search={"category": "${payload.category}"}`;
            const response = await axios.get(API_URL, {
                headers: {
                    'x-authorization': payload.token
                }
            });
            return { [payload.category]: response.data };
            /*
                  {
                    mobiles: []
                  }
            */
        } catch (error: any) {
            let errorMessage = 'Unable to fetch products. Please try again';
            if (error?.response?.data?.message) {
                errorMessage = error?.response?.data?.message;
            }
            return rejectWithValue({
                message: errorMessage
            })
        }

    }
)


export const getProductDetails = createAsyncThunk(
    'products/getProductDetails',
     async(payload: any, {rejectWithValue}) => {
        try {
            const API_URL = `http://localhost:4000/api/v1/products/getProducts?search={"_id": "${payload.id}"}`;
            const response = await axios.get(API_URL, {
                headers: {
                    'x-authorization': payload.token
                }
            });
            return response.data[0];
        } catch (error: any) {
            let errorMessage = 'Unable to fetch product details. Please try again';
            if (error?.response?.data?.message) {
                errorMessage = error?.response?.data?.message;
            }
            return rejectWithValue({
                message: errorMessage
            })
        }
     }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isProductsFetched = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isProductsFetched = false;
                state.products.push(action.payload);
            })
            .addCase(getProducts.rejected, (state, action: any) => {
                state.isProductsFetched = false;
                state.errorMessage = action.payload.message;
            })
            .addCase(getProductDetails.pending, (state, action) => {
               state.isProductDetailsFetchProgress = true;
            })
            .addCase(getProductDetails.fulfilled, (state, action) => {
                state.isProductDetailsFetchProgress = false;
                state.productDetails = action.payload;
            })
            .addCase(getProductDetails.rejected, (state, action: any) => {
                state.isProductDetailsFetchProgress = false;
                state.errorMessage = action.payload.messahe
            })
    }
});

const { reducer } = productsSlice;

export default reducer;


/**
 * 
      products: [
          {
              mobiles: []
          },
          {
              furniture: []
          },
          {
              cosmetis: []
          }
      ]
    

 */