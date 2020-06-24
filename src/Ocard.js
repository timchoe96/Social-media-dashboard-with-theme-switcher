import React,{useState} from 'react';

const Ocard = ({subject,icon,number,direction,percent,percentColor,smallText,largeText,bg,lightOrDark}) => {
    
    const [light,dark] = useState({
        idType:''
    })

    function onHover(){
        if(lightOrDark === 'lightNav'){
            dark({
                idType:'bgLightHover'
            })
        }else{
            dark({
                idType:'bgDarkHover'
            })
        }
    }

    function onOut(){
        dark({
            idType:''
        })
    }
   

    
    
    return(
        <div className={`ocard ${bg}`} id={light.idType} onMouseOver={onHover} onMouseOut={onOut} >
            <div className='firstRow'>
                <p style={{color:smallText}}>
                {subject}
                </p>
                <img src={icon} alt=''/>
            </div>
            <div className='secondRow'>
            <h1 style={{color:largeText}}>{number}</h1>
            <div className='percent'>
                <img src={direction} alt=''/>
                <p style={{color:percentColor}}>{percent}</p>
            </div>
            </div>
        </div>
    )
}

export default Ocard;