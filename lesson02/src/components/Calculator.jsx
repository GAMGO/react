import { useState } from 'react'

export default function Calculator() {
    const [first, setFirst] = useState('')
    const [seconds, setSeconds] = useState('')
    const [result, setResult] = useState('')
    function v(value) {
        ///^-?\d*\.?\d*$/
        console.log(/^-?\d+(\.\d+)?$/.test(value), value) //정규식.test(값)
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            return true
        } else {
            setResult('유효하지 않은 입력')
            return false
        }
    }
    //입력값의 유효성 검사 함수
    function handleAdd() {
        if (v(first) && v(seconds)) {
            setResult(Number(first) + Number(seconds))
        } else {
            setResult('유효하지 않은 입력')
            return false
        }

    }
    function handleSub() {
        if (v(first) && v(seconds)) {
            setResult(Number(first) - Number(seconds))
        } else {
            setResult('유효하지 않은 입력')
            return false
        }

    }
    function handleMul() {
        if (v(first) && v(seconds)) {
            setResult(Number(first) * Number(seconds))
        } else {
            setResult('유효하지 않은 입력')
            return false
        }

    }
    //second가 0 일때 = infinity -> 유효성 검사 필요, first가 0 일때 =0 <- 괜찮음.
    //입력 받는 중에 정규식 검사는 불가함.
    function handleDiv() {
        if (v(first) && v(seconds) && Number(seconds) !== 0) {
            setResult(Number(first) / Number(seconds))
        } else {
            setResult('유효하지 않은 입력')
            return false
        }

    }
    return (
        <div>Calculator
            <h3>계산기</h3>
            <input type="number" placeholder="첫번째 값 입력" value={first} onChange={(e) => setFirst(e.target.value)} />
            <button onClick={handleAdd}>➕</button>
            <button onClick={handleSub}>➖</button>
            <button onClick={handleMul}>✖</button>
            <button onClick={handleDiv}>➗</button>
            <input type="number" placeholder="두번째 값 입력" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
            <span>={result}</span>
        </div>
    )
}
