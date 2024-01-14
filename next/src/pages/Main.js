import styles from './Main.module.css';
import ImgSlide from '../components/ImgSlide';
import { FiPlus } from "react-icons/fi";

function Main(){

    return(
        <div className={styles.main}>
            <ImgSlide />

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
                                <div className={styles.content}>
                                    17일 지소영 슨배님 졸업식 참여자 수요조사가 있습니다.
                                </div>
                                <span>12.XX</span>
                            </li>
                            
                            <li className={styles.boardLi}>
                                <div className={styles.content}>
                                    개강파티 수요조사를 시작합니다!
                                </div>
                                <span>12.XX</span>
                            </li>
                            <li className={styles.boardLi}>
                                <div className={styles.content}>
                                    이번주 세미나는 없습니다.
                                </div>
                                <span>12.XX</span>
                            </li>
                            <li className={styles.plusBtnArea}>
                                {/* <div className={styles.plusBtn}>
                                    +
                                </div> */}
                                <FiPlus />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;