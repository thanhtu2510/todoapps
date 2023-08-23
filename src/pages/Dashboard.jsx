import React from 'react';
import logo from '../images/logo.png';
const Dashboard = () => {
    return (
        <header>
            <center>
                <div className="dasboard-page">
                    {/* <h1>Welcome</h1> */}
                    {/* <img src='https://ih1.redbubble.net/image.3351345794.7068/fposter,small,wall_texture,product,750x1000.u2.jpg' width="300" /> */}
                    <img src={logo} width="300" />
                </div>
                <div class="icon">
                    <a href='https://www.facebook.com/tu.dinh.2510' target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/_thanhtu_2510' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://twitter.com/tinanhtinem122' target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href='tel:0775285533'><i class="fa-solid fa-mobile-screen-button"></i></a>
                </div>
            </center>
        </header>
    );
};

export default Dashboard;