

// create detailPage Reducer 
type actionType ={
    type : string,
    payload: payloadType
}
type payloadType = {
        answer1 : string
}
const initalState = {
        answer1: ""
}

export const    detailReducer = (state =  initalState, action : actionType) =>  {
    console.log(action)
    switch (action.type) {
        case "YES":
            return {...state, answer1 : action.payload.answer1} 
        case "NO" :
            return {...state, answer1 : action.payload.answer1}
        default:
            return state
    }
}
