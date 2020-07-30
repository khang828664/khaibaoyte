
import  React, {useEffect } from "react"
import {View, Text, ImageBackground, Image, } from "react-native"
import { NotifiStyle } from '../styles/styles'
import  { useNavigation } from '@react-navigation/native'
const styles = NotifiStyle ()

const BG  = require("./res/Main.png")
const LOGO = require("./res/Logo.png")
function  Notifi  ()   {
  const navigation = useNavigation () 
    useEffect(() => {
      setTimeout(() => changeDetail() ,2000)
      return () => {
      }
    }, [])
    const changeDetail = () =>
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
              <Text style={styles.TitleTitle}>CẢM ƠN BẠN ĐÃ KHAI BÁO Y TẾ</Text>
              <View></View>
            </View>
            </ImageBackground>
            </View>
        )
    }

export default Notifi