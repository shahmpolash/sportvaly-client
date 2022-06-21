import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h3>About Us</h3>
                            <p>We strive to deliver a level of service that exceeds the expectations of our customers. <br />
                                <br />
                                If you have any questions about our products or services, please do not hesitate to contact us. We have friendly, knowledgeable representatives available seven days a week to assist you.</p>
                        </div>
                        <div class="col-md-3">
                            <h3>Important Links</h3>
                            <ul class="navbar-nav">
                                <li class="nav-link pt-0"><a href="#">Menu 1</a></li>
                                <li class="nav-link"><a href="#">Menu 2</a></li>
                                <li class="nav-link"><a href="#">Menu 3</a></li>
                                <li class="nav-link"><a href="#">Menu 4</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3">
                            <h3>Social</h3>

                            <div class="social__icons"> <a href="#" class="socialicon socialicon-twitter"></a> <a href="#" class="socialicon socialicon-facebook"></a> <a href="#" class="socialicon socialicon-google"></a> <a href="#" class="socialicon socialicon-mail"></a> </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;