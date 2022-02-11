import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router";
import { deleteOneSpot } from "../../store/spots";
import './DeleteSpot.css'

const DeleteSpotPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams()

    return (
        <div className={'delete-form-container'}>
            <div className={'delete-confirmation-container'}>
                <div className={'are-you-sure'}>Are you sure you'd like to delete this post?</div>
                <div className={'cannot-be-undone'}>This action cannot be undone.</div>
                <div className={'yes-and-no-delete-buttons'}>
                    <button
                        className={'do-not-delete'}
                        onClick={async () => {
                            history.push(`/spots/${spotId}`)
                        }}
                    >Cancel</button>
                    <button
                        className={'continue-delete'}
                        onClick={async () => {
                            await dispatch(deleteOneSpot(spotId))
                            history.push('/spots')
                        }}
                    >Confirm</button>
                </div>
            </div>
        </div>

    )
}

export default DeleteSpotPage