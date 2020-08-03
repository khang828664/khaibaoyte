

// create anotherDetailPage Reducer 
type actionType ={
    type : string,
    payload: payloadType
}
type payloadType = {
        answer2 : string
        imageData : string
        kiosk : string
}
const initalState = {
        answer2: "",
        imageData : "", 
        kiosk:""
}

export const anotherDetailReducer  = (state =  initalState, action : actionType)  => {
    console.log(action.type)
    switch (action.type) {
        case "ANOTHER_DETAIL_YES":
            return {...state, answer2 : action.payload.answer2 , imageData : action.payload.imageData } 
        case "ANOTHER_DETAIL_NO" :
            return {...state, answer2 : action.payload.answer2 , imageData : action.payload.imageData }
        default:
            return state 
    }
}
