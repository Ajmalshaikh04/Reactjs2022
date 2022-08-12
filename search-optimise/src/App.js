import React from 'react'
import axios from 'axios'

const App = () => {
  let cancelToken;

  const onType = async (e) => {
    const search = e.target.value

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Canceling the previous req")
    }

    cancelToken = axios.cancelToken.source()

    const result = await axios.get(
      `http://localhost:3000/courses?q=${search}`,
      { cancelToken: cancelToken.token }
    )
    console.table(result.data);
  }



  return (
    <div style={{ marginTop: "4em", textAlign: "center" }}>
      <h2>Search Optimize call</h2>
      <input
        type="text"
        placeholder='Search'
        onClick={onType}
      />
    </div>
  )
}

export default App