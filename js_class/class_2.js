
//생성자 함수
function Student(argAge){
        this.age = argAge;

        this.prtAge = function(){
            console.log(this.age);
        }
}


std1 = new Student(1);
std1.prtAge();

//this는 “std1 객체를 가리키는 포인터”이고, 그 객체 안에 age와 prtAge가 들어있다.


function std(age){
        this.age1 = age;
        this.startage = function(){
            console.log(this.age1);
        }
}

std2 = new std(33);
std2.startage();