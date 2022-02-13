
import { csrfFetch } from "./csrf";

const LOAD_ONE_USER = 'spots/LOAD_ONE_USER'
const LOAD_ONE_SPOT = 'spots/LOAD_ONE_SPOT';
const LOAD_REVIEWS = 'spots/LOAD_REVIEWS'
const ADD_ONE = 'spots/ADD_ONE'
const ADD_ONE_REVIEW = 'spots/ADD_ONE_REVIEW'
const GET_ONE = 'spots/GET_ONE'
const REMOVE_ONE = 'spots/REMOVE_ONE'
const UPDATE_ONE = 'spots/UPDATE_ONE'

const loadOneUser = (userList) => ({
    type: LOAD_ONE_USER,
    userList
})

const loadOneSpot = (list) => ({
    type: LOAD_ONE_SPOT,
    list
});
const loadReviews = (reviewList) => ({
    type: LOAD_REVIEWS,
    reviewList
})

const addOneSpot = (spot) => ({
    type: ADD_ONE,
    spot
});

const addOneReview = (review) => ({
    type: ADD_ONE_REVIEW,
    review
})

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
        const spotsUsersAndReviews = await response.json();
        dispatch(loadOneSpot(spotsUsersAndReviews.spots));
        dispatch(loadOneUser(spotsUsersAndReviews.users))
        dispatch(loadReviews(spotsUsersAndReviews.reviews))
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

export const postReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${review.spotId}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const newReview = await response.json();
        dispatch(addOneReview(newReview));
        return newReview;
    }
}


export const getSpotDetails = (id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`)
    if (response.ok) {
        const spotAndUser = await response.json();
        dispatch(getOneSpot(spotAndUser.spot))
    }
}

const initialState = { list: [] };

const spotsReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_ONE_USER:
            // const users = {}
            // action.userList.forEach(user => users[user.id] = user)
            return {
                ...state,
                userList: action.userList
            }
        case LOAD_ONE_SPOT:
            const spots = {}
            action.list.forEach(spot => spots[spot.id] = spot)
            return {
                ...state,
                ...spots,
                list: action.list
            }
        case LOAD_REVIEWS:
            // const reviews = {};
            // action.reviewList.forEach(review => reviews[review.id] = review)
            return {
                ...state,
                reviewList: action.reviewList
            }
        case ADD_ONE_REVIEW:
            return {
                ...state,
                reviewList: [...state.reviewList, action.newReview]
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