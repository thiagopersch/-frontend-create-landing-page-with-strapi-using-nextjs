import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          vel nam eum facere vero, possimus voluptatibus doloribus corrupti
          voluptates iure. Doloremque provident perspiciatis inventore at facere
          repellendus quis accusamus nostrum!
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: '' }
  }
};

export const Default = (args) => <SectionContainer {...args} />;
