/*
day03_04 컴포넌트 리팩토링해서 사용
day04_01 children속성 사용하여 완성
useRef() 훅으로 (App_V1.jsx)과 리렌더링 횟수 비교 
*/
import React, { useEffect, useRef, useState } from 'react'
import "./assets/css/TodoInsert.scss";
import "./assets/css/TodoList.scss";
import "./assets/css/TodoListItem.scss";
import "./assets/css/TodoTemplate.scss";
import {
  MdAdd,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';

export default function App() {

  const API_BASE_URL = "http://localhost:5000/api/todos"
  //백엔드 서버에 접속해서 데이터 가져오기
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false); //fetch 실행 중이면 true

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE_URL); //GET요청, 두번째 인자(입력)X
      if (response.ok) {
        const data = await response.json();
        setTodos(data)
        console.log(data)
      } else {
        console.error("Data Bringing Failer!", error)
      }
    } catch (error) {
      console.error("Network Malfunction.", error)
    } finally {//해당 구문이 끝나면 실행하는 함수
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []); //렌더링 후 한번만 실행 useEffect는 side처리 할때.(부수효과처리)

  async function handleChecked(id) { //function으로 써보기
    try {
      /*
      기존 todos에서 id값에 해당하는 하나의 객체를 가져와야 checked의 값을 알 수 있다.
      find는 콜백함수 조건이 참이 1개만 리턴
      */
      const idTodo = todos.find((item) => item.id === id);
      const newChecked = !idTodo.checked;
      setLoading(true)
      const options = {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checked: newChecked })//
      }
      //백엔드 서버 통해서 DB값 변경.
      const response = await fetch(`${API_BASE_URL}/${id}`, options)
      if (response.ok) {
        //현재 상태값 변경->화면 바꿔주기
        const newtodos = todos.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setTodos(newtodos);
      } else {
        console.error("todo Checked was failed!", error)
      }
    } catch (error) {
      console.error("Network Failed during Checked", error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemove = async (id) => {//상태변수 변경
    try {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL}/${id}`, {method: 'DELETE'})
      //options 두번째 인자는 객체 직접 사용 가능.
      if (response.ok) {
        const newTodo = await response.json()
        const newtodos = todos.filter((item) => item.id !== id);
        setTodos(newtodos);
      } else {
        console.error("todo DATA remove failed!", error)
      }
    } catch (error) {
      console.error("Network Failed during remove DATA", error)
    } finally {
      setLoading(false)
    }
  }



  const handleInsert = async (text) => {
    if (!text.trim()) {
      window.alert('내용 입력은 필수입니다.')
      return;
    }
    try {
      setLoading(true)
      const options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })//"{\"text\":\"저녁식사\"}"<-json문자열로 변환하고 싶으면 이렇게 쓰자!
      }
      const response = await fetch(API_BASE_URL, options)
      if (response.ok) {
        const newTodo = await response.json()
        setTodos([...todos, newTodo]);
      } else {
        console.error("todo DATA add Failed!", error)
      }
    } catch (error) {
      console.error("Network Failed during Insert DATA", error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <TodoTemplate>
        {/* 아래의 컴포넌트들은 TodoTemplate의 children 속성으로 사용할 수 있다. */}
        <TodoInsert onInsert={handleInsert} todos={todos}></TodoInsert>
        <TodoList todos={todos} onRemove={handleRemove} onChecked={handleChecked} />
      </TodoTemplate>
    </div>
  )
}






















/* import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

 function App() {
   const [count, setCount] = useState(0)

   return (
     <>
       <div>
         <a href="https://vite.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
         </a>
         <a href="https://react.dev" target="_blank">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
       </div>
       <h1>Vite + React</h1>
       <div className="card">
         <button onClick={() => setCount((count) => count + 1)}>
           count is {count}
         </button>
         <p>
           Edit <code>src/App.jsx</code> and save to test HMR
         </p>
       </div>
       <p className="read-the-docs">
         Click on the Vite and React logos to learn more
       </p>
     </>
   )
 }

 export default App*/
