import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { deleteOneSpot, getSpotDetails, getSpots } from "../../store/spots";


const SpotDetailPage = () => {
    const {spotId} = useParams();

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots())
        // dispatch(deleteOneSpot(spotId))
    }, [dispatch])
    const spot = useSelector(state => state.spots[spotId])

    

    return (
        <div>
            <img src={spot?.imgUrl} alt={spot?.imgUrl} />
            <div className={'edit-and-delete'}>
                <button
                    
                >Edit</button>
                <button
                    onClick={() => {
                        dispatch(deleteOneSpot(spotId))
                    }}
                >Delete</button>
            </div>
            <ul>
                <li>
                    {`${spot?.city},`}
                </li>
                <li>
                    {`${spot?.state},`}
                </li>
                <li>
                    {spot?.country}
                </li>
                <li>
                    {`$${spot?.price} per night`}
                </li>

            </ul>
        </div>
    )
}

export default SpotDetailPage