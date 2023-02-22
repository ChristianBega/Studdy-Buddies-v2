const Topics = require("../models/Topics");

const topicData = [
  {
    topic_name: "Javascript",
    topic_description: "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages.",
    category_id: 1,
  },
  {
    topic_name: "CSS",
    topic_description:
      "CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices.",
    category_id: 1,
  },
  {
    topic_name: "Web API's",
    topic_description:
      "API stands for Application Programming Interface. A Web API is an application programming interface for the Web. A Browser API can extend the functionality of a web browser. A Server API can extend the functionality of a web server.",
    category_id: 2,
  },
];

const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;
