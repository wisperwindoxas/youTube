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
  const [isMuteVolume, setIsMuteVolume] = React.useState(false);
  const [getSecond, setGetSecond] = React.useState(0);
  const [getMinut, setGetMinut] = React.useState(0);
  const [getCurrentDuration, setGetCurrentDuration] = React.useState(parseInt(0));
  let   [getCurrentTime, setGetCurrentTime] = React.useState(parseInt(0));
  const videoFull = React.useRef()
  const volumeIcon = React.useRef()
  const progress = React.useRef()

    const fullScreenToggler = () =>{
       videoFull.current.requestFullscreen()
       
    }


    const playMovies = () =>{
        setIsplaying(!isPlaying)
       if(!isPlaying){
        videoFull.current.play()
       }else{
         setIsplaying(false)
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
            if(e <= 0){
                volumeIcon.current.src =  mute
            }
    }

    const MuteVolume = () =>{
      setIsMuteVolume(!isMuteVolume)
      if(isMuteVolume){
        
        videoFull.current.volume = 0;
        volumeIcon.current.src =  mute
      }else{
         videoFull.current.volume = 1;
         volumeIcon.current.src = volumeUp
      }

      
    }
    let currents = getCurrentTime;
    const progressBar = (e) =>{
      const width = e.target.clientWidth;
      const clickX = e.target.offsetX;
      console.log(e.target.clientWidth);
      const duration = getCurrentDuration;
      currents = (clickX / width) * duration;
      
    }


  function updateProgress(e){
    setGetCurrentDuration(parseInt(e.target.duration))
    setGetCurrentTime(parseInt(e.target.currentTime))
    const duration = e.target.duration;
    const currentTime = e.target.currentTime
    const progressPercent = (currentTime / duration) * 100;
    progress.current.style.width = `${progressPercent}%`
    videoFull.current.onloadeddata = function(){
        let sec = parseInt(duration % 60)
        let min = parseInt((duration / 60) % 60)
        setGetSecond(sec)
        setGetMinut(min)
    }
    
}



  return (
    <div className={isMiddle ? "watch_middle": "watch"}>
    
      <div className={isMiddle ? "middleVideoPlayer": "videoPlayer"}>
        <video  ref={videoFull}
          id="video"
          controls={false}
          onTimeUpdate={(e) => updateProgress(e)}
          src="/video/Ziyoda  Tor kocha Official Music.mp4"
          poster="/video/Enrique Iglesias.jpg"
        ></video>
        <div className="controll">
          <div onClick={(e) => progressBar(e)} className="progressbar">
            <div ref={progress} className="progress"></div>
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
                <img onClick={MuteVolume} ref={volumeIcon} src={volumeUp} alt="" />
                <input
                  onInput={(e) => {
                    Volume(e.target.value)
                  }}
                  
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="1"
                  step="0.1"
                  
                />
              </div>
              <div className="time">
                <span>00:00</span> / <span>0{getMinut}:0{getSecond}</span>
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
