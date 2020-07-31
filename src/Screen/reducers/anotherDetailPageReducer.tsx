

// create anotherDetailPage Reducer 
type actionType ={
    type : string,
    payload: payloadType
}
type payloadType = {
        answer2 : string
        imageDataList : any
}
const initalState = {
        answer2: "",
        imageListData : null
}

export    const    anotherDetailReducer  = (state =  initalState, action : actionType)  => {
    console.log(action)
    switch (action.type) {
        case "YES":
            return {...state, answer2 : action.payload.answer2 , imageDataList : action.payload.imageDataList } 
        case "NO" :
            return {...state, answer1 : action.payload.answer2 , imageDataList : action.payload.imageDataList }
        default:
            return state 
    }
}
