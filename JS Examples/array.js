// const array = [];

// array.push('Petrovich', 'Oleg');

// array.unshift('Petrovich')
// //              0 1 2 3 4 5 6
// const array2 = [4,3,9,5,6];

// array.push(array2);

// console.log(array2[4])

// array2.pop();
// array2.shift();

// console.log(array2);

// var fruits = ['Banana','Pineapple','Orange',
//     'Apple','Pear','Peach',
//     'Kiwi','Mango','Avakado','Grapes']

// var i = 0;    
// while(i < fruits.length){
//     console.log(fruits[i])
//     i = i + 1; 
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var count = 0
// var result = 1
// while(count < numbers.length){
//     result = result * numbers[count];
//     count+=2;
// }

// console.log(result);




// let num2 = [1] 
// let a = 0 

// console.log(num2)

// let nums = [1,9,100,88,7]
// let max = 0
// for (let index = 0; index < nums.length; index++) {
//     if (nums[index] % 2 != 0) {
//         console.log(nums[index])
//     }
// }


// console.log(max)

// nums.forEach(e => console.log(e))

// var array = [...nums]

// console.log(array)


function checkChet(param, param2){
    if (param % param2 == 0){
        return true
    }
    else {
        return false
    }
}

function checkNeChet(param, param2){
    if (param % param2 != 0){
        return true
    }
    else {
        return false
    }
}

function findAllNeChet(nums) {
    for (let index = 0; index < nums.length; index++) {
        if (checkNeChet(nums[index], 2)) {
            console.log(nums[index])
        }
    }
    return "Вернул все не чётные числа"
}
let nums = [1,9,100,88,7]
console.log(findAllNeChet(nums))
