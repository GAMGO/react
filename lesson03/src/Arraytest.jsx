import React, { useRef, useState } from 'react'
function Arraytest() {
  const initVal = [
    { id: 1, text: "리액트 복습", checked: true, },
    { id: 2, text: "프로젝트 기획", checked: false, },
    { id: 3, text: "데이터베이스 테스트", checked: false, },
  ]

  const [todos, setTodos] = useState(initVal);
  const maxid = useRef(todos.length + 1);
  const [value, setValue] = useState("");
  //재렌더링 하기 전 값 출력 => useEffect(실행할함수,의존값배열)사용.
  function handleChecked(id) {
    const newtodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setTodos(newtodos);
    console.log(todos)
  }
  function handleInsert(text) {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      checked: false
    }
    setTodos([...todos, newTodo])
  }
  function handleRemove(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }
  return (
    <div>
      {/* 함수 안에서 handleChecked 호출 */}
      <button onClick={() => handleChecked(1)}>id=1 checked 값 변경</button>
      <button onClick={() => handleChecked(2)}>id=2 checked 값 변경</button>
      <button onClick={() => handleChecked(3)}>id=3 checked 값 변경</button>
      <button onClick={() => handleInsert("웹기초 공부")}>
        새로운 할일 추가
      </button>
      <button onClick={() => handleRemove(2)}>id=2 할일 삭제</button>
      <button onClick={() => handleRemove(4)}>id=4 할일 삭제</button>
    </div>

  )
}
export default Arraytest;