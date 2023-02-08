# Study Application

## Description

For this project a team of five developers were tasked with building a full stack application. We decide that as developers we spend too
much time searching for resource or code snippets. So our solution, was to build a application that can act as a single reference point to
all things coding. We utilized Node.js, Express.js, Sql, and Sequlize to build out our backend. As well as Jquery, Jquery UI, Bootstrap
and Handlebars to handle the front end.

---

## Study Buddy Application

## ![Alt text](./public/assets/StudyBuddyApp.png)

---

## Heroku Deployment Link

- [Study Buddy](https://studybuddiezzz.herokuapp.com/)

---

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution](#contribution)
- [Tests](#tests)

---

## Installation

Below is the following installing steps to install and run this app.

1. Clone this repo

```sh
git clone git@github.com:JerimiahK/studyBuddies.git
```

2. Install NPM packages/dependencies

```sh
npm i
```

3. Seed the data base

```sh
npm run seed
```

4. Run server

```sh
npm run watch
```

5. Test routes via insomnia

```
Insomnia routes are commented in each route file.
```

6. View study application via :

```
http://localhost:3001
```

---

## Usage

N/A

---

## Credits

- [Jerimiah Kripakov](https://github.com/JerimiahK)
- [Charles B Dykstra](https://github.com/cdthe1nonly1)
- [Drew Isaacs](https://github.com/NightlineCoder)
- [Ryan Stephens](https://github.com/RyanStephens6)
- [Christian Bega](https://github.com/T3mpz)

---

## License

N/A

---

## Badges

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![made-with-node.js](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)](https://www.javascript.com)
[![made-with-express.js](https://img.shields.io/badge/Made%20with-Express.js-1f425f.svg)](http://expressjs.com/)
[![made-with-Jquery](https://img.shields.io/badge/Made%20with-Jquery-1f425f.svg)](https://jqueryui.com/)
[![made-with-handle.js](https://img.shields.io/badge/Made%20with-Handle.js-1f425f.svg)](https://handlebarsjs.com/)

---

## Features

An example of our users route used to communicate via application to database to query all users.

```
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) =>
      user.get({
        plain: true,
        individualHooks: true,
      })
    );
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
```

An example of our user model used to create a table which stored all user data. We also incorporated hooks to hash user credentials via bcrypt.

```
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Change password length later if we want (8 min)
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,

    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
```

---

## Contribution

N/A

---
