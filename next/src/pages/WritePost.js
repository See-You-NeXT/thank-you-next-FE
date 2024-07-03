import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import styles from './WritePost.module.css';
import Hashtag from '../components/Hashtag';
import UploadImg from '../components/UploadImg';
import instance from '../api/Axios';

function WritePost() {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();

    const handleCheckboxClick = (index) => {
        setCheckbox1(index === 1);
        setCheckbox2(index === 2);
        setCheckbox3(index === 3);
    };

    const handleCancleBtn = () => {
        if (window.confirm("글 작성을 취소하시겠습니까?")) {
            navigate(-1);
        }
    };

    const handleUploadBtn = () => {
        let postType = '';
        if (checkbox1) postType = 'NOTICE';
        else if (checkbox2) postType = 'QUESTION';
        else if (checkbox3) postType = 'FREE';

        if (postType === '') {
            alert("게시글을 지정해 주세요.");
            return;
        }

        if (window.confirm("글을 등록하시겠습니까?")) {
            postWritePost(postType);
        }
    };

    async function postWritePost(postType) {
        try {
            const formData = new FormData();
            const requestBody = {
                dType: postType,
                title: title,
                content: content,
                tagList: tags
            };

            formData.append('request', new Blob([JSON.stringify(requestBody)], { type: 'application/json' }));
            files.forEach(file => formData.append('fileList', file));

            const response = await instance.post('/api/post', formData);
            console.log(response);
            if (response.data.isSuccess) {
                navigate(-1);
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    }

    return (
        <div className={styles.writePostArea}>
            <div className={styles.writePostWrap}>
                <div className={styles.writePostTitle}>게시판 글쓰기 ✏️</div>
                <ul className={styles.selectBoard}>
                    <li className={styles.boardList} onClick={() => handleCheckboxClick(1)}>
                        <div className={styles.checkboxIcon}>
                            {checkbox1 ? <MdOutlineCheckBox size={25} /> : <MdOutlineCheckBoxOutlineBlank size={25} />}
                        </div>
                        <div className={styles.boardListText}>공지게시판</div>
                    </li>
                    <li className={styles.boardList} onClick={() => handleCheckboxClick(2)}>
                        <div className={styles.checkboxIcon}>
                            {checkbox2 ? <MdOutlineCheckBox size={25} /> : <MdOutlineCheckBoxOutlineBlank size={25} />}
                        </div>
                        <div className={styles.boardListText}>질문게시판</div>
                    </li>
                    <li className={styles.boardList} onClick={() => handleCheckboxClick(3)}>
                        <div className={styles.checkboxIcon}>
                            {checkbox3 ? <MdOutlineCheckBox size={25} /> : <MdOutlineCheckBoxOutlineBlank size={25} />}
                        </div>
                        <div className={styles.boardListText}>자유게시판</div>
                    </li>
                </ul>
                <div className={styles.titleArea}>
                    <div className={styles.inputText}>제목</div>
                    <input
                        placeholder='제목을 입력하세요'
                        id='title'
                        className={styles.inputBox}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.contentArea}>
                    <div className={styles.textareaText}>내용</div>
                    <textarea
                        placeholder='내용을 입력하세요'
                        id='content'
                        className={styles.textareaBox}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <div className={styles.uploadFileArea}>
                    <UploadImg onFilesChange={setFiles} />
                </div>
                {checkbox2 && (
                    <div className={styles.hashtagArea}>
                        <div className={styles.hashtagTitle}>해시태그</div>
                        <div className={styles.hashtag}>
                            <Hashtag onTagsChange={setTags} />
                        </div>
                    </div>
                )}
                <div className={styles.btnArea}>
                    <div className={styles.cancelBtn} onClick={handleCancleBtn}>취소</div>
                    <div className={styles.uploadBtn} onClick={handleUploadBtn}>등록</div>
                </div>
            </div>
        </div>
    );
}

export default WritePost;