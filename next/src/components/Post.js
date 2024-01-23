import React from 'react';

import styles from './Post.module.css';

import dataPost from '../dataPost';

function Post() {
    const post = dataPost[0];

    return (
        <div className={styles.post}>
            <div className={styles.postTitle}>
                {post.title}
            </div>
            <div className={styles.postInfo}>
                <div className={styles.postName}>
                    {post.name}
                </div>
                <div className={styles.postDate}>
                    {post.date}
                </div>
            </div>
            
            <div className={styles.postContent}>
                {post.content}
            </div>
        </div>
    );
}

export default Post;