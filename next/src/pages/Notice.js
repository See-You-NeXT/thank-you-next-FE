import styles from './Notice.module.css';
import Paging from '../components/Paging';

function Notice(){

    return(
        <div className={styles.notice}>
            <div className={styles.textArea}>
                <div className={styles.noticeTitle}>
                    공지 게시판
                </div>
                <div className={styles.noticeContent}>
                    📢 NeXT의 중요 공지사항은 다 이 곳에서!
                </div>
            </div>

            <Paging postType={'NOTICE'}/>
            
        </div>
    );
}

export default Notice;