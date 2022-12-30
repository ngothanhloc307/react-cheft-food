import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ProductCard from '../product-card/ProductCard';
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products';
import './menupack.css';

const MenuPack = () => {

    const [filter, setFilter] = useState('RICE-MENU');
    const [products, setProducts] = useState(riceMenuProducts);

    useEffect(() => {
        if (filter === 'RICE-MENU') {
            setProducts(riceMenuProducts);
        }
        if (filter === 'FASTFOOD-MENU') {
            setProducts(fastFoodProducts);
        }
        if (filter === 'PIZZA-MENU') {
            setProducts(pizzaProducts);
        }
        if (filter === 'DESERT-MENU') {
            setProducts(dessertProducts);
        }
        if (filter === 'COFFE-MENU') {
            setProducts(coffeeProducts);
        }
    }, [filter])

    return <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5'>
                    <h3 className='menu__title'>Our Menu Pack</h3>
                </Col>
                <Col lg='12' className='text-center mb-5'>
                    <button
                        className={`filter-btn ${filter === 'FASTFOOD-MENU' ? 'active__btn' : ''}`}
                        onClick={() => setFilter('FASTFOOD-MENU')}>
                        Fast Food
                    </button>
                    <button
                        className={`filter-btn ${filter === 'RICE-MENU' ? 'active__btn' : ''}`}
                        onClick={() => setFilter('RICE-MENU')}>
                        Rice
                    </button>
                    <button
                        className={`filter-btn ${filter === 'PIZZA-MENU' ? 'active__btn' : ''}`}
                        onClick={() => setFilter('PIZZA-MENU')}>
                        Pizza
                    </button>
                    <button
                        className={`filter-btn ${filter === 'DESERT-MENU' ? 'active__btn' : ''}`}
                        onClick={() => setFilter('DESERT-MENU')}>
                        Dessert
                    </button>
                    <button
                        className={`filter-btn ${filter === 'COFFE-MENU' ? 'active__btn' : ''}`}
                        onClick={() => setFilter('COFFE-MENU')}>
                        Coffee
                    </button>
                </Col>

                {
                    products.map(item => (
                        <Col lg='3' md='4' sm='6' key={item.id} className="mb-4"> <ProductCard item={item} /></Col>

                    ))
                }
            </Row>
        </Container>
    </section >
}

export default MenuPack