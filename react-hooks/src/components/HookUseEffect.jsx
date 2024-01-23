import { useEffect, useState } from "react"

const HookUseEffect = () => {

    useEffect(() => {
        console.log("Estou sendo executado");
    });

    const [number, setNumber] = useState(1);

    const changeNumber = () => {
        setNumber(number + 1);
    }

    //executa apenas uma vez - array de dependências vazio.
    useEffect(() => {
        console.log("Executo apenas uma vez")
    }, [])

    //executado quando um valor muda no array de dependências.
    const [anotherNumber, setAnotherNumber] = useState(0);
    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Estou sendo executado apenas quando anotherNumber muda");
        }
    }, [anotherNumber])

    //cleanup useEffect.
    useEffect(() => {
        /*
        const timer = setTimeout(() => {
            console.log("Hello World")
            //setAnotherNumber(anotherNumber + 2)
        }, 2000);

        return () => clearTimeout(timer);
        */
    }, [anotherNumber])

    return (
        <div>
            <h2>useEffect</h2>
            <p>Valor: {number}</p>
            <button onClick={changeNumber}>Alterar valor</button>
            <p>Valor do Another Number: {anotherNumber}</p>
            <button onClick={(e) => setAnotherNumber(anotherNumber + 1)}>Alterar Valor do Another Number</button>
            <hr/>
        </div>
    )
}

export default HookUseEffect