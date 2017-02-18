import React from 'react';


const PageSideMenu = ({children}) => (
  <div>{children}</div>
);

export default PageSideMenu;

  /*<Sidebar size="small" pad="none">
    <Menu colorIndex="neutral-2-a" fill={true} pad="none">
      <Menu align="start" label="Groups menu" inline={true} direction="column" size="small" primary={true} pad="none">
        <Header align="end" pad={{horizontal: "medium", vertical: "none"}} direction="row" responsive={false} size="small">
          <Heading pad="none" tag="h4" strong={true}>Groups</Heading>
        </Header>
        <Anchor pad="none" label="Group 1"/>
        <Anchor pad="none" label="Group 2"/>
        <Anchor pad="none" label="Group 3"/>
      </Menu>
    </Menu>
  </Sidebar>*/