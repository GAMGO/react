import React from 'react'
import {
    MdAdd,
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from "react-icons/md";
import '../assets/css/TodoListItem.scss'

export default function TodoListItem({ todo, onRemove, onChecked }) {
    // todo는 item,text,checked 속성을 갖는 객체 */
    const { id, text, checked } = todo;
    const handleButton = (id, text) => {
        //리엑트 객체이름 window 생략 못함
        const yn = window.confirm(`일정 ${id}:${text}를 삭제하십니까?`);
        if (yn) onRemove(id);
        const handleInsert = (text) => {
            setTodos([...todos, todo]);

            maxid.current += 1;
        }
    };
    /*
    onRemove 함수 : 부모컴포넌트에게 props로 전달 받음.
    onChecked 함수 : 역시 props로 전달 받음.
    */


    return (
        <div className="TodoListItem">
            <div
                className={`checkbox ${checked ? "checked" : ""}`}
                onClick={() => onChecked(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div
                className="remove"
                onClick={() => handleButton(id, text)}
            >
                {/*  ()=> onRemove(id)  대신에 handleButton 함수 호출합니다.*/}
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
