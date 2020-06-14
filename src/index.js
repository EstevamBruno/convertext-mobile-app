import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import Main from './screens/Main';

const App = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <Main />
    </ScrollView>
  );
};

export default App;
