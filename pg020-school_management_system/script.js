let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

// 1. Write a function to print the name of the class.

const nameOfTheClass = (obj) => {
  return obj.name;
};

console.log(nameOfTheClass(classObj));

// 2. Write a function to print the teacher's name.

const nameOfTeacher = (obj) => {
  return obj.teacherName;
};

console.log(nameOfTeacher(classObj));

// 3. Write a function to print the names of all the students in the class.

const nameOfAllStudents = (obj) => {
  let studentsDetails = obj.students;
  let arrayOfNames = [];
  for (let i = 0; i < studentsDetails.length; i++) {
    let nameofStudent = studentsDetails[i].name;
    arrayOfNames.push(nameofStudent);
  }
  return arrayOfNames;
};

console.log(nameOfAllStudents(classObj));

// 4. Write a function to print the IDs of all the students in the class

const studentIDs = (obj) => {
  let studentsDetails = obj.students;
  let arrayOfID = [];
  for (let i = 0; i < studentsDetails.length; i++) {
    let studentId = studentsDetails[i].id;
    arrayOfID.push(studentId);
  }
  return arrayOfID;
};

console.log(studentIDs(classObj));

// 5. Write a function to print the subject names for a specific student.

const subjectNames = (obj, name) => {
  let studentDetails = obj.students;
  let arrayOfSubjects = [];
  for (let i = 0; i < studentDetails.length; i++) {
    let marks = studentDetails[i].marks;
    for (let j = 0; j < marks.length; j++) {}
  }
};

console.log(subjectNames(classObj, nameOfAllStudents(classObj)));
