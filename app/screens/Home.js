import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TextInput, Pressable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchInput from '../components/inputs/SearchInput'
import BottomBar from '../components/menu/BottomBar'
import SectionHeader from '../components/util/HeaderAndSeeAll'
import theme from '../theme/theme'
export default function Home() {
    const [searchtext, setSearchtext] = useState("")

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/icons/redcarrot.png")} />
                <View style={styles.adressWraper}>
                    <Icon name="crosshairs-gps" size={25} color={theme.palette.dark_text} />
                    <Text style={styles.adressText}>Dhaka, Banassre</Text>
                </View>
                <SearchInput searchtext={searchtext} setSearchtext={setSearchtext} />
                <View style={{width:'100%', marginTop:20}}>
                    <SectionHeader title='Groceries' seemore_text="see all"/>
                    <ScrollView horizontal style={{width:'100%', flexDirection:'row', flexWrap:'nowrap',}}>
                        <Pressable style={{width:200, height:100, padding:16, backgroundColor:"rgba(248, 164, 76, 0.15)",borderRadius:19, flexDirection:'row', alignItems:'center'}}>
                            <Image style={{width:64, height:64}} source={require('../assets/category.png')} />
                            <Text style={{color:theme.palette.gray_text, fontSize:theme.typography.size.lg, fontWeight:'bold', marginLeft:16}}>Pulses</Text>
                        </Pressable>
                        <Pressable style={{width:200, height:100, padding:16, backgroundColor:"rgba(83, 177, 117, 0.15)",borderRadius:19, flexDirection:'row', alignItems:'center', marginLeft:16}}>
                            <Image style={{width:64, height:64}} source={require('../assets/category.png')} />
                            <Text style={{color:theme.palette.gray_text, fontSize:theme.typography.size.lg, fontWeight:'bold', marginLeft:16}}>Pulses</Text>
                        </Pressable>
                        <Pressable style={{width:200, height:100, padding:16, backgroundColor:"rgba(247, 165, 147, 0.15)",borderRadius:19, flexDirection:'row', alignItems:'center', marginLeft:16}}>
                            <Image style={{width:64, height:64}} source={require('../assets/category.png')} />
                            <Text style={{color:theme.palette.gray_text, fontSize:theme.typography.size.lg, fontWeight:'bold', marginLeft:16}}>Pulses</Text>
                        </Pressable>
                        <Pressable style={{width:200, height:100, padding:16, backgroundColor:"rgba(248, 164, 76, 0.15)",borderRadius:19, flexDirection:'row', alignItems:'center', marginLeft:16}}>
                            <Image style={{width:64, height:64}} source={require('../assets/category.png')} />
                            <Text style={{color:theme.palette.gray_text, fontSize:theme.typography.size.lg, fontWeight:'bold', marginLeft:16}}>Pulses</Text>
                        </Pressable>
                    </ScrollView>
                </View>

            </View>
            {/**bottom bar */}
            <BottomBar/>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        alignItems: 'center',
        backgroundColor: 'white'
    },
   
    logo: {
        height: 32,
        width: 26,
        marginTop: 50
    },
    adressWraper: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    adressText: {
        color: theme.palette.dark_text,
        fontSize: theme.typography.size.md,
        fontWeight: 'bold',
        marginLeft: 8
    },

})
