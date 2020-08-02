
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
    formSubmit : formSubmit,
    error : boolean
    loadding :  boolean
}
type actionType = {
    type: string
    payload : payloadType
} 

const initalState   =  {
    formSubmit :
    {
        fullName : "luu",
        birthday :"11",
        address :"11", 
        phoneNumber:"1123123",
        gender:"nam", 
        degree:10, 
        afterHandling:"ssss"
    }, 
    error : false,  
    loading: false
}
//Action type 
const  SUBMIT_FORM = "SUBMIT_FORM"
const  SUBMIT_ERROR = "SUBMIT_ERROR"
const  SUBMIT_SUCCESS = "SUBMIT_SUCCESS"
export const inforReducer = (state = initalState , action : actionType) => {
    switch (action.type) {
        case SUBMIT_ERROR:
            return {...state, success: action.payload.error}
        case SUBMIT_SUCCESS:
            return {...state, success: action.payload.error}  
        default:
            return state
    }
} 