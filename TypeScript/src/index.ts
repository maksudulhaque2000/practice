const addCourseToStudent = <T> (student: T) => {
    const course = 'Next Level Development'
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent ({name: 'Maksudul Haque', email: 'maksudulhaque@gmail.com', devType: 'Pro'})
const student2 = addCourseToStudent ({name: 'Mahmudul Haque', email: 'mahmudulhaque@gmail.com', devType: 'Noob', merried: false})
console.log(student1, student2);
