import React from 'react'
import TextSlider from '../MyStyle/TextSlider'
import {Context} from '../context'
export default function Slider() {

    const [activeSlider, setActiveSlider] = React.useState('')

    let sliderList = ['Все','Джем','Css','Комедийный сериал','Программирование','Комедия','Разгавор',
        'Плей-лист','Дип-хаус','Электрохаус', 'Спортивный автомобиль', "Мотиватция"
    ]

  
    const changeELem = (item) =>{
        setActiveSlider(item)
    }
    
    const {showNavBar} = React.useContext(Context)
    
    return (
        <div className={showNavBar ? "left_slider":"slider"}>
               {sliderList.map((item, index) => 
                    
                   <TextSlider 
                   key={item} 
                   onClick={() => 
                   changeELem(item)}  
                   className={activeSlider === sliderList[index]
                    ? 'textSliderActive' : "textSlider"}>
                       {item}
                   </TextSlider>
               )}
            
        </div>
    )
}
