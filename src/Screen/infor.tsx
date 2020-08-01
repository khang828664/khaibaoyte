import React,{ useState, useEffect, Children } from 'react' 
import  {View, Text, ImageBackground, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity,TouchableWithoutFeedback } from "react-native"
import  {Picker} from '@react-native-community/picker'
import  {useNavigation} from  "@react-navigation/native"
import  { useDispatch,  useSelector } from 'react-redux'
import { inforStyle } from '../styles/styles'


// call constant  value

const styles = inforStyle()
const BG = require("./res/Main.png")
const LOGO = require("./res/Logo.png")
const afterHandlingTitle = {
    title1 :"Đã sàn lọc an toàn hoặc phòng khám thường", 
    title2 :"Chuyển phòng khám sàn lộc covid 19", 
    title3 :"Khác"
}
//----end-----//

type inforType = {
    fullName : string
    birthDay : string
    address  : string
    phoneNumber : string 
    gender : string 
    degree : number 
    afterHandling : string 
}
interface inforReducer  {
    infor : inforType 
}
function infor () {

   

// inital state for this page 
const  [ fullName, setFullNam ] = useState<string | undefined>("")
const  [birthDay, setBirthDay ] = useState<string | undefined>("")
const  [address, setAddress ] =  useState<string  | undefined>("")
const  [phoneNumber, setPhoneNumber ] = useState< string | undefined> ("")
const  [gender, setGender] = useState <string | undefined>("")
const  [ degree, setDegree] =  useState <number | undefined>(null)
const  [afterHandling , setAfterHandling] = useState<string | undefined> ("")
const  [formSubmit, setformSubmit ] = useState <any| undefined>(null)
const  [qrCode , setQrCode] = useState<string | undefined>("")

const navigation = useNavigation()
useEffect(() => {
    Keyboard.dismiss()
    return () => {
    }
}, [])

// Create Action

const submit  = () => {
    
    console.log("submit thanh công")
    navigation.navigate("Home")

}
const DismissKeyBoard = ({children}) => (

    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)
return  (
    <ImageBackground style = {styles.Bg}  source = {BG}>
    <View style={styles.container}>
           
           <DismissKeyBoard>
            <View style={styles.subContainer}  >
            <Image source={LOGO} style={styles.image} />
            <Text style={styles.TitleTitle}>Xin hãy điền đầy đủ thông tin khai báo</Text>

            <KeyboardAvoidingView style={styles.formContainer} behavior="height">
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{flex:1}}> 
                        <Text style ={styles.textStyle}>Họ và tên</Text>
                        <TextInput value ={fullName} style ={styles.textInput} placeholder = "Nhập tên họ đầy đủ " onChangeText ={(value: string) => setFullNam(value)}/>
                    </View>
                    <View style={{flex:1,marginLeft:20}}> 
                        <Text style ={styles.textStyle}>Số điện thoại</Text>
                         <TextInput  style ={styles.textInput} keyboardType="number-pad" placeholder ="Số điện thoại" dataDetectorTypes ="phoneNumber" onChangeText ={(value:string)=>{setPhoneNumber(value)}} />                
                    </View>
                </View>
                <Text style ={styles.textStyle}>Địa chỉ</Text>
                <TextInput  style ={styles.textInput} placeholder = "Địa chỉ"  dataDetectorTypes = "phoneNumber" onChangeText = {(value :string) => setAddress(value)} />
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{flex:1}}> 
                        <Text style ={styles.textStyle}>Nắm sinh</Text>
                        <TextInput style ={styles.textInput} keyboardType="number-pad" placeholder = "Năm sinh"  dataDetectorTypes= "calendarEvent" onChangeText ={ (value:string) => setBirthDay(value)}/>
                    </View>
                    <View style={{flex:1,marginLeft:20}}>
                        <Text style ={styles.textStyle}>Giới tính</Text>
                            <View style={styles.textInput}>
                            <Picker
                                onValueChange={(value:string) => {setGender(value)} }
                                 selectedValue={gender}
                                 >
                                     <Picker.Item label = ""  value = ""/>
                                    <Picker.Item label="Nam" value="1"/>
                                    <Picker.Item label="Nữ" value="0"/>
                            </Picker>
                </View>
                </View>
                </View>
                <Text style ={styles.textStyle}>Nhiệt độ cơ thể</Text>
                <TextInput style={styles.textInput} placeholder = "Nhiệt độ" keyboardType="number-pad" onChangeText = {(value:string) => {setDegree(parseInt(value))}} />
                <Text style ={styles.textStyle}>Xử lý sau sàn lọc</Text>
                <View style={styles.textInput}>
                <Picker
                    onValueChange={(value:string) => {setAfterHandling(value)}}
                    selectedValue={afterHandling}
                    style={{borderColor:"red", borderBottomColor:"red", borderWidth:2}}
                    >
                    <Picker.Item label = ""  value = ""/>
                    <Picker.Item label = {afterHandlingTitle.title1}  value = {afterHandlingTitle.title1}/>
                    <Picker.Item label = {afterHandlingTitle.title2}  value = {afterHandlingTitle.title2}/>
                    <Picker.Item label = {afterHandlingTitle.title3}  value = {afterHandlingTitle.title3}/>
                </Picker>
                </View>
                <TouchableOpacity onPress={submit} style={styles.capture}>
                    <Text style={[styles.textStyle,{color:"#fff", fontWeight:"bold",fontSize:50}]}>Xác nhận</Text>
                </TouchableOpacity>
             </KeyboardAvoidingView>
            </View>
            </DismissKeyBoard>
            </View>
            </ImageBackground>
           
)
}

export default infor 
