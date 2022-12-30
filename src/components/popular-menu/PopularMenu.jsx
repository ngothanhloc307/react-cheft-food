import React from 'react'

import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from '../../assets/fake-data/products'
import ProductCard from '../product-card/ProductCard';
import './popular-menu.css';

const PopularMenu = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>Popular Food Menu</h2>
                    </Col>
                    {
                        popularMenuFood.map(item => (
                            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id} item={item}>
                                <ProductCard key={item.id} item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container
            ></section>
    )
}

export default PopularMenu