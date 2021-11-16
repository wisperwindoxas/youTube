import React from 'react'
import navbarclass from './navBar.module.css'
import { Context } from '../context'
import {home, 
    navigator, 
    subscribe, 
    library, 
    history,
    plus,
    liveTv,
    setting,
    flag,
    reference,
    reviews
} from './Icons'
export default function NavBar() {

    const {showNavBar} = React.useContext(Context)

    return (
        <div className={showNavBar ? navbarclass.show_navbar : navbarclass.navbar}>
            <div className={navbarclass.navigation}>
                <div className="home"> <span>{home}</span><p>Главная</p></div>
                <div className="navigator"><span>{navigator}</span><p>Навигатор</p></div>
                <div className="subscri"><span>{subscribe}</span><p>Подписки</p></div>
            </div>
            <div className={navbarclass.navigation}>
               <div className="library"><span>{library}</span><p>Библиотека</p></div>
               <div className="history"><span>{history}</span><p>История</p></div>
            </div>

            <div className={navbarclass.navigation}>
                <div>
                <p>Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы.</p>
                <div className={navbarclass.sigin}>
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
            </div>


            <div className={navbarclass.navigation}>
                <h3>ЛУЧШЕЕ НА YOUTUBE</h3>
                <div className={navbarclass.categories}>
                    <div>
                        <img src="./icons/music.jpg" alt="" />
                        <span>Музыка</span>
                        
                    </div>
                    <div>
                        <img src="./icons/sport.jpg" alt="" />
                        <span>Спорт</span>
                        
                    </div>
                    <div>
                        <img src="./icons/games.jpg" alt="" />
                        <span>Видеоигры</span>
                        
                    </div>
                    <div>
                        <img src="./icons/news.jpg" alt="" />
                        <span>Новости</span>
                        
                    </div>
                    <div>
                        <img src="./icons/liveStrim.jpg" alt="" />
                        <span>Трансляции</span>
                        
                    </div>
                    <div>
                        <img src="./icons/moda.jpg" alt="" />
                        <span>Мода и красота</span>
                        
                    </div>
                    <div>
                        <img src="./icons/learn.jpg" alt="" />
                        <span>Обучение</span>
                        
                    </div>
                    <div>
                        <img src="./icons/panorom.jpg" alt="" />
                        <span>Панорамные видео</span>
                        
                    </div>
                </div>

            </div>


            <div className={navbarclass.navigation}>
                <div>
                <span>{plus}</span>
                <p>Каталог каналов</p>
                </div>
            </div>
            <div className={navbarclass.navigation}>
                    <h3>ДРУГИЕ ВОЗМОЖНОСТИ</h3>
                    <div>
                    <span>{liveTv}</span>
                    <p>Трансляции</p>
                    </div>
                </div>
                <div className={navbarclass.navigation}>
                    <div>
                        <span>{setting}</span>
                        <p>Настройки</p>
                    </div>
                    <div>
                        <span>{flag}</span>
                        <p>Жалобы</p>
                    </div>
                    <div>
                        <span>{reference}</span>
                        <p>Справка</p>
                    </div>
                    <div>
                        <span>{reviews}</span>
                        <p>Отправить отзыв</p>
                    </div>
                </div>
                <div className={navbarclass.navigation}>
                        <p>О сервисе ПрессеАвторские права Связаться с 
                            нами Авторам Рекламодателям Разработчикам</p>
                        <p>Условия использования Конфиденциальность Правила
                             и безопасность Как работает YouTube Тестирование новых функций</p>
                        <p>© 2021 Google LLC</p>
                </div>
        </div>
    )
}





