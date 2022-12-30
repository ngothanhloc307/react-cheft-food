import React from 'react'
import './download.css';
import { Container, Row, Col } from 'reactstrap';

import appImg from '../../assets/images/app.png';

const Download = () => {
    return (
        <section>
            <Container className='app__container'>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="app__img">
                            <img src={appImg} alt="" />
                        </div>
                    </Col>

                    <Col md='6' lg='6'>
                        <div className="app__content">
                            <h5>Donwload your app</h5>
                            <h2 className='mb-4'>Never Feel Hungry! Download Our Mobile App Order Delicious Food</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolore voluptas est eveniet atque maiores ullam rem quibusdam porro. Laborum.</p>

                            <div className="app__btns d-flex align_items-center gap-5 mt-4">
                                <button className="btn__apple  d-flex align_items-center gap-3">
                                    <i className="ri-apple-line"></i><a href="#">Apple Store</a>
                                </button>
                                <button className="btn__google d-flex align_items-center gap-3">
                                    <i className="ri-google-play-line"></i><a href="#">Google Play</a>
                                </button>
                            </div>


                        </div>

                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Download