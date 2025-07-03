import React, { useState } from 'react'
import {
    MdAdd,
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from "react-icons/md";

export default function TodoInsert({onInsert}) {
    const [value,setValue]=useState('')
    const handleSubmit = (e) => {
    e.preventDefault(); // form 서버제출 기본 동작을 못하게 막음.
    // 입력값을 할일 목록(배열)에 추가시키는 함수 실행하기
    onInsert(value);
    setValue("");
  };
    return (
        <form className="TodoInsert" onSubmit={handleSubmit}>
            <input placeholder="할 일을 입력하세요." value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}
