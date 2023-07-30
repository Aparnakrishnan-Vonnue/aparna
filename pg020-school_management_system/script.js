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

const Qno1 = nameOfTheClass(classObj);

// 2. Write a function to print the teacher's name.

const nameOfTeacher = (obj) => {
  return obj.teacherName;
};

const Qno2 = nameOfTeacher(classObj);

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

const Qno3 = nameOfAllStudents(classObj);

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

const Qno4 = studentIDs(classObj);

// 5. Write a function to print the subject names for a specific student.

const subjectNames = (obj, name) => {
  let studentDetails = obj.students;
  let subjectsArray = [];
  for (let i = 0; i < name.length; i++) {
    const filteredStudentDetails = filterStudentDetails(obj, name);
    filteredStudentDetails.forEach((detail) => {
      let academicDetails = detail.marks;
      academicDetails.forEach((sub) => {
        let subjects = sub.subject;
        subjectsArray.push(subjects);
      });
    });
    return subjectsArray;
  }
};

const Qno5 = subjectNames(classObj, "Ravi");

//6. Write a function to print the marks of a specific student in all the subjects

const marksOfStudents = (obj, subject, name) => {
  let studentDetails = obj.students;
  let mark = "";
  let academicDetails = filterStudentDetails(obj, name);
  academicDetails.forEach((detail) => {
    let academicPerformance = detail.marks.filter(
      (mark) => subject === mark.subject
    );
    academicPerformance.forEach((subject) => {
      mark += subject.mark;
    });
  });
  return `${subject}: ${mark}`;
};

const Qno6 = marksOfStudents(classObj, "Computer", "Ravi");

//7. Write a function to calculate and print the average marks for a specific student.
const averageMarksOfEachStudent = (obj, name) => {
  let totalMark = 0;
  let academicDetails = filterStudentDetails(obj, name);
  academicDetails.forEach((detail) => {
    const academicPerformance = detail.marks;
    for (let i = 0; i < academicPerformance.length; i++) {
      totalMark += academicPerformance[i].mark;
      averageMark = totalMark / academicPerformance.length;
    }
  });
  return averageMark;
};

const Qno7 = averageMarksOfEachStudent(classObj, "Aju");

//8. Write a function to calculate and print the total marks for a specific student.
const totalMarksOfEachStudent = (obj, name) => {
  let totalMark = 0;
  let academicDetails = filterStudentDetails(obj, name);
  academicDetails.forEach((detail) => {
    totalMark = averageMarksOfEachStudent(obj, name) * detail.marks.length;
  });
  return totalMark;
};

const Qno8 = totalMarksOfEachStudent(classObj, "Mini SS");

//9. Write a function to calculate and print the average marks for all students in a specific subject.
const subjectBasedAverageOfAllStudents = (obj, subject) => {
  let arrayOfMarks = [];
  let average = 0;
  let total = 0;
  const studentDetails = obj.students;

  for (let i = 0; i < studentDetails.length; i++) {
    let academicDetails = studentDetails[i].marks;
    const markOfIndividualSubject = academicDetails.filter(
      (sub) => subject === sub.subject
    );

    markOfIndividualSubject.forEach((mark) => {
      arrayOfMarks.push(mark.mark);
    });
  }

  arrayOfMarks.forEach((mark) => {
    total += mark;
    average = total / arrayOfMarks.length;
  });
  return average;
};

const Qno9 = subjectBasedAverageOfAllStudents(classObj, "English");

//10. Write a function to calculate and print the total marks for all students in a specific subject.
const subjectBasedTotalOfAllStudents = (obj, subject) => {
  let totalMark = 0;
  let studentDetails = obj.students;
  let arrayOfMarks = [];
  for (let i = 0; i < studentDetails.length; i++) {
    let academicDetails = studentDetails[i].marks;
    const markOfIndividualSubject = academicDetails.filter(
      (sub) => subject === sub.subject
    );

    markOfIndividualSubject.forEach((mark) => {
      arrayOfMarks.push(mark.mark);
    });
  }
  arrayOfMarks.forEach((mark) => {
    totalMark += mark;
  });
  return totalMark;
};

const Qno10 = subjectBasedTotalOfAllStudents(classObj, "English");

//Commonly used functions
function filterStudentDetails(obj, name) {
  let studentDetails = obj.students;
  let academicDetails = studentDetails.filter(
    (student) => name === student.name
  );
  return academicDetails;
}

const whichQuestionToBeExecuted = () => {
  const question = Qno10;
  switch (question) {
    case Qno1:
      console.log(Qno1);
      break;
    case Qno2:
      console.log(Qno2);
      break;
    case Qno3:
      console.log(Qno3);
      break;
    case Qno4:
      console.log(Qno4);
      break;
    case Qno5:
      console.log(Qno5);
      break;
    case Qno6:
      console.log(Qno6);
      break;
    case Qno7:
      console.log(Qno7);
      break;
    case Qno8:
      console.log(Qno8);
      break;
    case Qno9:
      console.log(Qno9);
      break;
    case Qno10:
      console.log(Qno10);
      break;
  }
};

whichQuestionToBeExecuted();
