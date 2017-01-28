import React from 'react';
import AppComponent from 'grommet/components/App';
import Article from 'grommet/components/Article';

import PageHeader from './PageHeader';

import '../css/App.css';


const App = ({children, history}) => {
  return (
    <AppComponent centered={false}>
      <Article size="full">
       <PageHeader />
       {children}
      </Article>
    </AppComponent>
  );
}

export default App;
