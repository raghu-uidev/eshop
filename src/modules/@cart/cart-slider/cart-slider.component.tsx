import './cart-slider.css';

export interface SliderProps {
    showSlider: boolean;
}

const CartSlider = (props: SliderProps) => {
   const sliderClasses =  props.showSlider ? 'cart-slider open' : 'cart-slider';
   return (
      <div className={sliderClasses}>
         <h1>Cart Details Here</h1>
      </div>
   )
}

export default CartSlider;