import {useRef, useState } from "react";


export function FocusInput() {
  //const testValue = 0; //일반 변수는 리렌더링 할 때 초기값 0부터 시작
  const inputRef = useRef(null);
  /*참조요소 값이 바뀌더라도 리렌더링 할 때 이전 값 유지.
  ▼값이 바뀔 때 리렌더링
  */
  const [nickname, setNickname] = useState('');

  const handleFocus = () => {
    inputRef.current.focus();
    // DOM 요소에 직접 접근 (getElementById와 같은 기능)
    //testValue += 1;
    console.log("이름", inputRef.current.value)
    //input 요소는 value를 반드시 써야한다.
    //inputRef.current += 1;
  };

  //console.log("이름", inputRef.current&&inputRef.current.value)
  /*
  주의 : inputRef는 DOM요소가 만들어진 후에 참조.
  이 코드 위치는 DOM요소가 만들어지기 전에 실행되고 오류 발생
  */
  return (
    <>
    {/* DOM요소에 직접 접근하기 위해 ref속성 설정 변수 이름은 useRef()로 선언*/}
      <input ref={inputRef} type="text"placeholder="이름 입력" />
      <button onClick={handleFocus}>포커스 이동</button>
      <input value={nickname} type="text"placeholder="닉네임 입력" onChange={(e)=>setNickname(e.target.value)} />
     <div>닉네임 : {nickname}</div>
    </>
  );
}


// function PreviousValue() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(0);


//   useEffect(() => {prevCount.current = count;}, [count]);
// }
