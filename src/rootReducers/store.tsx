import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import  createSagaMiddleware from 'redux-saga'
import   { detailReducer } from '../Screen/reducers/detailPageReducer'
import   { anotherDetailReducer }  from '../Screen/reducers/anotherDetailPageReducer'  

const rootReducer = combineReducers ({
     detail: detailReducer ,
     anotherDetail: anotherDetailReducer,
})
type rootState = ReturnType<typeof rootReducer>
export const store : rootState = createStore(rootReducer)
