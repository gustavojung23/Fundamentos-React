import { useState } from "react"
import { usePrevious } from "../hooks/usePrevious"

const CustomHook = () => {

    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

    return (
        <div>
            <h2>CustomHook</h2>
            <p>Anterior: {previousValue}</p>
            <p>Atual: {number}</p>
            <button onClick={() => setNumber(Math.random().toFixed(2))}>Alterar!</button>
            <hr />
        </div>
    )
}

export default CustomHook