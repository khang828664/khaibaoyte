import React, { PureComponent, useState, useEffect } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import LOGO from "./res/Logo.png"
import {create} from "apisauce"


class TestCamera extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      datapath :"",
      base64:"",
      imgResult:"",
   }
  }
  componentDidMount = () =>
  {
    this.takePicture.bind(this)
  }
   private uploadImage = ( reqFile : any) => {
    console.log ('upload comfirm')
    console.log(reqFile.uri)
    let imageSource =  reqFile.uri;
    console.log(imageSource)
    const data = new FormData()
    data.append('file', {
      uri : "file:///storage/emulated/0/Android/data/com.demo_upload/files/Pictures/image-3294aead-697b-4367-b2c9-54d33ff3a0d0.jpg",
      type :"image/jpeg",
    })
    data.append('Result','{}');


    const api = create ({ 
      // baseURL : 'http://14.241.239.78/tek.btc.survey',
      baseURL: 'http://totoshop.yez.vn',
                          headers: {
                          'Content-Type': 'multipart/form-data',
                          'Cache-Control': 'cache',
                          Accept: 'application/json',
                        }
                      })
    //callApi
     api.post("/api/profile/upload-avatar",data)
        .then(res => {
          console.log('>>>>>>>>>>>>>>>>>>[Respone]', res);
          if (res) {
            const {data} = res;
            if (data) {
              const {result} = data;
              if (result.document && result.document.url) {
                this.setState({imgResult: result.document.url});
                console.log(this.state.imgResult)
              }
            }
          }
        })
        .catch(error => {
          console.log('>>>>>>>>>>>>>>>>>>[Errror]', error);
        });
    };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
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
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality:0.1, base64: true, fixOrientation: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({ datapath: data.uri})
      // console.log(data);
      this.uploadImage(data)
      console.log(data.uri);
      this.setState ({
        base64:data.base64
      })
      //console.log(data.base64)
      console.log(this.state.base64)
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent:"center",
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default(TestCamera)