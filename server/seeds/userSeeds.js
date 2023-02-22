const { Users, Subtopics } = require("../models");
const userData = [
  {
    user_name: "Jerimiah",
    email: "jerimiah@gmail.com",
    password: "password",
  },
  {
    user_name: "Christian",
    email: "christian@gmail.com",
    password: "password2",
  },
  {
    user_name: "Drew",
    email: "drew@gmail.com",
    password: "password3",
  },
];

const seedUsers = async () => {
  const currentSubtopics = await Subtopics.findAll();
  for (const user of userData) {
    const currentUser = await Users.create(user);
    await currentUser.addSubtopics(currentSubtopics);
  }
};
module.exports = seedUsers;
