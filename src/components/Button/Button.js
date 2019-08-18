import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, ButtonText } from './Button_Styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? <ActivityIndicator size="small" color="#fff" /> : <ButtonText>{children}</ButtonText>}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
