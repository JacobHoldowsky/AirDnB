
import { csrfFetch } from "./csrf";

const LOAD = 'spots/LOAD';
const ADD_ONE = 'spots/ADD_ONE'
const GET_ONE = 'spots/GET_ONE'
const REMOVE_ONE = 'spots/REMOVE_ONE'
const UPDATE_ONE = 'spots/UPDATE_ONE'

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

const removeOneSpot = (spotId) => ({
    type: REMOVE_ONE,
    spotId
})

const updateOneSpot = (spot) => ({
    type: UPDATE_ONE,
    spot
})

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`);

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};

export const deleteOneSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        dispatch(removeOneSpot(spotId))
    }
}

export const editOneSpot = (spotId, payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const updatedSpot = await response.json();
        console.log(updatedSpot)
        dispatch(updateOneSpot(updatedSpot));
        return updatedSpot
    }
}

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
    const response = await csrfFetch(`/api/spots/${id}`)
    console.log('hi', response)
    if (response.ok) {
        const spot = await response.json();
        dispatch(getOneSpot(spot))
    }
}

const initialState = { list: [] };

const spotsReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD:
            const spots = {}
            action.list.forEach(spot => spots[spot.id] = spot)
            return {
                ...state,
                ...spots,
                list: action.list
            }
        case ADD_ONE:
            return {
                ...state,
                [action.spot.id]: action.spot,
                list: [...state.list, action.spot]
            }
        case GET_ONE:
            return {
                ...state,
            }
        case REMOVE_ONE:
            newState = { ...state }
            delete newState[action.spotId];
            return newState
        case UPDATE_ONE:
            newState = { ...state }
            newState[action.spot.id] = action.spot
            return newState
        default:
            return state;
    }

}

export default spotsReducer;