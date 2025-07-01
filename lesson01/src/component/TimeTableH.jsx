import React from 'react'
import '../App4.css'

export default function TimeTable({title, table}) {
  return (
    <tr>
      <th className='titleTr'>{title}</th>
      {table.map((item, idx)=>(<td key={idx}>{item}</td>))}
    </tr>
  )
}
