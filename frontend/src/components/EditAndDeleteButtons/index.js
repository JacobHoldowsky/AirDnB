import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { deleteOneSpot } from "../../store/spots"
import './EditAndDelete.css'

const EditAndDelete = ({ spot }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    let spotId;
    if (spot) {
        spotId = spot.id
    }
    

    const users = useSelector(state => state.spots.userList)
    let user;
    if (users) {
        user = users.find(user => user.id === spot.userId)
    }

    return (
        <div className={'detail-edit-and-delete'}>
            <NavLink 
                className={'edit-delete-btns'}
            to={`/spots/${spotId}/edit`}>Edit</NavLink>
            <NavLink 
                className={'edit-delete-btns'}
            to={`/spots/${spotId}/delete`}>Delete</NavLink>
        </div>
    )

}

export default EditAndDelete;