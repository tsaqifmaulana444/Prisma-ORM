import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: " Joe",
  //       email: "joe2@gmail.com",
  //     },
  //   })

  //   get all users
  //   const users = await prisma.user.findMany()

  // create article with user
  //   const articles = await prisma.article.create({
  //     data: {
  //       title: " Joe article",
  //       body: "this is joe article",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   })

  // get all articles
  const articles = await prisma.article.findMany()

  // create user and article
  //   const user = await prisma.user.create({
  //     data: {
  //       name: " Jim",
  //       email: "jim@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Jim first article",
  //           body: "this isJim first article",
  //         },
  //       },
  //     },
  //   })
  // update data
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Joe Robson",
  //     },
  //   })
  // delete data
    // const article = await prisma.article.delete({
    //   where: {
    //     id: 1,
    //   },
    // })

  console.log(articles)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })
