import React from 'react';
import avatar from '../images/avatar.jpg';
import '../asset/style.css';


const About = () => {
    return (
        <header>

            <div class="box">
                <div class="cv-left">
                    <div class="cv-left-one">
                        <div class="cv-left-one-span1">Đinh Trần Thanh Tú</div>
                        <div class="cv-left-one-span2">Công nghệ thông tin</div>
                        <div class="cv-left-one-img">
                            <button>
                                <img src={avatar} width='200' />
                            </button>
                        </div>
                    </div>
                    <div class="cv-left-two">
                        <div class="cv-span3">Thông tin cá nhân</div>
                        <div class="cv-left-two-1">
                            <i class="cv-icon fas fa-calendar-day"></i>
                            <div class="cv-left-three-1" >25/10/2002</div>

                        </div>
                        <div class="cv-left-two-1">
                            <i class="cv-icon far fa-envelope"></i>
                            <div class="cv-left-three-1">
                                <a href="" class="cv-link">
                                    tinanhtinem122@gmail.com
                                </a>
                            </div>

                        </div>
                        <div class="cv-left-two-1">
                            <i class="cv-icon fas fa-mobile-alt"></i>
                            <div class="cv-left-three-1" placeholder>0775285533</div>

                        </div>
                        <div class="cv-left-two-1">
                            <i class="cv-icon fas fa-globe"></i>
                            <div class="cv-left-three-1">Đinh Trần Thanh Tú</div>

                        </div>
                        <div class="cv-left-two-1">
                            <i class="cv-icon fas fa-map-marked-alt"></i>
                            <div class="cv-left-three-1">Thành phố Hồ Chí Minh</div>

                        </div>

                    </div>
                    <div class="cv-left-three">
                        <div class="bgr-1px"></div>
                        <div class="cv-span3">Kỹ năng</div>
                        <div class="cv-span4">Ngôn ngữ lập trình</div>
                        <div class="cv-left-three-1">C++</div>
                        <div class="cv-left-three-1">VueJS</div>
                        <div class="cv-left-three-1">HTML/CSS</div>
                        <div class="cv-left-three-1">JAVASCRIPT</div>
                        <div class="cv-span4">Khác</div>
                        <div class="cv-left-three-1">Figma</div>
                        <div class="cv-left-three-1">Ux/Ui Design</div>
                        <div class="cv-span4">Ngoại ngữ</div>
                        <div class="cv-left-three-1">Tiếng anh</div>

                    </div>

                </div>
                <div class="cv-right">
                    <div class="cv-right-one">
                        <div class="cv-span3">Giới thiệu bản thân</div>
                        <div class="cv-left-three-1"> Xin chào tất cả mọi người, mình tên là Thanh Tú - một sinh viên trường Đại Học Sư phạm Tp Hồ Chí Minh. Mình là một người thích khám phá, thích tìm tòi và ham học hỏi
                            những điều thú vị trên internet, biết đôi chút về <span style={{ color: 'red', }}>Ux/Ui, Figma, Html/Css , Java Script, VueJS, C++ </span></div>
                    </div>
                    <div class="cv-right-one">
                        <div class="bgr-1px"></div>
                        <div class="cv-span3">Học Vấn</div>
                        <li class="cv-left-three-1">Trường tiểu học Xóm Chiếu. (2008-2013)</li>
                        <li class="cv-left-three-1">Trường trung học cơ sở Tăng Bạt Hổ A. (2013-2017)</li>
                        <li class="cv-left-three-1">Trường tiểu học phổ thông Trưng Vương. (2017-2020)</li>
                        <li class="cv-left-three-1">Trường đại học Sư Phạm Tp.HCM</li>
                    </div>
                    <div class="cv-right-one">
                        <div class="bgr-1px"></div>
                        <div class="cv-span3">Mục tiêu sự nghiệp</div>
                        <div class="cv-left-three-1">Hoàn thiện các kỹ năng của bản thân để trở thành một Developer chuyên nghiệp</div>

                    </div>
                    <div class="cv-right-one">
                        <div class="bgr-1px"></div>
                        <div class="cv-span3">Sở thích</div>

                        <li class="cv-left-three-1">Đọc truyện tranh</li>
                        <li class="cv-left-three-1">Xem phim kinh dị, hài</li>
                        <li class="cv-left-three-1">Xem và chơi bóng đá</li>
                        <li class="cv-left-three-1">Nghe nhạc, ca hát</li>
                    </div>
                    <div class="cv-right-one">
                        <div class="bgr-1px"></div>
                        <div class="cv-span3">Hoạt động</div>
                        <div class="cv-left-three-1">Thường tham gia các hoạt động của tình nguyện của đoàn trường và xã đoàn tại nơi cư trú</div>
                    </div>
                    <div class="cv-right-one">
                        <div class="bgr-1px"></div>
                        <div class="cv-span3">Chứng chỉ </div>
                        <div class="cv-left-three-1">Chứng chỉ tin học văn phòng</div>

                    </div>
                    <div class="cv-right-one">
                        <div class="bgr-1px"></div>
                        <div class="cv-span3">Thông tin liên hệ </div>
                    </div>
                    <div class="icon">
                        <a href='https://www.facebook.com/tu.dinh.2510'><i class="fa-brands fa-facebook"></i></a>
                        <a href='https://www.instagram.com/_thanhtu_2510'><i class="fa-brands fa-instagram"></i></a>
                        <a href='https://twitter.com/tinanhtinem122'><i class="fa-brands fa-twitter"></i></a>
                        <a href='tel:0775285533'><i class="fa-solid fa-mobile-screen-button"></i></a>
                    </div>


                </div>
            </div>

        </header >
    );
};

export default About;