import React,{useState} from 'react'

import pContext from './Context'

const Provider = (props) => {
    const [mission,setMission]=useState({
        missionName:"Goto Russia",
        ageent:"007",
        accept:"Not Accepted"
    })
  return (
    <pContext.Provider 
        value={{
            data:mission,
            isMissionAccepted: ()=>{
                setMission({...mission,accept:"Accepted"})
            }
        }}
    >
        {props.children} 
        {/* What ever props needed is will provided to child elements props.children */}
    </pContext.Provider>
  )
}

export default Provider