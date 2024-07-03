import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';

function App() {
  return (
      <div className={styles.App}>
          <HomePage />
          <Header />
          <Footer />
          <About />
      </div>
  );
}
export default App;