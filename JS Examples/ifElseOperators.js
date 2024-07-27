var a = 1
var b = 2
var c = 1

//   true      true
if (a == b && b == c) {
    console.log(a)
}
if (a == b || b == c || a == c) {
    console.log('Все числа должны быть разными')
}
if (a > b) {
    if (a > c) {
        if (b > c) {
            console.log(b)
        }
    } 
    else{
        console.log(a)
    }
}
if (b > a) {
    if (b > c) {
        if (c > a) {
            console.log(c)
        } 
        else{
            console.log(a)
        }   
    }
    else{
        console.log(b)
    }
}
if (c > b) {
    if (c > a) {
        if (a > b) {
            console.log(a)
        }    
    }
    else{
        console.log(c)
    }
}
