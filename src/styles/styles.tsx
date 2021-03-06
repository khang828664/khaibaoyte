import { StyleSheet, Dimensions } from 'react-native'
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"
const {height , width} = Dimensions.get("screen")
export const HomeStyle = () => (
    StyleSheet.create({

        image:{
            width: 300,
            height: 200,
            resizeMode: 'stretch',
          },
          preview: {
              flex: 0,
              justifyContent:"center",
              height:1,
              width:1 
          },
          container: {
            flex: 1,
            justifyContent:"flex-start",
          },
          subContainer:{
            flex:1,
            justifyContent:"center",
            marginHorizontal:"10%",
            alignItems:"center",
            paddingVertical:10,
            marginVertical:50
          },
          capture: {
            flex: 1,
            backgroundColor: "#000",
            borderRadius: 10,
            paddingHorizontal: RFPercentage(2),
            paddingVertical:RFPercentage(2),
            margin: 15,
            alignItems:"center"
          
          },
          capture1: {
            flex: 0,
            backgroundColor: "red",
            borderRadius: 10,
            paddingHorizontal: RFPercentage(2),
            margin: 50,
            alignItems:"center",
            paddingVertical:RFPercentage(2),
          
          },
          TitleTitle:{
            textAlign :"center", 
            marginVertical:50,
            fontSize:RFPercentage(5), 
            color:"#C2000B",
            fontWeight:"bold"
            
          },
          title:{
            fontSize:RFPercentage(5),
            color:"#000",
            textAlign:"left",
            marginBottom:10,
            fontWeight:"bold",
            marginTop:10
          },
          textStyle:{
            color : "#000",
            fontSize:RFPercentage(5),
            marginBottom:70
          },
          Bg : {
            resizeMode:"cover",
            justifyContent: "flex-start",
            flex:1
          },
    })
)
export const DetailStyles = () => {
return (
    StyleSheet.create({
        image:{
          width: 300,
          height: 200,
          resizeMode: 'stretch',
        },
        preview: {
            flex: 0,
            justifyContent:"center",
            height:1,
            width:1 
        },
        container: {
          flex: 1,
          justifyContent:"flex-start"
        },
        subContainer:{
          flex:1,
          justifyContent:"flex-start",
          marginHorizontal:20
        },
        capture: {
          flex: 1,
          backgroundColor: "#000",
          borderRadius: 10,
          paddingHorizontal: RFPercentage(3),
          margin: 10,
          alignItems:"center", 
          marginVertical: 10
        },
        capture1: {
          flex: 1,
          backgroundColor: "red",
          borderRadius: 10,
          paddingHorizontal: RFPercentage(2),
          margin: 10,
          marginVertical:10, 
          alignItems:"center",
        
        },
        TitleTitle:{
          textAlign :"center" , 
           marginVertical:10, 
           fontSize:RFPercentage(2), 
           color:"#C2000B",
           marginTop:60,
           fontWeight:"bold",
           padding:20, 
           borderBottomColor: '#707070',
           borderBottomWidth: 2
        },
        subsubContainer:{
          textAlign :"center" ,
           marginVertical:10, 
           fontSize:RFPercentage(3), 
           color:"red",             
           marginTop:60,
           fontWeight:"bold"
          },
        
        title:{
          fontSize:RFPercentage(3),
          color:"#000",
          textAlign:"left",
          marginBottom:15,
          fontWeight:"bold",
          marginHorizontal:30
        },
        textStyle:{
          color : "#000",
          fontSize:RFPercentage(3),                               
          marginVertical:10,
          paddingVertical:5
          
        },
        Bg : {
          resizeMode:"cover",
          justifyContent: "flex-start",
          flex:1
        },
        })
    )
}
export const AnotherDetailStyle = () => {
    return (
         StyleSheet.create({
            image: {
              width: 300,
              height: 200,
              resizeMode: 'stretch',
            },
            preview: {
              flex: 0,
              justifyContent: "center",
              height: 1,
              width: 1
            },
            container: {
              flex: 1,
              justifyContent: "flex-start"
            },
            subContainer: {
              flex: 1,
              justifyContent: "flex-start",
              marginHorizontal: 20
            },
            capture: {
              flex: 1,
              backgroundColor: "#000",
              borderRadius: 10,
              paddingHorizontal: RFPercentage(2),
              margin: 10,
              alignItems: "center",
              marginVertical: 10
            },
            capture1: {
              flex: 1,
              backgroundColor: "red",
              borderRadius: 10,
              paddingHorizontal: RFPercentage(2),
              margin: 10,
              marginVertical: 10,
              alignItems: "center",
          
            },
            TitleTitle: {
              textAlign: "center",
              marginVertical: 10,
              fontSize: RFPercentage(2),
              color: "#C2000B",
              marginTop: 60,
              fontWeight: "bold",
              padding: 20,
              borderBottomColor: '#707070',
              borderBottomWidth: 2
            },
            subsubContainer: {
              textAlign: "center",
              marginVertical: 10,
              fontSize: RFPercentage(2),
              color: "red",
              marginTop: 60,
              fontWeight: "bold",
              marginHorizontal: 20,
            },
          
            title: {
              fontSize: RFPercentage(2),
              color: "#000",
              textAlign: "left",
              marginBottom: 15,
              fontWeight: "bold",
              marginHorizontal: 30
            },
            textStyle: {
              color: "#000",
              fontSize: RFPercentage(2),
              marginVertical: 20,
              paddingVertical: 5
          
            },
            Bg: {
              justifyContent: "flex-start",
              flex: 1
            },
          })
    )
}
export const UGotSickStyle = () => {
    return (
        StyleSheet.create({
            image:{
              width: 300,
              height: 200,
              resizeMode: 'stretch',
            },
            preview: {
                flex: 0,
                justifyContent:"center",
                height:1,
                width:1 
            },
            container: {
              flex: 1,
              justifyContent:"flex-start",
            },
            subContainer:{
              flex:1,
              justifyContent:"center",
              marginHorizontal:"10%",
              alignItems:"center",
              paddingVertical:10,
              marginVertical:50
            },
            capture: {
              flex: 1,
              backgroundColor: "#000",
              borderRadius: 10,
              paddingHorizontal: RFValue(20,height),
              paddingVertical:RFValue(20,height),
              margin: 15,
              alignItems:"center"
            
            },
            capture1: {
              flex: 0,
              backgroundColor: "red",
              borderRadius: 10,
              paddingHorizontal: RFValue(150,height),
              margin: 50,
              alignItems:"center",
              paddingVertical:RFValue(5,height),
            
            },
            TitleTitle:{
              textAlign :"center", 
              marginVertical:70,
              fontSize:RFValue(40,height), 
              color:"#C2000B",
              fontWeight:"bold",
              padding:20, 
              borderBottomColor: '#707070',
              borderBottomWidth: 2  
            },
            title:{
              fontSize:RFValue(40,height),
              color:"#000",
              textAlign:"left",
              marginBottom:10,
              marginVertical:40,
              fontWeight:"bold",
              marginTop:10
            },
            textStyle:{
              color : "#000",
              fontSize:RFValue(35,height),
              marginBottom:70
            },
            Bg : {
              resizeMode:"cover",
              justifyContent: "flex-start",
              flex:1
            },
            })
    )
}
export const NotifiStyle = () => {
    return  (
        StyleSheet.create({
            image:{
              width: 300,
              height: 200,
              resizeMode: 'stretch',
            },
            preview: {
                flex: 0,
                justifyContent:"center",
                height:1,
                width:1 
            },
            container: {
              flex: 1,
              justifyContent:"flex-start",
            },
            subContainer:{
              flex:1,
              justifyContent:"center",
              marginHorizontal:"8%",
              alignItems:"center",
              paddingVertical:10,
              marginVertical:50
            },
            capture: {
              flex: 1,
              backgroundColor: "#000",
              borderRadius: 10,
              paddingHorizontal: RFValue(20,height),
              paddingVertical:RFValue(20,height),
              margin: 15,
              alignItems:"center"
            
            },
            capture1: {
              flex: 0,
              backgroundColor: "red",
              borderRadius: 10,
              paddingHorizontal: RFValue(150,height),
              margin: 50,
              alignItems:"center",
              paddingVertical:RFValue(5,height),
            
            },
            TitleTitle:{
              textAlign :"center", 
              marginVertical:70,
              fontSize:RFValue(50,height), 
              color:"red",
              fontWeight:"bold",
              padding:20,  
            },
            title:{
              fontSize:RFValue(40,height),
              color:"#000",
              textAlign:"left",
              marginBottom:10,
              marginVertical:40,
              fontWeight:"bold",
              marginTop:10
            },
            textStyle:{
              color : "#000",
              fontSize:RFValue(35,height),
              marginBottom:70
            },
            Bg : {
              resizeMode:"cover",
              justifyContent: "flex-start",
              flex:1
            },
            })
    )
}