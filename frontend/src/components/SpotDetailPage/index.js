import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useHistory, useParams } from "react-router"
import { NavLink } from "react-router-dom";
import { deleteOneSpot, getSpotDetails, getSpots } from "../../store/spots";
import EditAndDelete from "../EditAndDeleteButtons";
import EditSpotPage from "../EditSpotPage";
import './SpotDetail.css'


const SpotDetailPage = () => {
    const { spotId } = useParams();
    const history = useHistory()
    const spot = useSelector(state => state.spots[spotId])
    const users = useSelector(state => state.spots.userList)
    const sessionUserId = useSelector(state => state.session.user.id)
    console.log('seession', sessionUserId)
    let user;
    if (users) {
        user = users.find(user => user.id === spot.userId)
    }
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots())

    }, [dispatch])


    return (
        <div className={'detail-container'}>
            <img className={'detail-img'} src={spot?.imgUrl} alt={spot?.imgUrl} />
            {sessionUserId === user?.id && 
                <EditAndDelete spot={spot}/>
            }
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
                <li>
                    {spot?.country}
                </li>
                <li>
                    {`Posted by ${user?.username}`}
                </li>
            </ul>
        </div>
    )
}

export default SpotDetailPage