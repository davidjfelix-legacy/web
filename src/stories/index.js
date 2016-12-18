import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Comment from '../components/Comment';

storiesOf('Comment', module)
  .add('Default', () => (
    <Comment username="ExampleUser" text="This is a comment."/>
  ));
