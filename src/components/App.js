import React from 'react';
import '../App.css';

import Footer from './Footer';
import PageHeader from './PageHeader';

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

