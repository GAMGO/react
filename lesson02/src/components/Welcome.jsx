import {useState} from 'react'

export default function Welcome() {
    /*
    호출시 배열을 반환 : [현재 상태 값 저장 변수, 상태를 변경하는 함수]
    message 변수는 값을 변경하기 위해 반드시 setMessage 메소드 사용해야 함.
    useState로 선언된 변수는 상태 변수 ? getElementById('').textContent='값'코드의 비효율성 개선
    */
    const [message, setMessage] = useState('Welcome')
    const [h3Color, setH3Color] = useState('green')

    function handleWelcome() {
        setMessage('ㅎㅇ')
        setH3Color('orange')
    }
    function handleEnter() {
        setMessage('ㅎㅇ')
        setH3Color('red')
    }
    function handleOut() {
        setMessage('ㅎㅇ')
        setH3Color('violet')
    }
    const h3Set = {
        color: h3Color
    }
    return (
        <div>
            {/* onClick : 해당 이벤트핸들러 함수를 지정 및 작성. */}
            <button onClick={handleWelcome}>환영합니다.</button>
            <button onClick={handleEnter}>입장</button>
            <button onClick={handleOut}>퇴장</button>
            <h3 style={h3Set}>{message}</h3>
        </div>
    )
}
