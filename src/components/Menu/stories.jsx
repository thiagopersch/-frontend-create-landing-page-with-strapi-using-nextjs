import { Menu } from '.';

import linkMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linkMock,
    logoData: {
      text: 'logo',
      link: '#target',
      srcImg: ''
    }
  }
};

export const Default = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
