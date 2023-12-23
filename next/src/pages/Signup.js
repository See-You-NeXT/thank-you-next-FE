import { useState } from 'react';
import styles from './Signup.module.css';

function Signup(){

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const [emailnValid,setEmailValid] = useState(false);
    const [pwValid,setPwValid] = useState(false);

    const checkValid = () =>{
        const regexId = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

        regexId.test(email) ? setEmailValid(true) : setEmailValid(false);
        regexPw.test(password) ? setPwValid(true) : setEmailValid(false);
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
                        setPassword(e.target.value)
                    }}
                    />
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
                        setPassword(e.target.value)
                    }}
                    />
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
                        setPassword(e.target.value)
                    }}
                    />
                </div>

                <div className={styles.signupBtn} 
                    style={{ backgroundColor: emailnValid && pwValid ? "#ecc6b7" : "#ecddd7", 
                        cursor: emailnValid && pwValid ? "pointer" : "auto"}}>
                    회원가입
                </div>     
            </div>
        </div>
    );
}

export default Signup;