//import { useContext } from "react"
//import { CounterContext } from "../../Context/CounterContext"
import ChangeCounter from "../../Components/ChangeCounter/ChangeCounter";
import { UseCounterContext } from "../../Hooks/UseCounterContext.jsx";
import { UseTitleColorContext } from "../../Hooks/UseTitleColorContext.jsx";

const Home = () => {

    //const {counter} = useContext(CounterContext);
    const {counter} = UseCounterContext();

    const {color, dispatch} = UseTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({type: color});
    };

    return (
        <div>
            <h1 style={{color: color}}>Home</h1>
            <ChangeCounter />
            <p>Valor do contador: {counter}</p>

            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    )
}

export default Home