import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"


const SpotDetailPage = () => {
    const {spotId} = useParams();

    const dispatch = useDispatch();

    const spot = useSelector(state => state)

    return (
        <div>
            hi
        </div>
    )
}

export default SpotDetailPage