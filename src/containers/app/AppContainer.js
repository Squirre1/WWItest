import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { AuthSelector } from '@selectors/auth';
import styles from './styles';

class AppContainer extends Component {

  render() {
    return (
      <View style={styles.Screen}>
        <Text>SUCCESS</Text>
        <Text>{this.props.auth.token}</Text>
      </View>
    );
  }
}

AppContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(AuthSelector)(AppContainer);
