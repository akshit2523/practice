// console.log('do...while loop------------');
// let n=5,i=1;
// do{
//    console.log(i)
//    i++
//    if(i==3){
//     break;
//    }
// }
// while(i<=n)


// console.log('for loop-----------------');
// for(i=1;i<=5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i)
// }

// console.log('while loop-------------------');
// let num=5;
// let I = 1;
// while(I<=num){
//     console.log(I)
//     I++
// }

// console.log('for...in loop(objects)---------------')
// let animal={
//     name : 'zebra',
//     lag : 4,
//     eyes : 2
// }
// for(let key in animal){
//     console.log(key,animal[key])
// }

// console.log('for...in loop(arreys)---------------')
// let names=['akshit','mayur','keyur']
// for(let index in names){
//     console.log(index,names[index])
// }

// console.log('for...of loop---------------')
// for(let name of names){
//     console.log(name)
// }

// console.log('if statement---------------');
// let a=1;
// if(a>0){
//     console.log('the number is positive')
// }
// console.log('the statement is complete');

// console.log('if...else statement----------------');
// if(a>0){
//     console.log('the number is positive')
// }else{
//     console.log ('the number is negative or zero')
// }
// console.log('the statement is complete')

// console.log('if...else..if...else--------------')
// if(a>0){
//     console.log('the number is positive');
// }else if(i==0){
//     console.log('the number is zero')
// }else{
//     console.log('the number is negative')
// }
// console.log('the statemnet is complete')

// console.log('continue in nested loop-----------------')
// for(i=1;i<=3;i++){
//     for(j=1;j<=3;j++){
//         if(j==2){
//             continue;
//         }
//         console.log(`i=${i},j=${j}`);
//     }
// }

//console.log('switch statement------------------------')
// let result;
// let operator = '/';
// let number1 = 2;
// let number2 = 1;
// switch(operator){
//     case '+':
//         result = number1 + number2
//     console.log(`${number1} + ${number2} = ${result}`);
//     break;
//     case '-':
//         result = number1 - number2
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':   
//         result = number1 * number2
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;    
//     case '/':
//         result = number1 / number2
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;  
//     default:
//         console.log('invalid operator');
//         break; 

// let fruit = 'apple';
// switch(fruit){
//     case 'apple':
//     case 'banana':
//     case 'mango':
//        console.log(`the ${fruit} is fruit`)
//        break
//     default:
//        console.log(`the ${fruit} is not fruit`)
//        break
// }

// function greet(){
//     console.log('hello akshit')
// }
// greet()
//  function greet(name){
//     console.log('hello ' + name + ' (:')
// }
// let name = 'akshit' ;
// greet(name)

// function add(a,b){
//     return a + b;
// }
// let a = parseFloat(9.5);
// let b = parseFloat(3.3);
// let result = add(a,b);
// console.log('the result is ' + result);

// let x = function(num){return num *num}
// console.log(x(4));
// let y= x(3);
// console.log(y);

// let result;
// let operator = '+';
// let number1 = 4;
// let number2 = 8;
// switch(operator){
//     case '+':
//      result = number1 + number2;
//     console.log(result)
//     break;
//     case '-':
//     result = number1 - number2;
//     console.log(result)
//     break;
//     case '*':
//     result = number1 * number2 
//     console.log(result)
//     break;
//     case '/':
//     result = number1 / number2;
//     console.log(result)
//     break;
//     default:    
//     console.log(result)
//     break;
// }

// let fruit = 'apple';
// switch(fruit){
//     case 'apple':
//         case 'banana':
//             case 'mango':
//                 console.log(`the ${fruit} is fruit`)
//                 break;
//                 default:
//                     console.log(`the ${fruit} is no fruit`)
//                     break;
// }

// function greet(){
//     console.log('hello world')
// }
// greet()

// let name = 'akshit';
// function greet(name){
//     console.log('hello ' + name + ' (:')
// }
// greet(name)

// function add(a,b){
//     console.log(a+b)
// }
// add(4,5);

// let x = function (sum){
//     return sum*sum
// }
// console.log(x(4))
// let y = x(3)
// console.log(y)

// function add(number1,number2){
//     return number1 + number2;
// }
// number1 = parseFloat(4.7);
// number2 =  parseFloat(7.4);
// let result = number1 + number2;
// console.log('the result is :' + result)

// function recurtion(x){
//     if(x===0){
//         return 1;
//     }else{
//         return x * recurtion(x-1);
//     }
// }
// const num = 3;
// if(num > 0){
//     let result = recurtion(num)
//     console.log(`the factorial of ${num} is ${result}`)
// }

// let student = [[1,2,3],[2,3,4]];
// student.forEach((students)=>{
//     students.forEach((data)=> {
//         console.log(data);
        
//     });
// })

// let student = [['john',23],['sara',24]]
// for(let i of student){
//     for(let j of i){
//         console.log(j);
//     }
// }

// let student = [['john',23],['sara',24]];
// for(let i=0;i<student.length;i++){
//     let innerArrayLength = student[i].length;
//     for(let j=0; j< innerArrayLength;j++){
//         console.log(student[i][j]);
//     }
// }

// const a = 'my name is the \'akshit\'.\f he';
// console.log(a);

// const salaries = {
//     john : 35000,
//     jack : 36000,
//     paul : 37000
// }
// for(let i in salaries){
//     let salarie = '$' + salaries[i];
//     console.log(`${i} : ${salarie}`)
// }

// let array = ['code',1,'javascript'];
// for(let i in array){
//     console.log(array[i])
// }

// let person = {
//     name : 'jack'
// }
// let id = Symbol('id');
// person[id]=12;
// console.log(person)

// let numarator = 100 , denominator = 'a';
// try{
//     console.log(numarator/denominator);
//     console.log(a);
// }catch(error){
//     console.log('an error caugth')
//     console.log('error massage :' + error)
// }finally {
//     console.log('Finally will execute every time');
// }

// import {greetPerson} from './greet.js';
// let displayName = greetPerson(jack);
// console.log(displayName);

// let number = 0;
// try{
//     if(number > 50){
//         console.log('success');
//     }else{
//          throw new Error('the number is low')
//     }
//     console.log('hello')
// }catch(error){
//     console.log('error was caught');
//     console.log('Error was :' + error);
// }

// let number = 1;
// try{
//     throw new Error('this is a throw');
// }catch(error){
//     console.log('an error caught');
//     if(number + 8 >10){
//         console.log('error was :' + error);
//         console.log('error resolved')
//     }else{
//         throw new Error('the value is low')
//     }
// }

let person = {
    name : 'jack',
    age : '23',
    gender : 'male'
}
let{name,age,gender} = person;
console.log(name)
console.log(age)
console.log(gender)



















