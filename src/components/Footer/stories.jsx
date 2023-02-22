import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://github.com/thiagopersch">Feito com ❤ por Tiago Persch</a></p>`
  }
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
