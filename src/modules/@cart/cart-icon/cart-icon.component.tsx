import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../../common/hooks"
import CartSliderBackdrop from "../cart-slider/cart-slider-backdrop"
import CartSlider from "../cart-slider/cart-slider.component"
import { getProductsFromCart } from "../cartSlice"
import './cart-icon.css';

const CartIcon = () => {
    const [showCartSlider, setShowCartSlider] = useState(false);
    const actionDispacther = useAppDispatch();
    const token = useAppSelector(state => state.userData.token) || localStorage.getItem('token');
    const cartId = useAppSelector(state => state.userData.cartId) || localStorage.getItem('cartId');
    const productsInCart = useAppSelector(state => state.cartData.productsInCart);
    const cartCount = useAppSelector(state => state.cartData.cartCount);
    useEffect(() => {
        const payload = {
            token: token,
            cartId: cartId
        }
        actionDispacther(getProductsFromCart(payload));
    }, [cartCount]);

    const onShowCartSlider = () => {
        showCartSlider ? setShowCartSlider(false) : setShowCartSlider(true);
    }

    return (
        <>
            <Button variant="secondary" className="user-icon-btn">
                <FaShoppingCart className="cart-icon" onClick={() => onShowCartSlider()} />
                {productsInCart.length > 0 && (<div className="cart-count">{productsInCart.length}</div>)}
            </Button>
            <CartSlider showSlider={showCartSlider} />
            {showCartSlider && <CartSliderBackdrop onBgClick={() => onShowCartSlider()} />}
        </>
    )
}

export default CartIcon;