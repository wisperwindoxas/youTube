import React, {useContext} from 'react'
import NavBar from './NavBarLeft/NavBar'
import Slider from './TopSlider/Slider'
import Watch from './watch/Watch'
import { Context } from './context'


export default function Home() {

    const {showNavBar} = useContext(Context)

    console.log(showNavBar);
    
    return (
        <>
            <Slider/>
             <NavBar/>
            <Watch/>
        </>
    )
}
