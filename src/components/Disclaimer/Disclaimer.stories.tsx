import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Disclaimer from './Disclaimer';
import { InfoCircle } from '../../icons';

const title = 'SimplenightUI/';

export default {
  title: `${title}Disclaimer`,
  component: Disclaimer,
} as ComponentMeta<typeof Disclaimer>;

const Template: ComponentStory<typeof Disclaimer> = (args) => (
  <Disclaimer {...args} />
);

export const Supplier = Template.bind({});
Supplier.args = {
  message:
    'Supplier Reference ID and Vendor Confirmation Number Can Be found below.',
  icon: <InfoCircle className="h-5" />,
};

export const Pay = Template.bind({});
Pay.args = {
  message: 'Pay at Property',
  icon: <InfoCircle className="h-5" />,
};
