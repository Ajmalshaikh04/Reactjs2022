import React,{Fragment} from 'react'
import Provider from './Provider' 
import Context from './Context'

const Agents=()=>{
  return(
    <AgentOne />
  )
}
const AgentOne=()=>{
  return(
    <AgentTwo />
  )
}
const AgentTwo=()=>{
  return(
    <AgentBond />
  )
}
const AgentBond=()=>{
  return(
    <Context.Consumer>
      {
        (context)=>(
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.missionName}</p>
            <p>Mission Status: {context.data.accept}</p>
            <button onClick={context.isMissionAccepted}>Choose to Accept</button>
          </Fragment>
        )

        
      }
    </Context.Consumer>
  )
}

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      {/* creating A container name Provider from provider to consume what provider is providing  */}
      <Provider>
    <Agents />
      </Provider>
    </div>
  )
}

export default App