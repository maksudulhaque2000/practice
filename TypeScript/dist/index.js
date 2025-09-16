// const addCourseToStudent = <T> (student: T) => {
//     const course = 'Next Level Development'
//     return {
//         ...student,
//         course
//     }
// }
// const student1 = addCourseToStudent ({name: 'Maksudul Haque', email: 'maksudulhaque@gmail.com', devType: 'Pro'})
// const student2 = addCourseToStudent ({name: 'Mahmudul Haque', email: 'mahmudulhaque@gmail.com', devType: 'Noob', merried: false})
// console.log(student1, student2);
// class Student {
//     name: string
//     email: string
//     devType: string
//     merried: boolean
//     constructor(name: string, email: string, devType: string, merried: boolean) {
//         this.name = name
//         this.email = email
//         this.devType = devType
//         this.merried = merried
//     }
//     displayInfo() : void {
//         console.log(`Student Name: ${this.name}, Email: ${this.email}, Dev Type: ${this.devType}, Merried: ${this.merried}`);
//     }
// }
// const student3 = new Student("Maksudul Haque", "smmaksudulhaque2000@gmail.com", "Pro", false);
// student3.displayInfo()
// class Teacher extends Student {
//     designation: string
//     constructor(name: string, email: string, devType: string, merried: boolean, designation: string) {
//         super(name, email, devType, merried)
//         this.designation = designation
//     }
//     displayInfo() : void {
//         super.displayInfo()
//         console.log(`Designation: ${this.designation}`);
//     }
// }
const userForm = document.querySelector('#userForm');
console.log(userForm);
console.log(userForm.userEmail);
export {};
//# sourceMappingURL=index.js.map