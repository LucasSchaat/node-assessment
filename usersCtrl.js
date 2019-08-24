let data = require ('./userData.json')

module.exports = {
    getUser (req, res) {
        let { age, email, favorites } = req.query
        if(age) {
            let result = data.filter( user => user.age < age)
            res.status(200).send(result)
        } else if (email) {
            let result = data.filter(user => user.email === email)
            res.status(200).send(result)
        } else if (favorites) {
            let result = data.filter(user => user.favorites.includes(favorites))
            res.status(200).send(result)
        } else {
            res.status(200).send(data)
        }
    },
    getUserById (req, res) {
        let { userId } = req.params
        let result = data.find(user => user.id === +userId)
        if(result){
            res.status(200).send(result)
        } else {
            res.sendStatus(404)
        }
    },
    getAdmins (req, res) {
        const result = data.filter(user => user.type === 'admin')
        res.status(200).send(result)
    },
    getNonAdmins (req, res) {
        const result = data.filter(user => user.type != 'admin')
        res.status(200).send(result)
    },
    getUsersByType (req, res) {
        let { userType } = req.params
        const result = data.filter( user => user.type === userType)
        res.status(200).send(result)
    },
    updateUserById (req, res) {
        let { userId } = req.params
        let index = data.findIndex( user => user.id === +userId)
        data[index] = req.body
        data[index].id = +userId
        res.status(200).send(data)
    },
    addNewUser (req, res) {
        req.body.id = data.length + 1
        data.push(req.body)
        res.status(200).send(data)

    // addNewUser (req, res) {
    //     let lastId = data[data.length-1].id
    //     req.body.id = lastId + 1
    //     data.push(req.body)
    //     res.status(200).send(data)
    //   }
    },
    deleteUser (req, res) {
        let { userId } = req.params
        let index = data.findIndex(user => user.id === +userId)
        data.splice(index, 1)
        res.status(200).send(data)
    }
}