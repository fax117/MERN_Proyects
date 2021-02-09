import bycrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bycrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Alex Moreno',
        email: 'alexM@example.com',
        password: bycrypt.hashSync('123456', 10)
    },
    {
        name: 'Natalia Guevara',
        email: 'natG@example.com',
        password: bycrypt.hashSync('123456', 10)
    },
    {
        name: 'Rafa Rojas',
        email: 'rafaR@example.com',
        password: bycrypt.hashSync('123456', 10)
    }
]

export default users