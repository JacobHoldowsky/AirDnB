import { csrfFetch } from "./csrf";

const LOAD = 'spot/LOAD';
const ADD_ONE = 'spot/ADD_ONE'

const load = (list) => ({
    type: LOAD,
    list
});

const addOneSpot = (spot) => ({
    type: ADD_ONE,
    spot
});

export const getSpots = () => async dispatch => {
    console.log('hello')
    const response = await fetch(`/api/spots`);
    
    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};

export const createSpot = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const newSpot = await response.json();
        dispatch(addOneSpot(newSpot));
        return newSpot
    }
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                list: action.list
            }
        default:
            return state;
        case ADD_ONE:
            return {
                ...state,
                spot: action.spot
            }
    }
}

export default spotsReducer;