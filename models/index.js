const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'author_id',
});
Post.belongsTo(User);

module.exports = { User, Post };
