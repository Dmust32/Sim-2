module.exports = {
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {user_name, pass} = req.body;
        dbInstance.login([user_name, pass])
        .then(user => res.status(200).send(user))
        .catch(res.status(500))
    },
    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {user_name, pass} = req.body;
        dbInstance.register([user_name, pass])
        .then(user => res.status(200).send(user))
        .catch(error => res.status(500).send(error))
    },
    logout: (req, res, next) => {
        const dbInstance = req.app.get('db');
    }
}