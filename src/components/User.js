import { useState } from "react";

const User = (props) =>{

    const [count, setCount] = useState(0)

    function counter () {
        setCount(count + 1);
    }

    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>Count: {count}</p>
            <button onClick={counter}>Increase the counter</button>
        </div>
    )
}

export default User;