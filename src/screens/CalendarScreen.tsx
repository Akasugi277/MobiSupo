// src/screens/CalendarScreen.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📅 予定一覧（カレンダー）</Text>
            <Text>— ここにカレンダービューを配置 —</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex:1, alignItems:'center', justifyContent:'center', padding:16 },
    title: { fontSize:18, marginBottom:12 },
});