import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory, useParams } from "react-router"
import { NavLink } from "react-router-dom";
import { deleteOneSpot, getSpotDetails, getSpots } from "../../store/spots";
import EditSpotPage from "../EditSpotPage";
import './SpotDetail.css'


const SpotDetailPage = () => {
    const { spotId } = useParams();
    const history = useHistory()
    const [editPost, setEditPost] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots())
        // dispatch(deleteOneSpot(spotId))
    }, [dispatch])

    const spot = useSelector(state => state.spots[spotId])

    return (
        <div className={'detail-container'}>
            <img className={'detail-img'} src={spot?.imgUrl} alt={spot?.imgUrl} />
            <div className={'detail-edit-and-delete'}>
                <NavLink to={`/spots/${spotId}/edit`}>Edit</NavLink>

                <button
                    onClick={() => {
                        dispatch(deleteOneSpot(spotId))
                        history.push('/spots')
                    }}
                >Delete</button>
            </div>
            <ul className={'spot-info'}>
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