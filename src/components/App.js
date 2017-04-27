import React from 'react';

import PageHeader from './PageHeader';

import '../css/App.css';


const App = ({children, history}) => {
  return (
    <div>
      <PageHeader />
      {children}
    </div>
  );
}

export default App;
