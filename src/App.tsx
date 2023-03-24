import type { Component } from 'solid-js';
import { Button } from '@suid/material';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const handleClick = () => alert("Hello world!");

  return (
    <div class={styles.App}>
      <Button variant="contained" onClick={handleClick}>Hello world!</Button>
    </div>
  );
};

export default App;
