import React from 'react';
import PropTypes from 'prop-types';

import {Container, LinkIcon, LinkText} from './styles';

export default function ButtonLink({ children, icon, text, ...rest}) {
  return (
    <Container {...rest}>
      {icon && (
        <LinkIcon name={icon.name} size={icon.size} color={icon.color} />
      )}      
      <LinkText style={
          {
            width: text.width, 
            fontSize: text.fontSize, 
            fontWeight: text.fontWeight, 
            color: text.color 
          }
        }
      >{children}</LinkText>
    </Container>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
  }),
};

ButtonLink.defaultProps = {
  icon: null,
}
