import { useState } from 'react'

export default function inputState() {
    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')
    function handleOk() {
        alert(`${username}:${nickname}`)
        setUsername('')
        setNickname('')
    }
    /* e 변수는 발생한 이벤트 정보 입력값을 저장하는 변수 */
    function handleKeyDown(e) {
        if (e.key === 'Enter') handleOk()
    }
    return (
        <div>
            <h3>input에 state(상태) 변수 활용</h3>
            <p>input value에 상태 변수를 적용하면 onChange이벤트가 반드시 필요</p>
            <hr />
            <input type="text" placeholder='사용자 이름 입력' value={username} onKeyDown={handleKeyDown} onChange={(e) => setUsername(e.target.value)} />
            {/* e.target은 이벤트를 일으킨 요소 */}
            <input type="text" placeholder='닉네임 입력' value={nickname} onKeyDown={handleKeyDown} onChange={(e) => setNickname(e.target.value)} />
            <button onClick={handleOk}>등록하기</button>
            <div>
                이름 : {username} 닉네임 : {nickname}
            </div>
        </div>
    )
}
