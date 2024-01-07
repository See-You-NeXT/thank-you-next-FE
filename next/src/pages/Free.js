import styles from './Free.module.css';
import Paging from '../components/Paging';


function Free(){
    
    return(
        <div className={styles.free}>
            <div className={styles.textArea}>
                <div className={styles.freeTitle}>
                    자유 게시판
                </div>
                <div className={styles.freeContent}>
                    📢 친구, 선후배와 하고 싶은 말을 자유롭게!
                </div>
            </div>


            <Paging />
            
        </div>
    );
}

export default Free;