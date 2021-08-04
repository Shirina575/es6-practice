class Student{
    constructor(studentID, studentName){
        this.id = studentID;
        this.name = studentName;
        this.school = 'Kolimunnesa School';
    }
}

const student1 = new Student(12, 'Shuvo');
const student2 = new Student(22, 'Mahiya');

console.log(student1.name, student2.name);