

const userLogin = (req, res) => {
    res.json({msg: 'User Login'})
}

const userPost = (req, res) => {

    const body = req.body;

    res.json({msg: body})
}

const userDelete = (req, res) => {
    res.json({msg: 'User Login'})
}

const userPut = (req, res) => {
    res.json({msg: 'User Login'})
}




module.exports = {
    userLogin,
    userPost,
    userDelete,
    userPut
}