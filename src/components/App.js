import React from 'react';
import AppComponent from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Menu from 'grommet/components/Menu';
import Section from 'grommet/components/Section';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';

import PageHeader from './PageHeader';

import '../css/App.css';


const App = ({children, history}) => {
  return (
    <AppComponent centered={false}>
      <Article size="full">
       <PageHeader />
        <Section pad="none">
          <Split flex="right">
            <Sidebar size="small">
              <Menu colorIndex="brand" fill={true}/>
            </Sidebar>
            <Section pad="small">{children}</Section>
          </Split>
        </Section>
      </Article>
    </AppComponent>
  );
}

export default App;
