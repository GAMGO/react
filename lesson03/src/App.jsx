import React, { useEffect, useRef, useState } from 'react'
import "./assets/css/TodoInsert.scss";
import "./assets/css/TodoList.scss";
import "./assets/css/TodoListItem.scss";
import "./assets/css/TodoTemplate.scss";
import {MdAdd,MdCheckBox,MdCheckBoxOutlineBlank,MdRemoveCircleOutline} from "react-icons/md";
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
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
  function handleChecked(id) { 
    const newtodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTodos(newtodos);
  }
  function handleRemove(id) {
    const newtodos = todos.filter((item) => item.id !== id);
    setTodos(newtodos);
  }
  const handleInsert = (text) => {
    const todo = {
      id: maxid.current,
      text,
      checked: false,
    };
    setTodos([...todos, todo]);
    maxid.current += 1;
  };
  const [day,setDay]=useState('')
  return (
    <div>
      <TodoTemplate>
        {day}
        <TodoInsert onInsert={handleInsert} todos={todos}></TodoInsert>
        <TodoList todos={todos} onRemove={handleRemove} onChecked={handleChecked} />
      </TodoTemplate>
      <input type='date'value={day}onChange={(e)=>setDay(e.target.value)}/>
    </div>
  )
}