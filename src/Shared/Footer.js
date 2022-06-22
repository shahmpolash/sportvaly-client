import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h3>About Us</h3>
                            <p className='text-white'>SportValy is the number #1 platform where you will get Bangladeshi cricket related all kinds of information, including cricket training, cricket career guidelines, cricket academy information and more.</p>
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