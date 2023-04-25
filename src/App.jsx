import { css } from '@emotion/react'
import './App.css'
import styled from '@emotion/styled'

// ! This app was created using vite, not create-react-app. Remember to use npm run dev to start the server, not npm start

//TODO: There is an issue with using twin.macro with this? I am not sure why, but I have emotion/styled-components working and tailwind
function App() {

  return (
    <>
      <h1> Sup MF </h1>
      <h1>We got Tailwind, Styled-Components, and Emotion out here. This the shiz yo </h1>
      <Test />
    </>
  )
}

export default App

const Test = styled.div(({ value }) => [

  value && css`
    background-color: red;
    height: 20px; 
    width: 20px;
    `

])


