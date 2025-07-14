// App.tsx
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Platform } from 'react-native';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  const prevRouteName = useRef<string | undefined>(undefined);

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ navigationTheme, theme }) => (
          <NavigationContainer
            theme={navigationTheme}
            onStateChange={(state?: NavigationState) => {
              if (!state) return;
              const current = state.routeNames[state.index];
              const prev = prevRouteName.current;
              if (prev !== current) {
                console.log(`LOG  📝 タブ切り替え: ${prev ?? 'none'} → ${current} (${Platform.OS})`);
                prevRouteName.current = current;
              }
            }}
          >
            <TabNavigator />
          </NavigationContainer>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
