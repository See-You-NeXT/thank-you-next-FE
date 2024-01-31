import React from 'react';

import styles from './MyInfoPage.module.css';

function MyInfoPage() {
    return (
        <div className={styles.myInfoPageArea}>
            <div className={styles.basicInfoArea}>
                <div className={styles.editProfileImg}>
                    <img src='/developerImg/kcs.png' />
                </div>

                <div className={styles.basicInfo}>
                    <div className={styles.nameArea}>
                        <div className={styles.basicInfoItemsText}>
                            이름
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            김명지
                        </div>
                    </div>
                    <div className={styles.classNumArea}>
                        <div className={styles.basicInfoItemsText}>
                            학번
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            6019XXXX
                        </div>
                    </div>
                    <div className={styles.emailArea}>
                        <div className={styles.basicInfoItemsText}>
                            이메일
                        </div>
                        <div className={styles.basicInfoItemsContent}>
                            abc@mju.ac.kr
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.editInfoArea}>
                <div className={styles.pwArea}>
                    <div className={styles.editInfoItemsText}>
                        비밀번호
                    </div>
                </div>
                <div className={styles.confirmPwArea}>
                    <div className={styles.editInfoItemsText}>
                        비밀번호 확인
                    </div>
                </div>
                <div className={styles.birthArea}>
                    <div className={styles.editInfoItemsText}>
                        생년월일
                    </div>
                </div>
                <div className={styles.selfIntroArea}>
                    <div className={styles.editInfoItemsText}>
                        자기소개
                    </div>
                </div>
                <div className={styles.githubArea}>
                    <div className={styles.editInfoItemsText}>
                        Github
                    </div>
                </div>
                <div className={styles.linkArea}>
                    <div className={styles.editInfoItemsText}>
                        Link
                    </div>
                </div>
            </div>

            <div className={styles.saveBtn}>
                저장
            </div>
        </div>
    );
}

export default MyInfoPage;