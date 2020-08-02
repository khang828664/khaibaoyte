import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import  createSagaMiddleware from 'redux-saga'
import   { detailReducer } from '../Screen/reducers/detailPageReducer'
import   { anotherDetailReducer }  from '../Screen/reducers/anotherDetailPageReducer'  
import { inforReducer } from "../Screen/reducers/inforReducer";

const rootReducer = combineReducers ({
     detail: detailReducer ,
     anotherDetail: anotherDetailReducer,
     infor : inforReducer,
})
type rootState = ReturnType<typeof rootReducer>
export const store : rootState = createStore(rootReducer)
