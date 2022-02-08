const LOAD = 'pokemon/LOAD';

const load = (list) => ({
    type: LOAD,
    list
});

export const getSpots = () => async dispatch => {
    console.log('hello')
    const response = await fetch(`/api/spots`);
    
    if (response.ok) {
        const spots = await response.json();
        console.log(spots)
        dispatch(load(spots));
    }
};

const initialState = {};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                list: action.list
            }

            // const allSpots = {};
            // action.list.forEach(spot => {
            //     allSpots[spot.id] = spot;
            // });
            // return {
            //     ...allSpots,
            //     ...state,
            //     list: action.list
            // };
        default:
            return state;
    }
}

export default spotsReducer;