import { useState, useEffect } from 'react';
import { Button, Carousel, Form } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { getProductDetails } from '../productsSlice';
import './product-details.css'
import { addProductToCart } from '../../@cart/cartSlice';
const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const { productId }: any = useParams();
    const token = useAppSelector(state => state.userData.token) || localStorage.getItem('token');
    const cartId = useAppSelector(state => state.userData.cartId) ||  localStorage.getItem('cartId');
    const { productDetails }: any = useAppSelector(state => state.productsData);
    const actionDispacther: any = useAppDispatch();
    useEffect(() => {
        const payload: any = {
            id: productId,
            token: token
        }
        actionDispacther(getProductDetails(payload));
    }, [productId]);

    const addProduct = () => {
       const payload = {
         cartId: cartId,
         token: token,
         id: productDetails._id,
         title: productDetails.title,
         price: productDetails.price,
         quantity: quantity,
         thumbnail: productDetails.thumbnail
       }
       actionDispacther(addProductToCart(payload));
    }

    const onQuantityChange = (event: any) => {
        const value = Number(event.target.value);
        setQuantity(value);
    }

    return (
        <div className="container productDetails">
            {productDetails.title &&
                (<div className="product-container">
                    <div className='product-corousel'>
                        <Carousel>
                            {
                                productDetails.images.map((img: string) => (
                                    <Carousel.Item>
                                        <img className="d-block w-100"
                                            src={img}
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className='product-detail-view'>
                        <div className='product-title'>{productDetails.title}</div>
                        <div className='product-price'><span>Price: </span> <b>{productDetails.price}</b></div>
                        <div className='product-rating'>
                            <span>Rating:</span>
                            <Rating allowFraction={true} initialValue={productDetails.rating} />
                        </div>
                        <div className='product-quantity'>
                            <div>Quantity</div>
                            <div>
                                <Form.Select onChange={onQuantityChange}>
                                    {
                                        [...Array(productDetails.stock)].map((count: number, index: number) => (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        ))
                                    }
                                </Form.Select>
                            </div>
                        </div>
                        <div className='product-desc'>{productDetails.description}</div>
                        <div className='add-product-btn'>
                            <Button variant='primary' onClick={() => addProduct()}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
                )}
        </div>)
}

export default ProductDetails;
