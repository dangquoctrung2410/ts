class Student {
    private name: string;
    private math: number;
    private english: number;
    private literature: number;


    constructor (name: string, math: number, english: number, literature: number) {
        this.name = name;
        this.math = math;
        this.english = english;
        this.literature = literature;
    }
    get rank(){
        let averageScore = (this.math+ this.english+ this.literature)/3;
        if (averageScore >=8) {
            return "Gioi"
        } else if (averageScore >=6) {
            return " Kha"
        }else {
            return "Trung Binh"
        }
        
    }

}


class StudentManager {
  students: Student[] = [];
  constructor(){};
  addStudent(student: Student) {
     this.students.push(student);
  }
  countRank(){
    let tb = 0;
    let kha = 0;
    let gioi = 0;
    for (let i = 0; i < this.students.length; i++){
      let rank = this.students[i].rank 
      if(rank == "Gioi") gioi++;
      else if(rank == "Kha") kha++;
      else tb++;
    }
    console.log(tb);
    console.log(kha);
    console.log(gioi);
}
}
let student = new Student("Trung", 8,9,10);
let student2 = new Student("Tan",3,4,5);
let student3 = new Student("Long",2,2,3);
let studentManager = new StudentManager();
studentManager.addStudent(student);
studentManager.addStudent(student2);
studentManager.addStudent(student3);
studentManager.countRank();

//StudenManager
//students : Student[]
// +add (Student:Student)
// staticStudent()
// so hoc vien gioi: 8
// so hoc vien kha:9
//so hoc vien trung binh:10