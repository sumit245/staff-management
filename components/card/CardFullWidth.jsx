import React from 'react'
import { View } from 'react-native'
import { spacing, styles } from '../../styles'

export default function CardFullWidth({ backgroundColor, children }) {
    return (
        <View
            style={[spacing.m2, spacing.p3, spacing.br2, { ...styles.cardFullWidth, backgroundColor }]}>
            {children}
        </View>
    )
}