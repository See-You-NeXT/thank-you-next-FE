import React from 'react';

import styles from './GalleryUpload.module.css';

import UploadImg from '../components/UploadImg';

function GalleryUpload() {
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
                <div className={styles.uploadFileTitle}>사진/동영상 업로드</div>
                <div className={styles.uploadFileContent}>
                    사진/동영상 업로드는 최대 10개까지 가능합니다.
                </div>
                <UploadImg />
            </div>

            <div className={styles.btnArea}>
                <div className={styles.cancelBtn}>취소</div>
                <div className={styles.uploadBtn}>등록</div>
            </div>
        </div>
    </div>

  );
}

export default GalleryUpload;