import { useState } from 'react'
import Header from './Components/header'
import Form from './Components/form'
import Footer from './Components/footer'
import './App.css'

function App() {
  return (
    <>
    <main>
      <Header
      titulo={"CADASTRO DE CLIENTE"}
      subtitulo={"SHINE STANCE"}/>  
      <Form/>
      <Footer/>
    </main>
    </>
  )
}

export default App
