import React, { ReactNode } from 'react';
import { Platform, StyleSheet, View, ViewProps } from 'react-native';

interface ShadowViewProps extends ViewProps {
    children: ReactNode;
}

export default function ShadowView({ children, style, ...rest }: ShadowViewProps) {
    return (
        <View style={[styles.shadow, style]} {...rest}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
        },
        android: {
            elevation: 4,
        },
        web: {
            // React Native Web では boxShadow
            boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
        },
    }),
});
