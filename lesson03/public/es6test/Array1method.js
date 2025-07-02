console.log('출력테스트')
const num1 = [45,4,9,15,25]
/*
map 메소드는 새로운 배열 생성
num1 배열을 조작(각 요소값으로 연산 - 콜뱃 함수 리턴)한 결과

value는 num1 배열의 각각 요소값
*/
const num2 = num1.map(myfunc)
function myfunc(value){
    return value*2
}

// 콜백함수를 화살표 함수로 바로 쓰기 -> 요소의 값과 인덱스를 콜백함수로 입력
const num3 = num1.map((value,idx)=>(value*2+idx))
console.log(num2.toString())
console.log(num3.toString())
function line(){
    console.log('\n----------------------------------------\n')
}
line()
//filter 메소드 : 필터링
const overfifty = num1.filter(myfunc2)
const underfifty = num1.filter(myfunc3)
function myfunc2(value){
    return value>=15 
//참이 되는 값만 배열 만들기
}
function myfunc3(value){
    return value<=15 
//참이 되는 값만 배열 만들기
}
console.log('Filter over fifty = ',overfifty.toString())
console.log('Filter under fifty = ',underfifty.toString())
line()
//reduce 메소드 : 배열의 각 요소 값을 순서대로 실행한 수식 결과로 한개의 값
var sum = num1.reduce(myfunc4)
//첫번째 인자 : 각 요소의 연살결과를 저장하는 변수가 필요.
function myfunc4(total,value){
    return total+value
    // 0+45 = 45 -> 45+4 = 49 -> 49+9 = 58 -> 58+15 = 73 -> 73+25 = 98
}console.log(sum)