import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createSpot } from "../../store/spots"
import { useHistory } from 'react-router-dom'
import './CreateSpotForm.css'


const CreateSpotForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUserId = useSelector(state => state.session.user.id)
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            city,
            state,
            country,
            price,
            imgUrl,
            sessionUserId
        }

        const newSpot = await dispatch(createSpot(payload))
        history.push(`/spots/${newSpot.id}`)

    }

    return (
        <form onSubmit={handleSubmit} className={'create-spot-form'}>
            Post your spot!
            <input
                type="text"
                placeholder="City"
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
            <button>
                Submit
            </button>
        </form>
    )



}

export default CreateSpotForm