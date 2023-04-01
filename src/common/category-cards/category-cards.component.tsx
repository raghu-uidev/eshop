import { Button, Card } from 'react-bootstrap';
import { CategoryCardsConfig } from './category-cards.config';
import './category-cards.css';
const CategoryCards = () => {

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
                        <Button variant="primary">Go To Products</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    )

}

export default CategoryCards;