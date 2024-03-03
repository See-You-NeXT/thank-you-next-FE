import React from 'react';

import styles from './Activity.module.css';
import NeXTNav from '../components/NeXTNav';

function Activity() {
    return (
        <div className={styles.activityArea}>
            <NeXTNav currentPage={"스터디 활동"}/>
            <div className={styles.activities}>
                <img src='/activityImg/스터디활동1.png'/>
                <img src='/activityImg/스터디활동2.png'/>
            </div>
        </div>
    );
}

export default Activity;