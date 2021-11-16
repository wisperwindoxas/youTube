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

  return (
    <div className="watch">
      <div className="videoPlayer">
        <video
          width="100%"
          id="video"
          autoPlay="true"
          src="/video/LITTLE BIG – SKIBIDI (official music video).mp4"
          poster="/video/Enrique Iglesias.jpg"
        ></video>
        <div className="controll">
          <div className="progressbar">
            <div className="progress"></div>
          </div>
          <div className="controlsBtn">
            <div className="play_next_volume_time">
              <button onClick={() => setIsplaying(!isPlaying)} className="play">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="next">
                <img src={nextBtn} alt="" />
              </button>
              <div className="volume">
                <img src={volumeUp} alt="" />
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="11"
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
              <button className="full">
                <img src={full} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
