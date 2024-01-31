import React, { useState, useEffect, useRef } from 'react';
import { FaLock } from "react-icons/fa";

import styles from './MyInfoPage.module.css';
import dataMyInfo from '../dataMyInfo';

function MyInfoPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birth, setBirth] = useState('');
    const [selfIntro, setSelfIntro] = useState('');
    const [github, setGithub] = useState('');
    const [link, setLink] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const editInfoAreaRef = useRef(null);

    useEffect(() => {
        const myInfoData = dataMyInfo[0];
        setPassword(myInfoData.pw);
        setConfirmPassword(myInfoData.pw);
        setBirth(myInfoData.birth);
        setSelfIntro(myInfoData.selfIntro);
        setGithub(myInfoData.github);
        setLink(myInfoData.link);
    }, []);

    const handleSave = () => {
        if(isPasswordCorrect){
            const shouldSave = window.confirm("변경된 내용을 저장하시겠습니까?");
            if (!shouldSave) {
                return;
            }

            const updatedData = {
                name: "김창식",
                classNum: "6019XXXX",
                email: "abc@mju.ac.kr",
                pw: password,
                birth: birth,
                selfIntro: selfIntro,
                github: github,
                link: link,
            };

            dataMyInfo[0] = updatedData;

            // 여기에서 수정된 데이터를 서버에 보내거나 로컬 스토리지에 저장하는 등의 로직을 추가
            console.log("저장되었습니다.", updatedData);

            setIsPasswordCorrect(false);
            setShowPassword(false);
        }
        
    };

    const handleShowPassword = () => {
        const password = dataMyInfo[0].pw;
  
        if (isPasswordCorrect) {
            setShowPassword(true);
        } else {
            const enteredPassword = prompt("본인 확인을 위해 비밀번호를 입력하세요:");
            if (enteredPassword !== null && enteredPassword === password) {
                setIsPasswordCorrect(true);
                setShowPassword(true);
            } else {
                alert("비밀번호가 일치하지 않습니다.");
            }
        }
    };

    const handleOverlayClick = () => {
        if (!isPasswordCorrect) {
            handleShowPassword();
        } else {
            const inputElements = document.querySelectorAll('.editInfoItemsContent input, .editInfoItemsContent textarea');
            inputElements.forEach((inputElement) => {
                inputElement.removeAttribute('readOnly');
            });
        }
    };
    

    return (
        <div className={styles.myInfoPageArea}>
            <div className={styles.basicInfoArea}>
                <div className={styles.editProfileImg}>
                    <img src='/developerImg/kcs.png' />
                </div>

                <div className={styles.basicInfo}>
                    <div className={styles.nameArea}>
                        <div className={styles.basicInfoItemsText}>
                            이름
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            {dataMyInfo[0].name}
                        </div>
                    </div>
                    <div className={styles.classNumArea}>
                        <div className={styles.basicInfoItemsText}>
                            학번
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            {dataMyInfo[0].classNum}
                        </div>
                    </div>
                    <div className={styles.emailArea}>
                        <div className={styles.basicInfoItemsText}>
                            이메일
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            {dataMyInfo[0].email}
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.editInfoAreaContainer}>
            <div className={styles.overlay} onClick={handleOverlayClick} style={{ display: isPasswordCorrect ? 'none' : 'block' }}>
                <FaLock className={styles.lockIcon}/>
            </div>
            
            <div className={styles.editInfoArea} ref={editInfoAreaRef}>
                <div className={styles.editPwArea}>
                    <div className={styles.editInfoItemsText}>
                        비밀번호
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="새 비밀번호 입력"
                            value={password}
                            className={styles.editPwBox}
                            onChange={(e) => setPassword(e.target.value)}
                            readOnly={!isPasswordCorrect}
                        />
                    </div>
                </div>
                <div className={styles.editConfirmPwArea}>
                    <div className={styles.editInfoItemsText}>
                        비밀번호 확인
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호 확인"
                            value={confirmPassword}
                            className={styles.editConfirmPwBox}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            readOnly={!isPasswordCorrect}
                        />
                    </div>
                </div>
                <div className={styles.editBirthArea}>
                    <div className={styles.editInfoItemsText}>
                        생년월일
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="text"
                            placeholder="YYYY-MM-DD"
                            value={birth}
                            className={styles.editBirthBox}
                            onChange={(e) => setBirth(e.target.value)}
                            readOnly={!isPasswordCorrect}
                        />
                    </div>
                </div>
                <div className={styles.editSelfIntroArea}>
                    <div className={styles.editInfoItemsText}>
                        자기소개
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <textarea
                            type="text"
                            placeholder="자기소개 입력"
                            value={selfIntro}
                            className={styles.editSelfIntroBox}
                            onChange={(e) => setSelfIntro(e.target.value)}
                            readOnly={!isPasswordCorrect}
                        />
                    </div>
                </div>
                <div className={styles.editGithubArea}>
                    <div className={styles.editInfoItemsText}>
                        Github
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="text"
                            placeholder="Github 주소 입력"
                            value={github}
                            className={styles.editGithubBox}
                            onChange={(e) => setGithub(e.target.value)}
                            readOnly={!isPasswordCorrect}
                        />
                    </div>
                </div>
                <div className={styles.editLinkArea}>
                    <div className={styles.editInfoItemsText}>
                        Link
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="text"
                            placeholder="추가 링크 입력"
                            value={link}
                            className={styles.editLinkBox}
                            onChange={(e) => setLink(e.target.value)}
                            readOnly={!isPasswordCorrect}
                        />
                    </div>
                </div>
            </div>
            </div>

            <div className={styles.saveBtn} onClick={handleSave}
                style={{cursor:isPasswordCorrect ? 'pointer' : 'default', 
                    backgroundColor:isPasswordCorrect ? '#ffd0bf' : '#e4e4e4',
                    color:isPasswordCorrect ? 'rgb(80,80,80)' : 'rgb(110,110,110)'
            }}>
                저장
            </div>
        </div>
    );
}

export default MyInfoPage;