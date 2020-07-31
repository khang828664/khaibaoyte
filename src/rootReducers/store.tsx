import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import  createSagaMiddleware from 'redux-saga'
import   {detailReducer} from '../Screen/reducers/detailPageReducer'
import   {anotherDetailReducer}  from '../Screen/reducers/anotherDetailPageReducer'  
import pushData from '../Screen/saga/AnotherDetailSaga'
import { DefaultRootState } from 'react-redux'


const rootReducer = combineReducers ({
        detailReducer,
        anotherDetailReducer,
})
export const store = createStore(rootReducer)


// const initalState = {
//     answer1:"",
//     imageData :"",
// }
// interface payloadType {
//     answer: string; 
//     imageData:string;

// }
// interface actionType {
//     type : string
//     payload : payloadType
// }
// const sagaMiddleware = createSagaMiddleware()
// const rootReducer = (state = initalState , action : actionType) =>{
//     console.log(action)
//     switch (action.type) {
//         case "YES":
//             return  {...state, answer1: action.payload.answer }
//         case "NO":
//             return  {...state, answer1: action.payload.answer }
//         default:
//             return state
//     }
// }
// export const store = createStore(rootReducer,
//                 compose(applyMiddleware(sagaMiddleware)))
                    
//  sagaMiddleware.run(pushData)