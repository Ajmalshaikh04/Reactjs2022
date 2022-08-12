import React,{useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'

const HeroSection = () => {
    const theme=useContext(ThemeContext)[0]
    const currentTheme=AppTheme[theme]
  return (
    <div
    style={{
        padding:"1rem",
        backgroundColor:`${currentTheme.backgroundColor}`,
        color:`${currentTheme.textColor}`,
        textAlign:"center"
    }}
    ><h1>Context API theme Toggler</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos quaerat delectus ad quisquam, et rem consequuntur adipisci laborum qui.</p>
        <button 
        style={{
            backgroundColor:"#f59e0b",
            padding:"10px 150px",
            fontSize:"20px",
            color:"#000",
            border:`${currentTheme.border}`
        }}>
            Click Here
        </button>
    </div>
  )
}

export default HeroSection