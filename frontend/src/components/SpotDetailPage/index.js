import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useParams } from "react-router"
import { getSpots } from "../../store/spots";
import EditAndDelete from "../EditAndDeleteButtons";
import PostAReview from "../PostAReview/PostAReview";
import './SpotDetail.css'


const SpotDetailPage = () => {
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots[spotId])
    const users = useSelector(state => state.spots.userList)
    const allReviews = useSelector(state => state.spots.reviewList)
    const [postReview, setPostReview] = useState(false)
    
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
    }

    const authorizedReviewer = sessionUserId !== spot?.userid


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpots())

    }, [dispatch])


    return (
        <div className={'detail-container'}>
            <img className={'detail-img'} src={spot?.imgUrl} alt={spot?.imgUrl} />
            {sessionUserId && sessionUserId === user?.id &&
                <EditAndDelete spot={spot} />
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
                {user && <li>
                    {`Posted by ${user?.username}`}
                </li>}
            </ul>
            <div className={'reviews-header'}>
                Reviews
            </div>
            {sessionUserId && sessionUserId !== user?.id &&
                <button
                    onClick={() => setPostReview(!postReview)}
                    className={'add-a-review-btn'}
                >
                    Add a review
                </button>}
            {postReview && sessionUserId !== user?.id &&
                <PostAReview spot={spot} setPostReview={setPostReview} />}
            {spotReviews &&
                <ul className={'reviews-container'}>
                    {spotReviews && spotReviews.map(review => (
                        <li className={'review-container'}>
                            <div className={'review-user'}>
                                {`${users.find(user => user.id === review.userId).username}:`}
                            </div>
                            <div className={'review-content'}>
                                {review.reviewContent}
                            </div>
                        </li>
                    ))}
                </ul>}
        </div>
    )
}

export default SpotDetailPage