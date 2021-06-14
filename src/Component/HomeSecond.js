import React from 'react'
import { Card, Row, Carousel } from 'react-bootstrap'
import '../ComponentCss/HomeSecond.css'
import {
    NavLink
} from 'react-router-dom';

function HomeSecond({name}) {
    return (
        <div className='container mt-4'>
            <div className='d-flex flex-row justify-content-between mt-4 mb-2'>
                <h4>{name}</h4>
                <h4> <NavLink className='link' to='/AllLecture'>VIEW ALL </NavLink> </h4>
            </div>
            <Carousel className='carousel' indicators={false} fade={true} interval={null} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
                <Carousel.Item className='mt-2 mb-2'>
                    <Row className='col-12 d-flex justify-content-between'>
                    <a href='/'>
                            <Card className='card2 ml-4 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className='mt-2 mb-2'>
                    <Row className='col-12 d-flex justify-content-between'>
                    <a href='/'>
                            <Card className='card2 ml-4 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className='mt-2 mb-2'>
                    <Row className='col-12 d-flex justify-content-between'>
                        <a href='/'>
                            <Card className='card2 ml-4 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                        <a href='/'>
                            <Card className='card2 '>
                                <div className='cd'>
                                    <Card.Img className='cardimg2' src="https://th.bing.com/th/id/OIP.ECmLpEBDtX8dwVmfHp6-pAHaLH?pid=Api&rs=1" />
                                    <Carousel.Caption className='hii'>
                                        <button type='button' className='play'><i className='fa fa-play'></i></button>
                                        <i className='fa fa-share-alt-square ml-4'></i>
                                        <h4>Django </h4>
                                    </Carousel.Caption>
                                </div>
                            </Card>
                        </a>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeSecond
