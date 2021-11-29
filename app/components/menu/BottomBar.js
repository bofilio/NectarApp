import React, { useState } from 'react'
import { View, StyleSheet, Text, Pressable, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../../theme/theme'

export default function BottomBar() {
    
    return (
        <View style={styles.bottomBar}>

            <Pressable style={{ alignItems: 'center' }}>
                <Icon name="shopping-outline" size={25} color={theme.palette.primary} />
                <Text style={[styles.menuText, { color: theme.palette.primary }]}>Shop</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', marginLeft: 16 }}>
                <Icon name="text-search" size={25} color={theme.palette.dark_text} />
                <Text style={[styles.menuText, { color: theme.palette.dark_text }]}>Explore</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', marginLeft: 16 }}>
                <Icon name="cart-outline" size={25} color={theme.palette.dark_text} />
                <Text style={[styles.menuText, { color: theme.palette.dark_text }]}>Cart</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', marginLeft: 16 }}>
                <Icon name="heart-outline" size={25} color={theme.palette.dark_text} />
                <Text style={[styles.menuText, { color: theme.palette.dark_text }]}>Favorite</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', marginLeft: 16 }}>
                <Icon name="account-outline" size={25} color={theme.palette.dark_text} />
                <Text style={[styles.menuText, { color: theme.palette.dark_text }]}>Account</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        height: 90,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "space-between",
        paddingHorizontal: 25,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: theme.palette.gray_border,
        elevation: 4,

    },
    menuText: {
        fontSize: theme.typography.size.xs,
        fontWeight: 'bold',

    },
})