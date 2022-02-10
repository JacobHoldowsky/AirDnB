import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import './PostAReview.css'


const PostAReview = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUserId = useSelector(state => state.session.user.id)
    const [review, setReview] = useState('')

    return (
        <form className={'post-review-form'}>
            Post your comment!
            <textarea
                type="text"
                placeholder="What did you think about this spot?"
                required
                value={review}
                onChange={(e) => setReview(e.target.value)}
            >
            </textarea>
            <button>
                Submit
            </button>
        </form>
    )

}

export default PostAReview