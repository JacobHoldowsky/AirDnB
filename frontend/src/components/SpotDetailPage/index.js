import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useParams } from "react-router"
import { getSpots } from "../../store/spots";
import EditAndDelete from "../EditAndDeleteButtons";
import './SpotDetail.css'


const SpotDetailPage = () => {
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots[spotId])
    console.log('spot',spot)
    const users = useSelector(state => state.spots.userList)
    const sessionUserId = useSelector(state => {
        if (state.session.user) return state.session.user.id
        else return null
    })
    console.log('session', sessionUserId)
    let user;
    if (users) {
        user = users.find(user => user?.id === spot?.userId)
    }
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots())

    }, [dispatch])


    return (
        <div className={'detail-container'}>
            <img className={'detail-img'} src={spot?.imgUrl} alt={spot?.imgUrl} />
            {sessionUserId && sessionUserId === user?.id && 
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
                {user && <li>
                    {`Posted by ${user?.username}`}
                </li>}
            </ul>
        </div>
    )
}

export default SpotDetailPage