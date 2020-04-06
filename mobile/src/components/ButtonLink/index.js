import React from 'react';
import PropTypes from 'prop-types';

import {Container, LinkIcon, LinkText, Filter} from './styles';

export default function ButtonLink({ children, icon, text, active, handlePress, ...rest}) {

  function handleOnPress() {
    if(active) {
      handlePress();
    }
  }
  return (
    <Container {...rest} onPress={handleOnPress}>
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
      <Filter active={active}/>
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
  text: PropTypes.shape({
    width: PropTypes.number,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
    color: PropTypes.string,
  }),
  active: PropTypes.bool,
  handlePress: PropTypes.func,
};

ButtonLink.defaultProps = {
  icon: null,
  text: '',
  active: true,
  handlePress: () => [],
}
