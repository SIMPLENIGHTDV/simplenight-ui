import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';

import Button, { IButton } from './Button';
import { ChevronUp } from '@/icons';
import { Heading } from '@/components';

export default {
  title: `${titles.components}Button`,
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'outlined', 'danger'],
      control: { type: 'inline-radio' },
    },
    height: {
      description: 'Available options: `"large"`, `"small"`',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const AllButtons = Template.bind({});
export const JustText = Template.bind({});
export const JustIcon = Template.bind({});
export const TextAndIcon = Template.bind({});

JustText.args = {
  children: 'Button',
};

JustIcon.args = {
  icon: <ChevronUp />,
};

TextAndIcon.args = {
  /* width: 'w-24', */
  children: 'Button',
  icon: <ChevronUp />,
};

AllButtons.decorators = [
  () => (
    <div className="space-y-4">
      <Heading tag="h4">Primary Button / Large</Heading>

      <div className="grid grid-cols-1 md:grid-cols-9 justify-items-center gap-2">
        <JustText {...(JustText.args as IButton)} />
        <TextAndIcon {...(TextAndIcon.args as IButton)} />
        <JustText {...(JustText.args as IButton)} type="outlined" />
        <TextAndIcon {...(TextAndIcon.args as IButton)} type="outlined" />
        <JustText {...(JustText.args as IButton)} type="danger" />
        <TextAndIcon {...(TextAndIcon.args as IButton)} type="danger" />
        <JustIcon {...(JustIcon.args as IButton)} />
        <JustIcon {...(JustIcon.args as IButton)} type="outlined" />
        <JustIcon {...(JustIcon.args as IButton)} type="no-background" />

        <JustText {...(JustText.args as IButton)} disabled />
        <TextAndIcon {...(TextAndIcon.args as IButton)} disabled />
        <JustText {...(JustText.args as IButton)} type="outlined" disabled />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="outlined"
          disabled
        />
        <JustText {...(JustText.args as IButton)} type="danger" disabled />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="danger"
          disabled
        />
        <JustIcon {...(JustIcon.args as IButton)} disabled />
        <JustIcon {...(JustIcon.args as IButton)} type="outlined" disabled />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="no-background"
          disabled
        />

        <JustText {...(JustText.args as IButton)} loading />
        <TextAndIcon {...(TextAndIcon.args as IButton)} loading />
        <JustText {...(JustText.args as IButton)} type="outlined" loading />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="outlined"
          loading
        />
        <JustText {...(JustText.args as IButton)} type="danger" loading />
        <TextAndIcon {...(TextAndIcon.args as IButton)} type="danger" loading />
        <JustIcon {...(JustIcon.args as IButton)} loading />
        <JustIcon {...(JustIcon.args as IButton)} type="outlined" loading />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="no-background"
          loading
        />
      </div>
      <Heading tag="h4">Primary Button / Small</Heading>
      <div className="grid grid-cols-1 md:grid-cols-9 justify-items-center gap-2 mt-2">
        <JustText {...(JustText.args as IButton)} size="small" />
        <TextAndIcon {...(TextAndIcon.args as IButton)} size="small" />
        <JustText
          {...(JustText.args as IButton)}
          type="outlined"
          size="small"
        />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="outlined"
          size="small"
        />
        <JustText {...(JustText.args as IButton)} type="danger" size="small" />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="danger"
          size="small"
        />
        <JustIcon {...(JustIcon.args as IButton)} size="small" />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="outlined"
          size="small"
        />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="no-background"
          size="small"
        />

        <JustText {...(JustText.args as IButton)} disabled size="small" />
        <TextAndIcon {...(TextAndIcon.args as IButton)} disabled size="small" />
        <JustText
          {...(JustText.args as IButton)}
          type="outlined"
          disabled
          size="small"
        />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="outlined"
          disabled
          size="small"
        />
        <JustText
          {...(JustText.args as IButton)}
          type="danger"
          disabled
          size="small"
        />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="danger"
          disabled
          size="small"
        />
        <JustIcon {...(JustIcon.args as IButton)} disabled size="small" />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="outlined"
          disabled
          size="small"
        />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="no-background"
          disabled
          size="small"
        />

        <JustText {...(JustText.args as IButton)} loading size="small" />
        <TextAndIcon {...(TextAndIcon.args as IButton)} loading size="small" />
        <JustText
          {...(JustText.args as IButton)}
          type="outlined"
          loading
          size="small"
        />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="outlined"
          loading
          size="small"
        />
        <JustText
          {...(JustText.args as IButton)}
          type="danger"
          loading
          size="small"
        />
        <TextAndIcon
          {...(TextAndIcon.args as IButton)}
          type="danger"
          loading
          size="small"
        />
        <JustIcon {...(JustIcon.args as IButton)} loading size="small" />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="outlined"
          loading
          size="small"
        />
        <JustIcon
          {...(JustIcon.args as IButton)}
          type="no-background"
          loading
          size="small"
        />
      </div>
    </div>
  ),
];
