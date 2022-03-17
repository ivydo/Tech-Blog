const { Post } = require('../models');

const postData = [
    {
        title: "Snap bans anonymous messaging features from third-party app integrations",
        post_content: "Snap is banning anonymous messaging features from third-party apps that integrate with its platform over concerns that they could be used for bullying and harassment. ",
        user_id: 3
    },
    {
        title: "MGM is now part of Amazon",
        post_content: "Amazon’s monumental entertainment deal is happening.",
        user_id: 1
    },
    {
        title: "Samsung announces its first QD-OLED TV, shares pricing for 2022 lineup",
        post_content: "Don’t sleep on the Neo QLED 4K TVs or The Frame.",
        user_id: 2

    },
    {
        title: "Android 13 will ask your permission to send notifications",
        post_content: "Based on Google’s blog post, it sounds as if asking for permission will be a requirement for Android 13 apps. “Apps targeting Android 13 will now need to request the notification permission from the user before posting notifications,” Dave Burke, a VP of engineering for Android, says in the post.",
        user_id: 5
    },
    {
        title: "NASA’S NEW MONSTER ROCKET SET TO ROLL OUT AFTER MORE THAN A DECADE OF DELAYS",
        post_content: "After more than a decade of painstaking development and numerous delays, NASA’s new mega-rocket, the Space Launch System, will roll out into the open Florida air this afternoon, fully stacked and nearly ready to fly to space.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;