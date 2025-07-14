// src/screens/ErrorScreen.tsx
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

export default function ErrorScreen({
    navigation,
}: {
    navigation?: any;
}) {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'light' ? '#000' : '#fff';
    const bgColor = theme === 'light' ? '#fff' : '#333';

    // エラーメッセージはワイヤーどおり固定表示
    return (
        <ScrollView
        style={[styles.screen, { backgroundColor: bgColor }]}
        contentContainerStyle={styles.container}
        >
        <ShadowView style={[styles.section, { backgroundColor: bgColor }]}>
            <Text style={[styles.header, { color: textColor }]}>
            🚫 エラーが発生しました
            </Text>

            <View style={styles.block}>
            <Text style={[styles.errorText, { color: textColor }]}>
                ❌ ユーザー登録に失敗しました  
                または  
                ❌ ログイン情報を確認できませんでした
            </Text>
            </View>

            <View style={styles.block}>
            <Text style={[styles.subHeader, { color: textColor }]}>原因：</Text>
            <Text style={[styles.bullet, { color: textColor }]}>
                ・インターネット接続が不安定な可能性があります
            </Text>
            <Text style={[styles.bullet, { color: textColor }]}>
                ・サーバーが一時的に応答していない可能性があります
            </Text>
            <Text style={[styles.bullet, { color: textColor }]}>
                ・入力情報に誤りがある可能性があります
            </Text>
            </View>

            <View style={styles.block}>
            <Text style={[styles.infoText, { color: textColor }]}>
                認証サーバーに接続できませんでした。  
                現在、<Text style={styles.bold}>静的通知モード</Text>で動作しています  
                （機能が一部制限されます）
            </Text>
            </View>

            {/* ボタン群 */}
            <View style={styles.buttons}>
            <TouchableOpacity
                style={[styles.button, { borderColor: textColor }]}
                onPress={() => navigation?.replace('Home')}
            >
                <Text style={[styles.buttonText, { color: textColor }]}>
                🔁 もう一度試す
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { borderColor: textColor }]}
                onPress={() => navigation?.navigate('Settings')}
            >
                <Text style={[styles.buttonText, { color: textColor }]}>
                🛠️ 設定を確認する
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { borderColor: textColor }]}
                onPress={() => navigation?.navigate('Home', { guest: true })}
            >
                <Text style={[styles.buttonText, { color: textColor }]}>
                🏠 ホームへ戻る（ゲストモード）
                </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.block}>
            <Text style={[styles.footerText, { color: textColor }]}>
                💬 引き続き問題が発生する場合は
            </Text>
            <TouchableOpacity onPress={() => navigation?.navigate('Support')}>
                <Text style={[styles.linkText, { color: textColor }]}>
                ▶ サポートに問い合わせる
                </Text>
            </TouchableOpacity>
            </View>
        </ShadowView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1 },
    container: {
        padding: 16,
        paddingBottom: Platform.OS === 'web' ? 80 : 100,
    },
    section: {
        borderRadius: 8,
        padding: 16,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    block: {
        marginBottom: 16,
    },
    errorText: {
        fontSize: 16,
        lineHeight: 22,
    },
    subHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    bullet: {
        fontSize: 14,
        marginLeft: 8,
        lineHeight: 20,
    },
    infoText: {
        fontSize: 14,
        lineHeight: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    buttons: {
        marginBottom: 16,
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
    },
    footerText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 4,
    },
    linkText: {
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});
