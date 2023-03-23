import styles from './App.module.css';
import Calculator from './components/Calculator';

function App() {
   return (
      <div className={styles.app}>
         <Calculator />
      </div>
   );
}

export default App;
