const userDetails = {
    personInfo: [{
        Name: "Gaurav",
        education: "B-Tech",
        jobRole: "SDET",
        age: 34,
        Gender: "Male"
    },
    {
        Name: "Nikita",
        education: "B-Tech",
        jobRole: "SDET",
        age: 36,
        Gender: "Female"
    },
    {
        Name: "Kanishk",
        education: "B-Tech",
        jobRole: "SDET",
        age: 29,
        Gender: "Male"
    },
    {
        Name: "Sangam",
        education: "B-Tech",
        jobRole: "SDET",
        age: 23,
        Gender: "Male"
    },
    {
        Name: "Priyanshu",
        education: "B-Tech",
        jobRole: "SDET",
        age: 39,
        Gender: "Male"
    },
    {
        Name: "Amrutha",
        education: "B-Tech",
        jobRole: "SDET",
        age: 28,
        Gender: "Female"
    },
    {
        Name: "Nidhi",
        education: "B-Tech",
        jobRole: "SDET",
        age: 14,
        Gender: "Female"
    },
    {
        Name: "Tarun",
        education: "B-Tech",
        jobRole: "SDET",
        age: 24,
        Gender: "Male"
    }]
}

// console.log(userDetails.personInfo.filter(user => user.age > 30 && user.Gender == "Female"));







// console.log("\n\n---------------------Using readLineSync-------------------------");
// import readlineSync from 'readline-sync';
// // const num1 = parseInt(readlineSync.question('Enter any number: '));
// let outputUsingReadlineSync = ''
// for (let i = 0; i < num1; i++) {
//     outputUsingReadlineSync += i + ' '
// }
// console.log(outputUsingReadlineSync);



// console.log("\n\n----------------------Using Prompt---------------------------------");
// import PromptSync from 'prompt-sync';
// const prompt = PromptSync()
// // let num2 = parseInt(prompt('Enter any number: '))
// let outputUsingPrompt = ''
// for (let i = 0; i < num2; i++) {
//     outputUsingPrompt += i + ' '
// }
// console.log(outputUsingPrompt);

const data = {
    "Employee": {
        "EmployeeName": "John Doe",
        "EmployeeId": "12345",
        "JoinYear": "2026",
        "EmployeePhoneNumber": "123-456-7890"
    },
    "Employee": {
        "EmployeeName": "John Doe",
        "EmployeeId": "12345",
        "JoinYear": "2030",
        "EmployeePhoneNumber": "123-456-7890"
    },
    "Employee": {
        "EmployeeName": "John Doe",
        "EmployeeId": "12345",
        "JoinYear": "2021",
        "EmployeePhoneNumber": "123-456-7890"
    },
    "Employee": {
        "EmployeeName": "John Doe",
        "EmployeeId": "12345",
        "JoinYear": "2023",
        "EmployeePhoneNumber": "123-456-7890"
    }
}

console.log(Object.values(data.Employee).filter(EmployeeId => EmployeeId.JoinYear > 2022))
// console.log(data.Employee.filter(EmployeeId => EmployeeId.JoinYear > 2022));




