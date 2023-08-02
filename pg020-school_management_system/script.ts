import { ClassObj, StudentDetails } from "./type";

const classObj: ClassObj = {
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

const nameOfTheClass = (obj: ClassObj) => {
  return obj.name;
};

const Qno1 = nameOfTheClass(classObj);

// 2. Write a function to print the teacher's name.

const nameOfTeacher = (obj: ClassObj) => {
  return obj.teacherName;
};

const Qno2 = nameOfTeacher(classObj);

// 3. Write a function to print the names of all the students in the class.

const nameOfAllStudents = (obj: ClassObj) => {
  let studentsDetails = obj.students;
  let arrayOfNames: string[] = [];
  for (let i = 0; i < studentsDetails.length; i++) {
    let nameofStudent: string = studentsDetails[i].name;
    arrayOfNames.push(nameofStudent);
  }
  return arrayOfNames;
};

const Qno3 = nameOfAllStudents(classObj);

// 4. Write a function to print the IDs of all the students in the class

const studentIDs = (obj: ClassObj) => {
  let studentsDetails = obj.students;
  let arrayOfID: string[] = [];
  for (let i = 0; i < studentsDetails.length; i++) {
    let studentId: string = studentsDetails[i].id;
    arrayOfID.push(studentId);
  }
  return arrayOfID;
};

const Qno4 = studentIDs(classObj);

// 5. Write a function to print the subject names for a specific student.

const subjectNames = (obj: ClassObj, name: string) => {
  let studentDetails = obj.students;
  let subjectsArray: string[] = [];
  for (let i = 0; i < name.length; i++) {
    const filteredStudentDetails = filterStudentDetails(obj, name);
    filteredStudentDetails.forEach((detail) => {
      let academicDetails = detail.marks;
      academicDetails.forEach((sub) => {
        let subjects: string = sub.subject;
        subjectsArray.push(subjects);
      });
    });
    return subjectsArray;
  }
};

const Qno5 = subjectNames(classObj, "Ravi");

//6. Write a function to print the marks of a specific student in all the subjects

const marksOfStudents = (obj: ClassObj, subject: string, name: string) => {
  let mark: string = "";
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
const averageMarksOfEachStudent = (obj: ClassObj, name: string) => {
  let totalMark: number = 0;
  let academicDetails = filterStudentDetails(obj, name);
  let averageMark: number = 0;
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
const totalMarksOfEachStudent = (obj: ClassObj, name: string) => {
  let totalMark: number = 0;
  let academicDetails = filterStudentDetails(obj, name);
  academicDetails.forEach((detail) => {
    totalMark = averageMarksOfEachStudent(obj, name) * detail.marks.length;
  });
  return totalMark;
};

const Qno8 = totalMarksOfEachStudent(classObj, "Mini SS");

//9. Write a function to calculate and print the average marks for all students in a specific subject.
const subjectBasedAverageOfAllStudents = (obj: ClassObj, subject: string) => {
  let arrayOfMarks: number[] = [];
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
const subjectBasedTotalOfAllStudents = (obj: ClassObj, subject: string) => {
  let totalMark = 0;
  let studentDetails = obj.students;
  let arrayOfMarks: number[] = [];
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

//11. Write a function to find and print the student with the highest marks in a specific subject.
const studentWithHighestMark = (obj: ClassObj, subject: string) => {
  const studentDetails = obj.students;
  let arrayOfMarks: number[] = [];
  let subjectTopper: { name: string; mark: number } = { name: "", mark: 0 };

  studentDetails.forEach((student) => {
    subjectTopper.name = student.name;
    let academicDetails = student.marks;
    let highestMark = academicDetails[0].mark;
    let specificSubjectPerformance = academicDetails.filter(
      (specificsub) => specificsub.subject === subject
    );
    specificSubjectPerformance.forEach((mark) => {
      arrayOfMarks.push(mark.mark);
      console.log(mark);

      arrayOfMarks.forEach((mark) => {
        if (mark > highestMark) {
          highestMark = mark;
        }
      });
    });
    subjectTopper.mark = highestMark;
  });
  return subjectTopper;
};

const Qno11 = studentWithHighestMark(classObj, "Maths");

//=========================================================================

//Commonly used functions
function filterStudentDetails(obj: ClassObj, name: string): StudentDetails[] {
  let studentDetails = obj.students;
  let academicDetails = studentDetails.filter(
    (student) => name === student.name
  );
  return academicDetails;
}

const whichQuestionToBeExecuted = (question: any) => {
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
    case Qno11:
      console.log(Qno11);
  }
};

whichQuestionToBeExecuted(Qno11);
