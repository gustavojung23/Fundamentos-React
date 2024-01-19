import { useContext } from "react";
import { TitleColorContext } from "../Context/TitleColorContent";

export const UseTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if(!context) {
        console.log("Contexto não encontrado")
    }

    return context;
}