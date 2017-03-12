import React, { Component } from 'react';
import { HelloScreen } from '@appContainers/auth';
import { AppContainer } from '@appContainers/app';
import { Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';

const RouterWithRedux = connect()(Router);
import { store } from './store/store';


export default class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="helloScreen" component={HelloScreen} title="HelloScreen" hideNavBar/>
          <Scene key="app" component={AppContainer} title="App" hideNavBar/>
        </RouterWithRedux>
      </Provider>
    );
  }
}
