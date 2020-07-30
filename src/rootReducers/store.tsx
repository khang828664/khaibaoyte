import {createStore} from 'redux'
let initalState = {
    answer1:""
}
interface payloadType {
    answer : string
}
interface actionType {
    type : string
    payload : payloadType
}
const rootReducer = (state = initalState , action : actionType) =>{
    console.log(action)
    switch (action.type) {
        case "YES":
            return {...state , answer1: action.payload.answer}
            break;
        case "NO":
            return {...state , answer1: action.payload.answer}
            break;
        default:
            return state
            break;
    }
}
export const store = createStore(rootReducer)