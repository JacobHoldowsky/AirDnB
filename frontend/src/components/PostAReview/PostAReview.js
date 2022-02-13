import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { getSpots, postReview } from "../../store/spots";
import './PostAReview.css'


const PostAReview = ({ spot, setPostReview }) => {
    const dispatch = useDispatch();
    let spotId;
    if (spot) {
        spotId = spot.id;
    }
    // const history = useHistory()
    const sessionUserId = useSelector(state => state.session.user.id)
    const [review, setReview] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            sessionUserId,
            spotId,
            reviewContent: review
        }

        await dispatch(postReview(payload))
        await dispatch(getSpots())
            .then(() => {
                setPostReview(false)
            })
    }

    return (
        <form onSubmit={handleSubmit} className={'post-review-form'}>
            Post your comment!
            <textarea
                type="text"
                placeholder="What did you think about this spot?"
                required
                value={review}
                onChange={(e) => setReview(e.target.value)}
            >
            </textarea>
            <button
            className={'submit-comment-btn'}>
                Submit
            </button>
        </form>
    )

}

export default PostAReview