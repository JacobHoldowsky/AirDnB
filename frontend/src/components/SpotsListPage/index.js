const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getSpots } = require("../../store/spots");



const SpotsListPage = () => {
    const dispatch = useDispatch();

    const spots = useSelector(state => state.spots.list)
    console.log(spots)

    // const spots = useSelector(state => {
    //     return state.spot.list.map(spotId => state.spot[spotId])
    // });

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch]);

    // return null

    return  (
        <div>
            {spots?.map((spot) => {
                return (
                <img key={spot.id} src={spot.imgUrl} alt={spot.type}/> 
                )
            })}
        </div>
    )
}

export default SpotsListPage