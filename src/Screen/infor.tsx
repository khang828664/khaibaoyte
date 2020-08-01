import React,{ useState, useEffect } from 'react' 
import  {View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native"
import  {Picker} from '@react-native-community/picker'
import  {useNavigation} from  "@react-navigation/native"
import  { useDispatch,  useSelector } from 'react-redux'
import { inforStyle } from '../styles/styles'

// call constant  value

const styles = inforStyle()
const BG = require("")
const LOGO = require("")
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
const navigation = useNavigation()
const  [ fullName, setFullNam ] = useState<string | undefined>("")
const  [birthDay, setBirthDay ] = useState<string | undefined>("")
const  [address, setAddress ] =  useState<string  | undefined>("")
const  [phoneNumber, setPhoneNumber ] = useState< string | undefined> ("")
const  [gender, setGender] = useState <string | undefined>("")
const  [ degree, setDegree] =  useState <number | undefined>(null)
const  [afterHandling , setAfterHandling] = useState<string | undefined> ("")
const  [formSubmit, setformSubmit ] = useState <any| undefined>(null)
const  [qrCode , setQrCode] = useState<string | undefined>("")


useEffect(() => {
    //startDetetch()
    return () => {
    }
}, [])

// Create Action

const submit  = () => {
    
    console.log("submit thanh công")

    navigation.navigate("home")
}
return  (
    <View style={styles.container}>
            <ImageBackground style = {styles.Bg}
            source = {BG}
            > 
            <View style={styles.subContainer}>
            <Image source={LOGO} style={styles.image} />
            <View></View>
              <Text style={styles.TitleTitle}>Xin hãy điền đầy đủ thông tin khai báo</Text>
                <TextInput placeholder = "Nhập tên họ đầy đủ " onChangeText ={(value: string) => setFullNam(value)}/>
                <Text>{fullName}</Text>
                <TextInput placeholder = "Ngày tháng năm sinh"  dataDetectorTypes= "calendarEvent" onChangeText ={ (value:string) => setBirthDay(value)}/>
                <TextInput placeholder = "Địa chỉ"  dataDetectorTypes = "phoneNumber" onChangeText = {(value :string) => setAddress(value)} />
                <TextInput placeholder ="Số điện thoại" dataDetectorTypes ="phoneNumber" onChangeText ={(value:string)=>{setPhoneNumber(value)}} />
                <Picker
                    onValueChange={(value:string) => {setGender(value)} }
                    selectedValue={gender}
                >
                    <Picker.Item label="Nam" value="1"/>
                    <Picker.Item label="Nữ" value="0"/>
                </Picker>
                <TextInput placeholder = "Nhiệt độ" keyboardType="number-pad" onChangeText = {(value:string) => {setDegree(parseInt(value))}} />
                <Picker
                    onValueChange={(value:string) => {setAfterHandling(value)}}
                    selectedValue={afterHandling}
                    >
                    <Picker.Item label = {afterHandlingTitle.title1}  value = {afterHandlingTitle.title1}/>
                    <Picker.Item label = {afterHandlingTitle.title2}  value = {afterHandlingTitle.title2}/>
                    <Picker.Item label = {afterHandlingTitle.title3}  value = {afterHandlingTitle.title3}/>
                </Picker>
              <View>
              <TouchableOpacity onPress={submit} style={styles.capture}>
                <Text style={[styles.textStyle, { color: "#fff", fontSize: 40, fontWeight: "bold", marginVertical: 10, marginHorizontal: 20 }]}>KHÔNG</Text>
            </TouchableOpacity>
              </View>
            </View>
            </ImageBackground>
            </View>
)
}

export default infor 
