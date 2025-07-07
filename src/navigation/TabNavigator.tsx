// src/navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CalendarScreen from '../screens/CalendarScreen';
import ErrorScreen from '../screens/ErrorScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#007aff',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        >
            <Tab.Screen name="Home"    component={HomeScreen}    options={{ tabBarLabel: 'ホーム' }} />
            <Tab.Screen name="Calendar"component={CalendarScreen}options={{ tabBarLabel: '予定一覧' }} />
            <Tab.Screen name="Settings"component={SettingsScreen}options={{ tabBarLabel: '設定' }} />
            <Tab.Screen name="Error"   component={ErrorScreen}   options={{ tabBarLabel: 'エラー画面' }} />
        </Tab.Navigator>
    );
}
