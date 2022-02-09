import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import CreateSpotForm from "../CreateSpotForm";
import './SpotsList.css'

const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getSpots } = require("../../store/spots");
const { newPost } = require('../Navigation')



const SpotsListPage = () => {
    const dispatch = useDispatch();
    const spots = useSelector(state => state.spots.list)

    // const spots = useSelector(state => {
    //     return state.spot.list.map(spotId => state.spot[spotId])
    // });

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch]);

    return (
        <div className={'spots-list-imgs'}>
            {spots?.map((spot) => {
                return (
                    <Link key={spot.id} to={`spots/${spot.id}`}>
                        <img className={'spots-list-img'} onClick={Redirect} src={spot.imgUrl} alt={spot.type} />
                    </Link>
                )
            })}
        </div>
    )
}


export default SpotsListPage