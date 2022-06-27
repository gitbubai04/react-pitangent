import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'


const Review = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [reviews, setReviews] = useState([])
    const getReview = () => {
        setReviews([
            {
                name: 'Bubai Ghosh', imageUrl: 'image/user.jpeg', comName: 'VP Operater', review: 'In publishing and graphic design, Lorem text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful demonstrate the visual form of a document or a typeface without relying on meaningful'
            },
            {
                name: 'Rounak Pal', imageUrl: 'image/user.jpeg', comName: 'VP Operater', review: 'In publishing and graphic design, Lorem text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful demonstrate the visual form of a document or a typeface without relying on meaningful'
            },
            {
                name: 'Sudip Saha', imageUrl: 'image/user.jpeg', comName: 'VP Operater', review: 'In publishing and graphic design, Lorem text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful demonstrate the visual form of a document or a typeface without relying on meaningful'
            }
            ,
            {
                name: 'Shouvan Shinha', imageUrl: 'image/user.jpeg', comName: 'VP Operater', review: 'In publishing and graphic design, Lorem text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful demonstrate the visual form of a document or a typeface without relying on meaningful'
            }
        ])
    }
    useEffect(() => {
        getReview()
    }, []
    )
    return (
        <section class="containerr mt-5">
            <div class="review-header">
                <div class="blog-header ">
                    <div class="heading">
                        <h1 class="res-rev">hear are some scrolls of <br /> success that keeps us going</h1>
                    </div>
                    <div class="view-more next-prv-btn">
                        <div class="rev-left button-review rounded-circle">
                            <i class="fas fa-caret-left"></i>
                        </div>
                        <div class="rev-right button-review bg-primary rounded-circle text-white">
                            <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {reviews.map((e, i) => (
                        <Carousel.Item key={i} class="review-body">
                            <div class="user-img">
                                <img src={e.imageUrl} alt="" />
                            </div>
                            <div class="user-review">
                                <p class="para review-para my-4">"{e.review}"</p>

                                <h3 class="user-name">{e.name}</h3>
                                <h6 class="deg text-muted">{e.comName}</h6>
                            </div>
                        </Carousel.Item>
                    )
                    )}
                </Carousel>
            </div>
        </section>
    )
}

export default Review