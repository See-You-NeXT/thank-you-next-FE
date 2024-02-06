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

    const [passwordValid,setPasswordValid] = useState(false);
    const [confirmPasswordValid,setConfirmPasswordValid] = useState(false);

    const editPwAreaRef = useRef(null);

    useEffect(() => {
        const myInfoData = dataMyInfo[0];
        setBirth(myInfoData.birth);
        setSelfIntro(myInfoData.selfIntro);
        setGithub(myInfoData.github);
        setLink(myInfoData.link);
    }, []);

    const checkValid = () =>{
        const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        regexPw.test(password) ? setPasswordValid(true) : setPasswordValid(false);
        confirmPassword == password ? setConfirmPasswordValid(true) : setConfirmPasswordValid(false);

    }

    const handleSave = () => {
        if(isPasswordCorrect){
            const shouldSave = window.confirm("변경된 내용을 저장하시겠습니까?");
            if (!shouldSave) {
                return;
            }

            window.confirm("비밀번호가 변경되었습니다.");

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

            setIsPasswordCorrect(false);
            setShowPassword(false);

            setPassword('');
            setConfirmPassword('');
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

            <div className={styles.editPwTitle}>비밀번호 변경</div>

            <div className={styles.editPwAreaContainer}>

                <div className={styles.overlay} onClick={handleOverlayClick} style={{ display: isPasswordCorrect ? 'none' : 'block' }}>
                    <FaLock className={styles.lockIcon}/>
                </div>
      
                <div className={styles.editPwArea} ref={editPwAreaRef}>
                    <div className={styles.newPwArea}>
                        <div className={styles.editPwText}>
                            새 비밀번호
                        </div>
                        <div className={styles.editPwContent}>
                            <input
                                type="password"
                                placeholder="새 비밀번호"
                                value={password}
                                className={styles.editPwBox}
                                onKeyUp={checkValid}
                                onChange={(e) => setPassword(e.target.value)}
                                readOnly={!isPasswordCorrect}
                            />
                            <div className={styles.errorMessage}>
                                {
                                    !passwordValid && password.length > 0 &&(
                                        <div>비밀번호는 대소문자/숫자 포함 8자 이상 입력해주세요.</div>
                                    )
                                }
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.confirmPwArea}>
                        <div className={styles.editPwText}>
                            비밀번호 확인
                        </div>
                        <div className={styles.editPwContent}>
                            <input
                                type="password"
                                placeholder="새 비밀번호 확인"
                                value={confirmPassword}
                                className={styles.editConfirmPwBox}
                                onKeyUp={checkValid}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                readOnly={!isPasswordCorrect}
                            />
                            <div className={styles.errorMessage}>
                                {
                                    !confirmPasswordValid && confirmPassword.length > 0 &&(
                                        <div>비밀번호가 일치하지 않습니다.</div>
                                    )
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className={styles.saveBtn} onClick={handleSave}
                style={{cursor:passwordValid && confirmPasswordValid ? 'pointer' : 'default', 
                    backgroundColor:passwordValid && confirmPasswordValid ? '#ffd0bf' : '#e4e4e4',
                    color:passwordValid && confirmPasswordValid ? 'rgb(80,80,80)' : 'rgb(110,110,110)'
            }}>
                저장
            </div>
        </div>
    );
}

export default MyInfoPage;