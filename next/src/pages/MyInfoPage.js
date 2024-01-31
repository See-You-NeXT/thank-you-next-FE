import React, { useState } from 'react';

import styles from './MyInfoPage.module.css';

function MyInfoPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birth, setBirth] = useState('');
    const [selfIntro, setSelfIntro] = useState('');
    const [github, setGithub] = useState('');
    const [link, setLink] = useState('');

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
                <div className={styles.editPwArea}>
                    <div className={styles.editInfoItemsText}>
                        비밀번호
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="password"
                            placeholder="새 비밀번호 입력"
                            value={password}
                            className={styles.editPwBox}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.editConfirmPwArea}>
                    <div className={styles.editInfoItemsText}>
                        비밀번호 확인
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="password"
                            placeholder="비밀번호 확인"
                            value={confirmPassword}
                            className={styles.editConfirmPwBox}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.editBirthArea}>
                    <div className={styles.editInfoItemsText}>
                        생년월일
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="text"
                            placeholder="YYYY-MM-DD"
                            value={birth}
                            className={styles.editBirthBox}
                            onChange={(e) => setBirth(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.editSelfIntroArea}>
                    <div className={styles.editInfoItemsText}>
                        자기소개
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <textarea
                            type="text"
                            placeholder="자기소개 입력"
                            value={selfIntro}
                            className={styles.editSelfIntroBox}
                            onChange={(e) => setSelfIntro(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.editGithubArea}>
                    <div className={styles.editInfoItemsText}>
                        Github
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="text"
                            placeholder="Github 주소 입력"
                            value={github}
                            className={styles.editGithubBox}
                            onChange={(e) => setGithub(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.editLinkArea}>
                    <div className={styles.editInfoItemsText}>
                        Link
                    </div>
                    <div className={styles.editInfoItemsContent}>
                        <input
                            type="text"
                            placeholder="추가 링크 입력"
                            value={link}
                            className={styles.editLinkBox}
                            onChange={(e) => setLink(e.target.value)}
                        />
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