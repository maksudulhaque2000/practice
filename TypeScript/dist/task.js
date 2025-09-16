// Task 1
const text = "I will complete this course successfully and become a Next level Web Developer! (InSahAllah)";
console.log(text);
const checkUser = (T) => {
    console.log(T);
};
checkUser({ name: "maksud", age: 13, role: "admin" });
// Task 3
// Task 4
// Task 5
const word = (T) => {
    const backGear = [...T].reverse().join("");
    console.log(backGear);
};
word("Hellow");
// Task 6
const sum = (X) => {
    const sunOfNumbers = [...X].reduce((a, b) => a + b, 0);
    console.log(sunOfNumbers);
};
sum([10, 20, 30]);
const condition = (data) => {
    if (typeof data === 'string') {
        const sumData = data.length;
        console.log(sumData);
        return sumData;
    }
    else if (typeof data === 'number') {
        const squre = data * data;
        console.log(squre);
        return squre;
    }
};
condition(10);
function user(params) {
    if (params.adminLevel === 'admin') {
        console.log(`Hello ${params.name}, Your email is ${params.email} and you are an ${params.adminLevel}`);
    }
    else {
        console.log(`Hello ${params.name}, Your email is ${params.email} and you are not an admin`);
    }
}
user({ name: "maksudul", email: "smmaksudulhaque2000@gmail.com", adminLevel: "admin" });
export {};
// Task 9
//# sourceMappingURL=task.js.map