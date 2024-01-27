import React from 'react';

import styles from './Introduce.module.css';

function Introduce() {
  return (
    <div className={styles.introduce}>
        <div className={styles.originArea}>
            <img src='/origin.png'/>
        </div>
    </div>
  );
}

export default Introduce;