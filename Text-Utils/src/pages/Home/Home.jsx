import React from 'react'
import Textform from '../../components/Textform/Textform'

function Home(props) {

  return (
    <>
    <Textform heading="Enter the text to analyze" mode={props.mode} showalert = {props.showalert} />
    </>
  )
}

export default Home
