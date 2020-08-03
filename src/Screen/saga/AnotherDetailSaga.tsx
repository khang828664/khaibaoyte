import { takeEvery, takeLatest, call, put , take } from 'redux-saga/effects'
import  { BASE_URL } from  "../../constant/baseUrl"
import axios  from "axios"
type objectType = {
    answer1 : string 
    answer2 : string
    
}
const  baseUrl = BASE_URL
const  pushData = (object : objectType) =>  {
}


export default function* fetchAnotherDetailSaga () { 
}


