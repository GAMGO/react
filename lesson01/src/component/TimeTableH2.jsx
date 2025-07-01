import React from 'react'
import '../App4.css'
//객체타입 변수로 저장하기 -> 'props': 여러 속성 저장.
export default function TimeTable2(props) {
  return (
    <tr>
      <th className='titleTr'>{props.title}</th>
      {props.table.map((item, idx)=>(<td key={idx}>{item}</td>))}
    </tr>
  )
}