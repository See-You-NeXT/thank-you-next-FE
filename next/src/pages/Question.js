import styles from './Question.module.css';
import PagingQuestion from '../components/PagingQuestion';
import Hashtag from '../components/Hashtag';
import { useEffect, useState } from 'react';

function Question(){
    const [selectedTags, setSelectedTags] = useState([]);

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

            <div className={styles.hashtagArea}>
               <Hashtag onTagsChange={(tags) => setSelectedTags(tags)}/> 
            </div>
            

            <PagingQuestion selectedTags={selectedTags}/>
            
        </div>
    );
}

export default Question;