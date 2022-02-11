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
        </div>
        
        
    )
}

export default HomePage