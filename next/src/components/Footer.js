import styles from './Footer.module.css';

function Footer(){
    return(
        <>
            <div className={styles.divisionLine}></div>
            <div className={styles.footerArea}>
                <div className={styles.footerImg}>
                    <img src='/footerLogo.png' />
                </div>
                <div className={styles.copyright}>Copyright ⓒ 2023. CYKJ. All rights reserved.</div>
            </div>
        </>
        
    );
}

export default Footer;