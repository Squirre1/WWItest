import React, { Component, PropTypes } from 'react';
import { View, Image, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import VKLogin from 'react-native-vkontakte-login';

import { AuthSelector } from '@selectors/auth';
import login from '@actions/auth';
import styles from './styles';

class HelloScreen extends Component {

  componentDidMount() {
    VKLogin.initialize(5919243);
  }

  render() {
    return (
      <View style={styles.Screen}>
        <Image
          style={styles.background}
          source={require('@appImages/background.png')}
        >
          <Image
            style={styles.logoImg}
            source={require('@appImages/logotype.png')}
          />

          <Text style={styles.title}>{`НАЗВАНИЕ \n ПРИЛОЖЕНИЯ`}</Text>
          <View style={styles.separatorBlock}>
            <View style={styles.separatorLine} />
          </View>

          <View style={styles.loginBlock}>
            <View style={styles.vkRow}>
              <Text style={styles.vkTitle}>Войти с помощью</Text>
              <Image
                style={styles.vkLogoImg}
                source={require('@appImages/vk-logotype.png')}
              />
            </View>
            <Button
              large
              raised
              title='ВОЙТИ'
              color="#f5718c"
              fontWeight="900"
              borderRadius={50}
              backgroundColor="white"
              buttonStyle={styles.loginButton}
              onPress={this.props.login}
            />
          </View>

        </Image>
      </View>
    );
  }
}

HelloScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
  }, dispatch);
}

export default connect(AuthSelector, mapDispatchToProps)(HelloScreen);
