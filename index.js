let a = 5;
let b = 7;
let c;
c = a;
a = b;
b = c ;
console.log(a , b)


// task 1
let value = (prompt('Enter value'));
const price = value.split(".");
let value1 = price[0];
let value2 = price[1];
console.log(value1 + ' manat ' + value2 + ' qəpik' )


// task 2
let salary = prompt('Enter salary');
let percentage = value * 13 / 100 ;
console.log(salary - percentage);


// task 3
let fullName = prompt( 'Enter surname , name , dad name');
let info = fullName.split(' ');
let surname = info[0];
let name = info[1];
let parent = info[2];
console.log( surname + ' ' + name[0] + '.' + parent[0] + '.')