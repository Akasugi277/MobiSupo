// App.tsx
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Platform } from 'react-native';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  // 前回のルート名を覚えておくための ref
  const prevRouteName = useRef<string | undefined>(undefined);

  // Platform.OS: 'ios' | 'android' | 'web'
  const getEnvLabel = () => {
    switch (Platform.OS) {
      case 'ios':
        return 'iOS';
      case 'android':
        return 'Android';
      case 'web':
        return 'Browser';
      default:
        return Platform.OS;
    }
  };

  return (
    <NavigationContainer
      onStateChange={(state?: NavigationState) => {
        if (!state) return;

        const currentRouteName = state.routeNames[state.index];
        const prev = prevRouteName.current;
        if (prev !== currentRouteName) {
          console.log(
            `LOG  📝 タブ切り替え: ${prev ?? 'none'} → ${currentRouteName} (${getEnvLabel()})`
          );
          prevRouteName.current = currentRouteName;
        }
      }}
    >
      <TabNavigator />
    </NavigationContainer>
  );
}