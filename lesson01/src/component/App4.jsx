//day01_07 TimeTalbeH의 부모 컴포넌트 자식 컴포넌트 TimeTableH에게 2개의 배열을 전달해야 함.

import TTH from './TimeTableH'
import TTV from './TimeTableV'

export default function App4() {
    const time = ["09:00", "11:00", "12:30", "14:00", "16:45"];
    const toDo = ["수업", "과제", "점심식사", "주간회의", "자료조사"];
    const schedule = [
    {
        time: '09:00',
        todo: '수업'
    },
    {
        time: '10:20',
        todo: '회의'
    },
    {
        time: '11:30',
        todo: '점심식사'
    },
    {
        time: '14:00',
        todo: '자료조사'
    },
    {
        time: '15:50',
        todo: '운동'
    },
    {
        time: '16:50',
        todo: '과제'
    },
    {
        time: '18:00',
        todo: '저녁식사'
    }
]
    return (
        <table>
            <tbody>
                {/* time,todo,title 속성은 객체 형태로 자식 컴포넌트에게 전달. 
                자식 1: 함수 인자로 객체를 분해하여 속성 변수로 선언*/}
                <TTH table={time} title={"TIME"}/>
                {/* 자식 2 : 함수 인자로 객체 타입 변수 선언 */}
                <TTH table={toDo} title={"TODO"}/>
                <hr/>
                {/* 객체의 배열을 자식 컴포넌으에에 전달. 이 때 props */}
                <TTV schedules = {schedule}/>
                
            </tbody>
        </table>
    );

}
