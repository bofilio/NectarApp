import React from 'react'
import { View,TextInput,Pressable,StyleSheet } from 'react-native'
import theme from '../../theme/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function SearchInput({searchtext,setSearchtext}) {
    return (
        
        <View style={styles.searchInputWraper}>
            <Icon name="search" size={20} color={theme.palette.dark_text} />
            <TextInput style={styles.searchInput} placeholder="Search Store"
                value={searchtext} onChangeText={text => setSearchtext(text)} />
            {
                searchtext ?
                    <Pressable style={{ position: "absolute", right: 16 }} onPress={() => setSearchtext("")}>
                        <Icon name="close" size={16} color={theme.palette.gray_text} />
                    </Pressable>

                    :
                    <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchInputWraper: {
        marginTop: 20,
        alignItems: 'center',
        padding: 15,
        borderRadius: 19,
        backgroundColor: theme.background.grey,
        width: '100%',
        flexDirection: 'row',
    },
    searchInput: {
        paddingLeft: 16,
        fontSize: theme.typography.size.basic
    }
})
