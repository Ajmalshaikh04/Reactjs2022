import React, { useState } from 'react'
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//Components
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import PageNotFound from "./Pages/PageNotFound"
import { UserContext } from './Context/UserContext'
import Footer from "./Layout/Footer"
import Header from './Layout/Header'

import fbConfig from "./Config/fbConfig"
//init firebase
const app = initializeApp(fbConfig);
const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>

      <ToastContainer />

      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>

    </BrowserRouter>
  )
}

export default App