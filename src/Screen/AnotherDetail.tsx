import React, { useState, useEffect,useMemo } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image
} from 'react-native';
import { RNCamera} from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';
import { getMacAddress } from 'react-native-device-info';
import {useNavigation} from "@react-navigation/native"

import axios from 'axios'
import {AnotherDetailStyle} from '../styles/styles'
import {OLD_URL} from  "../constant/baseUrl";
// add constant props
type stateUsing =  {
  answer1: string 
}
const styles  =  AnotherDetailStyle()
const img = require("./res/Main.png")
const logo = require("./res/Logo.png")
const logo1 = require("./res/Logo1.png")
const baseUrl = OLD_URL
// get state at store  

function AnotherDetail () {
  const navigation = useNavigation()
  const answer1 =  useSelector((state:stateUsing) => state.answer1)
  console.log(answer1)
  const [nameDevice , setNameDevice] = useState("")
  const [notSick , setNotSick ] = useState(answer1)
  const dispatch = useDispatch()

  // dispatch action generator 

   type payloadType = {
     answer2 : string 
     imageData : any []
   }
  const  setActionYES = (payload :  payloadType) => (
    {
      type:"YES", 
      payload
    }
  )
  const setActionNo  =  (payload : payloadType) => ({
    type:"NO",
    payload
  })



  useEffect(() => {
    _device()
    //get state from store
  }, [])
  const  takePictureWithAnswerYes = async () => {
    console.log("camera was click")
    let images = [];
    for (let index = 0; index < 1; index++) {
      const options = { quality: 0, base64: true, fixOrientation: true, };
      const data = await this.camera.takePictureAsync(options);
      images.push(data.base64);
    }
      let payload = {
        answer2 : "Y",
        imageData : images
      }
    dispatch(setActionYES(payload))
    await _Yes (images);
    navigation.navigate("UGotSick")
 
  };

  const  takePictureWithAnswerNo = async () => {
    console.log("camera was click")
    let images = [];
    for (let index = 0; index < 1; index++) {
      const options = { quality: 0, base64: true, fixOrientation: true, };
      const data = await this.camera.takePictureAsync(options);
      images.push(data.base64);
    }
    await _No(images);
    let payload = {
      answer2 : "N",
      imageData : images
    }
    dispatch(setActionNo(payload))
    if (notSick === 'N') {
      navigation.navigate("Notifi")
    }
    else 
    {
        navigation.navigate('UGotSick')
    }

  };

  const _device = () => {
    getMacAddress().then(mac => {
      _convertDevice(mac)
    })
  }
  const _convertDevice = (macId : string) => {


    switch (macId) {

      case '18:93:7F:B3:CE:A6':
        setNameDevice("kiosk1")
        break;

      case '18:93:7F:B4:4C:E0':
        setNameDevice("kiosk2")
        break;

      case '18:93:7F:B3:FC:6A':
        setNameDevice("kiosk3")
        break;

      case '18:93:7F:B3:BF:AC':
        setNameDevice("kiosk4")
        break;
      case '18:93:7F:B4:A4:24':
        setNameDevice("kiosk5")
        break;
      default:
        setNameDevice("kiosk6")
        console.log("MAC NOT FOUND");

    }
  }
    const  _No = async (images: any) => {
    const data = new FormData();
    data.append('Result', '{"ans_1":"' +notSick+ '","ans_2":"N"}');
    data.append('User', nameDevice);

    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      data.append(`Files[${index}]`, image);
    }
    const url = baseUrl+"api/Survey";
    axios({
      method: 'post',
      url: url,
      data: data,
      headers: { 'content-type': 'multipart/form-data' }
    }).then((response) =>  {
      //handle success
      console.log(response.data)
    }).catch((response) => {
      console.warn(response)
    });
  };

  const _Yes = async (images : any) => {
    const data = new FormData();
    data.append('Result', '{"ans_1":"' +notSick+ '","ans_2":"Y"}');
    data.append('User', nameDevice);

    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      data.append(`Files[${index}]`, image);
    }
    const url = baseUrl + "/api/Survey";
    axios({
      method: 'post',
      url: url,
      data: data,
      headers: { 'content-type': 'multipart/form-data' }
    }).then((response) => {
      console.log(response.data)
    }).catch((response) => {
      console.log(response)
    });
    navigation.navigate("UGotSick")
  };
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}

        />
        <ImageBackground style={styles.Bg}
          source={img}
        >
          <View style={styles.subContainer}>
            <View style={{ justifyContent: "center", marginHorizontal: 30, marginVertical: 50, alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 50, alignContent: "center" }}>
                <Image source={logo} style={styles.image} />
                <Image source={logo1} style={styles.image} />
              </View>
              <Text style={styles.TitleTitle}>
                HỆ THỐNG KHAI BÁO Y TẾ TỰ ĐỘNG
         </Text>
            </View>
            <View>
              <View style={styles.subsubContainer}>
                <Text style={styles.title}> YẾU TỐ LÂM SÀNG : </Text>
                <View style={{ marginHorizontal: 80 }}>
                  <Text style={styles.textStyle}>  - Có một trong những triệu chứng </Text>
                  <Text style={styles.textStyle}>     Sốt, ho, sổ mũi, đau họng, khó thở, viêm phổi </Text>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                  <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', marginTop: 100 }}>
                    <TouchableOpacity onPress={async () => await takePictureWithAnswerNo()} style={styles.capture}>
                      <Text style={[styles.textStyle, { color: "#fff", fontSize: 40, fontWeight: "bold", marginVertical: 10, marginHorizontal: 20 }]}>KHÔNG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.capture1} onPress={async () => await takePictureWithAnswerYes()} >
                      <Text style={[styles.textStyle, { color: "#fff", fontSize: 40, fontWeight: "bold", marginVertical: 10, marginHorizontal: 20 }]}>CÓ</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </ImageBackground>
      </View >
    );
  }
  
export default AnotherDetail
