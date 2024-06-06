import styles from './Question.module.css';
import PagingQuestion from '../components/PagingQuestion';
import Hashtag from '../components/Hashtag';
import { useEffect, useState } from 'react';

function Question(){
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        //나중에 선택된 태그별로 조회하는 기능 코드 추가해야 함, 지금은 선택된 해시태그 출력으로 대체
        console.log(selectedTags);
    }, [selectedTags])

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
            

            <PagingQuestion />
            
        </div>
    );
}

export default Question;