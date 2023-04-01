import { useParams } from "react-router-dom";

const ProductsByCategory = () => {
   const {category}  = useParams(); // {category: 'mobile', catId: 1}, {category: 'laptops', catId: 11}
   return (<div style={{marginTop: '100px'}}>Products List of {category} Here</div>)
}

export default ProductsByCategory;