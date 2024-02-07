import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdModeEdit } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

import styles from './MyProfile.module.css';
import dataMyInfo from '../dataMyInfo';

function MyProfile() {
    let navigate = useNavigate();

    const [name, setName] = useState(dataMyInfo[0].name);
    const [classNum, setClassNum] = useState(dataMyInfo[0].classNum);
    const [selfIntro, setSelfIntro] = useState(dataMyInfo[0].selfIntro);
    const [github, setGithub] = useState(dataMyInfo[0].github);
    const [insta, setInsta] = useState(dataMyInfo[0].insta);
    const [email, setEmail] = useState(dataMyInfo[0].email);
    const [birth, setBirth] = useState(dataMyInfo[0].birth);
    const [mbti, setMbti] = useState(dataMyInfo[0].mbti);
    const [dreamJob, setDreamJob] = useState(dataMyInfo[0].dreamJob);
    const [techStack, setTechStack] = useState(dataMyInfo[0].techStack);

    const classNumPrefix = classNum.substring(2, 4);

    return (
        <div className={styles.myProfileArea}>
            <div className={styles.backgroundWrap}>
                <div className={styles.profileImg}>
                    <img src='/developerImg/kcs.png' />
                </div>
                <div className={styles.profileEdit}>
                    <MdModeEdit className={styles.profileEditBtn} onClick={()=>navigate('/editMyProfile')}/>
                </div>
            </div>

            <div className={styles.profileInfoArea}>
                <div className={styles.basicInfoArea}>
                    <div className={styles.nameAndClassNum}>
                        <div className={styles.myName}>{name}</div>
                        <div className={styles.myClassNum}>{classNumPrefix}학번</div>
                    </div>
                    <div className={styles.introduction}>
                        {selfIntro}
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
                            <div className={styles.emailLink}>
                                <HiOutlineMail className={styles.emailImg}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.plusInfoArea}>
                    <div className={styles.birthArea}>
                        <div className={styles.birthText}>생일</div>
                        <div className={styles.birthContent}>{birth}</div>
                    </div>
                    <div className={styles.mbtiArea}>
                        <div className={styles.mbtiText}>MBTI</div>
                        <div className={styles.mbtiContent}>{mbti}</div>
                    </div>
                    <div className={styles.dreamJobArea}>
                        <div className={styles.dreamJobText}>희망 직군</div>
                        <div className={styles.dreamJobContent}>{dreamJob}</div>
                    </div>
                    <div className={styles.techStackArea}>
                        <div className={styles.techStackText}>기술스택</div>
                        <div className={styles.techStackContent}>
                            {
                                techStack.map((item,i)=>{
                                    return(
                                        <div key={i} className={styles.skillsItems}>{item}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MyProfile