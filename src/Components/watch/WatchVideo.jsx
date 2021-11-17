import React from "react";
import "./watchVideo.css";
import { FaPlay, FaPause } from "react-icons/fa";
import {
  volumeUp,
  volumeMiddle,
  volumeLow,
  mute,
  nextBtn,
  setting,
  small,
  middle,
  full,
  middle_two
} from "./watchIconsVideo";

export default function WatchVideo() {
  const [isPlaying, setIsplaying] = React.useState(false);
  const [isMiddle, setIsMiddle] = React.useState(false);
  
  const videoFull = React.useRef()
  const volumeIcon = React.useRef()

    const fullScreenToggler = () =>{
       videoFull.current.requestFullscreen()
       
    }

    const playMovies = () =>{
        setIsplaying(!isPlaying)
       if(!isPlaying){
        videoFull.current.play()
       }else{
        videoFull.current.pause()
       }
    }

    const Volume = (e) => {
            videoFull.current.volume = e
            if(e > 0.8){
                volumeIcon.current.src = volumeUp
            }
            if(e < 0.6){
                volumeIcon.current.src =  volumeMiddle
            }
            if(e < 0.3){
                volumeIcon.current.src =  volumeLow
            }
            if(e < 0){
                volumeIcon.current.src =  mute
            }
    }

  return (
    <div className={isMiddle ? "watch_middle": "watch"}>
    
      <div className={isMiddle ? "middleVideoPlayer": "videoPlayer"}>
        <video ref={videoFull}
          id="video"
        
          src="/video/LITTLE BIG – SKIBIDI (official music video).mp4"
          poster="/video/Enrique Iglesias.jpg"
        ></video>
        <div className="controll">
          <div className="progressbar">
            <div className="progress"></div>
          </div>
          <div className="controlsBtn">
            <div className="play_next_volume_time">
              <button onClick={playMovies} className="play">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="next">
                <img src={nextBtn} alt="" />
              </button>
              <div className="volume">
                <img ref={volumeIcon} src={volumeUp} alt="" />
                <input
                    onInput={(e) => Volume(e.target.value)}
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="1"
                  step="0.1"
                  
                />
              </div>
              <div className="time">
                <span>1:48</span> / <span>24:05</span>
              </div>
            </div>

            <div className="setting_full_screen">
              <button className="setting">
                <img src={setting} alt="" />
              </button>
              <button className="small">
                <img src={small} alt="" />
              </button>
              <button className="middle">
                <img onClick={() => setIsMiddle(!isMiddle)} src={isMiddle ? middle: middle_two} alt="" />
              </button>
              <button onClick={fullScreenToggler} className="full">
                <img src={full} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}
