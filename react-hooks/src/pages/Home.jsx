import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseContext from '../components/HookUseContext'

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext.jsx";
import HookeUseRef from '../components/HookeUseRef.jsx'

const Home = () => {

    const {contextValue} = useContext(SomeContext);

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <HookUseContext />
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr/>
            <HookeUseRef />
        </div>
    )
}

export default Home