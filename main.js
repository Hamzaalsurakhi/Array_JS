// 1-correct the syntax error 
let ar1=[1,7,9,45];

let arr2=["str","alex","moh","the","fox","over","lazy","dog"];

// end one

// start Q-2
var fruits=["Tomato","Banana","Watermelon"];

var bananaIndex=fruits.indexOf("Banana");

console.log(bananaIndex);


var tomatoIndex=fruits.indexOf("Tomato");

console.log(tomatoIndex);

// end Q-2



// start Q-3

var favoriteFood=["mansaf","sharwma","borgar","Makloubeh","Musakhan"];

var  favoriteSport=["Football","Cricket","Basketball"];
var favoriteMovie=["The Godfather","Inception ","JohnWick","Sow"];
// end Q-3

// start Q-4
var arr1=[1,2,3];

function firstOfArray(arr1){
    
    return ar1[0];
    
}
console.log(firstOfArray());   
// end Q-4

// start Q-5
var c=[1,4,5];
function lastOfArray1(c){
 return c[c.length-1];
}
var lastElement=lastOfArray1(c);
console.log(lastElement);
// end Q-5

// start Q-6
var array=[0,5,7,9];
array.shift(0);
array.shift(5);
array.shift(7);
array.unshift(1,3,4,6,8);
array.push(10);
console.log(array)
// end Q-6

// start Q-7
var array2=[5,9,-7,3.5];
array.push(1);
array.join("|");
console.log(array2);
// end Q-7

// start Q-8
var array3=[1,2,3,4];
function middleOfArray(array3){
    if(array3.length % 2===1){
        return array3[parseInt(array3.length/2)]
    }
    else{
        return array3[parseInt(array3.length/2)-1]
    }
}
console.log(middleOfArray(array3));
// end Q-8

// start Q-9
var animals = ['cat', 'ele', 'bird'];
animals[0]="Zebra";
animals[1]="elephant";
animals.pop();
console.log(animals);
var nums= [1,2,3,8,9];
nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums[5]=44
console.log(nums);
// end Q-9


// start Q-10
var nums1= [1,2,3,8,9];
function indexOfArray1(nums1,index){
    return nums1[`${index}`]
}
console.log(indexOfArray1(nums1,3));
// end Q-10



// start Q-11
var arr4=[1,2,3,8,9];
function arrayExceptLast(arr4){

    return arr4.slice(0,arr4.length-1);
}
console.log(arr4);

// end Q-11

// start Q-12
var add=[1,2,3,8,9]
function addToEnd(add,val){
    
  add.push(val);
  return add;
}
addToEnd(add,55);
console.log(add);
// end Q-12

// start Q-13
let sum=[1,2,3,8,9];
let sum1=0;
for(let i=0;i<sum.length;i++){
    sum1+=sum[i];
}
console.log(sum1)
// end Q-13

// start Q-14
function minInArray_ForLoop(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }
  
// end Q-14

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray_ForLoop(arr, num) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != num) {
        myArr.push(arr[i]);
      }
    }
    return myArr;
  }
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray_ForLoop(arr) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1) {
        myArr.push(arr[i]);
      }
    }
    return myArr;
  }


  //Q-17
  function aveArray(arr5) {
    var sum = 0;
    for (var i = 0; i < arr5.length; i++) {
        sum += arr5[i];
    }
    return sum / arr5.length;
} 

var nums = [1, 2, 3, 8, 9];
console.log(aveArray(nums));

//Q-18
function shorterInArray(arr6) {
    if (arr6.length === 0) {
        return null; // Return null for an empty array, you can change it based on your requirement
    }

    var shortest = arr6[0]; // Assume the first string is the shortest

    for (var i = 1; i < arr6.length; i++) {
        if (arr6[i].length < shortest.length) {
            shortest = arr6[i];
        }
    }

    return shortest;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArray(strings)); 

//Q-19
function repeatChar(inputString, charToFind) {
    var count = 0;

    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === charToFind) {
            count++;
        }
    }

    return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string, "a")); // Output: 6
console.log(repeatChar(string, "z"));