

// create detailPage Reducer 
type payloadType = {
    answer1 : string
}

type actionType ={
    type : string,
    payload: payloadType
}

const initalState = {
        answer1: ""
}

export const detailReducer = (state =  initalState, action : actionType) =>  {
    console.log(action)
    switch (action.type) {
        case "DETAIL_YES":
            return {...state, answer1 : action.payload.answer1} 
        case "DETAIL_NO" :
            return {...state, answer1 : action.payload.answer1}
        default:
            return state
    }
}
