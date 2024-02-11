import React from 'react';

import styles from './Introduce.module.css';
import NeXTNav from '../components/NeXTNav';

function Introduce() {
  return (
    <div className={styles.introduce}>
      <NeXTNav currentPage={"스터디 소개"}/>
      <div className={styles.originArea}>
        <img src='/origin.png'/>
      </div>
    </div>
  );
}

export default Introduce;