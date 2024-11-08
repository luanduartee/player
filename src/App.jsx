import styles from './App.module.css';
import Index from './ui/pages';

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Project<span>Web</span></h1>
      </header>
      <Index />
    </>
  )
}

export default App
