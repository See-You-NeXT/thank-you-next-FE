import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";

import styles from './EditMyProfile.module.css';
import dataMyInfo from '../dataMyInfo';

function EditMyProfile() {
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
        <div className={styles.editMyProfileArea}>
            <div className={styles.backgroundWrap}>
                <div className={styles.profileImg}>
                    <img src='/developerImg/kcs.png' />
                </div>
            </div>

            <div className={styles.profileInfoArea}>
                <div className={styles.basicInfoArea}>
                    <div className={styles.nameAndClassNum}>
                        <div className={styles.myName}>{name}</div>
                        <div className={styles.myClassNum}>{classNumPrefix}학번</div>
                    </div>
                    <div className={styles.introduction}>
                        <textarea
                            placeholder='한 줄 소개 쓰기'
                            value={selfIntro}
                            className={styles.textareaBox} 
                            onChange={(e) => setSelfIntro(e.target.value)}
                        
                        />
                    </div>

                    <div className={styles.linkArea}>
                        <div className={styles.linkTitle}>Link 🔗</div>
                        <div className={styles.linkContent}>
                            <div className={styles.gitLink}>
                                <img src='/link/git.png' />
                                <input
                                    placeholder='GitHub Link'
                                    value={github}
                                    className={styles.linkInputBox} 
                                    onChange={(e) => setGithub(e.target.value)}
                                />
                            </div>
                            <div className={styles.instaLink}>
                                <img src='/link/insta.jpeg' />
                                <input
                                    placeholder='Instagram Link'
                                    value={insta}
                                    className={styles.linkInputBox} 
                                    onChange={(e) => setInsta(e.target.value)}
                                />
                            </div>
                            <div className={styles.emailLink}>
                                <HiOutlineMail className={styles.emailImg}/>
                                <input
                                    placeholder='GitHub Link'
                                    value={email}
                                    className={styles.linkInputBox} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.plusInfoArea}>
                    <div className={styles.birthArea}>
                        <div className={styles.birthText}>생일</div>
                        <input
                            placeholder='YYYY-MM-DD'
                            value={birth}
                            className={styles.inputBox} 
                            onChange={(e) => setBirth(e.target.value)}
                        />
                    </div>
                    <div className={styles.mbtiArea}>
                        <div className={styles.mbtiText}>MBTI</div>
                        <input
                            value={mbti}
                            className={styles.inputBox} 
                            onChange={(e) => setMbti(e.target.value)}
                        />
                    </div>
                    <div className={styles.dreamJobArea}>
                        <div className={styles.dreamJobText}>희망 직군</div>
                        <input
                            placeholder='ex) 프론트엔드 개발'
                            value={dreamJob}
                            className={styles.inputBox} 
                            onChange={(e) => setDreamJob(e.target.value)}
                        />    
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

export default EditMyProfile;