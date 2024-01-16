import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ImgSlide.module.css';

import imgslideData from '../imgslideData';

function ImgSlide() {

    let [imgslide] = useState(imgslideData);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

  return (
        <Slider {...settings}>
            {
                imgslide.map((a,i)=>{
                    return(
                        <div>
                            <Imgslide imgslide={imgslide[i]} />
                        </div>
                    )
                    
                })
            }
            
        </Slider>
  );
}

function Imgslide(props){
    return(
        <div className={styles.imgslideArea}>
                <img src={props.imgslide.img}/>
                <div className={styles.imgslideContent}>
                    <div className={styles.slideName}>{props.imgslide.name}</div>
                    <div className={styles.slideTitle}>{props.imgslide.title}</div>
                    <div className={styles.slideInfo}>{props.imgslide.info}</div>
                    <div className={styles.slideSubInfo}>{props.imgslide.subInfo}</div>
                </div>
                   
        </div>
        
    );
}

export default ImgSlide;