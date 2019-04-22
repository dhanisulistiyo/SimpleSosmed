var express = require('express');
var router = express.Router();
var methods = require('../methods/timeline');

// post timeline
router.post('/:user_id', async (req, res, next) => {
    const payload = {
        path: {
            id: req.params.user_id
        },
        body: {
            tweet: req.body.tweet
        }
    };

    // Call Method
    await methods.postTimeline(payload)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});
// get timeline
router.get('/:user_id', async (req, res, next) => {
    const payload = {
        path: {
            id: req.params.user_id
        }
    };

    await methods.getTimeline(payload)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});

// Delete timeline 
router.delete('/:timeline_id/user/:user_id', async (req, res, next) => {
    const payload = {
        id: req.params.timeline_id,
        user_id: req.params.user_id
    };

    await methods.deleteTimeline(payload)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((err) => {
            throw err;
        });
});

module.exports = router;
