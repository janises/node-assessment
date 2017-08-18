var userData = require('./userData.json');
let filteredData;

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
        
    }
}