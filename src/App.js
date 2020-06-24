import React,{useState} from 'react';
import Followers from './Followers';
import Overview from './Overview';


const App = () =>{
    const[light,dark] = useState({
        Navigation:'lightNav',
        leftHeadingNav:'headingLight',
        leftParagraphNav:'paragraphLight',
        rightParagraphNav:'rightParagraphLight',
        switch:'switchLight',
        innerCircle:'innerCircleLight',
        pageBackground:'backgroundLight',
        bg:'bgLight',
        largeText:'black',
        smallText:'hsl(228, 12%, 44%)',
        overview:'hsl(228, 12%, 44%)'
    })

    function switchClick (){
        if(light.Navigation === 'lightNav'){
        dark({
            Navigation:'darkNav',
            leftHeadingNav:'headingDark',
            leftParagraphNav:'paragraphDark',
            rightParagraphNav:'rightParagraphDark',
            switch:'switchDark',
            innerCircle:'innerCircleDark',
            pageBackground:'backgroundDark',
            bg:'bgDark',
            largeText:'white',
            smallText:'hsl(228, 34%, 66%)',
            overview:'white'
        })}
        else{
        dark({
            Navigation:'lightNav',
        leftHeadingNav:'headingLight',
        leftParagraphNav:'paragraphLight',
        rightParagraphNav:'rightParagraphLight',
        switch:'switchLight',
        innerCircle:'innerCircleLight' ,
        pageBackground:'backgroundLight',
        bg:'bgLight',
        largeText:'black',
        smallText:'hsl(228, 12%, 44%)',
        overview:'hsl(228, 12%, 44%)'
        })
        }
    }

    return(
    <main className={light.pageBackground}>
        {/* navigation bar */}
         <nav className={light.Navigation}>
            <div className='leftNav'> 
                <h1 className={light.leftHeadingNav}>
                    Social Media Dashboard
                </h1>
                <p className={light.leftParagraphNav}>
                    Total Followers: 23,004
                </p>
            </div>
            <div className='rightNav'>
                <p className={light.rightParagraphNav}>Dark Mode</p>
                {/* light switch */}
                <div onClick={switchClick}  className={light.switch}>
                    <div className={light.innerCircle}></div>
                </div>
            </div>
        </nav>
        <Followers background={light.bg} large={light.largeText} small={light.smallText} state={light.Navigation}/>
        <Overview oview={light.overview} small={light.smallText} large={light.largeText} background={light.bg} state={light.Navigation}/>
    </main>
    )
}

export default App;