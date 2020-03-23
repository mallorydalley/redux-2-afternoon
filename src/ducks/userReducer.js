import axios from 'axios';


const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

// ACTION TYPE
const REQUEST_USER_DATA = "REQUEST_USER_DATA"


// ACTION CREATOR
export const requestUserData = () => {
    let data = axios.get(`/auth/user-data`)
    .then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}


// REDUCER FUNCTION 
export default function reducer(state = initialState, action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = action.payload.user
            return {email, firstName, lastName}
        default:
            return state;
    }
    
}