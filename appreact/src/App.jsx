import { useState } from 'react'
import './App.css'
import Welcome from "./Welcome.jsx"
import Counter from './Counter.jsx'

function App() {

  return (
    <>
    <Welcome name='João'></Welcome>
    <hr/>
    <Welcome name = 'Pedro'></Welcome>
    <hr/>
    <Counter></Counter>
    </>
  )
}

export default App




