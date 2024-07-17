import React, { useCallback, useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Onboarding from './screens/onboarding';
import * as SplashScreen from "expo-splash-screen"
import * as Fonts from '@expo-google-fonts/poppins';
import store from '@/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const insets = useSafeAreaInsets();
  const [appIsReady, setAppIsReady] = useState(false);
  const { useFonts, __metadata__, ...fonts } = Fonts;
  const [fontsLoaded, error] = Fonts.useFonts({ ...fonts });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <View
        style={[{ flex: 1, marginTop: -insets.top, marginBottom: -insets.bottom }]}
        onLayout={onLayoutRootView}
      >
        <StatusBar barStyle={"dark-content"} />
        <Onboarding />
      </View>
    </Provider>

  );
}
