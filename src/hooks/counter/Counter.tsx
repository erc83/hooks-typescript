import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handlerClickSub = () => {
        setCount(count - 1)
    }

    const handlerClickAdd = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <p>Presiona el botton para aumentar el contador: {count}</p>
            <button onClick={handlerClickSub}>menos</button>
            <button onClick={handlerClickAdd}>mas</button>
        </div>
    )
}
export default Counter;