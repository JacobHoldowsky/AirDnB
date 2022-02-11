

import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { editOneSpot } from '../../store/spots'
import './EditSpot.css'

const EditSpotPage = () => {
    const dispatch = useDispatch()

    const history = useHistory()
    const { spotId } = useParams()

    const spot = useSelector(state => state.spots[spotId])
    const [city, setCity] = useState(spot.city)
    const [state, setState] = useState(spot.state)
    const [country, setCountry] = useState(spot.country)
    const [price, setPrice] = useState(spot.price)
    const [imgUrl, setImgUrl] = useState(spot.imgUrl)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            city,
            state,
            country,
            price,
            imgUrl
        }

        await dispatch(editOneSpot(spotId, payload))
        history.push(`/spots/${spotId}`)
    }

    return (
        <div className={'a-form-container'}> 
            <form onSubmit={handleSubmit} className={'edit-form'}>
                <div className={'edit-form-container'}>
                    Edit your spot!
                    <input
                        type="text"
                        placeholder={spot.city}
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="State"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="Country"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="Price Per Night"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="Image URL"
                        required
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                    >
                    </input>
                    <div className={'edit-form-buttons'}>
                        <button 
                        className={'edit-cancel-button'} 
                        >
                            Cancel
                        </button>
                        <button className={'edit-submit-button'}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
        
    )

}

export default EditSpotPage