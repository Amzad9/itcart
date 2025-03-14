import React from 'react';
import Slider from "react-slick";
import SliderContent from './SliderContent';
import Button from '../Button/button';
import { SLIDER_DATA, Header_SLIDER_SETTINGS } from '../Utility';
import styles from './Header.module.css'; // ✅ Import CSS module
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Header() {
    return (
        <header className={styles.header}>
            <div className="w-full">
                <div className="w-full">
                    <Slider {...Header_SLIDER_SETTINGS}>
                        {SLIDER_DATA.map((item, index) => (
                            <SliderContent 
                                key={index} 
                                className={styles[`slide-${index}`]} // ✅ Use styles object
                                title={item.title} 
                                subtitle={item.subtitle}
                            >
                                <Button className="text-white">Explore</Button>
                            </SliderContent>
                        ))}
                    </Slider>
                </div>
            </div>
        </header>
    );
}

export default Header;
