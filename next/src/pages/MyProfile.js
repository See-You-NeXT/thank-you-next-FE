import React from 'react';
import { MdModeEdit } from "react-icons/md";

import styles from './MyProfile.module.css';

function MyProfile() {
    return (
        <div className={styles.myProfileArea}>
            <div className={styles.backgroundWrap}>
                <div className={styles.profileImg}>
                    <img src='/developerImg/kcs.png' />
                </div>
                <div className={styles.profileEdit}>
                    <MdModeEdit className={styles.profileEditBtn}/>
                </div>
            </div>

            <div className={styles.profileInfoArea}>
                <div className={styles.basicInfoArea}>
                    <div className={styles.nameAndClassNum}>
                        <div className={styles.myName}>김명지</div>
                        <div className={styles.myClassNum}>19학번</div>
                    </div>
                    <div className={styles.introduction}>
                        난 2학년 김명지. 안녕하세요 반갑습니다.
                    </div>

                    <div className={styles.linkArea}>
                        <div className={styles.linkTitle}>Link 🔗</div>
                        <div className={styles.linkContent}>
                            <div className={styles.gitLink}>
                                <img src='/link/git.png' />
                            </div>
                            <div className={styles.instaLink}>
                                <img src='/link/insta.jpeg' />
                            </div>
                            <div className={styles.facebookLink}>
                                <img src='/link/facebook.png' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.plusInfoArea}>
                    <div className={styles.birthArea}>
                        <div className={styles.birthText}>생일</div>
                        <div className={styles.birthContent}>XX.XX.XX</div>
                    </div>
                    <div className={styles.mbtiArea}>
                        <div className={styles.mbtiText}>MBTI</div>
                        <div className={styles.mbtiContent}>INFJ</div>
                    </div>
                    <div className={styles.dreamJobArea}>
                        <div className={styles.dreamJobText}>희망 직군</div>
                        <div className={styles.dreamJobContent}>프론트엔드 개발</div>
                    </div>
                    <div className={styles.techStackArea}>
                        <div className={styles.techStackText}>기술스택</div>
                        <div className={styles.techStackContent}>
                            <div className={styles.skillsItems}>React</div>
                            <div className={styles.skillsItems}>Javascript</div>
                            <div className={styles.skillsItems}>HTML5</div>
                            <div className={styles.skillsItems}>CSS</div>
                            <div className={styles.skillsItems}>Github</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MyProfile