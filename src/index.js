import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

//  这个是最终显示在浏览器的组件
ReactDOM.render(
  <TodoList />,//不是成对的
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals