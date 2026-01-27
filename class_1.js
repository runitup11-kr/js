//call
// this만 바꿔서 지금 바로 실행

const kim = {name: "kim_gaeul"};
const lee = {name: "lee_gaeul"};

function sayHello(){
    console.log(this.name);
    
}

sayHello.call(kim);
sayHello.call(lee);

//kim.sayHello 이렇게 실행 한거랑 같음
//lee.sayHello

//apply

// this를 정해놓고
// 인자를 배열로 풀어서 실행하는 함수 호출 방식;

const kim1 = {name: "이름1"};

function sayHello1(a,b,c){
    console.log(this.name,a,b,c);
    //this = 누가 불렀는지
    //전달받은 값 = a,b,c
}

const input1 = [1,2,3]
const input2 = [20,30,40]

sayHello1.call(kim1,input1); // 김 , [1,2.3] undefined undefined
sayHello1.apply(kim1,input2); // 김 , 1,2,3


//bind 
// this는 호출 주체에 따라 바뀌지만
// 바인드로 묶어놓으면 값이 그 함수로 고정이 된다
//실행은 안하고 일단 준비만

function sayHello2(){
    console.log(this.name);
}

const kim2 = {name: "김ㅇㅇ"};
const lee2 = {name: "이ㅇㅇ"};
const kimHello = sayHello2.bind(kim2);
const leeHello = sayHello2.bind(lee2);

kimHello(); //김ㅇㅇ 값 고정
leeHello(); //이ㅇㅇ 값 고정

kimHello.call(lee); // 고정 시켜놔서 kimhello에서 call로 lee를 불러도 김ㅇㅇ 출력