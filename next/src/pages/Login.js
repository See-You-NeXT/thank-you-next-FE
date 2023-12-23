import styles from './Login.module.css';

function Login(){
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
                        email
                    </div>
                    <input 
                    placeholder='이메일을 입력해주세요'
                    id='email'
                    className={styles.inputBox} 
                    />
                </div>
                <div className={styles.pwArea}>
                    <div className={styles.inputText}>
                        Password
                    </div>
                    <input 
                    type='password'
                    placeholder='비밀번호를 입력해주세요'
                    id='password'
                    className={styles.inputBox} 
                    />
                </div>
                <div className={styles.loginBtn}>
                    로그인
                </div>
            </div>
        </div>
    );
}

export default Login;