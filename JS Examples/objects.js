const user = {
    name: 'Pe',
    FullName: 'Pe',
    age: 0,
    male: false,
    biography: "",

    aboutMe: function (params) {
        console.log(`Hello my name is ${this.name}, 
            age ${this.age} my biography ${this.biography}`)
    }
}

function addNewData(){
    user.name = document.getElementById("name").value;
    user.age = document.getElementById('age').value;
    user.male = false;
    user.biography = document.getElementById('comment').value;
    
    user.aboutMe()
}

let array = [1,2,3,4,5,6,7]
let arrayString = []

// function funcArrayString(params) {
//     if (arrayString.length == 0){
//         arrayString.push(`${params}`)
//         return arrayString;    
//     }
//     else {
//         arrayString.push(`${params + arrayString.length - 1}`)
//         return arrayString;
//     }
// }

const funcArrayString = (params) => {
    if (arrayString.length == 0){
        arrayString.push(`${params}`)
        return arrayString;    
    }
    else {
        arrayString.push(`${params + arrayString.length - 1}`)
        return arrayString;
    }
}


array.map(e => console.log(funcArrayString(e)))




