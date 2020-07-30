
import * as React from "react"
import {View , Text , Button, TouchableOpacity, ImageBackground,Dimensions , Image, } from "react-native"

import  {UGotSickStyle} from '../styles/styles'
import  {useNavigation} from '@react-navigation/native'
const styles = UGotSickStyle() 

const BG  = require("./res/Main.png")
const LOGO = require("./res/Logo.png")
function  UGotSick () {
     const navigation = useNavigation()
   const  rollBackHome = () =>
    {
        navigation.navigate("Home")
    }

        return (
            <View style={styles.container}>
            <ImageBackground style = {styles.Bg}
            source = {BG}
            > 
            <View style={styles.subContainer}>
            <Image source={LOGO} style={styles.image} />
            <View></View>
              <Text style={styles.TitleTitle}>HỆ THỐNG KHAI BÁO Y TẾ TỰ ĐỘNG </Text>

              <Text style={styles.textStyle}>MỜI BẠN ĐỨNG YÊN TẠI CHỖ  </Text>
              <View></View>
            <TouchableOpacity style={styles.capture1} onPress={rollBackHome}>
            <Text style={[styles.title,{color:"#fff"}]}>KẾT THÚC</Text>
            <View></View>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>
        )
    }
export default UGotSick
