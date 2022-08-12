import React, { useState, useEffect, useRef, useReducer, useLayoutEffect, useContext, useMemo, useCallback } from 'react'
// import Buttonimperativehandle from "./Buttonimperativehandle"
// import Login from './Login'
// import User from './User'

import Axios from "axios"
import "./App.css"
import Child from './Child'
// import { AppContext } from './UserContext'




//useReducer part  //
// const reducerFunc = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1, showText: state.showText }
//     case "toggleShowText":
//       return { count: state.count, showText: !state.showText }
//     default:
//       return state;
//   }
// }


const App = () => {

  // useState HOOK  //

  // 1
  // const [counter, setCounter] = useState(0)
  // const increment = () => {
  //   return counter >= 10 ? "" : setCounter(counter + 1)
  // }
  // const decrement = () => {
  //   return counter === 0 ? "" : setCounter(counter - 1)
  // }
  // const reset = () => {
  //   return setCounter(0)
  // }

  // 2
  // const [inputValue, setInputValue] = useState("")

  // let onChange = (e) => {
  //   const newValue = e.target.value;
  //   setInputValue(newValue)
  // }


  //useReducer HOOK  //
  // const [state, dispatch] = useReducer(reducerFunc, { count: 0, showText: true })

  //useEffect HOOK //
  // const [data, setData] = useState("")
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   Axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       setData(response.data[0].email);
  //       console.log("API Was Called");
  //     })
  // }, [count])


  //useRef HOOK //
  // const inputRef = useRef(null)
  // const onClick = () => {
  //   // console.log(inputRef.current.value);
  //   // inputRef.current.focus()
  //   console.log(inputRef);
  //   inputRef.current.value = ""
  // }


  //useLayoutEffect HOOK //

  // const inputRef = useRef(null)
  // useLayoutEffect(() => {
  //   // console.log("UseLayOutEffect");
  //   console.log(inputRef.current.value);
  // }, [])
  // useEffect(() => {
  //   console.log("UseEffect");
  //   inputRef.current.value = "hello"
  // }, [])


  //useImperativeHandle Hook //
  // const buttonRef = useRef(null)


  //ContextApi HOOK
  // const [username, setUserName] = useState("")

  //useMemo HOOK
  // const [data, setData] = useState(null)
  // const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   Axios
  //     .get("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       setData(response.data)
  //     })
  // }, [])

  // const findLongestName = (comments) => {
  //   if (!comments) return null;

  //   let longestName = "";
  //   for (let i = 0; i < comments.length; i++) {
  //     let currentName = comments[i].name
  //     if (currentName.length > longestName.length) {
  //       longestName = currentName
  //     }
  //     console.log("This was computed");
  //     return longestName
  //   }
  // }

  // const getLongestNameMemoize = useMemo(() => findLongestName(data), [data])


  //useCallback HOOK
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState("Hello Friend")
  const returnComment = useCallback((name) => {
    return data + name;
  }, [data])

  return (

    // useState HOOK layout //

    // 1
    // <div><button onClick={() => count === 0 ? "" : setCount(count - 1)}>decrement</button>{count} <button onClick={() => (count >= 15) ? "" : setCount(count + 1)}>Increment</button></div>

    // 2
    // <div><button onClick={decrement}>decrement</button>{counter}<button onClick={increment}>increment</button> <button onClick={reset}>reset</button></div>

    //useReducer HOOK layout  //

    // <div className='App'>
    //   <h1>{state.count}</h1>
    //   <button onClick={() => {
    //     dispatch({
    //       type: "INCREMENT",
    //     })
    //     dispatch({
    //       type: "toggleShowText"
    //     })
    //   }}>
    //     Click Me
    //   </button>

    //   {state.showText && <p>Lorem, ipsum dolor sit amet </p>}
    // </div>

    //useEffect hook layout //

    // <div><h1>{data}</h1>
    //   <h1>{count}</h1>
    //   <button onClick={() => {
    //     setCount(count + 1)
    //   }}>Count</button></div>


    //useRef HOOK layout //

    // <div className='App'>
    //   <h1>Ajmal</h1>
    //   <input type="text" placeholder='Change Name...' ref={inputRef} />
    //   <button onClick={onClick}>Change Name</button>
    // </div>


    //useLayoutEffect HOOK layout

    // <div className='App'>
    //   <input ref={inputRef} value="AJ" style={{ width: 300, height: 100, fontSize: 100 }} />
    // </div>

    //useImperative HOOK layout

    // <div className='App'>
    //   <button onClick={() => { buttonRef.current.alterToggle() }}>Button for parent</button>
    //   <Buttonimperativehandle ref={buttonRef} />
    // </div>

    //contextApi HOOK layout
    // <AppContext.Provider value={{ username, setUserName }}>
    //   <div className='App'>
    //     <Login setUserName={setUserName} />
    //     <User username={username} />
    //   </div>
    // </AppContext.Provider>

    //useMemo HOOK layout
    // <div className='App'>
    //   <div>{getLongestNameMemoize}</div>
    //   <button onClick={() => {
    //     setToggle(!toggle);
    //   }}>{""}toggle</button>
    //   {toggle && <h1>Toggle</h1>}
    // </div>

    //useCallBack HOOK layout
    <div className='App'>
      <Child returnComment={returnComment} />
      <button onClick={() => {
        setToggle(!toggle);
      }}>{""}toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  )
}

export default App