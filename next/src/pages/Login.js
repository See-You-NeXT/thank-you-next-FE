import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login(){

    let navigate = useNavigate();

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
        <div className={styles.login}>
            <div className={styles.loginArea}>
                <div className={styles.textArea}>
                    <div className={styles.loginInKo}>
                        로그인
                    </div>
                    <div className={styles.vertical}>
                        |
                    </div>
                    <div className={styles.loginInEng}>
                        Login
                    </div>
                </div>

                <div className={styles.emailArea}>
                    <div className={styles.inputText}>
                        이메일
                    </div>
                    <input 
                    placeholder='이메일을 입력해주세요'
                    id='email'
                    className={styles.inputBox} 
                    onKeyUp={checkValid}
                    onChange={e=>{
                        setEmail(e.target.value)
                    }}
                    />
                </div>

                <div className={styles.pwArea}>
                    <div className={styles.inputText}>
                        비밀번호
                    </div>
                    <input 
                    type='password'
                    placeholder='비밀번호를 입력해주세요'
                    id='password'
                    className={styles.inputBox} 
                    onKeyUp={checkValid}
                    onChange={e=>{
                        setPassword(e.target.value)
                    }}
                    />
                </div>

                <div className={styles.loginBtn} 
                    style={{ backgroundColor: emailnValid && pwValid ? "#ecc6b7" : "#ecddd7", 
                        cursor: emailnValid && pwValid ? "pointer" : "auto"}}>
                    로그인
                </div>

                
            </div>
            <div className={styles.shortcut} onClick={()=>{ navigate('/signup') }}>
                회원가입하러 가기 ➔
            </div>
        </div>
    );
}



export default Login;