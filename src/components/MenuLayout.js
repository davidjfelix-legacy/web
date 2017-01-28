import React from 'react';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';

import PageSideMenu from './PageSideMenu';


const MenuLayout = ({children}) => (
  <Section pad="none">
    <Split flex="right" pad="none">
      <PageSideMenu />
      <Section pad="small">{children}</Section>
    </Split>
  </Section>
);

export default MenuLayout;
