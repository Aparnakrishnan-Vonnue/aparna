export type ClassObj = {
  name: string;
  teacherName: string;
  students: StudentDetails[];
};
export type Marks = {
  subject: string;
  mark: number;
};

export type StudentDetails = {
  name: string;
  id: string;
  marks: Array<Marks>;
};
