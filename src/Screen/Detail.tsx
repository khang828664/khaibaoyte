import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View , ImageBackground, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux'
import {connect} from 'react-redux'
import { useNavigation } from '@react-navigation/native';



const img = require("./res/Main.png")
const logo = require("./res/Logo.png")
const logo1 = require("./res/Logo1.png")

import { DetailStyles } from '../styles/styles'
interface disPatchMethod  {
  setStatus : any
}
interface payloadType  {
   answer: string
}
const styles = DetailStyles()

// main function 
function  Detail  () {
  const navigation = useNavigation()
  const dispatch =  useDispatch()
  const actionYes = (payload : payloadType ) =>{
    return {
        type:"YES", 
        payload 

    }
  }
  const actionNo = (payload : payloadType ) =>{
    return {
        type:"NO", 
        payload 

    }
  }
 const  onHandelNo = () => {
  const noAnswer = {
      answer:"N"
  }
   const action = actionNo(noAnswer)
   navigation.navigate("AnotherDetail")
   dispatch(action)
    
  }

  const onHandeYes = () => {
    const yesAnswer = {
      answer:"Y"
  }
   const action = actionYes(yesAnswer)
    navigation.navigate("AnotherDetail")
    dispatch(action)
  } 

  return (
      <View style={styles.container}>
      <ImageBackground style={styles.Bg} 
                        source ={img}      

      > 
      <View style={styles.subContainer}>
      <View style = {{justifyContent:"flex-start",marginHorizontal:40, marginVertical:50, alignItems:"center"}}>
        <View style = {{flexDirection:"row",alignItems:"center", marginHorizontal:10, marginVertical:20}}>
          <Image source={logo} style={styles.image}/>
          <Image source={logo1} style={styles.image}/>
        </View>
        <View style={{ flex:1 ,borderWidth: 1 ,borderBottomColor:"red", marginBottom:150, }}>
        <Text style={styles.TitleTitle}>
           HỆ THỐNG KHAI BÁO Y TẾ TỰ ĐỘNG
         </Text>
        </View>
      </View>
        <View style={styles.subsubContainer}>
         
            <Text style ={styles.title}> YẾU TỐ DỊCH TỄ : </Text>
            <View style={{marginLeft:70}}>
            <Text style={styles.textStyle}>Có một trong những yếu tố, trong vòng 14 ngày:</Text>
            <Text style={styles.textStyle}>  - Là người từ Đà Nẵng, Quảng Ngãi, Quảng Nam vào TPHCM</Text>
            <Text style={styles.textStyle}>  - Tiếp xúc người từ Đà Nẵng, Quảng Ngãi, Quảng Nam vào TPHCM </Text>
            <Text style={styles.textStyle}>    (người này vào TPHCM trong vòng 14 ngày)</Text>
            <Text style={styles.textStyle}>  - Tiếp xúc với người nghi nhiễm COVID-19 </Text>
            <Text></Text>
           

        </View>
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', marginTop:50, marginHorizontal:100, }}>
          <TouchableOpacity onPress={onHandelNo} style={styles.capture}>
            <Text style={[styles.textStyle,{color:"#fff", fontSize:40,fontWeight:"bold",marginVertical:10, marginHorizontal :20}]}>KHÔNG</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ onHandeYes} style={styles.capture1}>
            <Text style={[styles.textStyle,{color:"#fff", fontSize:40,fontWeight:"bold",marginVertical:10 , marginHorizontal:20}]}>CÓ</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
  const mapDispatchToProps = dispatch  => {
    return {
      // dispatching plain actions
      actionYes: (payload: any ) => dispatch({ type: 'YES', payload}),
      actionNo : (payload : any) => dispatch({ type: 'NO' , payload}),
    }
  }
export default connect (
  mapDispatchToProps

) (Detail)