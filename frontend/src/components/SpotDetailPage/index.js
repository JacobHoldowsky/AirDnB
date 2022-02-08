import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { getSpotDetails, getSpots } from "../../store/spots";


const SpotDetailPage = () => {
    const {spotId} = useParams();

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])
    const spot = useSelector(state => state.spots[spotId])
    // const spot = spots.find(spot => spot.id === spotId)


    

    

    return (
        <div>
            {spot?.city}
        </div>
    )
}

export default SpotDetailPage