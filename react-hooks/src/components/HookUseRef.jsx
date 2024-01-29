import { useEffect, useState, useRef } from "react"

const HookeUseRef = () => {

    // 1 - useRef
    const numberRef = useRef(0);
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    });

    const inputRef = useRef();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setText("");
        inputRef.current.focus();
    }

    return (
        <div>
            <h2>useRef</h2>
            <p>O componente renderizou: {numberRef.current} vezes.</p>
            <p>Counter 1: {counterA}</p>
            <button onClick={() => setCounterA(counterA + 1)}>Contador A</button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
                <input type="submit" value="Enviar" />
            </form>
            <hr/>
        </div>
    )
}

export default HookeUseRef;