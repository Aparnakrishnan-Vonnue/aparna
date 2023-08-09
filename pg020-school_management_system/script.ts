import { ClassObj, Marks, StudentDetails } from "./type";

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

//global variables
const studentDetails: StudentDetails[] = classObj.students;

// 1. Write a function to print the name of the class.

const nameOfTheClass = (obj: ClassObj) => {
  return obj.name;
};

const one = nameOfTheClass(classObj);

// 2. Write a function to print the teacher's name.

const nameOfTeacher = (obj: ClassObj) => {
  return obj.teacherName;
};

const two = nameOfTeacher(classObj);

// 3. Write a function to print the names of all the students in the class.

const nameOfAllStudents = (obj: ClassObj) => {
  let arrayOfNames: string[] = [];
  for (let i = 0; i < studentDetails.length; i++) {
    let nameofStudent: string = studentDetails[i].name;
    arrayOfNames.push(nameofStudent);
  }
  return arrayOfNames;
};

const three = nameOfAllStudents(classObj);

// 4. Write a function to print the IDs of all the students in the class

const studentIDs = (studentDetails: StudentDetails[]) => {
  let arrayOfID: string[] = [];
  for (let i = 0; i < studentDetails.length; i++) {
    let studentId: string = studentDetails[i].id;
    arrayOfID.push(studentId);
  }
  return arrayOfID;
};

const four = studentIDs(studentDetails);

// 5. Write a function to print the subject names for a specific student.

const subjectNames = (obj: ClassObj, name: string) => {
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

const five = subjectNames(classObj, "Ravi");

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

const six = marksOfStudents(classObj, "Computer", "Ravi");

//7. Write a function to calculate and print the average marks for a specific student.
const averageMarksOfEachStudent = (name: string) => {
  let totalMark: number = 0;
  let academicDetails = filterStudentDetails(classObj, name);
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

const seven = averageMarksOfEachStudent("Aju");

//8. Write a function to calculate and print the total marks for a specific student.
const totalMarksOfEachStudent = (
  studentDetails: StudentDetails[],
  name: string
) => {
  let totalMark: number = 0;
  let academicDetails = filterStudentDetails(classObj, name);
  academicDetails.forEach((detail) => {
    totalMark = averageMarksOfEachStudent(name) * detail.marks.length;
  });
  return totalMark;
};

const eight = totalMarksOfEachStudent(studentDetails, "Mini SS");

//9. Write a function to calculate and print the average marks for all students in a specific subject.
const subjectBasedAverageOfAllStudents = (
  studentDetails: StudentDetails[],
  subject: string
) => {
  let arrayOfMarks: number[] = [];
  let average = 0;
  let total = 0;

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

const nine = subjectBasedAverageOfAllStudents(studentDetails, "English");

//10. Write a function to calculate and print the total marks for all students in a specific subject.
const subjectBasedTotalOfAllStudents = (
  studentDetails: StudentDetails[],
  subject: string
) => {
  let totalMark = 0;
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

const ten = subjectBasedTotalOfAllStudents(studentDetails, "English");

//11. Write a function to find and print the student with the highest marks in a specific subject.
type SubjectMark = {
  name: string;
  mark: number;
};

const studentWithHighestMark = (
  studentDetails: StudentDetails[],
  subject: string
) => {
  let specificSubjectPerformance: SubjectMark[] = [];
  let subjectTopper: SubjectMark[] = [];

  studentDetails.forEach((student) => {
    student.marks.forEach((item) => {
      if (item.subject === subject) {
        specificSubjectPerformance.push({
          name: student.name,
          mark: item.mark,
        });
      }
    });
  });
  let highestMark = 0;
  specificSubjectPerformance.forEach((performance) => {
    if (performance.mark > highestMark) {
      highestMark = performance.mark;
    }
  });
  subjectTopper = specificSubjectPerformance.filter(
    (topper) => topper.mark === highestMark
  );
  return subjectTopper;
};

const eleven = studentWithHighestMark(studentDetails, "Computer");

//12.Write a function to find and print the student with the highest marks in a specific subject.
const studentWithLowestMarkinSub = (
  subject: string,
  studentDetails: StudentDetails[]
) => {
  let specificSubjectPerformance: SubjectMark[] = [];
  let studentWithLowestMark: SubjectMark[] = [];

  studentDetails.forEach((student) => {
    student.marks.forEach((subjectMark) => {
      if (subjectMark.subject === subject) {
        specificSubjectPerformance.push({
          name: student.name,
          mark: subjectMark.mark,
        });
      }
    });
  });
  let lowestMark = specificSubjectPerformance[0].mark;
  specificSubjectPerformance.forEach((performance) => {
    if (performance.mark < lowestMark) {
      lowestMark = performance.mark;
    }
    studentWithLowestMark = specificSubjectPerformance.filter(
      (student) => student.mark === lowestMark
    );
  });
  return studentWithLowestMark;
};

const twelve = studentWithLowestMarkinSub("English", studentDetails);

//13. Write a function to find and print the student with the highest total marks.
const studentWithHighestTotalMark = (studentDetails: StudentDetails[]) => {
  let totalMarks: SubjectMark[] = [];
  studentDetails.forEach((detail) => {
    totalMarks.push({
      name: detail.name,
      mark: totalMarksOfEachStudent(studentDetails, detail.name),
    });
  });

  let topScore = 0;
  totalMarks.forEach((total) => {
    if (total.mark > topScore) {
      topScore = total.mark;
    }
  });
  const classTopper = totalMarks.filter((student) => student.mark === topScore);
  return classTopper;
};

const thirteen = studentWithHighestTotalMark(studentDetails);

//14. Write a function to find and print the student with the lowest total marks.
const studentWithLowestTotalMark = (studentDetails: StudentDetails[]) => {
  let totalMarks: SubjectMark[] = [];
  studentDetails.forEach((detail) => {
    totalMarks.push({
      name: detail.name,
      mark: totalMarksOfEachStudent(studentDetails, detail.name),
    });
  });
  let lowestTotal = totalMarks[0].mark;
  totalMarks.forEach((total) => {
    if (total.mark < lowestTotal) {
      lowestTotal = total.mark;
    }
  });
  const lowScorer = totalMarks.filter(
    (student) => student.mark === lowestTotal
  );
  return lowScorer;
};

const fourteen = studentWithLowestTotalMark(studentDetails);

//15. 14.
//15. Write a function to find and print the subject with the highest average marks.
type subjectAvgType = {
  subject: string;
  average: number;
};
const subjectWithHighestAvgMark = (studentDetails: StudentDetails[]) => {
  let subjectAvg: subjectAvgType[] = [];
  let academicDetails: Marks[] = [];
  let highestAvg = 0;
  studentDetails.forEach((detail) => {
    academicDetails = detail.marks;
  });
  academicDetails.forEach((subject) => {
    subjectAvg.push({
      subject: subject.subject,
      average: subjectBasedAverageOfAllStudents(
        studentDetails,
        subject.subject
      ),
    });
  });
  subjectAvg.forEach((sub) => {
    if (sub.average > highestAvg) {
      highestAvg = sub.average;
    }
  });
  const subWithHighestAvg = subjectAvg.filter(
    (subavg) => subavg.average === highestAvg
  );
  return subWithHighestAvg;
};
const fifteen = subjectWithHighestAvgMark(studentDetails);

//16. Write a function to find and print the subject with the lowest average marks.
const subWithLowestAvg = (studentDetails: StudentDetails[]) => {
  let subjectAvg: subjectAvgType[] = [];
  let academicDetails: Marks[] = [];
  studentDetails.forEach((detail) => {
    academicDetails = detail.marks;
  });
  let lowestAvg = academicDetails[0].mark;
  academicDetails.forEach((subject) => {
    subjectAvg.push({
      subject: subject.subject,
      average: subjectBasedAverageOfAllStudents(
        studentDetails,
        subject.subject
      ),
    });
  });
  subjectAvg.forEach((sub) => {
    if (sub.average < lowestAvg) {
      lowestAvg = sub.average;
    }
  });
  const subWithLowestAverage = subjectAvg.filter(
    (subAvg) => subAvg.average === lowestAvg
  );
  return subWithLowestAverage;
};
const sixteen = subWithLowestAvg(studentDetails);

//17.Write a function to calculate and print the overall average marks for the class
const overallAvgMarkForClass = (studentDetails: StudentDetails[]) => {
  let totalMark = 0;
  studentDetails.forEach((student) => {
    totalMark += totalMarksOfEachStudent(studentDetails, student.name);
  });
  const overallAvg = totalMark / studentDetails.length;
  return overallAvg;
};

const seventeen = overallAvgMarkForClass(studentDetails);

//18. Write a function to calculate and print the overall total marks for the class.
const totalMarkForClass = (studentDetails: StudentDetails[]) => {
  let totalMark = 0;
  studentDetails.forEach((student) => {
    totalMark += totalMarksOfEachStudent(studentDetails, student.name);
  });
  return totalMark;
};

const eighteen = totalMarkForClass(studentDetails);

//19. Write a function to calculate and print the average marks for each subject.
type subjectData = {
  subject: string;
  mark: number;
};
const averageMarksForEachSub = (
  studentDetails: StudentDetails[],
  subject: string
) => {
  let specificSubjectData: subjectData[] = [];
  let marksArray: number[] = [];
  let subjectTotal = 0;
  studentDetails.forEach((student) => {
    specificSubjectData = student.marks.filter(
      (data) => data.subject === subject
    );

    specificSubjectData.forEach((data) => {
      marksArray.push(data.mark)
    })
  });
  marksArray.forEach((mark) => {
    subjectTotal += mark
  })
  const subjectAvg = subjectTotal/marksArray.length
  return subjectAvg
};

const nineteen = averageMarksForEachSub(studentDetails, "English");

//20. Write a function to calculate and print the total marks for each subject

const totalMarkForEachSub = (studentDetails:StudentDetails[], subject:string) => {
  let specificSubjectData: subjectData[] = [];
  let marksArray: number[] = [];
  let subjectTotal = 0;
  studentDetails.forEach((student) => {
    specificSubjectData = student.marks.filter(
      (data) => data.subject === subject
    );
    specificSubjectData.forEach((data) => {
      marksArray.push(data.mark)
    })
  });
  marksArray.forEach((mark) => {
    subjectTotal += mark
  })
  return subjectTotal
}

const twenty = totalMarkForEachSub(studentDetails, "English")

//21. Write a function to find and print the subject with the highest total marks.
type SubMarkType = {
  subject: string,
  mark:number
}
const subWithHighestTotalMark = (studentDetails:StudentDetails[]) => {
  let totalMarksArray:SubMarkType[] = []
  let subName = ''
  studentDetails.forEach((student) => {
    student.marks.forEach((subMark) => {
      totalMarksArray.push({
        subject: subMark.subject,
        mark: totalMarkForEachSub(studentDetails, subMark.subject)
      })
    })
  })
  let highestTotal = 0
  totalMarksArray.forEach((total) => {
    if(total.mark > highestTotal){
      highestTotal = total.mark
    }
  })
  const subDetailsOfHighestTotal = totalMarksArray.filter(sub => sub.mark === highestTotal)
  subDetailsOfHighestTotal.forEach((sub) => {
    subName = sub.subject
  })
  return subName
}

const twentyOne = subWithHighestTotalMark(studentDetails)

//22. Write a function to find and print the subject with the lowest total marks.
const subWithLowestTotalMark = (studentDetails:StudentDetails[]) => {
 let academicDetails:Marks[] = []
 let totalMarksArray:SubMarkType[] = []
 let subName = ''
 studentDetails.forEach((student) => {
  academicDetails = student.marks
 })
 academicDetails.forEach((performance) => {
  totalMarksArray.push({
    subject: performance.subject,
    mark: totalMarkForEachSub(studentDetails, performance.subject)
  })
 })
 let lowestTotal:number = totalMarksArray[0].mark
 totalMarksArray.forEach((total) => {
  if(total.mark < lowestTotal){
    lowestTotal = total.mark
  }
 })
 const subDetailsWithLowestTotal = totalMarksArray.filter(details => details.mark === lowestTotal)
 subDetailsWithLowestTotal.forEach((sub) => {
  subName = sub.subject
 })
 return subName
}

const twentyTwo = subWithLowestTotalMark(studentDetails)

//23. Write a function to find and print the student(s) with the highest average marks.
const studentWithHighestAvgMark = (studentDetails:StudentDetails[]) => {
  let studentAndTotal:SubjectMark[] = []
  let studentName = ""
  studentDetails.forEach((student) => {
    studentAndTotal.push({
      name: student.name,
      mark: totalMarksOfEachStudent(studentDetails, student.name)
    })
  })
  let highestTotal = 0
  studentAndTotal.forEach((student) => {
    if(student.mark > highestTotal){
      highestTotal = student.mark
    }
  })
  const highestAvg = highestTotal/studentDetails.length
  const studentWithHighestAvg = studentAndTotal.filter(total => total.mark / studentDetails.length === highestAvg)
  studentWithHighestAvg.forEach((student) => {
    studentName = student.name
  })
  return studentName
}

const twentyThree = studentWithHighestAvgMark(studentDetails)

//24. Write a function to find and print the student(s) with the lowest average marks.
const studentsWithLowestAvgMark = (studentDetails:StudentDetails[]) => {
  let studentAndTotal:SubjectMark[] = []
  let studentName = ""
  studentDetails.forEach((student) => {
    studentAndTotal.push({
      name: student.name,
      mark: totalMarksOfEachStudent(studentDetails, student.name)
    })
  })
  let lowestTotal= studentAndTotal[0].mark
  studentAndTotal.forEach((student) => {
    if(student.mark < lowestTotal){
      lowestTotal = student.mark
    }
  })
  const lowestAvg = lowestTotal/studentDetails.length
  const studentsWithLowestAvg = studentAndTotal.filter(total => total.mark/studentDetails.length === lowestAvg)
  studentsWithLowestAvg.forEach((student) => {
    studentName = student.name
  })
  return studentName
}

const twentyFour = studentsWithLowestAvgMark(studentDetails)

//25. Write a function to find and print the student(s) with the highest total marks.
//26.Write a function to find and print the student(s) with the lowest total marks.
//27. Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.
const studentsScoredaboveAMarkLt = (studentDetails:StudentDetails[], subject:string, marklt: number) => {
  let academicDetails:Marks[] = []
  let studentWithMarkAboveLT: string[] = []
  let studentMark:SubjectMark[] = []

  studentDetails.forEach((stDetail) => {
    academicDetails = stDetail.marks
    academicDetails.forEach((acDetail) => {
      if(acDetail.subject === subject){
        studentMark.push({
          name: stDetail.name,
          mark: acDetail.mark
        })
      }
    })
  })
  studentMark.forEach((student) => {
    if(student.mark > marklt){
      studentWithMarkAboveLT.push(student.name)
    }
  })
  return studentWithMarkAboveLT
}
const twentySeven = studentsScoredaboveAMarkLt(studentDetails, "Chemistry", 40)

//28. Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.
const studentsScoredBelowAMarkLt = (studentDetails:StudentDetails[], subject:string, marklt:number) => {
  let academicDetails:Marks[] = []
  let studentsWithMarkBelowLT: string[] = []
  let studentMark:SubjectMark[] = []

  studentDetails.forEach((stDetail) => {
    academicDetails = stDetail.marks
    academicDetails.forEach((acDetail) => {
      if(acDetail.subject === subject){
        studentMark.push({
          name: stDetail.name,
          mark: acDetail.mark
        })
      }
    })
  })
  studentMark.forEach((student) => {
    if(student.mark < marklt){
      studentsWithMarkBelowLT.push(student.name)
    }
  })
  return studentsWithMarkBelowLT
}

const twentyEight = studentsScoredBelowAMarkLt(studentDetails, "Maths", 40)

//29. Write a function to calculate and print the number of students who scored above a certain mark in all subjects.
type SubjectMarkArrayType = {
  name:string,
  mark:number[]
}
const studentScoredAboveAMarkLtinAllSub = (studentDetails:StudentDetails[], marklt:number) => {
  let academicDetails:Marks[] = []
  let studentMarkArray:SubjectMarkArrayType[] = []
  let marksArray:number[] = []
  let resultingStudentArray: string[] = []
  studentDetails.forEach((stDetail) => {
    academicDetails = stDetail.marks
    academicDetails.forEach((acDetail,i) => {
      marksArray.push(acDetail.mark)
    })
    studentMarkArray.push({
      name: stDetail.name,
      mark: marksArray
    })
    marksArray = []
  })
  studentMarkArray.forEach((student, i) => {
    student.mark.forEach((indScore) => {
      console.log(indScore)
    })
  })
  return resultingStudentArray
}

const twentyNine = studentScoredAboveAMarkLtinAllSub(studentDetails, 40)















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
    case one:
      console.log(one);
      break;
    case two:
      console.log(two);
      break;
    case three:
      console.log(three);
      break;
    case four:
      console.log(four);
      break;
    case five:
      console.log(five);
      break;
    case six:
      console.log(six);
      break;
    case seven:
      console.log(seven);
      break;
    case eight:
      console.log(eight);
      break;
    case nine:
      console.log(nine);
      break;
    case ten:
      console.log(ten);
      break;
    case eleven:
      console.log(eleven);
      break;
    case twelve:
      console.log(twelve);
      break;
    case thirteen:
      console.log(thirteen);
      break;
    case fourteen:
      console.log(fourteen);
      break;
    case fifteen:
      console.log(fifteen);
      break;
    case sixteen:
      console.log(sixteen);
      break;
    case seventeen:
      console.log(seventeen);
      break;
    case eighteen:
      console.log(eighteen);
      break;
    case nineteen:
      console.log(nineteen);
      break;
    case twenty:
      console.log(twenty)
      break;
    case twentyOne:
      console.log(twentyOne);
      break;
    case twentyTwo:
      console.log(twentyTwo);
      break;
    case twentyThree:
      console.log(twentyThree);
      break;
    case twentyFour:
      console.log(twentyFour);
      break;
    case twentySeven:
      console.log(twentySeven);
      break;
    case twentyEight:
      console.log(twentyEight);
      break;
    case twentyNine:
      console.log(twentyNine);
      break;
  }
};

whichQuestionToBeExecuted(twentyNine);
