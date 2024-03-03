import React, { useState } from 'react';

import styles from './Introduce.module.css';
import NeXTNav from '../components/NeXTNav';

function Introduce() {
  const [fe, setFe] = useState(true);

  const handleFeBtn = () => {
    setFe(true);
  }

  const handleBeBtn = () => {
    setFe(false);
  }

  return (
    <div className={styles.introduce}>
      <NeXTNav currentPage={"스터디 소개"}/>
      <div className={styles.originArea}>
        <img src='/origin.png'/>
      </div>
      <div className={styles.developerArea}>
        <div className={styles.developerTitle}>
          개발진 소개
        </div>
        <div className={styles.selectFeBe}>
          <div className={styles.feBtn} onClick={handleFeBtn}
            style={{backgroundColor:fe?"#ffefe9":"white"}}>
            Front-End
          </div>
          <div className={styles.beBtn} onClick={handleBeBtn}
            style={{backgroundColor:!fe?"#ffefe9":"white"}}>
            Back-End
          </div>
        </div>
        <div className={styles.developer}>
          {
            fe ? <img src='/developerImg/fe.png' /> : <img src='/origin.png'/>
          }
          
        </div>
      </div>
    </div>
  );
}

export default Introduce;