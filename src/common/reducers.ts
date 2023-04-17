import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../modules/@users/usersSlice';
import productsReducer from '../modules/@products/productsSlice';
import cartReducer from '../modules/@cart/cartSlice';

const appReducers = combineReducers({
   userData: userReducer,
   productsData: productsReducer,
   cartData: cartReducer
});

/**
 *    {
*      userData : userName: '',
                  userId: '',
                  cartId: '',
                  token: '',
                  isRegistrationInProgress: false,
                  registrationStatus: {
                     success: false,
                     failed: false,
                     statusMessage: ''
                  },
                  loginStatus: {
                     isLoginInProgress: false,
                     success: false,
                     failed: false,
                     statusMessage: ''
                  }
 *      productsData : {
            *   products: [],
               isProductsFetched: false,
               errorMessage: '',
               isProductDetailsFetchProgress: false,
               productDetails: {}
 *      },
       cartData : {
             cartCount: 0,
    productsInCart: []
       }
 *        
 *    }
 * 
 * 
 */

export default appReducers;