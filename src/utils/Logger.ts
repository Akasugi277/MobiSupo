// src/utils/Logger.ts
import * as FileSystem from 'expo-file-system';

const LOG_FILE = FileSystem.documentDirectory + 'navigation.log';

/**
 * メッセージをタイムスタンプ付きでファイルに追記します
 */
export async function log(message: string) {
    const time = new Date().toISOString();
    const line = `${time} ${message}\n`;
    try {
        // ファイルがなければ作成、あれば追記
        await FileSystem.writeAsStringAsync(LOG_FILE, line, {
        encoding: FileSystem.EncodingType.UTF8,
        append: true,
        });
    } catch (e) {
        console.error('Logging failed', e);
    }
}
