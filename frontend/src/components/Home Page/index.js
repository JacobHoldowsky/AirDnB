import { NavLink } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {

    return(
        <div className={'body'}>
            <div className={'home-page-container'}>
                <h1 className={'welcome-blurb'}>
                    Welcome to AirDnB!
                </h1>
                <h2 className={'where-will-you-go-next'}>
                    Where will you go next?
                </h2>
                <div className={'home-page-posts-link'}>
                    <NavLink className={'home-navlink'} to="/spots">Take me away</NavLink>
                </div>
            </div>
            <div className='home-img'>
                <img className='home-img' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg' alt='mobile-home' />
            </div>
        </div>
    )
}

export default HomePage