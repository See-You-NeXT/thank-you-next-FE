import { Link, useNavigate, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import Dropdown from './Dropdown';
import { useState } from 'react';

function Navigation(){

    let navigate = useNavigate();
    const [isHoveringFirst, setIsHoveringFirst] = useState(false);
    const [isHoveringSecond, setIsHoveringSecond] = useState(false);

    const handleMouseOverFirst = () => {
        setIsHoveringFirst(true);
    };

    const handleMouseOutFirst = () => {
        setIsHoveringFirst(false);
    };

    const handleMouseOverSecond = () => {
        setIsHoveringSecond(true);
    };

    const handleMouseOutSecond = () => {
        setIsHoveringSecond(false);
    };

    return(
        <div>
            <div className={styles.navbar}>
                <div className={styles.imgArea} onClick={()=>{ navigate('/') }}><img src='/nextLogosmall.png'/></div>
                <ul className={styles.navUl}>
                    <li className={styles.navLi} onMouseOver={handleMouseOverFirst} onMouseOut={handleMouseOutFirst}>
                        NeXT
                    </li>
                    <li className={styles.navLi} onMouseOver={handleMouseOverSecond} onMouseOut={handleMouseOutSecond}>
                        게시판
                    </li>
                    <li className={styles.navLi} onClick={()=>{ navigate('/mypage') }}>마이페이지</li>
                </ul>
                <div className={styles.loginArea}>
                    <div className={styles.loginItem} onClick={()=>{ navigate('/login') }}>로그인</div>
                    <div className={styles.loginItem} onClick={()=>{ navigate('/signup') }}>회원가입</div>
                </div>
                
            </div>
            <Dropdown visibility={isHoveringFirst}>
                <ul className={styles.dropdownUl} onMouseOver={handleMouseOverFirst} onMouseOut={handleMouseOutFirst}>
                    <li className={styles.dropdownLi} onClick={()=>{ navigate('/introduce') }}>스터디소개</li>
                    <li className={styles.dropdownLi} onClick={()=>{ navigate('/gallery') }}>갤러리</li>
                    <li className={styles.dropdownLi}>스터디일정</li>
                </ul>
            </Dropdown>
            <Dropdown visibility={isHoveringSecond}>
                <ul className={styles.dropdownUl} onMouseOver={handleMouseOverSecond} onMouseOut={handleMouseOutSecond}>
                    <li className={styles.dropdownLi} onClick={()=>{ navigate('/notice') }}>공지게시판</li>
                    <li className={styles.dropdownLi} onClick={()=>{ navigate('/question') }}>질문게시판</li>
                    <li className={styles.dropdownLi} onClick={()=>{ navigate('/free') }}>자유게시판</li>
                </ul>
            </Dropdown>
        </div>
    );  
}

export default Navigation;