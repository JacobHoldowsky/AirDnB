import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useParams } from "react-router"
import { deleteOneSpot, getSpotDetails, getSpots } from "../../store/spots";
import EditSpotPage from "../EditSpotPage";


const SpotDetailPage = () => {
    const { spotId } = useParams();

    const [editPost, setEditPost] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots())
        // dispatch(deleteOneSpot(spotId))
    }, [dispatch])
    const spot = useSelector(state => state.spots[spotId])


    if (editPost) {
        return (
            <EditSpotPage />
        )
    } else {
        return (
            <div>
                <img src={spot?.imgUrl} alt={spot?.imgUrl} />
                <div className={'edit-and-delete'}>
                    <button
                        onClick={(e) => setEditPost(true)}
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
}


export default SpotDetailPage