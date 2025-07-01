/*day01_02 : 컴포넌트 맛보기
컴포넌트는 JSX문법 사용하고 파일 확장자 JSX추천
일반 자바 스크립트 파일은 JS사용
새로 정의한 컴포넌트를 사용할 때, APP 컴포넌트에 사용을 추천
App.jsx 대신에 app2.jsx를 생성하여 테스트를 진행함.
*/
function TwiceUL(){
    return(
        <ul>
            <li>나연</li>
            <li>지효</li>
            <li>모모</li>
            <li>다현</li>
        </ul>
    )

}
export function BTSUL(){
    return(
        <ul>
            <li>슈가</li>
            <li>제이훕</li>
            <li>뷔</li>
            <li>지민</li>
        </ul>
    )
}

export default TwiceUL;