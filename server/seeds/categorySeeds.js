const Category = require("../models/Categories");

const categoryData = [
  {
    category_name: "Front-end",
  },
  {
    category_name: "Back-end",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);
console.log(categoryData);

module.exports = seedCategory;
