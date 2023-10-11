const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(totalavg,student) {
  // Start coding here
 return totalavg + student.score
}


let result = students.reduce(getAverageStudentScore,0);
let avg = result / students.length
console.log(avg)

//getAverageStudentScore(students); // Output: 87.5
