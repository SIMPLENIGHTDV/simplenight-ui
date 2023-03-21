import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { titles } from '@/constants';
import Tag from './Tag';
import { Exclamation, InfoCircle, Checkmark } from '@/icons';
import { Paragraph } from '@/index';

export default {
  title: `${titles.components}Tag`,
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const FreeCancellation = Template.bind({});
export const FreeCancellationExtended = Template.bind({});
export const CheckOut = Template.bind({});
export const CheckOutTwoLines = Template.bind({});
export const PriceInformation = Template.bind({});
export const PriceWarning = Template.bind({});
export const PayAtProperty = Template.bind({});
export const NonRefundable = Template.bind({});

FreeCancellation.args = {
  color: 'green',
  children: (
    <>
      <Tag.Icon>
        <Checkmark className="text-green-1000" />
      </Tag.Icon>
      <Tag.Body>
        <Paragraph fontWeight="semibold" textColor="text-green-1000">
          Free Cancellation
        </Paragraph>
      </Tag.Body>
    </>
  ),
};
FreeCancellationExtended.args = {
  color: 'green',
  children: (
    <>
      <Tag.Icon>
        <Checkmark className="text-green-1000" />
      </Tag.Icon>
      <Tag.Body>
        <Paragraph fontWeight="semibold" textColor="text-green-1000">
          Free Cancellation Until Feb 24 2022 11:59 PM EST (00:59 AM GMT-3). A
          $20 Fee Will Apply Thereafter.
        </Paragraph>
      </Tag.Body>
    </>
  ),
};
CheckOut.args = {
  color: 'green',
  children: (
    <>
      <Tag.Icon>
        <Checkmark className="text-green-1000" />
      </Tag.Icon>
      <Tag.Body>
        <Paragraph textColor="text-green-1000">
          Check Out Now to avoid rate changes!
        </Paragraph>
      </Tag.Body>
    </>
  ),
};
CheckOutTwoLines.args = {
  color: 'green',
  children: (
    <>
      <Tag.Icon>
        <Checkmark className="text-green-1000" />
      </Tag.Icon>
      <Tag.Body>
        <Paragraph fontWeight="semibold" textColor="text-green-1000">
          Check Out Now!
        </Paragraph>
        <Paragraph textColor="text-green-1000">
          Rates are increasing soon.
        </Paragraph>
      </Tag.Body>
    </>
  ),
};
PriceInformation.args = {
  color: 'white',
  children: (
    <>
      <Tag.Icon>
        <InfoCircle className="text-primary-1000" />
      </Tag.Icon>
      <Tag.Body>
        <Paragraph fontWeight="semibold">
          Average Daily Price does not include taxes and fees.
        </Paragraph>
      </Tag.Body>
    </>
  ),
};
PriceWarning.args = {
  color: 'warning',
  children: (
    <>
      <Tag.Icon>
        <Exclamation className="text-warning-600" />
      </Tag.Icon>
      <Tag.Body>
        <Paragraph fontWeight="semibold">
          Average Daily Price does not include taxes and fees.
        </Paragraph>
      </Tag.Body>
    </>
  ),
};
PayAtProperty.args = {
  color: 'white',
  children: (
    <>
      <Tag.Icon>
        <InfoCircle className="text-primary-1000" />
      </Tag.Icon>
      <Tag.Body>
        <Paragraph fontWeight="semibold">Pay At Property</Paragraph>
      </Tag.Body>
    </>
  ),
};
NonRefundable.args = {
  color: 'dark',
  children: (
    <Tag.Body>
      <Paragraph fontWeight="semibold">Non-Refundable</Paragraph>
    </Tag.Body>
  ),
};
