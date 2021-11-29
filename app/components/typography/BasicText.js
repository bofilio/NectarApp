import React from 'react'
import { Text,StyleSheet } from 'react-native'
import theme from '../../theme/theme'
export default function BasicText({style={},color=theme.palette.dark_text,children}) {
    return (
        <Text style={[styles.text,{color:color},style]}>
            {children}
        </Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize: theme.typography.size.basic,
    }
})