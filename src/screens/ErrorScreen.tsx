// src/screens/ErrorScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🚫 エラー＆オフライン画面</Text>
            <Text>— ここにエラー時のフォールバックUIを配置 —</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex:1, alignItems:'center', justifyContent:'center', padding:16 },
    title: { fontSize:18, marginBottom:12 },
});