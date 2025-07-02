//비구조화, 구조 분해 - 배열 또는 객체 분해 -> 함수 등 값을 전달할 때 사용함.
function line(){
    console.log('\n----------------------------------------\n')
}
line()
const s1 = { name: "sana", age: 23, addr: "Seoul" };
function print({age,name,addr}){ //반드시 속성이름 나열
    console.log('☆★print 1 Start☆★☆★☆★☆★')
    console.log(name)
    console.log(age)
    console.log(addr) // 없는 속성 이름을 쓰면 'undefined'가 출력됨.
}print(s1)
line()
function print2({addr:a}){
    console.log('☆★print2 함수 실행☆★☆★☆★☆★')
    console.log(a)
}print2(s1)
line()

//자식 컴포넌트에 정의한 속성들은 하나의 객체로 자식 컴포넌트에게 전달.