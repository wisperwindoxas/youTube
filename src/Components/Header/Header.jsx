import React from 'react'
import headerStyle from './header.module.css'
import youtubeDark from './icons/youtubeDark.svg'
import searchBtn from './icons/search.png' 
export default function Header() {
    return (
        <header>
            <div className={headerStyle.logo}>
            <i className="fas fa-bars"></i>
            <img src={youtubeDark} alt="" />
            </div>
            <div className={headerStyle.search}>
                <input type="text" placeholder="Введетие запрос" />
                <button>
                    <img src={searchBtn} alt="" />
                </button>
                <button >
                    <i className="fas fa-microphone"></i>
                </button>
            </div>

            <div className={headerStyle.rightApps}>
                    <div className="appsyoutube">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
            </div>
        </header>
    )
}
