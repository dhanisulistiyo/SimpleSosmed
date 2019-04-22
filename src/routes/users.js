var express = require('express');
var router = express.Router();
var methods = require('../methods/users');

// Create User
router.post('/', async (req, res, next) => {
    const payload = {
        body: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            description: req.body.description
        }
    };
    await methods.createUser(payload)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});

// Get All User
router.get('/', async (req, res, next) => {
    await methods.getAllUsers(req)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});
// Get User by Id
router.get('/:id', async (req, res, next) => {
    await methods.getDetailUser(req.params.id)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});

// Delete User by Id 
router.delete('/:id', async (req, res, next) => {
    await methods.deleteUser(req.params.id)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});

// Follow User
router.post('/:id/follow/:user_id', async (req, res, next) => {
    // Build a payload
    const payload = {
        path: {
            id: req.params.id
        },
        body: {
            user_id: req.params.user_id
        }
    };

    // Call Method
    await methods.followUser(payload)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});

// Unfollow User
router.delete('/:id/unfollow/:user_id', async (req, res, next) => {
    const payload = {
        path: {
            id: req.params.id
        },
        body: {
            user_id: req.params.user_id
        }
    };

    await methods.unfollowUser(payload)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});


module.exports = router;
