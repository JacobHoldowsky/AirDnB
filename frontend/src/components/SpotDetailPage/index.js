import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useParams } from "react-router"
import { getSpots } from "../../store/spots";
import EditAndDelete from "../EditAndDeleteButtons";
import './SpotDetail.css'


const SpotDetailPage = () => {
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots[spotId])
    const users = useSelector(state => state.spots.userList)
    const allReviews = useSelector(state => state.spots.reviewList)
    console.log('spotId', spotId)
    console.log('allReviews', allReviews)

    const sessionUserId = useSelector(state => {
        if (state.session.user) return state.session.user.id
        else return null
    })

    let user;
    if (users) {
        user = users.find(user => user?.id === spot?.userId)
    }

    let spotReviews;
    if (allReviews) {
        spotReviews = allReviews.filter(review => review?.spotId === spot.id)
        console.log('spotReviews',spotReviews)
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
                <div className={'reviews-header'}>
                    Reviews
                </div>
                {
                spotReviews &&
                <ul className={'reviews-container'}>
                    {spotReviews.map(review => (
                        <li className={'review-container'}>
                            <div className={'review-user'}>
                                {`${users.find(user => user.id === review.userId).username}:`}
                            </div>
                            <div className={'review-content'}>
                                {review.reviewContent}
                            </div>
                        </li>
                    ))}
                </ul>
                }
            </ul>
        </div>
    )
}

export default SpotDetailPage