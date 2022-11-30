import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot( // root라는 변수를 선언하고, 이 변수(root라는 instance는 createRoot라는 함수를 통해 생성
  document.getElementById('root')); // Id = 'root'인 요소를 찾음 index.html에 있다.
root.render( //이렇게 선언한 변수는 render() 함수를 통해 랜더링이 되며 , render() 함수 내에는 랜더링 하고자 하는 JSX 코드를 인자로 할당하여 컴포넌트를 생성 할 수 있다.
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

