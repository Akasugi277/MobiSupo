// src/screens/SettingsScreen.tsx
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

export default function SettingsScreen() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? '#000' : '#fff';
    const bgColor = theme === 'light' ? '#fff' : '#333';

    // ダミーデータ
    const user = {
        name: 'Kanamu Kato',
        email: 'kanamu@example.com',
        icloud: { linked: true, address: 'kanamu@icloud.com' },
        googleLinked: false,
    };

    return (
        <ScrollView
        style={[styles.screen, { backgroundColor: bgColor }]}
        contentContainerStyle={styles.container}
        >
        {/* ■ プロフィールセクション */}
        <ShadowView style={[styles.section, { backgroundColor: bgColor }]}>
            <View style={styles.avatarRow}>
            {/* 丸い枠だけのプレースホルダ */}
            <View style={[styles.avatarPlaceholder, { backgroundColor: '#888' }]} />
            <TouchableOpacity style={styles.avatarChange}>
                <Text style={{ color: textColor }}>変更</Text>
            </TouchableOpacity>
            </View>
            <Text style={[styles.label, { color: textColor }]}>
            👤 ユーザー名：{user.name}
            </Text>
            <Text style={[styles.label, { color: textColor }]}>
            ✉️ メール：{user.email}
            </Text>
            <TouchableOpacity style={styles.buttonRow}>
            <Text style={[styles.buttonText, { color: textColor }]}>
                ▶ プロフィール情報を編集
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
            <Text style={[styles.buttonText, { color: textColor }]}>
                ▶ パスワードを変更
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
            <Text style={[styles.buttonText, { color: textColor }]}>
                ▶ ログアウト
            </Text>
            </TouchableOpacity>
        </ShadowView>

        {/* ■ カレンダー連携セクション */}
        <Text style={[styles.sectionTitle, { color: textColor }]}>
            ■ カレンダー連携
        </Text>
        <ShadowView style={[styles.section, { backgroundColor: bgColor }]}>
            <View style={styles.linkRow}>
            <Text style={{ color: textColor }}>
                {user.icloud.linked ? '✔️' : '❌'} iCloudカレンダー：
                {user.icloud.linked ? '連携済み' : '未連携'}
            </Text>
            {user.icloud.linked && (
                <Text style={[styles.linkSub, { color: textColor }]}>
                {user.icloud.address}
                </Text>
            )}
            <TouchableOpacity style={styles.linkButton}>
                <Text style={{ color: textColor }}>
                {user.icloud.linked ? '連携を解除' : '連携する'}
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.linkRow}>
            <Text style={{ color: textColor }}>
                {user.googleLinked ? '✔️' : '❌'} Googleカレンダー：
                {user.googleLinked ? '連携済み' : '未連携'}
            </Text>
            <TouchableOpacity style={styles.linkButton}>
                <Text style={{ color: textColor }}>
                {user.googleLinked ? '連携を解除' : '連携する'}
                </Text>
            </TouchableOpacity>
            </View>
        </ShadowView>

        {/* ■ API キー管理セクション */}
        <Text style={[styles.sectionTitle, { color: textColor }]}>
            ■ API キー管理
        </Text>
        <ShadowView style={[styles.section, { backgroundColor: bgColor }]}>
            {['Google Maps', 'OpenWeatherMap', '国交省／Google Transit'].map((api) => (
            <TouchableOpacity key={api} style={styles.buttonRow}>
                <Text style={[styles.buttonText, { color: textColor }]}>
                ▶ {api} API キー確認/再発行
                </Text>
            </TouchableOpacity>
            ))}
        </ShadowView>

        {/* ■ 通知設定セクション */}
        <Text style={[styles.sectionTitle, { color: textColor }]}>
            ■ 通知設定
        </Text>
        <ShadowView style={[styles.section, { backgroundColor: bgColor }]}>
            {[
            { label: '出発タイミング通知', enabled: true },
            { label: '遅延時のみ通知', enabled: false },
            { label: '天候変化時に通知', enabled: false },
            ].map((item) => (
            <View key={item.label} style={styles.toggleRow}>
                <Text style={{ color: textColor }}>
                {item.enabled ? '✔️' : '❌'} {item.label}
                </Text>
            </View>
            ))}
            <TouchableOpacity style={styles.buttonRow}>
            <Text style={[styles.buttonText, { color: textColor }]}>
                ▶ 通知音を変更
            </Text>
            </TouchableOpacity>
        </ShadowView>

        {/* ■ アプリ情報セクション */}
        <Text style={[styles.sectionTitle, { color: textColor }]}>
            ■ アプリ情報
        </Text>
        <ShadowView style={[styles.section, { backgroundColor: bgColor }]}>
            <Text style={{ color: textColor }}>バージョン：1.2.0</Text>
            <Text style={{ color: textColor }}>最終更新日：2025/06/10</Text>
            <TouchableOpacity style={styles.buttonRow}>
            <Text style={[styles.buttonText, { color: textColor }]}>
                ▶ サポートに問い合わせる
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRow}>
            <Text style={[styles.buttonText, { color: textColor }]}>
                ▶ 利用規約 / プライバシーポリシー
            </Text>
            </TouchableOpacity>
        </ShadowView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        padding: 16,
        paddingBottom: Platform.OS === 'web' ? 80 : 100,
    },
    section: {
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    avatarRow: {
        alignItems: 'center',
        marginBottom: 12,
    },
    avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    avatarChange: {
        marginTop: 4,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
    },
    buttonRow: {
        paddingVertical: 8,
    },
    buttonText: {
        fontSize: 14,
    },
    linkRow: {
        marginBottom: 12,
    },
    linkSub: {
        marginLeft: 16,
        fontSize: 12,
    },
    linkButton: {
        marginTop: 4,
    },
    toggleRow: {
        paddingVertical: 6,
    },
});
