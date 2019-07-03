
import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style'
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/header/index'
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    )
  }
}

export default App;
