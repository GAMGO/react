function line(){
    console.log('\n----------------------------------------\n')
}
line()
/*객체, 배열에서 사용하는 줄임표시. 기호는 ...로 표시
객체에 스프레드 연산 : 기존 객체 복사하여 새로운 배열 객체 생성할 때 사용*/
const people ={name:'adasd', age:25}
console.log('people',people)
//...people 연산은 people객체의 속성들을 모두 가져오기
const people2={...people, address:'Seoul'}
console.log('new people : ',people2)
line()
//people에 새로운 속성 추가
people.email = 'koreait@gamil.com'
console.log('add email people : ',people)
//people에 기존 속성 값 변경
people['name']='아이브'
console.log('기존 객체의 people :',people)
line()
const kor = [90,89,77]
const eng = [76,88,99]
//두 배열 합치기
const scores=[...kor,...eng]
console.log(scores.sort())
/* 새로운 속성 값 추가 또는 기존 속성 값 수정 */
line()
const people3={...people,name:'트와이스2'}
console.log('속성 수정 + 새로운 객체 ',people3)