import React, { useState } from "react";
import styles from './StartButton.module.css';
import triangle from '../../images/triangle-png-42422.png'

const StartButton = props => {
    const [isClicked, setIsClicked] = useState(false);
    const buttonHandler = (event) => {
        setIsClicked (true);
        
    }

    return(
        <div className={styles.ribbon}>
            <button 
            className={styles.button}
            onClick={buttonHandler}
            >
                <img src={triangle} alt='icon'className={styles.triangle}></img>
            </button>
        </div>
    );
}


export default StartButton;