import React from 'react'
import headerStyle from './header.module.css'

import youtubeDark from './icons/youtubeDark.svg'
import searchBtn from './icons/search.png'
import HoverText from '../MyStyle/HoverText'


export default function Header() {
    const [showSetting, setShowSetting] = React.useState(false)
    const [showApp, setShowApp] = React.useState(false)
    const [showMicrophone, setShowMicrophone] = React.useState(false)
    const [showSearch, setShowSearch] = React.useState(false)

    return (
        <header>
            <div className={headerStyle.logo}>
                <i className="fas fa-bars"></i>
                <img src={youtubeDark} alt="" />
            </div>

            <div className={headerStyle.search}>
                <input type="text" placeholder="Введетие запрос" />
                <button onMouseEnter={() => setShowMicrophone(true)} onMouseLeave={() => setShowMicrophone(false)}>
                    {showMicrophone ? <HoverText left={-50} name={"Введетие запрос"} /> : ''}
                    <img src={searchBtn} alt="" />
                </button>
                <button onMouseEnter={() => setShowSearch(true)} onMouseLeave={() => setShowSearch(false)}>
                    {showSearch ? <HoverText left={-50} name={"Голосовой поиск"} /> : ''}
                    <i className="fas fa-microphone"></i>
                </button>
            </div>


            <div className={headerStyle.rightApps}>
                <div onMouseEnter={() => setShowApp(true)} onMouseLeave={() => setShowApp(false)} className={headerStyle.apps_youtube}>
                    {showApp ? <HoverText left={-70} name={"Приложения YouTube"} /> : ''}
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                    <div className={headerStyle.square}></div>
                </div>

                <div onMouseEnter={() => setShowSetting(true)} onMouseLeave={() => setShowSetting(false)} className={headerStyle.setting}>
                    {showSetting ? <HoverText left="0px" name={"Настройка"} /> : ''}
                    <i className="fas fa-ellipsis-v"></i>
                </div>

                <div className={headerStyle.sigin}>
                    <svg id="user" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" 
                    focusable="false" className="style-scope yt-icon" 
                    style={{pointerEvents: "none", display:" block", width: "25px", height: "100%", color:"rgb(3, 122, 219)"}}>
                        <g className="style-scope yt-icon">
                            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z" 
                            className="style-scope yt-icon"></path></g>
                    </svg>
                    <span>Войти</span>
                </div>
            </div>
        </header>
    )
}
