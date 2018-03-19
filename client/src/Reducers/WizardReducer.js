const initialState = {
    prop_name: '',
    prop_desc: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    img: '',
    loan_amount: 0,
    monthly_mortgage: 0,
    desired_rent: 0
}

//ACTION NAMES
const PROP_NAME = 'PROP_NAME'
const PROP_DESC = 'PROP_DESC'
const ADDRESS = 'ADDRESS'
const CITY = 'CITY'
const PROP_STATE = 'PROP_STATE'
const ZIP = 'ZIP'
const IMG = 'IMG'
const LOAN_AMOUNT = 'LOAN_AMOUNT'
const MONTHLY_MORTGAGE = 'MONTHLY_MORTGAGE'
const DESIRED_RENT = 'DESIRED_RENT'

function reducer(state = initialState, action){
    switch(action.type){
        case PROP_NAME:
            return Object.assign({}, state, {prop_name: action.payload});
        case PROP_DESC:
            return Object.assign({}, state, {prop_desc: action.payload});
        case ADDRESS:
            return Object.assign({}, state, {address: action.payload});
        case CITY:
            return Object.assign({}, state, {city: action.payload})   
        case PROP_STATE:
            return Object.assign({}, state, {state: action.payload})    
        case ZIP:
            return Object.assign({}, state, {zip: action.payload}) 
        case IMG:
            return Object.assign({}, state, {img: action.payload})
        case LOAN_AMOUNT:
            return Object.assign({}, state, {loan_amount: action.payload})
        case MONTHLY_MORTGAGE:
            return Object.assign({}, state, {monthly_mortgage: action.payload})
        case DESIRED_RENT:
            return Object.assign({}, state, {desired_rent: action.payload})   
        default: 
            return state    
   }
}

function propName (propName) {
    return {
        type: PROP_NAME,
        payload: propName
    }
}

function propDesc(propDesc) {
    return {
        type: PROP_DESC,
        payload: propDesc
    }
}

function address (address) {
    return {
        type: ADDRESS,
        payload: address
    }
}

function city (city) {
    return {
        type: CITY,
        payload: city
    }
}

function propState(propState){
    return{
        type: PROP_STATE,
        payload: propState
    }
}

function zip (zip) {
    return {
        type: ZIP,
        payload: zip
    }
}

function img (img) {
    return {
        type: IMG,
        payload: img
    }
}

function loanAmount (loanAmount) {
    return {
        type: LOAN_AMOUNT,
        payload: loanAmount
    }
}

function monthlyMortgage (mortgage) {
    return {
        type: MONTHLY_MORTGAGE,
        payload: mortgage
    }
}

function desiredRent (rent) {
    return {
        type: DESIRED_RENT,
        payload: rent
    }
}

export default reducer