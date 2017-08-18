var userData = require('./userData.json');
let filteredData;
let id = userData.length+1;

module.exports = {
    getAllUsers: (req, res) => {
        if(req.query.age) {
             filteredData = userData.filter(user => {
                if(req.query.age > +user.age) {
                    return user
                } 
            })
            return res.status(200).send(filteredData)
        }
        if(req.query.lastname) {
        filteredData = userData.filter(user => {
                if(req.query.lastname === user.last_name) {
                    return user;
                }
            })
            return res.status(200).send(filteredData)
        }
        if(req.query.email) {
        filteredData = userData.filter(user => {
                if(req.query.email === user.email) {
                    return user
                } 
            })
            return res.status(200).send(filteredData)
        }
        if(req.query.favorites) {
        filteredData = userData.filter(user => {
            for(var i = 0; i < user.favorites.length; i++) {
                if(req.query.favorites === user.favorites[i] ){
                    return user
                }
            } 
            })
            return res.status(200).send(filteredData)
        }
        res.status(200).send(userData)    
    },
    getUserById: (req, res) => {
        let userById = userData.find(user => {
            if(user.id === +req.params.id) {
                return user;
            }
        });
        if(userById) {
            res.status(200).send(userById)
        } else {
            res.status(404).json(null)
        }
        
    }, 
    getAdmins: (req, res) => {
        let admins = userData.filter(user=> {
            if(user.type.toLowerCase() === 'admin') {
                return user
            }
        })
        res.status(200).send(admins)
    },
    getNonadmins: (req, res) => {
        let nonadmins = userData.filter(user => {
            if(user.type.toLowerCase() !== 'admin') {
                return user
            }
        })
        res.status(200).send(nonadmins);
    },
    getUsersByType: (req, res) => {
        let usersByType = userData.filter(user => {
            if(user.type === req.params.type) {
                return user
            }
        })
        res.status(200).send(usersByType);
    },
    updateUserById: (req, res) => {
        userData.forEach(user => {
            if(user.id === +req.params.id) {
                user.type = req.body.type;
                user.first_name = req.body.first_name;
                user.last_name = req.body.last_name;
            }
        })
        res.status(200).send(userData)
    },
    addUser: (req, res) => {
        let newUser = Object.assign({}, {id}, req.body)
        userData.push(newUser)
        id++;
        res.status(200).send(userData);
    }, 
    deleteUser: (req, res) => {
        let remainingUsers = userData.filter(user => {
            if(user.id !== +req.params.id) {
                return user;
            }
        })
        res.status(200).send(remainingUsers)
    }
}