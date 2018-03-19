module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {
            prop_name,
            prop_desc,
            address,
            city,
            state,
            zip,
            img,
            loan_amount,
            monthly_mortgage,
            desired_rent } = req.body;
        const{session}= req;
        dbInstance.create_prop([session.user.id,
            prop_name,
            prop_desc,
            address,
            city,
            state,
            zip,
            img,
            loan_amount,
            monthly_mortgage,
            desired_rent])
            .then(properties => res.send(properties))    
    },

    get: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {session} = req;

        dbInstance.get_props([session.user.id])
        .then(properties => res.send(properties))
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        const {session} = req;

        dbInstance.delete_prop([params.id, session.user.id])
        .then(properties => res.send(properties))
    }
}