// src/screens/HomeScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🏠 ホーム（ダッシュボード）</Text>
            <Text>— ここにダッシュボードのコンポーネントを配置 —</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex:1, alignItems:'center', justifyContent:'center', padding:16 },
    title: { fontSize:18, marginBottom:12 },
});