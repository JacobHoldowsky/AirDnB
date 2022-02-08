import { useDispatch } from "react-redux"
import { useState } from "react"
import editOneSpot from '../../store/spots'


const EditSpotPage = () => {
    const dispatch = useDispatch()

    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState('')
    const [imgUrl, setImgUrl] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            city,
            state,
            country,
            price,
            imgUrl
        }

        dispatch(editOneSpot(payload))
    }

    return (
        <form onSubmit={handleSubmit}>
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

export default EditSpotPage