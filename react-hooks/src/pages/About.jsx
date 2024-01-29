import React from 'react'

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext.jsx";

const About = () => {

  const {contextValue} = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr/>
    </div>
  )
}

export default About