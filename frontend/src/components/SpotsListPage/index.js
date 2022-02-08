import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getSpots } = require("../../store/spots");



const SpotsListPage = () => {
    const dispatch = useDispatch();

    const spots = useSelector(state => state.spots.list)

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
                    <Link to={`spots/${spot.id}`}>
                        <img onClick={Redirect} key={spot.id} src={spot.imgUrl} alt={spot.type}/> 
                    </Link>
                )
            })}
        </div>
    )
}

export default SpotsListPage