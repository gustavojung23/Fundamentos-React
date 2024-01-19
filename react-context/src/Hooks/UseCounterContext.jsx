import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

export const UseCounterContext = () => {
    const context =  useContext(CounterContext);

    if(!context) {
        console.log("Contexto não encontrado");
    }

    return context;
}