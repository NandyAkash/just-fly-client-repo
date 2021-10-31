import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel-container">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ratargul_Swmp_Forest%C2%A9Md_Sharif_Hossain_Sourav.jpg/1024px-Ratargul_Swmp_Forest%C2%A9Md_Sharif_Hossain_Sourav.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Ratargul</h3>
                    <p>Ratargul_Swmp_Forest.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sun_in_Sunderbans.jpg/300px-Sun_in_Sunderbans.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>SunderBan</h3>
                    <p>Sun in Sunderbans.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Boat_Riding_Point%2C_Bhatiari_Lake_%2801%29.jpg/220px-Boat_Riding_Point%2C_Bhatiari_Lake_%2801%29.jpg"
                    alt="Bhatiari"
                    />

                    <Carousel.Caption>
                    <h3>Bhatiari</h3>
                    <p>A site of Army camp and Beuty.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;