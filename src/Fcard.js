import React,{useState} from 'react';


const FCard = ({topBorder,smallLogo,handle,followers,type,count,numberColor,number,bg,smallText,largeText,lightOrDark}) => {
 
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
        <div className='FCard' style={{background:`${topBorder}`}}>
            <div className={`borderCard ${bg}`} id={light.idType} onMouseOver={onHover} onMouseOut={onOut} >
              <div className='smallLogo'>
                <img src={smallLogo} alt=''/>
                    <p style={{color:smallText}}>{handle}</p>
              </div>
                <p className='followCount' style={{color:largeText}}> {followers}</p>
                <p className='type' style={{color:smallText}}>{type} </p>
                <div className='direction'>
                <img src={count} alt=''/>
                <p style={{color:numberColor}}>{number} Today</p>
                </div>
            </div>
        </div>
    )
}

export default FCard;