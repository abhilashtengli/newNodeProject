import { PrismaClient } from "@prisma/client";
require('dotenv').config(); 


const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  
   const res = await prisma.user.create({
    data: {
        email: username,
        password,
        firstName,
        lastName
    }
   })
   console.log(res);  
}
// insertUser("abhi1@gmail.com", "abhi@123", "abhilash", "tengli");


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: {email : username},
    data: {
        firstName, lastName
    }
  })
  console.log(res);
}
  

// updateUser("abhi1@gmail.com",{
//     firstName: "Abhilash1", 
//     lastName: "tengli01"
// })

async function getUser (firstName: string){

  const res =  await prisma.user.findFirst({
        where:{
            firstName: firstName
        }
    })
    console.log(res);
    
}

getUser("abhilash")