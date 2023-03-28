import type { Component } from 'solid-js';
import { Button } from '@suid/material';

import MainContainer from './components/MainContainer';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;
