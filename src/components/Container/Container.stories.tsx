/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from './Container';
import title from '../../constants/constants';
import Paragraph from '../Paragraph/Paragraph';

export default {
  title: `${title}Container`,
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  children: (
    <Paragraph fontWeight="normal" size="small">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut corporis
      laboriosam officiis? Ipsum dolores error, placeat nisi harum fuga rerum
      voluptate at cumque hic deserunt, enim eum, tempore velit tempora.
    </Paragraph>
  ),
};

export const Background = Template.bind({});
Background.args = {
  className: 'bg-dark-100',
  children: (
    <Paragraph fontWeight="medium" size="xsmall">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut corporis
      laboriosam officiis? Ipsum dolores error, placeat nisi harum fuga rerum
      voluptate at cumque hic deserunt, enim eum, tempore velit tempora.
    </Paragraph>
  ),
};
