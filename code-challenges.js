// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//create a function
const fibonacci = () => {
   // create an array that will hold the numbers
   let sequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
   
    // return that array
   return sequence
   
}

console.log(fibonacci())



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// create a function that takes an array as an argument
//iterate throught the array and filter out any non numbers 
// sort the array from least to greatest

const oddNumberSorted = (arry) => {
    let numberONly= arry.filter(value => {
        return "number" === typeof value
    })

    let oddNumbers = numberONly.filter( value => value % 2 !== 0)

    return oddNumbers.sort((a,b) => a-b)
    
}
 
console.log(oddNumberSorted(fullArr2));





// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”


// create a function that takes a string as an argument


const extractMiddle = (str) => {

    let position;
    let length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 1;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }

    return str.substring(position, position + length)
}

console.log(extractMiddle(middleLetters2));



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)




// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// create function that takes in an array
// 


const accumulatingSum = (array) => {
    if (array.length === 0) {
        return [];
    }
    let newArray = array.map(val => val)
    return newArray.reduce(function(a, b) {
        return a + b
    })
}

console.log(accumulateSum(numbersToAdd1));
