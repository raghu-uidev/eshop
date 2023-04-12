
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { getProductDetails } from '../productsSlice';
import './product-details.css'
const ProductDetails = () => {
   const { productId } : any = useParams(); 
   const token = useAppSelector(state => state.userData.token) || localStorage.getItem('token');
   const { productDetails } =  useAppSelector(state => state.productsData);
   const actionDispacther: any = useAppDispatch();
   useEffect(() => {
    const payload = {
             id: productId,
             token: token
    }
    actionDispacther(getProductDetails(payload));
   }, [productId]);

   return (<div className="container productDetails">Product details here of {productId}</div>)
}

export default ProductDetails;
