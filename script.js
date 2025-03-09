const form = document.getElementById("item-form");
const itemInput = document.querySelector(".form-input"); 
const itemList = document.getElementById("item-list");
const clear = document.getElementById("clear");
const filter = document.querySelector(".form-input-filter");

function addItem(event) {
    event.preventDefault(); 

    const newItem = itemInput.value.trim(); 
    if (newItem === "") { 
        alert("Please enter an item");
        return;
    }

    const li = document.createElement("li"); 
    li.appendChild(document.createTextNode(newItem));

    const button = createButton("remove-item btn-link text-red"); 
    li.appendChild(button);

    itemList.appendChild(li);

    checkUI();
    itemInput.value = ""; 
}

function createButton(classes) {
    const btn = document.createElement("button");
    btn.className = classes;

    const icon = createIcon("fa-solid fa-xmark");
    btn.appendChild(icon);

    btn.addEventListener("click", removeItem); // Add event listener for deletion

    return btn;
}

function createIcon(cls) {
    const icon = document.createElement("i");
    icon.className = cls; 
    return icon;
}

function removeItem(event) {
    if (confirm("Are you sure you want to delete this item?")) {
        event.target.closest("li").remove();
        checkUI();
    }
}

function clearItems() {
    itemList.innerHTML = ""; 
    checkUI();
}

function checkUI() {
    clear.style.display = itemList.children.length > 0 ? "block" : "none";
}

// Event Listeners
form.addEventListener('submit', addItem);
clear.addEventListener("click", clearItems);









// const form = document.getElementById("item-form");
// const itemInput = document.querySelector(".form-input"); // Corrected input selection
// const itemList = document.getElementById("item-list");
// const clear = document.getElementById("clear");
// const filter = document.querySelector(".form-input-filter");

// function addItem(event) {
//     event.preventDefault(); // Prevent form submission

//     const newItem = itemInput.value.trim(); // Get input value and trim whitespace
//     if (newItem === "") { // Validate input
//         alert("Please enter an item");
//         return;
//     }

//     const li = document.createElement("li"); // Create new list item
//     li.appendChild(document.createTextNode(newItem));

//     const button = createButton("remove-item btn-link text-red"); // Fixed function call
//     li.appendChild(button);

//     itemList.appendChild(li);

//     checkUI();
//     itemInput.value = ""; // Clear input field
// }

// function createButton(classes) {
//     const btn = document.createElement("button"); // Fixed: classElement -> createElement
//     btn.className = classes;

//     const icon = createIcon("fa-solid fa-xmark");
//     btn.appendChild(icon);

//     return btn;
// }

// function createIcon(cls) {
//     const icon = document.createElement("i");
//     icon.className = cls; // Fixed: classlist -> className
//     return icon;
// }

// form.addEventListener('submit', addItem);




 //console.log("hello world!");
// let x = 5;
// let y = 10;
// console.assert(x + y === 15, "x + y should be 18");
// // console.assert(5==6 ,"not true");
// console.log(x);
// console.log(typeof x);

// //operators
// let a=10;
// let b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);



// console.log(a += b); // a = a + 20 → Output: 30
// console.log(a -= b); // a = a - 20 → Output: 10
// console.log(a *= b); // a = a * 20 → Output: 200
// console.log(a /= b); // a = a / 20 → Output: 10


// let age=15;
// if(age>=18){
//     console.log("im eligible to vote")
// }
// else{
//     console.log("im not eligible to vote")
// }



// //if-else ladder

// let marks = 85;

// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 80) {
//     console.log("Grade: B");
// } else if (marks >= 70) {
//     console.log("Grade: C");
// } else if (marks >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }




// //nested if



// let username = "admin";
// let password = "12345";

// if (username === "admin") { 
//     if (password === "12345") {
//         console.log("Login Successful! ✅");
//     } else {
//         console.log("Incorrect Password ❌");
//     }
// } else {
//     console.log("Username not found ❌");
// }


//loops

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }


// //Arrays
// let value=[100,"architha",1.05,'c',true,[8,9,10]]
// console. log(value)
// value[3]="harshi"
// console. log(value)
// console. log(value[4])
// console.log(typeof value)



// let mymarks=[20,30,40,50,60]
// let total=0
// mymarks.forEach((marks)=>{
//     // console.log(marks)
//     total+=marks
// })
// console.log(total)

// //objects
// let mydetails={
//     ename:"Architha",
//     role:"Developer",
//     salary:"50000.09"

// }
// console.log(mydetails.ename)
// console.log(mydetails.role)
// console.log(mydetails.salary)
// // console.log(mydetails.)


// //array of objects

// let empdetails=
// [
//     {
//         nme:"mahesh",
//         age:24,
//         degree:"B.Tech",
//         city:"Hydrabad",
//         collage:"KNRR"

//     },
//     {
//         nme:"architha",
//         age:24,
//         degree:"B.Tech",
//         city:"Hydrabad",
//         collage:"KNRR"

//     },
//     {
//         nme:"arjun",
//         age:24,
//         degree:"B.Tech",
//         city:"Hydrabad",
//         collage:"KNRR"

//     },
//     {
//         nme:"rakesh",
//         age:24,
//         degree:"B.Tech",
//         city:"Hydrabad",
//         collage:"KNRR"

//     },
//     {
//         nme:"sathish",
//         age:24,
//         degree:"B.Tech",
//         city:"Hydrabad",
//         collage:"KNRR"

//     },
//     {
//         nme:"suresh",
//         age:24,
//         degree:"B.Tech",
//         city:"Hydrabad",
//         collage:"KNRR"

//     }
// ]
// empdetails.forEach((employee)=>{
//     // console.log(employee)
//     console.log(`my name is ${employee.nme},my age is ${employee.age},i have completed ${employee.degree},city is ${employee.city},my collage name is ${employee.collage}`);
// })


// //functions
// function myName(){//to calling this function from html we use onclick button
//     console.log("my name is Architha")
// }
// myName();



// //DOM
// // let h1=document.getElementById('h1')
// // console.log(h1)
// // h1.innerHTML="hello"



// let h1 = document.getElementById('h1');
// let body = document.getElementById('body');

// function dark() {
//     body.style.background = "black";
//     h1.style.color = "white";
//     h1.innerHTML = "Hello ";
// }

// function light() {
//     body.style.background = "white";
//     h1.style.color = "black";
//     h1.innerHTML = "Hello ";
// }




