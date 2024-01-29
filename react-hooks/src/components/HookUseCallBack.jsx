import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallBack = () => {

    const [counter, setCounter] = useState(0);

    const getItemsDataBase = useCallback(() => {
        return ["a", "b", "c"]
    }, []);

    return (
        <div>
            <h2>HookUseCallBack</h2>
            <List getItems={getItemsDataBase} />
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
            <hr/>
        </div>
    )
}

export default HookUseCallBack