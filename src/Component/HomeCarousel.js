import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../ComponentCss/HomeCarousel.css'

function HomeCarousel() {
    return (
        <div className='crosel'>
            <Carousel indicators={false}>
                <Carousel.Item interval={1000} >
                    <img
                        className="d-block w-50"
                        src="https://miro.medium.com/max/3840/1*MwFQYgyVYqBZkKbPhs5J_g.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-50"
                        src="https://djangostars.com/blog/content/images/2017/03/Screenshot_812123.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src="https://www.sickchirpse.com/wp-content/uploads/2016/09/HTML.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel
