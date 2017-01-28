import React from 'react';
import AppComponent from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';

import PageHeader from './PageHeader';
import PageSideMenu from './PageSideMenu';

import '../css/App.css';


const App = ({children, history}) => {
  return (
    <AppComponent centered={false}>
      <Article size="full">
       <PageHeader />
        <Section pad="none">
          <Split flex="right" pad="none">
            <PageSideMenu />
            <Section pad="small">{children}</Section>
          </Split>
        </Section>
      </Article>
    </AppComponent>
  );
}

export default App;
