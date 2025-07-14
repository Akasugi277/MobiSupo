// src/screens/HomeScreen.tsx
import React, { useContext } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ShadowView from '../components/ShadowView';
import { ThemeContext } from '../components/ThemeContext';

export default function HomeScreen() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? '#000' : '#fff';
    const bgColor = theme === 'light' ? '#fff' : '#333';

    return (
        <View style={[styles.screen, { backgroundColor: bgColor }]}>
        <ScrollView contentContainerStyle={styles.scroll}>

            {/* 現在地＋天気ヘッダー */}
            <ShadowView style={[styles.header, { backgroundColor: bgColor }]}>
            <Text style={[styles.headerText, { color: textColor }]}>
                📍 現在地：京都府下京区
            </Text>
            <Text style={[styles.headerText, { color: textColor }]}>
                ☀️ 29°C（くもりのち晴れ）
            </Text>
            </ShadowView>

            {/* 出発カウントダウン */}
            <ShadowView style={[styles.countdownBox, { backgroundColor: bgColor }]}>
            <Text style={[styles.countdownLabel, { color: textColor }]}>
                🕒 次の出発まで：
                <Text style={styles.countdownTime}>13分</Text>
            </Text>
            <TouchableOpacity style={styles.departButton}>
                <Text style={styles.departButtonText}>今すぐ出発</Text>
            </TouchableOpacity>
            </ShadowView>

            {/* 今日の予定 */}
            <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>
                📅 本日 6月16日（月）
                </Text>
            </View>

            <ShadowView style={[styles.itemBox, { backgroundColor: bgColor }]}>
                <Text style={[styles.itemTime, { color: textColor }]}>
                ▶︎ 08:30 会社ミーティング（京都駅）
                </Text>
                <Text style={[styles.itemDetail, { color: textColor }]}>
                └ 🚶 徒歩 → 🚃 電車（15分）
                </Text>
                <Text style={[styles.itemBadge, { color: textColor }]}>
                └ [あと 13分で出発] 🟡
                </Text>
            </ShadowView>

            <ShadowView style={[styles.itemBox, { backgroundColor: bgColor }]}>
                <Text style={[styles.itemTime, { color: textColor }]}>
                ▶︎ 12:00 ランチ会（烏丸御池）
                </Text>
                <Text style={[styles.itemDetail, { color: textColor }]}>
                └ 🚶 徒歩（7分）
                </Text>
                <Text style={[styles.itemBadge, { color: textColor }]}>
                └ [遅延あり：現在地に雨] 🔴
                </Text>
            </ShadowView>

            <ShadowView style={[styles.itemBox, { backgroundColor: bgColor }]}>
                <Text style={[styles.itemTime, { color: textColor }]}>
                ▶︎ 15:30 顧客訪問（梅田）
                </Text>
                <Text style={[styles.itemDetail, { color: textColor }]}>
                └ 🚃 電車＋徒歩（40分）
                </Text>
                <Text style={[styles.itemBadge, { color: textColor }]}>
                └ [出発まで 2時間] 🟢
                </Text>
            </ShadowView>
            </View>

            {/* 明日の予定 */}
            <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>
                📅 明日 6月17日（火）朝の予定
                </Text>
            </View>
            <ShadowView style={[styles.itemBox, { backgroundColor: bgColor }]}>
                <Text style={[styles.itemTime, { color: textColor }]}>
                ▶︎ 09:00 定例会議（オンライン）
                </Text>
                <Text style={[styles.itemDetail, { color: textColor }]}>
                └ 🏠 自宅
                </Text>
                <Text style={[styles.itemBadge, { color: textColor }]}>
                └ [通知予定：8:45] 🟢
                </Text>
            </ShadowView>
            </View>

            {/* サマリー */}
            <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>
                📊 サマリー
                </Text>
            </View>
            <ShadowView style={[styles.summaryBox, { backgroundColor: bgColor }]}>
                <Text style={[styles.summaryText, { color: textColor }]}>
                ✔️ 今日の予定：3件
                </Text>
                <Text style={[styles.summaryText, { color: textColor }]}>
                ✔️ リスケ提案：1件（ランチ会）
                </Text>
            </ShadowView>
            </View>

        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    scroll: {
        padding: 16,
        paddingBottom: Platform.OS === 'web' ? 80 : 100, // タブバー分の余白
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    headerText: {
        fontSize: 14,
    },
    countdownBox: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    countdownLabel: {
        fontSize: 16,
        marginBottom: 8,
    },
    countdownTime: {
        fontWeight: 'bold',
    },
    departButton: {
        backgroundColor: '#007aff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    departButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    section: {
        marginBottom: 16,
    },
    sectionHeader: {
        backgroundColor: '#000',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        marginBottom: 8,
    },
    sectionHeaderText: {
        color: '#fff',
        fontSize: 14,
    },
    itemBox: {
        padding: 10,
        borderRadius: 6,
        marginBottom: 8,
    },
    itemTime: {
        fontSize: 14,
        fontWeight: '500',
    },
    itemDetail: {
        fontSize: 13,
        marginLeft: 8,
    },
    itemBadge: {
        fontSize: 13,
        marginLeft: 8,
        marginTop: 4,
    },
    summaryBox: {
        padding: 10,
        borderRadius: 6,
    },
    summaryText: {
        fontSize: 14,
        marginBottom: 4,
    },
});
