import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import {Container, TxtInput} from './styles';

function TextArea({style, ...rest}, ref) {
  return (
    <Container 
      style={style}
      multiline={true} 
      ref={ref} 
      {...rest} 
    />
  );
}

TextArea.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

TextArea.defaultProps = {
  style: {},
};

export default forwardRef(TextArea);
