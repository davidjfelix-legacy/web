import React from 'react';

import Footer from './Footer';
import PageHeader from './PageHeader';

import './App.css';


const App = ({children, history}) => {
  return (
    <div>
      <PageHeader />
      {children}
      <Footer />
    </div>
  );
}

export default App;

