import './cart-slider.css';

export interface SliderBackdropProps {
    onBgClick: () => void;
}

const CartSliderBackdrop = (props: SliderBackdropProps) => {
  return (<div className="backdrop" onClick={props.onBgClick}></div>)
}

export default CartSliderBackdrop;