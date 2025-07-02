import React, { useRef, useState } from 'react'

import {
    MdAdd,
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from "react-icons/md";
import '../assets/css/TodoList.scss'
import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onRemove, onChecked }) {
    return (
        <div className="TodoList">{
            todos.map((item, idx) =>
                <TodoListItem key={idx}
                    /*
                    부모 컴포넌트에게서 받는 props들.
                    todos 배열 요소 item을 자식요소에게 전달.
                    */
                    todo={item} onRemove={onRemove} onChecked={onChecked}
                />)
        }TodoList</div>
    )
}
