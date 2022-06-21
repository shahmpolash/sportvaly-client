import React from 'react';
import banner from '../images/banner-img.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section class="slider">
                <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/slider/slider3.jpg" class="d-block w-100" alt="first slide" />
                                <div class="container">
                                    <div class="carousel-caption text-left">
                                        <h1 class="">Quisque blandit sed</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                                        <p><a class="btn btn-default btn-lg" href="#" role="button">get started</a><a class="btn btn-default btn-lg" href="#" role="button">read more</a></p>
                                    </div>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/slider/slider2.jpg" class="d-block w-100" alt="second slide" />
                                <div class="container">
                                    <div class="carousel-caption text-left">
                                        <h1 class="">Justo rutrum venenatis. Mauris accumsan posuere mauris</h1>
                                        <p>Sed et orci purus. Vestibulum molestie, dolor sit amet viverra facilisis, justo magna.</p>
                                        <p><a class="btn btn-default btn-lg" href="#" role="button">get started</a><a class="btn btn-default btn-lg" href="#" role="button">read more</a></p>
                                    </div>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="images/slider/slider1.jpg" class="d-block w-100" alt="third slide" />
                                <div class="container">
                                    <div class="carousel-caption text-left">
                                        <h1 class="">Vivamus ultrices mattis</h1>
                                        <p>Consectetur pretium leo. Proin suscipit imperdiet neque, quis lacinia elit cursus nec.</p>
                                        <p><a class="btn btn-default btn-lg" href="#" role="button">get started</a><a class="btn btn-default btn-lg" href="#" role="button">read more</a></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon carousel-control-prev-icon"></span></a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon carousel-control-next-icon"></span></a>

                </div>

            </section>
        </div>
    );
};

export default Banner;