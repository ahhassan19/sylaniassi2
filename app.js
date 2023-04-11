// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


// function add(num1){
//     return function(num2){
//         return num1 + num2
//     }
// }
// let sum = add(5)
// console.log(sum(2))// 7
// console.log(sum(5))// 10


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// let arr = [1, 2, 3, 5, 7, 9]
// function check(arr, value) {
//     if (arr.length === 0) {
//         return false;
//     } else if (arr[0] === value) {
//         return true;
//     } else {
//         return check(arr.slice(1), value);
//     }
// }
// console.log(check(arr, 7))//True
// console.log(check(arr, 8))//False



// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


// function newPara(msg) {
//     let para = document.createElement('p')
//     let paraText = document.createTextNode(msg)
//     para.appendChild(paraText)
//     document.body.appendChild(para)
// }
// newPara("Hi! How May I Help You")



// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


// let ul = document.getElementById('ul')
// function add(text){
//     let li = document.createElement('li')
//     let liText = document.createTextNode(text)
//     li.appendChild(liText)
//     ul.appendChild(li)
// }
// add("HELLO WORLD!!")


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// let html = document.getElementById('html')
// function color(ref,bgColor){
//     ref.style.backgroundColor = bgColor
// }
// color(html,"blue")



// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.



// let std = {
//     Name : "Ahmed Hassan",
//     Fathername : "M Najam",
//     cnic : 1233445464656,
//     gender : "Male",
// }
// function obj(key,object){
//     localStorage.setItem(key,JSON.stringify(object))
// }
// obj("std",std)



// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// // //FOR RETRIVING OBJECT TO LOCAL STORAGE
// function retrive(keys){
//     let obj = localStorage.getItem(keys)
//     return JSON.parse(obj)
// }
// let res = retrive("Name")
// console.log(res)


// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.


//FOR STORING OBJECT TO LOCAL STORAGE
// let std = {
//     Name : "Ahmed Hassan",
//     Fathername : "M Najam",
//     cnic : 1233445464656,
//     gender : "Male",
//     age : 19
// }
