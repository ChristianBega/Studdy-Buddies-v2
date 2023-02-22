const sequelize = require("../config/connection");
const seedUsers = require("./userSeeds.js");
const seedTopics = require("./topicSeeds.js");
const seedSubtopic = require("./subtopicSeeds.js");
const seedCategory = require("./categorySeeds.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();
  await seedTopics();
  await seedSubtopic();
  await seedUsers();

  process.exit(0);
};
seedAll();
