import { BottomTabBar, BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../components/ThemeContext';
import CalendarScreen from '../screens/CalendarScreen';
import ErrorScreen from '../screens/ErrorScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function CustomTabBar(props: BottomTabBarProps) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <View style={styles.wrapper}>
            <BottomTabBar {...props} />
            <TouchableOpacity onPress={toggleTheme} style={styles.button}>
                <Text style={styles.buttonText}>
                    {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'ホーム' }} />
            <Tab.Screen name="Calendar" component={CalendarScreen} options={{ tabBarLabel: '予定一覧' }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: '設定／プロフィール' }} />
            <Tab.Screen name="Error" component={ErrorScreen} options={{ tabBarLabel: 'エラー' }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
    },
    button: {
        alignSelf: 'center',
        padding: 8,
        marginTop: 4,
    },
    buttonText: {
        fontSize: 14,
    },
});
