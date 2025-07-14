// src/screens/CalendarScreen.tsx
import React, { useContext, useState } from 'react';
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

type ViewMode = 'day' | 'week' | 'month';

export default function CalendarScreen() {
    const { theme } = useContext(ThemeContext);
    const bgColor = theme === 'light' ? '#fff' : '#333';
    const textColor = theme === 'light' ? '#000' : '#fff';

    const [mode, setMode] = useState<ViewMode>('week');

    return (
        <View style={[styles.screen, { backgroundColor: bgColor }]}>
        {/* セグメントコントロール */}
        <View style={styles.segmentContainer}>
            {(['day', 'week', 'month'] as ViewMode[]).map((m) => (
            <TouchableOpacity
                key={m}
                onPress={() => setMode(m)}
                style={[
                styles.segmentButton,
                mode === m && { backgroundColor: '#007aff' },
                ]}
            >
                <Text
                style={[
                    styles.segmentText,
                    { color: mode === m ? '#fff' : textColor },
                ]}
                >
                {m === 'day' ? '日毎' : m === 'week' ? '週間' : '月間'}
                </Text>
            </TouchableOpacity>
            ))}
        </View>

        {/* 各ビュー */}
        <ScrollView contentContainerStyle={styles.content}>
            {mode === 'day' && <DayView textColor={textColor} bgColor={bgColor} />}
            {mode === 'week' && <WeekView textColor={textColor} bgColor={bgColor} />}
            {mode === 'month' && <MonthView textColor={textColor} bgColor={bgColor} />}
        </ScrollView>
        </View>
    );
}

// --- 各ビューコンポーネント（ワイヤーフレーム） ---

function DayView({ textColor, bgColor }: { textColor: string; bgColor: string }) {
    return (
        <>
        <ShadowView style={[styles.sectionHeader, { backgroundColor: '#000' }]}>
            <Text style={[styles.sectionHeaderText]}>2025年6月16日（日）</Text>
        </ShadowView>
        <ShadowView style={[styles.itemBox, { backgroundColor: bgColor }]}>
            <Text style={{ color: textColor }}>▶︎ 08:00 予定A</Text>
            <Text style={{ color: textColor }}>▶︎ 12:00 予定B</Text>
            <Text style={{ color: textColor }}>▶︎ 15:00 予定C</Text>
        </ShadowView>
        </>
    );
}

function WeekView({ textColor, bgColor }: { textColor: string; bgColor: string }) {
    return (
        <>
        <ShadowView style={[styles.sectionHeader, { backgroundColor: '#000' }]}>
            <Text style={styles.sectionHeaderText}>2025年6月15日～21日</Text>
        </ShadowView>
        {['15(日)', '16(月)', '17(火)', '18(水)', '19(木)', '20(金)', '21(土)'].map((d) => (
            <ShadowView key={d} style={[styles.weekRow, { backgroundColor: bgColor }]}>
                <Text style={{ color: textColor, width: 60 }}>{d}</Text>
                <Text style={{ color: textColor }}>●●:●● □□□</Text>
            </ShadowView>
        ))}
        </>
    );
}

function MonthView({ textColor, bgColor }: { textColor: string; bgColor: string }) {
    // ワイヤー用に1行だけ例示
    return (
        <>
        <ShadowView style={[styles.sectionHeader, { backgroundColor: '#000' }]}>
            <Text style={styles.sectionHeaderText}>2025年6月</Text>
        </ShadowView>
        <View style={styles.monthGrid}>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
            <View key={day} style={[styles.monthCell, { backgroundColor: bgColor }]}>
                <Text style={{ color: textColor }}>{day}</Text>
                {/* 予定数のドット例 */}
                {day % 3 === 0 && <Text style={{ color: textColor }}>●</Text>}
            </View>
            ))}
        </View>
        </>
    );
}

// --- スタイル ---

const styles = StyleSheet.create({
    screen: { flex: 1 },
    segmentContainer: {
        flexDirection: 'row',
        margin: 16,
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    segmentButton: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
    },
    segmentText: { fontSize: 14 },
    content: {
        paddingHorizontal: 16,
        paddingBottom: Platform.OS === 'web' ? 80 : 100,
    },

    sectionHeader: {
        padding: 8,
        borderRadius: 4,
        marginBottom: 8,
    },
    sectionHeaderText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    itemBox: {
        padding: 12,
        borderRadius: 6,
        marginBottom: 12,
    },

    weekRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 6,
        marginBottom: 6,
    },

    monthGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    monthCell: {
        width: '14.28%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#888',
    },
});
