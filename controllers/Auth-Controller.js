module.exports = {
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {user_name, pass} = req.body;
        const {session} = req;

        dbInstance.login([user_name, pass])
        .then(user => {
            session.user.id == user.id;
            session.user.user_name == user.user_name;
            res.status(200).send(session.user)})
        .catch(res.status(500))
    },

    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {user_name, pass} = req.body;
        const {session} = req;

        dbInstance.register([user_name, pass])
        .then(user =>{
            session.user.id == user.id;
            session.user.user_name == user.user_name;
            res.status(200).send(user)})
        .catch(error => res.status(500).send(error))
    },

    logout: (req, res, next) => {
        const dbInstance = req.app.get('db');
    }
}