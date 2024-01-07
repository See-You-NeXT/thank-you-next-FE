import styles from './Question.module.css';
import Paging from '../components/Paging';
import Hashtag from '../components/Hashtag';

function Question(){

    return(
        <div className={styles.question}>
            <div className={styles.textArea}>
                <div className={styles.questionTitle}>
                    질문 게시판
                </div>
                <div className={styles.questionContent}>
                    📢 세미나, 학교 수업, 독학 모두 상관없이 자유롭게 질문해봐요!
                </div>
            </div>

            <Hashtag />

            <Paging />
            
        </div>
    );
}

export default Question;