import React, { useState, useEffect, useRef } from 'react';
import { FaLock } from "react-icons/fa";

import styles from './MyInfo.module.css';

import instance from '../api/Axios';

function MyInfo() {
    //기본정보
    let [name, setName] = useState('');
    let [studentId, setStudentId] = useState('');
    let [email,setEmail] = useState('');
    let [password, setPassword] = useState('');

    //비밀번호 변경
    let [newPassword, setNewPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    let [showPassword, setShowPassword] = useState(false);
    let [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    let [passwordValid,setPasswordValid] = useState(false);
    let [confirmPasswordValid,setConfirmPasswordValid] = useState(false);

    const editPwAreaRef = useRef(null);

    async function getUser() {
        try{
            const response = await instance.get('/api/member/profile');
            setName(response.data.result.memberDto.name);
            setStudentId(response.data.result.memberDto.studentId);
            setEmail(response.data.result.memberDto.email);
            setPassword(response.data.result.memberDto.password);
        } catch(error){
            console.error();
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const checkValid = () =>{
        const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        regexPw.test(newPassword) ? setPasswordValid(true) : setPasswordValid(false);
        confirmPassword == newPassword ? setConfirmPasswordValid(true) : setConfirmPasswordValid(false);

    }

    const handleSave = () => {
        // if(isPasswordCorrect){
        //     const shouldSave = window.confirm("변경된 내용을 저장하시겠습니까?");
        //     if (!shouldSave) {
        //         return;
        //     }

        //     window.confirm("비밀번호가 변경되었습니다.");



        //     setIsPasswordCorrect(false);
        //     setShowPassword(false);

        //     setPassword('');
        //     setConfirmPassword('');

        //     setPasswordValid(false);
        //     setConfirmPasswordValid(false);
        // }
        
    };

    const handleShowPassword = () => {
        const userPassword = password;
  
        if (isPasswordCorrect) {
            setShowPassword(true);
        } else {
            const enteredPassword = prompt("본인 확인을 위해 비밀번호를 입력하세요:");
            if (enteredPassword !== null && enteredPassword === userPassword) {
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
                            {name}
                        </div>
                    </div>
                    <div className={styles.classNumArea}>
                        <div className={styles.basicInfoItemsText}>
                            학번
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            {studentId}
                        </div>
                    </div>
                    <div className={styles.emailArea}>
                        <div className={styles.basicInfoItemsText}>
                            이메일
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            {email}
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
                                value={newPassword}
                                className={styles.editPwBox}
                                onKeyUp={checkValid}
                                onChange={(e) => setNewPassword(e.target.value)}
                                readOnly={!isPasswordCorrect}
                            />
                            <div className={styles.errorMessage}>
                                {
                                    !passwordValid && newPassword.length > 0 &&(
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

export default MyInfo;