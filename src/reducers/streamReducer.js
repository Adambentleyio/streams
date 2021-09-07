import _ from 'lodash';

import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type){
    case FETCH_STREAMS:
        // make a new object with existing state, make a new object from array with the key for each
        // object being the id property from each object, then add that object to the new state object
        return {...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
        return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
        return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
        return _.omit(...state, action.payload);
    default:
        return state
}
}