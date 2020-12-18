const db = require('../../data/dbConfig')

module.exports = {
    add(user) {
        const [id] = await db('users').insert(user, 'id')
        return findById(id)
    },
    findById(id) {
        return db('users').where('id', id).first()
    },
    findBy(filter) {
        return db('users').where(filter)
    }
}