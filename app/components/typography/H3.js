import React from 'react'
import { Text,StyleSheet } from 'react-native'
import theme from '../../theme/theme'
export default function H3({style={},color=theme.palette.dark_text,children}) {
    return (
        <Text style={[styles.text,{color:color},style]}>
            {children}
        </Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize: theme.typography.size.h3,
        fontWeight:'bold',
    }
})
