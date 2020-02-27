import React, { Fragment } from 'react';
import './styles.css';

import config from './assets/config';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import Footer from './components/Footer';

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
    <Questions config={config} />
    <Footer />
  </Fragment>
);

export default App;
