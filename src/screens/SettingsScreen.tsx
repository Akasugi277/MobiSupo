// src/screens/SettingsScreen.tsx
import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import ShadowView from '../components/ShadowView';
import { ThemeContext } from '../components/ThemeContext';

export default function HomeScreen() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? '#000' : '#fff';

    return (
        <ShadowView style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
            <Text style={[styles.title, { color: textColor }]}>⚙️ 設定／プロフィール</Text>
            <Text style={{ color: textColor }}>— ここに設定・プロフィールを配置 —</Text>
        </ShadowView>
    );
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        margin: 16, // シャドーが見えるよう余白を確保
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        marginBottom: 12,
    },
});