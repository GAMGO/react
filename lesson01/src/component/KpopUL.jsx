//day01_04 : 데이터를 전달 받아 컴포넌트에서 활용하기
import React from 'react'
/*kpopUL({members})와 같이 함수에 입력값(인자) 존재, 부모 컴포넌트가 주는 값임.
{members}는 {members:members}{속성이름 : 값변수}르 줄여서 쓴다. 
JSX는 태그안에 JS코드 쓸 때 꼭 중괄호 안에 씁니다.
*/
export default function KpopUL({members,title}) {
    const titlestyle={
        color:"blue",
        cursor:"pointer",
    }
    return (
        <div>
            <h3 style={titlestyle}>{title} </h3>
            <ul>
                {members.map((item, idx) =>(<li key ={idx}>{item}</li>))}
            </ul>
        </div>
    );
}
/*
배열값이 ['나나','미미','모모']일 때
item = '나나',idx=0, item = '미미',idx=1,item = '모모',idx=2
배열.map(function(item, idx){
   return 함수내용.(실행할 코드들)
})
:배열의 요소를 하나씩 가져다가 값을 item 인덱스번호는 idx 저장.
item,idx 값으로 함수내용을 실행한 return 결과로 새로운 배열이 만들어짐.

화살표 함수로 바꾸면
1)
    배열.map((item, idx) => {
   return 함수내용.(실행할 코드들)
})

2)
    배열.map((item, idx) => (실행내용))
*/
