import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Container from './containers/Container';

const AppWrapper = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
