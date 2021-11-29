import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import theme from '../../theme/theme'

export default function SectionHeader({title,seemore_text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.seemore}>{seemore_text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
         flexDirection:'row', 
         justifyContent:'space-between', 
         alignItems:'center',
         marginBottom:20,
    },
    title:{
        fontWeight:'bold',
        fontSize:theme.typography.size.xxl,
        color:theme.palette.dark_text,
    },
    seemore:{
        fontWeight:'bold',
        fontSize:theme.typography.size.basic,
        color:theme.palette.primary,
    }
})