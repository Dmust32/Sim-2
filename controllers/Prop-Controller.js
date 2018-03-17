module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {
            user_id,
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
        dbInstance.create_prop([user_id,
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
        const {user_id} = req.session.user_id;
        dbInstance.get_props([user_id])
        .then(properties => res.send(properties))
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        dbInstance.delete_prop([params.id])
        .then(properties => res.send(properties))
    }
}