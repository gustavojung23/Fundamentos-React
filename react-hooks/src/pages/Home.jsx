import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseContext from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef.jsx'
import HookUseCallBack from '../components/HookUseCallBack.jsx'
import HookUseMemo from '../components/HookUseMemo.jsx'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect.jsx'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle.jsx'
import CustomHook from '../components/CustomHook.jsx'

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext.jsx";

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
            <HookUseRef />
            <HookUseCallBack />
            <HookUseMemo />
            <HookUseLayoutEffect />
            <HookUseImperativeHandle />
            <CustomHook />
        </div>
    )
}

export default Home