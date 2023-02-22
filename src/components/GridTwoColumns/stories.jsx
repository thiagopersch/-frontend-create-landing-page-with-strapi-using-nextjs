import { GridTwoColums } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColums',
  component: GridTwoColums,
  args: mock,
  argTypes: {
    children: { type: 'string' }
  }
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColums {...args} />
    </div>
  );
};
