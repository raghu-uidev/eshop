import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface CartState {
    cartCount: number
    productsInCart: Array<object>;
    cartErrorMessage: string;
}


const initialState: CartState = {
    cartCount: 0,
    productsInCart: [],
    cartErrorMessage: ''
}

export const addProductToCart = createAsyncThunk(
    'cart/addProduct',
    async (payload: any, { rejectWithValue }) => {
        try{
            const API_URL = `http://localhost:4000/api/v1/cart/addProductToCart/${payload.cartId}`;
            const productDetails = {
                _id: payload.id,
                title: payload.title,
                price: payload.price,
                userQuantity: payload.quantity,
                thumbnail: payload.thumbnail
            }
            const response = await axios.post(API_URL, productDetails, {
                headers: {
                    'x-authorization': payload.token
                }
            });
            return response.data[0];
        } catch(error: any) {
            let errorMessage = 'Unable to add product to cart. Please try again';
            if (error?.response?.data?.message) {
                errorMessage = error?.response?.data?.message;
            }
            return rejectWithValue({
                message: errorMessage
            })
        }
        
    }
);

export const getProductsFromCart = createAsyncThunk(
    'cart/getProducts',
    async (payload: any, {rejectWithValue}) => {
        try{
            const API_URL = `http://localhost:4000/api/v1/cart/getProductsFromCart/${payload.cartId}`;
            const response = await axios.get(API_URL, {
                headers: {
                    'x-authorization': payload.token
                }
            });
            return response.data[0];
        } catch(error: any) {
            let errorMessage = 'Unable to fetch products in cart. Please try again';
            if (error?.response?.data?.message) {
                errorMessage = error?.response?.data?.message;
            }
            return rejectWithValue({
                message: errorMessage
            })
        }
    }
)



export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addProductToCart.pending, (state, action) => {

        })
        .addCase(addProductToCart.fulfilled, (state, action) => {
            state.cartCount += 1;
        })
        .addCase(addProductToCart.rejected, (state, action) => {

        })
        .addCase(getProductsFromCart.pending, (state, action) => {

        })
        .addCase(getProductsFromCart.fulfilled, (state, action) => {
            state.productsInCart = action.payload.products;
        })
        .addCase(getProductsFromCart.rejected, (state, action: any) => {
            state.cartErrorMessage = action.payload.message;
        })
    }
});

const { reducer } = cartSlice;
export default reducer;