import React from 'react'
import watchclass from './watch.module.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Context } from '../context';

export default function Watch() {
    const [homeVideo, setHomeVideo] = React.useState([])
    
    React.useEffect( () => {
       async function fetchData(){
            const response = await axios.get(' http://localhost:3004/HomeVideo')
            setHomeVideo(response.data)
        }
        return fetchData()
    }, [])

    
    const {showNavBar} = React.useContext(Context)
    return (
        <div className={showNavBar ? watchclass.show_watch: watchclass.watch}>
           {homeVideo.map((item, index) => 

              <Link to={`/watch/${index}`} key={item.id}>
                    <div  className={watchclass.watchVideo}>
                    <div className={watchclass.video_img}>
                        <img src={item.img} alt="" />
                        <span>{item.time}</span>
                    </div>
                    <div className={watchclass.video_info}>
                        <div className={watchclass.channel_logo}>
                            <img src={item.channel_logo} alt="" />
                        </div>

                        <div className={watchclass.title_video}>
                            <h3>{item.nameVideo}</h3>
                            <p>{item.chanelName}</p>
                            <span>{item.watchVideoCount}</span>
                        </div>
                    </div>
                </div>
              </Link>
           )}


        </div>
    )
}


