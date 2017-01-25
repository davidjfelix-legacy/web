import React from 'react';
import AppComponent from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';

import '../css/App.css';


const App = ({children, history}) => {
  return (
    <AppComponent centered={false}>
      <Article size="full">
        <Header>MG4.tv</Header>
        <Section>
          <Split flex="right">
            <Sidebar></Sidebar>
            <Section>{children}</Section>
          </Split>
        </Section>
      </Article>
    </AppComponent>
  );
}

export default App;
