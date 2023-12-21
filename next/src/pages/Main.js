import styles from './Main.module.css';
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

function Main(){
    return(
        <div className={styles.main}>
            <div className={styles.imgslideArea}>
                <img src='/ysm.png' />
                
                <div className={styles.imgslideContent}>
                    <div className={styles.slideName}>양승민 선배님</div>
                    <div className={styles.slideTitle}>양승민의 코딩콘서트</div>
                    <div className={styles.slideInfo}>C, C++, Java 없는게 없다!<br/>백준 플레티넘 선배님과 함께 하는 코딩 공부</div>
                </div>
            </div>
            <div className={styles.pageIcons}>
                <GoDotFill size={20}/>
                <GoDot size={20}/>
                <GoDot size={20}/>
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

export default Main;