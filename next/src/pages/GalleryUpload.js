import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './GalleryUpload.module.css';

import UploadImg from '../components/UploadImg';

function GalleryUpload() {
    //버튼 경고창
    let navigate = useNavigate();

    const handleCancleBtn = () => {
        const confirmCancle = window.confirm("갤러리 업로드를 취소하시겠습니까?");

        if(confirmCancle) {
            navigate(-1);
        }
    };

    const handleUploadBtn = () => {
        const confirmUpload = window.confirm("갤러리에 등록하시겠습니까?");

        if(confirmUpload) {
            navigate(-1); //갤러리등록으로 바꾸기
        }
    };

    return (
        <div className={styles.galleryUploadArea}>
            <div className={styles.galleryUploadWrap}>
                <div className={styles.galleryUploadTitle}>
                    갤러리 업로드 📷
                </div>

                <div className={styles.titleArea}>
                    <div className={styles.inputText}>
                        제목    
                    </div>
                    <input 
                        placeholder='제목을 입력하세요'
                        id='title'
                        className={styles.inputBox} 
                    />
                </div>

                <div className={styles.uploadFileArea}>
                    <UploadImg />
                </div>

                <div className={styles.btnArea}>
                    <div className={styles.cancelBtn} onClick={handleCancleBtn}>취소</div>
                    <div className={styles.uploadBtn} onClick={handleUploadBtn}>등록</div>
                </div>
            </div>
        </div>
    );
}

export default GalleryUpload;