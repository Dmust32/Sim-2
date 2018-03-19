module.exports = function(req, res, next){
    
    if(!req.session.user){
        req.session.user={
            id: null,
            user_name: ''
        }
        console.log(11111111,req.session.user)
    }else(
        console.log(222222222,req.session.user)
    )
    next()
}