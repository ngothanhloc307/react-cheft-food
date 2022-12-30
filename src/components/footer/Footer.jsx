import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const footerQuickLinks = [
    {
        display: 'Term & Conditions',
        url: '#'
    },
    {
        display: 'Privacy Policy',
        url: '#'
    },
    {
        display: 'Return & Refund',
        url: '#'
    },
    {
        display: 'Payment Method',
        url: '#'
    },
]

const footerLinks = [
    {
        display: 'About us',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipies',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className="d-flex align-item-center gap-1"><span><i className="ri-restaurant-2-line"></i> </span> Cheft Food</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero inventore perspiciatis id voluptas quis recusandae!</p>
                            </div>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">Info Links</h5>
                            <ListGroup>
                                {
                                    footerQuickLinks.map((item, i) => (<ListGroupItem className='link__item' key={i}>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>))
                                }
                            </ListGroup>
                        </Col>

                        <Col lg="2" md="4" sm="6">
                            <h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup>
                                {
                                    footerLinks.map((item, i) => (<ListGroupItem className='link__item' key={i}>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>))
                                }
                            </ListGroup>
                        </Col>

                        <Col lg="3" md="4" sm="6">
                            <h5 className="footer__link-title">Contact</h5>

                            <ListGroup>
                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i className="ri-map-pin-line"></i>Dist10, Ho chi Minh
                                </ListGroupItem>
                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i className="ri-mail-line"></i>example@ngoloc.com
                                </ListGroupItem>
                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i className="ri-phone-line"></i>+012 943 57435
                                </ListGroupItem>
                            </ListGroup>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg="12">
                            <p>copyright 2022, developed by muhib. All rights reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer