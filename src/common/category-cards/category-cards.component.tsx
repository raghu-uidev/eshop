import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CategoryCardsConfig } from './category-cards.config';
import './category-cards.css';
const CategoryCards = () => {
    const navigate = useNavigate();
    const goToProductsView: any = (category: string) => {
       navigate(`/products/${category}`);
    }

    return (
        <div className="container categoryList">
            {CategoryCardsConfig.map((card) =>
                <Card className="categoryCard">
                    <Card.Img variant="top" src={card.cardImgSrc} />
                    <Card.Body>
                        <Card.Title>{card.cardTitle}</Card.Title>
                        <Card.Text>
                            {card.cardDesc}
                        </Card.Text>
                        <Button variant="primary" onClick={() => goToProductsView(card.cardCategory)}>Go To Products</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )

}

export default CategoryCards;