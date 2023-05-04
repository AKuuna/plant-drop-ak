import React from 'react' ;
import StartButton from './components/UI/StartButton';
import styles from'./App.module.css';
import Water from './images/water-drop-png-15921.png';
import Plant1 from './images/watercolor-painting-leaf-illustration-watercolor-leaves-3a7e8c7dd8cd28f699505920afca2dc5.png';

function App() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Plant Drops App</h1>
      <div className={styles.images}>
        <img src={Plant1} alt="plant" className={styles.plant1}/>
        <img src={Plant1} alt="plant" className={styles.plant11}/>
        <img src={Water} alt="droplet" className={styles.water}/>
      </div>
      <StartButton/>
    </div>
    
  );
}

export default App;
