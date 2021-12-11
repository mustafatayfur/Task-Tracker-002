import React from 'react'

const Button = ({color, text, handleClickFromHeader}) => {
    // const handleClick = ()=>{
    //     console.log("Click with handleClick")
    // }

    return (
        <div>
            <button className='btn' style={{backgroundColor: color}} onClick={
                ()=> console.log("click")}>
                    {handleClickFromHeader}
                {text}
            </button>
        </div>
    )
}

export default Button
