import { Link, useNavigate, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation(){

    let navigate = useNavigate();

    return(
        <div className={styles.navbar}>
            <ul className={styles.navUl}>
                <li className={styles.navLi} onClick={()=>{ navigate('/') }}><img src='/nextLogosmall.png'/></li>
                <li className={styles.navLi}>NeXT</li>
                <li className={styles.navLi}>게시판</li>
                <li className={styles.navLi}>마이페이지</li>
                <li className={styles.loginArea} onClick={()=>{ navigate('/login') }}>로그인</li>
                <li className={styles.loginArea} onClick={()=>{ navigate('/signup') }}>회원가입</li>
            </ul>
        </div>
    );  
}

export default Navigation;