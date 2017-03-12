import { AppRegistry } from 'react-native';
import Root from './src/root.js';

// @todo remove when RN upstream is fixed
console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

AppRegistry.registerComponent('WWItest', () => Root);
