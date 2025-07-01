//day02_01 : 객체 데이터 props 연습
import '../App4.css'
import React from 'react'

export default function TimeTableV({schedules}) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th className='titleTr'>TIME</th>
                    <th className='titleTr'>TODO</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((items, idx) => (<tr key={idx} ><td>{items.time}</td><td>{items.todo}</td></tr>))}
                </tbody>
            </table>
        </div>
    )
}
