import React, { useEffect } from 'react';
import { NativeModules, Platform } from 'react-native'
// import { changeNavigationBarColor } from 'react-native-navigation-bar-color';

import Root from './src/routing/Routing';
import colors from './src/config/colors';

const { NavigationBarColor } = NativeModules

const App = () => {
  const changeNavigationBarColor = (
    color = colors.background,
    light = false,
    animated = true,
  ) => {
    if (Platform.OS === 'android') {
      const LightNav = light ? true : false;
      NavigationBarColor.changeNavigationBarColor(color, LightNav, animated);
    }
  };

  useEffect(() => {
    changeNavigationBarColor()
  }, [])

  return (
    <Root />
  );
};


export default App;
