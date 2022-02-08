import { csrfFetch } from "./csrf";

const LOAD = 'spots/LOAD';
const ADD_ONE = 'spots/ADD_ONE'
const GET_ONE = 'spots/GET_ONE'

const load = (list) => ({
    type: LOAD,
    list
});

const addOneSpot = (spot) => ({
    type: ADD_ONE,
    spot
});

const getOneSpot = (spot) => ({
    type: GET_ONE,
    spot
})

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const newSpot = await response.json();
        dispatch(addOneSpot(newSpot));
        return newSpot
    }
}

export const getSpotDetails = (id) => async dispatch => {
    const response = await fetch(`/api/spots/${id}`)

    if (response.ok) {
        const spot = await response.json();
        dispatch(getOneSpot(spot))
    }
}

const initialState = { list: [] };

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                list: action.list
            }
        case ADD_ONE:
            return {
                ...state,
                list: [...state.list, action.spot]
            }
        case GET_ONE:
                const index = state.list.indexOf(action.spot)
                const newList = state.list
                newList.splice(index, 1)
            return {
                ...state,
                list: [newList]
            }
        default:
            return state;
    }

}

export default spotsReducer;