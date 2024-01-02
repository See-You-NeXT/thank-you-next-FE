import styles from './Main.module.css';
import { useEffect, useState } from "react";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

import imgslideData from '../imgslideData';

function Main(){
    let [imgslide] = useState(imgslideData);
    let [imgIdx, setImgIdx] = useState(0);
    let [currentSlideIcon, setCurrentSlideIcon] = useState(0);
   
    useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();
        },5000);
        return () => clearInterval(interval); 
    }, [imgIdx]);

    const nextSlide = () => {
        setImgIdx((preIdx) => (preIdx+1) % imgslide.length);
        setCurrentSlideIcon((preIdx) => (preIdx+1) % imgslide.length);
    };

    const currentIcon = (i) => {
        setImgIdx(i);
        setCurrentSlideIcon(i)
    }

    return(
        <div className={styles.main}>
            <Imgslide imgslide={imgslide[imgIdx]} />
            
            <div className={styles.pageIconsArea}>
                {
                    imgslide.map((a,i)=>{
                        return(
                            <div className={styles.pageIcons}
                                onClick={()=>currentIcon(i)}>
                            {
                                currentSlideIcon == i ? <GoDotFill size={20}/> : <GoDot size={20}/>
                            }
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.contentArea}>
                <div className={styles.videoArea}>
                    <div className={styles.videoTitle}>THIS IS NeXT 🔥</div>
                    <video muted autoPlay loop>
                        <source src="/23next.MP4" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.newBoardArea}>
                    <div className={styles.boardTitle}>게시판 최신글 📢</div>
                    <div className={styles.boardTabArea}>
                        <div className={styles.tabItem}>공지</div>
                        <div className={styles.tabItem}>질문</div>
                        <div className={styles.tabItem}>자유</div>
                    </div>
                    <div className={styles.board}>
                        <ul className={styles.boardUl}>
                            <li className={styles.boardLi}>
                                17일 지소영 슨배님 졸업식 참여자 수요...
                                <span>12.XX</span>
                            </li>
                            <li className={styles.boardLi}>
                                개강파티 수요조사를 시작합니다!
                                <span>12.XX</span>
                            </li>
                            <li className={styles.boardLi}>
                                이번주 세미나는 없습니다.
                                <span>12.XX</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.plusBtn}>더보기</div>
                </div>
            </div>
        </div>
    );
}

function Imgslide(props){
    return(
        <div className={styles.imgslideArea}>
            <div className={styles.imgArea}>
                <img src={props.imgslide.img} />
            </div>
            
            <div className={styles.imgslideContent}>
                <div className={styles.slideName}>{props.imgslide.name}</div>
                <div className={styles.slideTitle}>{props.imgslide.title}</div>
                <div className={styles.slideInfo}>{props.imgslide.info}</div>
                <div className={styles.slideSubInfo}>{props.imgslide.subInfo}</div>
            </div>
        </div>
        
    )
}

export default Main;