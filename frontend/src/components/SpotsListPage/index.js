const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getSpots } = require("../../store/spots");



const SpotsListPage = () => {
    const dispatch = useDispatch();

    const spots = useSelector(state => {
        return state.spot.list.map(spotId => state.spot[spotId])
    });
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch]);

    return  (
        <div>
            {spots.map((spot) => {
                return (
                <div>
                    {spot.imgUrl}
                </div>
                    )
            })}
        </div>
    )
}

export default SpotsListPage