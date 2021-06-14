import { act } from "react-dom/test-utils"
import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from "./actionTypes";

//数据在这里，数据有inputValue和list两个
const defaultState={
    inputValue:'Write Something',
    list:[
        'evbejhevrw',
        'vejerwgvyv',
        'evgvchjebvhvc'
    ]
}
export default (state = defaultState,action)=>{
    console.log(state,action)
    // Reducer里只能接收state,不能改变state
    if(action.type===CHANGE_INPUT){
        //深拷贝的数据，所以没有对原始数据进行修改
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        //newState.inputValue=''
        return newState
    }
    return state
}