import  React,{useEffect , useState } from "react"
import { View , Text , TouchableOpacity, ImageBackground,Dimensions , Image, } from "react-native"
import { HomeStyle } from "../styles/styles"
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux"
interface rootState  {
  answer1 : string
}
const BG  = require("./res/Main.png")
const LOGO = require("./res/Logo.png")
const styles = HomeStyle()
export default function  Home () {
  const navigation = useNavigation()
  const answer1 = useSelector((state : rootState)  => state.answer1)
  useEffect(() => {
    console.log('anssjsasjasjkasj', answer1)
    return () => {
    }
  }, [])
  const changeDetail = () => {
      navigation.navigate("Detail")
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
              <Text style={styles.textStyle}>VUI  LÒNG  MỞ  KHẨU  TRANG  VÀ  KHAI  BÁO </Text>
            <TouchableOpacity style={styles.capture1} onPress={changeDetail}>
            <Text style={[styles.title,{color:"#fff"}]}>BẮT ĐẦU</Text>
            <View></View>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>
        )
    }
