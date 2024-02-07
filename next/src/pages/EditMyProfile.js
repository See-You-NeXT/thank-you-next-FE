import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";

import styles from './EditMyProfile.module.css';
import dataMyInfo from '../dataMyInfo';

function EditMyProfile() {
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
    const [newTech, setNewTech] = useState('');

    const classNumPrefix = classNum.substring(2, 4);

    const handleAddTech = () => {
        if (newTech.trim() !== '') {
            setTechStack(prevTechStack => [...prevTechStack, newTech.trim()]);
            setNewTech('');
        }
    };

    const handleDeleteTech = (index) => {
        const confirmDelete = window.confirm("삭제하시겠습니까?");
        if(confirmDelete){
            setTechStack(prevTechStack => prevTechStack.filter((_, i) => i !== index));
        }
    };

    const handleSave = () => {
        const confirmSave = window.confirm("저장하시겠습니까?");
        if(!confirmSave){
            return;
        }

        const updatedData = {
            ...dataMyInfo[0],
            name: name,
            classNum: classNum,
            selfIntro: selfIntro,
            github: github,
            insta: insta,
            email: email,
            birth: birth,
            mbti: mbti,
            dreamJob: dreamJob,
            techStack: techStack,
        };

        dataMyInfo[0] = updatedData;

        alert("저장되었습니다.");

        setTimeout(() => {
            navigate('/myProfile');
        } );
    };

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
                        <div className={styles.techStackText}>기술 스택</div>
                        <div className={styles.techStackContent}>
                            {
                                techStack.map((item,i)=>{
                                    return(
                                        <div key={i} className={styles.skillsItems} onClick={() => handleDeleteTech(i)}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.plusTechStack}>
                            <input
                                placeholder='기술 스택 추가'
                                className={styles.techInputBox} 
                                value={newTech}
                                onChange={(e) => setNewTech(e.target.value)}
                            />
                            <FaCirclePlus className={styles.plusTechBtn} onClick={handleAddTech} /> 
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className={styles.btnArea}>
                <div className={styles.cancelBtn} onClick={()=>navigate('/myProfile')}>취소</div>
                <div className={styles.saveBtn} onClick={handleSave}>저장</div>
            </div>
            
        </div>
    );
}

export default EditMyProfile;