const { Router } = require('express');
const {
    userLogin,
    userPost,
    userDelete,
    userPut
} = require('../controllers/userController')


const router =  Router();

router.get('/',userLogin)

router.post('/', userPost)

router.delete('/', userDelete )
router.put('/', userPut)

module.exports =  router;