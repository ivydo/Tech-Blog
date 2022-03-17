const { User } = require('../models');

const userData = [
    {
        username: "kelly_k",
        twitter: "kelly_k",
        github: "kelly_k",
        email: "kelly_k@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "rachel_r",
        twitter: "rachel_r",
        github: "rachel_r",
        email: "rachel_r@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "jjay",
        twitter: "jjay",
        github: "jjay",
        email: "jjay@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_kim",
        twitter: "lee_kim",
        github: "lee_kim",
        email: "lee_kim@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "j_smith",
        twitter: "jsmith",
        github: "jsmith",
        email: "jsmith@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "brit_s",
        twitter: "brit_s",
        github: "brit_s",
        email: "brit_s@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;