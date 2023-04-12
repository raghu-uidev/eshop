import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { getProducts } from "../productsSlice";
import './products-by-category.css';

const ProductsByCategory = () => {
   const { category }: any = useParams(); // {category: 'mobile', catId: 1}, {category: 'laptops', catId: 11}
   const token = useAppSelector(state => state.userData.token) || localStorage.getItem('token');
   const { products } = useAppSelector(state => state.productsData);
   const existedCategory: any = products.find((productCat: any) => productCat[category]);
   const actionDispacther = useAppDispatch();
   const navigate = useNavigate();
   useEffect(() => {
      const paylaod = {
         token: token,
         category: category
      }

      if (!existedCategory) {
         actionDispacther(getProducts(paylaod));
      }
   }, [category]);

   const viewProduct = (id: string) => {
      navigate(`/product-details/${id}`);
   }

   return (
   <div className="container productsList">
      {
        existedCategory && existedCategory[category].map((product: any) => (
            <Card className="productCard" key={product._id}>
               <Card.Img variant="top" src={product.thumbnail} />
               <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                     {product.description}
                  </Card.Text>
                  <Button variant="primary" onClick={() => viewProduct(product._id)}>View Product</Button>
               </Card.Body>
            </Card>
         ))
      }

   </div>)
}

export default ProductsByCategory;