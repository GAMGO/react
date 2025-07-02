import React, { useRef, useState } from 'react'

import TodoList from './components/TodoList';

export default function App() {
  const initVal = [
    {
      id: 1,
      text: "리액트 수업 복습",
      checked: true,
    },
    {
      id: 2,
      text: "리액트 프로젝트 기획",
      checked: false,
    },
    {
      id: 3,
      text: "데이터베이스 테스트",
      checked: true,
    },
  ];
  const [todos, setTodos] = useState(initVal);
  const maxid = useRef(todos.length + 1);
  // const [value, setValue] = useState("");

  function handleChecked(id) { //상태변수 변경
    const newtodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // 상태가 바뀝니다.
    setTodos(newtodos);
  }

  function handleRemove(id) {//상태변수 변경

    const newtodos = todos.filter((item) => item.id !== id);
    setTodos(newtodos);
  }

  /*const handleInsert = (text) => {//상태변수 변경
    const todo = {
      id: maxid.current,
      text,
      checked: false,
    };

    setTodos([...todos, todo]);

    maxid.current += 1;
  };*/

  return (
    <div><TodoList todos={todos} onRemove={handleRemove} onChecked={handleChecked}/></div>
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
