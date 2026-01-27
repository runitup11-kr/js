//화살표 함수 =>



//class_2.js 코드를 화살표 함수로 바꾼다면??


function Student(age){
    this.age = age;
    this.prtAge = () =>{
        console.log(this.age);
    }
}

//이 경우도 1이 출력됨
//왜냐면 화살표 함수는 this를 고정시키기 때문에
//화살표 함수는 this를 자기 자신으로 만들지않음
// 바깥 스코프(this가 있는 곳)의 this를 그대로 사용함
const std1 = new Student(1);
std1.prtAge();



// 클로저 함수 예제
//1) deep은 화살표 함수 ( 자기 this 없음 )
//2) 그래서 deep이 정의된 위치의 this를 가져옴
//3) deep이 정의된 위치는 inner 함수 내부
//4) inner 함수의 this는 new Outer()로 만들어진 객체(otr)
// 5) 그러면 deep에 this는??? -> otr

function Outer(){
    this.name ="outer";

    this.inner = function(){
        const deep = () => {
            console.log(this.name);
        }
        deep();
    }
}
otr = new Outer();
otr.inner();