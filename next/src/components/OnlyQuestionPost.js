import React, { useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";

import styles from './OnlyQuestionPost.module.css';

function OnlyQuestionPost({ onSolveStateChange }) {
    let [solveState, setSolveState] = useState(false);

    const handleSolveState = () => {
        setSolveState(!solveState);

        if (onSolveStateChange) {
            onSolveStateChange(!solveState);
        }
    };

    return (
        <div className={styles.onlyQuestionPost}>
            <div className={styles.selectedHashTag}>
                <div className={styles.selectedHashTagItem}>
                    #Javascript
                </div>
                <div className={styles.selectedHashTagItem}>
                    #알고리즘
                </div>
            </div>
            
            <div className={styles.stateUpdateBar} onClick={handleSolveState}>
            {
                solveState ? <UpdateToUnsolve /> : <UpdateToSolve />
            }
            </div>
        </div>
    );
}

function UpdateToSolve(){
    return(
        <div className={styles.UpdateToS}>
            <div className={styles.stateUpdateContent}>
                질문이 해결되었다면 체크바를 눌러 진행 상황을 업데이트하세요!
            </div>
            <div className={styles.stateUpdateIcon}>
                <FaRegCircleCheck size={26}/>
            </div>
            <div className={styles.stateUpdateText}>
                해결
            </div>
        </div>
    );
}

function UpdateToUnsolve(){
    return(
        <div className={styles.UpdateToUS}>
            <div className={styles.stateUpdateContent}>
                질문이 아직 해결되지 않았다면 체크바를 눌러 진행 상황을 업데이트하세요!
            </div>
            <div className={styles.stateUpdateIcon}>
                <FaRegCircleXmark size={27}/>
            </div>
            <div className={styles.stateUpdateText}>
                미해결
            </div>
        </div>
    );
}

export default OnlyQuestionPost;