import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from './routes';

console.tron.log('Testando o reactotron');

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}
