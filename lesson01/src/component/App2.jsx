import React from 'react'
import TwiceUL,{BTSUL} from './testUL'
/*rfc로 자동완성
day01_03 : testUL.jsx의 컴포넌트 2개를 화면에 출력하기위한 부모컴포넌트
index.js에서 APP컴포넌트로 동작합니다.
export default가 아닌 것은 표현식 기호 {함수이름} 형태로 Import.

컴포넌트는 함수로 정의한다. (함수형 컴포넌트)
파일명과 함수 이름이 동일할 필요가 없다.
*/
export default function App2() {
  return (
    <div>App2
        <TwiceUL/>
        <BTSUL/>
    </div>
  )
}
