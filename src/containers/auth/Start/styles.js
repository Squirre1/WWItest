import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    flex: 2,
    width: 100,
    height: 120,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    width: 450,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 2,
    fontWeight: '600',
  },
  separatorBlock: {
    flex: 0.4,
  },
  separatorLine: {
    width: 60,
    height: 2,
    backgroundColor: 'white',
  },
  loginBlock: {
    flex: 1.5,
  },
  vkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vkTitle: {
    fontSize: 14,
    color: 'white',
  },
  vkLogoImg: {
    width: 20,
    height: 12,
    marginLeft: 8,
  },
  loginButton: {
    marginTop: 25,
    width: width / 1.7,
    height: 46,
  },
});

export default styles;
