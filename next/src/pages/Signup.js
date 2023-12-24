import { useState } from 'react';
import styles from './Signup.module.css';

function Signup(){

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPw, setConfirmPw] = useState('');
    let [name,setName] = useState('');
    let [classNum,setClassNum] = useState('');

    const [emailValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);
    const [confirmPwValid,setConfirmPwValid] = useState(false);
    const [nameValid,setNameValid] = useState(false);
    const [classNumValid,setClassNumValid] = useState(false);

    const checkValid = () =>{
        const regexId = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const regexName = /[가-힣]{2,}$/;
        const regexClassNum = /^[0-9]{8,}$/;

        regexId.test(email) ? setEmailValid(true) : setEmailValid(false);
        regexPw.test(password) ? setPwValid(true) : setPwValid(false);
        confirmPw == password ? setConfirmPwValid(true) : setConfirmPwValid(false);
        regexName.test(name) ? setNameValid(true) : setNameValid(false);
        regexClassNum.test(classNum) ? setClassNumValid(true) : setClassNumValid(false);

    }

    return(
        <div className={styles.signup}>
            <div className={styles.signupArea}>
                <div className={styles.textArea}>
                    <div className={styles.signupInKo}>
                        회원가입
                    </div>
                    <div className={styles.vertical}>
                        |
                    </div>
                    <div className={styles.signupInEng}>
                        SignUp
                    </div>
                </div>

                <div className={styles.emailArea}>
                    <div className={styles.inputText}>
                        이메일
                    </div>
                    <input 
                    placeholder='ex) mjkim@mju.ac.kr'
                    id='email'
                    className={styles.emailInputBox} 
                    onKeyUp={checkValid}
                    onChange={e=>{
                        setEmail(e.target.value)
                    }}
                    />
                    <div className={styles.dupBtn}>
                        중복 확인
                    </div>
                </div>
                <div className={styles.errorMessage}>
                    {
                        !emailValid && email.length > 0 &&(
                            <div>올바른 이메일 형식이 아닙니다.</div>
                        )
                    }
                </div>

                <div className={styles.pwArea}>
                    <div className={styles.inputText}>
                        비밀번호
                    </div>
                    <input 
                    type='password'
                    placeholder=''
                    id='password'
                    className={styles.inputBox} 
                    onKeyUp={checkValid}
                    onChange={e=>{
                        setPassword(e.target.value)
                    }}
                    />
                </div>
                <div className={styles.errorMessage}>
                    {
                        !pwValid && password.length > 0 &&(
                            <div>비밀번호는 대소문자/숫자 포함 8자 이상 입력해주세요.</div>
                        )
                    }
                </div>

                <div className={styles.confirmPwArea}>
                    <div className={styles.inputText}>
                        비밀번호 확인
                    </div>
                    <input 
                    type='password'
                    placeholder=''
                    id='confirmPassword'
                    className={styles.inputBox} 
                    onKeyUp={checkValid}
                    onChange={e=>{
                        setConfirmPw(e.target.value)
                    }}
                    />
                </div>
                <div className={styles.errorMessage}>
                    {
                        !confirmPwValid && confirmPw.length > 0 &&(
                            <div>비밀번호가 일치하지 않습니다.</div>
                        )
                    }
                </div>

                <div className={styles.nameArea}>
                    <div className={styles.inputText}>
                        이름
                    </div>
                    <input 
                    type='text'
                    placeholder='ex) 김명지'
                    id='name'
                    className={styles.inputBox} 
                    onKeyUp={checkValid}
                    onChange={e=>{
                        setName(e.target.value)
                    }}
                    />
                </div>
                <div className={styles.errorMessage}>
                    {
                        !nameValid && name.length > 0 &&(
                            <div>이름은 한글 2자 이상 입력해주세요.</div>
                        )
                    }
                </div>

                <div className={styles.classNumArea}>
                    <div className={styles.inputText}>
                        학번
                    </div>
                    <input 
                    type='text'
                    placeholder='ex) 6024XXXX'
                    id='classNum'
                    className={styles.inputBox} 
                    onKeyUp={checkValid}
                    onChange={e=>{
                        setClassNum(e.target.value)
                    }}
                    />
                </div>
                <div className={styles.errorMessage}>
                    {
                        !classNumValid && classNum.length > 0 &&(
                            <div>올바른 학번이 아닙니다.</div>
                        )
                    }
                </div>

                <div className={styles.signupBtn} 
                    style={{ backgroundColor: emailValid && pwValid && confirmPwValid && nameValid && classNumValid ? "#ecc6b7" : "#ecddd7", 
                        cursor: emailValid && pwValid && confirmPwValid && nameValid && classNumValid ? "pointer" : "auto"}}>
                    회원가입
                </div>     
            </div>
        </div>
    );
}

export default Signup;