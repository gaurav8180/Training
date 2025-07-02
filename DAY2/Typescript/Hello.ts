// var msg="Hello World"
// console.log(msg);

// let x:number=10;
// console.log(x); 

var player={name:"Gaurav",age:25};
console.log(player);

var player2={name:"Gaurav",age:25};
console.log(player2);

player2.age=26;
console.log(player2);

interface Player{
    name:string;
    age:number;
}

var player3:Player={name:"Gaurav",age:25};


//generics

var cars: string[] = ["Volvo", "BMW", "Saab"];
var cars:Array<string>=new Array<string>();
var emps