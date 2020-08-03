import React,{ useState, useEffect, useRef } from 'react' 
import  {View, Text, ImageBackground, Image, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity,TouchableWithoutFeedback } from "react-native"
import  {Picker} from '@react-native-community/picker'
import  {useNavigation} from  "@react-navigation/native"
import  { useDispatch,  useSelector } from 'react-redux'
import { inforStyle } from '../styles/styles'
import  { ND_API, BASE_URL,BHYT_API  } from '../constant/baseUrl'
import  Icon from "react-native-vector-icons/FontAwesome"
import axios from 'axios'


// call constant  value

const getBarUrl :string = ND_API
const pushDataUrl : string = BASE_URL
const getQrUrl : string = BHYT_API
// const QRCode : string  ="HC4790200009674|5068616e205175616e67205472e1baa16e67|11/12/1970|1|3539332f322042e1babf6e205068c3ba204cc3a26d2c205068c6b0e1bb9d6e6720392c205175e1baad6e20362c2054502048e1bb93204368c3ad204d696e685f425832393732|79 - 449|01/01/2018|31/12/2018|20/12/2017|79000200009674|-|4|01/01/2015|51b0b39ae23b867a-7102|$"
const styles = inforStyle()
const BG = require("./res/Main.png")
const LOGO = require("./res/Logo.png")
const afterHandlingTitle = {
    title1 :"Đã sàng lọc an toàn hoặc phòng khám thường", 
    title2 :"Chuyển phòng khám sàng lọc covid 19", 
    title3 :"Khác"
}
//----end-----//
interface formSubmitType  {
        ans_1 : string
        ans_2 : string 
        ho_ten : string
        nam_sinh : string
        dia_chi  : string
        dien_thoai : string 
        gioi_tinh : string 
        nhiet_do : string 
        san_loc : string 
}
interface storeProps {
        detail :{
            answer1: string
        }
        anotherDetail :{
            answer2 : string
            imageData : string 
            nameDevice :string
        }
}
type dataType = {
    TenBenhNhan: string
    SoDienThoai: string 
    NamSinh : number
    GioiTinh : string
    DiaChi: string
}

type dataQrType = {
    first_name : string
    last_name :string
    birthday : string 
    phone :string
    gender : number
    street : string
    ward_id : string
    district : string
    district_id :string
    province :string 


}
type answerType = {
    answer1 : string 
    answer2 : string

}

// Main Function 
function infor () {

// select propsFromStore
const navigation = useNavigation()
// const dispatch = useDispatch()
const answer1 = useSelector((state : storeProps) => state.detail.answer1)
const answer2 = useSelector((state :storeProps) => state.anotherDetail.answer2 )
const imageValue = useSelector((state:storeProps)=> state.anotherDetail.imageData)
const nameDeviceValue = useSelector((state:storeProps)=> state.anotherDetail.nameDevice)


// inital state for this page 
const  [ fullName, setFullName ] = useState<string>("")
const  [birthDay, setBirthDay ] = useState<string>(null)
const  [address, setAddress ] =  useState<string>("")
const  [phoneNumber, setPhoneNumber ] = useState<string> ("")
const  [gender, setGender] = useState <string>("")
const  [ degree, setDegree] =  useState <number>(null)
const  [afterHandling , setAfterHandling] = useState<string> ("")
const  [answer] = useState<answerType>({answer1, answer2})
const  [image] = useState<string>(imageValue)
const  [nameDevice] = useState<string>(nameDeviceValue)
const  [isScan, setIsScan] = useState<boolean>(false)

useEffect(() => {
        const initalAffterHandling = () => (
            (answer.answer1=="N" && answer.answer2=="N") ? afterHandlingTitle.title1 : afterHandlingTitle.title2
        )
        setAfterHandling(initalAffterHandling)
        Keyboard.addListener("keyboardDidHide", keyboardDidHide);
        return () => {
            Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
        }
},[])

const keyboardDidHide = () => {
    setIsScan(false)
}
// Create Action


// Submit data input from patient to server


const submit  =  async () => {
    let submitForm : formSubmitType = {
        ans_1 : answer.answer1,
        ans_2 : answer.answer2 ,
        ho_ten : fullName,
        nam_sinh : birthDay,
        dia_chi  : address,
        dien_thoai : phoneNumber ,
        gioi_tinh : gender, 
        nhiet_do : degree.toString() ,
        san_loc : afterHandling ,
    }
    let info : string = JSON.stringify(submitForm)
    console.log(info.toString())
    try {
        
    } catch (e) {
        console.log(e)
    }
    const URL = pushDataUrl + "api/Survey"
    const data = new FormData()
    data.append("result",info)
    data.append("Files[0]",image)
    data.append("User",nameDevice)
    axios.post(URL,data)
            .then((response:any)=>{
                console.log(response.data)
            })
            .catch((error:any)=> {
                console.log(error)
            })
    console.log("submit thanh công")
    if (answer.answer1 ==="Y" || answer.answer2 === "Y")
    {
        navigation.navigate("UGotSick")
    } else {
        navigation.navigate("Notifi")
    }
    
}

// get data infor patient from data ND hospital
const getInforBHYT = async (qrCode :string) => {
     if (qrCode !== "" && qrCode.length<20 && qrCode.length > 6  ) {
        try {
        await axios.get(getBarUrl+qrCode)
        .then(response =>{
            console.warn("da get dc thong tin ")
            convertBarToField(response.data)
            activeQrScan()
            console.table(response.data)

        })
        .catch(e => {console.log(e)})
        } catch (e) { 
        console.log(e)
            }

    }
    if ( qrCode !== "" && qrCode.length>20 && qrCode.length > 15 ) {
        try {
            axios.post(getQrUrl,
                {
                    "QRCode":qrCode
                }
            )
            .then(response =>{
                console.warn("da get dc thong tin ")
                convertQrCodeToField(response.data.result)
                activeQrScan()
                console.table("gia tri tra ve :" +response.data.result)
            })
            .catch(e => {console.log(e)})
        } catch (e) {
            console.log(e)
        }
        }
    
}
// Convert JSON data and add to State 

const convertBarToField = (data : dataType ) =>  {
        setFullName(data.TenBenhNhan)
        setPhoneNumber(data.SoDienThoai)
        setBirthDay(data.NamSinh.toString())
        setGender((data.GioiTinh)? "nữ":"nam")
        setAddress(data.DiaChi)
}  

const convertQrCodeToField = (data : dataQrType ) => {
    setFullName(data.last_name+data.first_name)
    setPhoneNumber(data.phone)
    setBirthDay(data.birthday.substring(0,4))
    setGender((data.gender === 0 )? "nữ":"nam")
    setAddress(data.street + data.ward_id+data.district+data.province)
}

// ref inputQr code field
const reactBarCode = useRef(null);
const activeQrScan = () => {
    console.warn("active Qr scan")
    reactBarCode.current.clear()
    reactBarCode.current.focus();  
}

return  (
    <TouchableWithoutFeedback onPressOut = {() => activeQrScan()} >
    <ImageBackground style = {styles.Bg} source = {BG}>
    <View style={styles.container}>
           
           
            <View style={styles.subContainer}  >
            <Image source={LOGO} style={styles.image} />
            <Text style={styles.TitleTitle}>Xin hãy điền đầy đủ thông tin khai báo</Text>
            <View style ={{width:0, position:"absolute"}}>
                    <TextInput 
                    onChangeText={(value:string) => getInforBHYT(value)} 
                    autoFocus={true}
                    onBlur={()=>setIsScan(false)}
                    onFocus={()=>setIsScan(true)}
                    ref={reactBarCode}
                    />
            </View>
            <TouchableWithoutFeedback onPressOut ={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.formContainer} behavior="height">
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{flex:1}}> 
                        <Text style ={styles.textStyle}>Họ và tên</Text>
                        <TextInput 
                        value ={fullName} 
                        style ={styles.textInput} 
                        placeholder = "Nhập tên họ đầy đủ " 
                        onChangeText ={(value: string) => setFullName(value)}
                        />
                    </View>
                    <View style={{flex:1,marginLeft:20}}> 
                        <Text style ={styles.textStyle}>Số điện thoại</Text>
                         <TextInput  
                         value ={phoneNumber} 
                         style ={styles.textInput} 
                         keyboardType="number-pad" 
                         placeholder ="Số điện thoại"
                          dataDetectorTypes ="phoneNumber" 
                          onChangeText ={(value:string)=>{setPhoneNumber(value)}} 
                          />                
                    </View>
                </View>
                <Text style ={styles.textStyle}>Địa chỉ</Text>
                <TextInput  
                value = {address}
                style = {styles.textInput} 
                placeholder = "Địa chỉ"  
                dataDetectorTypes = "address" 
                onChangeText = {(value :string) => setAddress(value)} 
                />
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{flex:1}}> 
                        <Text style ={styles.textStyle}>Năm sinh</Text>
                        <TextInput 
                        value ={birthDay}
                        style ={styles.textInput} keyboardType="number-pad"
                         placeholder = "Năm sinh"  
                         dataDetectorTypes= "calendarEvent" 
                         onChangeText ={(value:string) => setBirthDay(value)}/>
                    </View>
                    <View style={{flex:1,marginLeft:20}}>
                        <Text style ={styles.textStyle}>Giới tính</Text>
                            <View style={styles.textInput}>
                            <Picker
                                onValueChange={(value:string) => {setGender(value)} }
                                 selectedValue={gender}
                                 >
                                    <Picker.Item label="Nữ" value="nu"/>
                                    <Picker.Item label="Nam" value="nam"/>
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
                <Icon name ="barcode" size={20} color={(isScan)?"#49c96b":"#000"}/>
             </KeyboardAvoidingView>
             </TouchableWithoutFeedback>
             
            </View>
            </View>
            </ImageBackground>
            </TouchableWithoutFeedback>
           
)
}

export default infor 
