const db = require("../data/db-config");

module.exports = {
    get,
    addUser,
    getUserPosts,
    update,
    remove
}

function get(id){
    return id
        ? db('users').where({ id }).first()
        : db('users');
}

function addUser(user) {
    return db('users')
        .insert(userData);
}

function getUserPosts(id){
    return db('users as u')
    .join("posts as p", "u.id", "p.user_id")
    .select("p.contents as Post", "u.username as PostedBy")
    .where({ user_id: id })
}

function update(id, changedUser){
    return db('users')
        .where({ id })
        .update(changedUser)   
}

function remove(id){
    return db('users')
        .where({ id })
        .del();
}