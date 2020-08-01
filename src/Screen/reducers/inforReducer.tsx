
interface formSubmit {
    fullName : string
    birthDay : string
    address  : string
    phoneNumber : string 
    gender : string 
    degree : number 
    afterHandling : string     
} 
type payloadType = {
    formSub : formSubmit,
    error : boolean
    loadding :  boolean
}
type actionType = {
    type: string
    payload : payloadType 
} 

const initalState = {
    formSubmit : {
        fullName : "",
        birthday :"",
        address :"", 
        phoneNumber:"",
        gender:"", 
        degree:null, 
        afterHandling:""
    }, 
    error : false,  
    loading: false
}
//Action type 
const  SUBMIT_FORM = "SUBMIT_FORM"
const  SUBMIT_ERROR = "SUBMIT_ERROR"
const  SUBMIT_SUCCESS = "SUBMIT_SUCCESS"
export const inforReducer = (state : any = initalState , action : actionType) => {
    switch (action.type) {
        case SUBMIT_ERROR:
            return {...state, success: action.payload.error}
        case SUBMIT_SUCCESS:
            return {...state, success: action.payload.error}  
        default:
            return state
    }
} 