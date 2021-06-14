import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import TodoListUI from './TodoListUI'
import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from "./store/actionTypes";
import {changeInputAction} from './store/actionCreator'

// const data=[
//     'vebhjwbvhj',
//     'ehbvh',
//     'qeruvc'
// ]

//类组件
class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state=store.getState()
        store.subscribe(this.storeChange)
    }
    render() {
        return ( 
            //以下是子组件
            <TodoListUI
                inputValue={this.state.inputValue}  //向子组件传输的数据，父组件都是this.state.XXX，子组件接收都是this.props.XXX(类组件)，函数组件(props.XXX)
                changeInputValue={this.changeInputValue}//向子组件传递函数
                clickBtn={this.clickBtn}//向子组件传递函数
                list={this.state.list}//向子组件传递数组
                deleteItem={this.deleteItem}//向子组件传递函数
            />
            // <div style={{margin:'10px'}}>
            //     <div>
            //     <Input placeholder={this.state.inputValue}
            //         style={{width:'250px',marginRight:'10px'}}
            //         onChange={this.changeInputValue}
            //         value={this.state.inputValue}
            //     />
            //     <Button type="primary"
            //         onClick={this.clickBtn}
            //     >增加</Button>
            //     </div>

            //     <div style={{margin:'10px',width:'300px'}}>
            //         <List bordered
            //         dataSource={this.state.list}
            //         renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
            //         />
            //     </div>
    
            // </div>


        );
    }
    changeInputValue=(e)=>{
        console.log(e.target.value)
        const action=changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState())
    }
    clickBtn=()=>{
        console.log('xxl')
        const action={type:ADD_ITEM}
        store.dispatch(action)
    }
    deleteItem(index){
        console.log(index)
        const action={
            type:DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }
}

export default TodoList;