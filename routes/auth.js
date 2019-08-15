const   express = require('express'),
        {verificarToken} = require('../server/middlewares/auth'),
        router = express.Router();

router.get('/', [verificarToken], (req, res) => {
    return res.status(200).json({
        ok: true,
        user: req.user
    })
})

module.exports = router;