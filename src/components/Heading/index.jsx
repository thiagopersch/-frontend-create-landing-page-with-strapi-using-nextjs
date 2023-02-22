import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  colorDark = false,
  as = 'h1',
  size = 'huge',
  textTransform = false
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      textTransform={textTransform}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  textTransform: P.bool
};
