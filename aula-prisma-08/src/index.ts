import prisma from "./database";

(async () => {
const students = await prisma.student.groupBy({
  by: ["class"],
  _count:{
    id: true
  }
}); // TODO: Faça a implementação aqui
  console.log(students);

const unemployed = await prisma.student.groupBy({
  by: ["class"],
  _count:{
    _all: true
  },
  where: {
    jobId: null  
  }
})
console.log(unemployed)
})()