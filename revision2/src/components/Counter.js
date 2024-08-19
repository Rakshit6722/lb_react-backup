import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../redux/slices/CounterSlice";

function Counter() {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <br />
            <button>{value}</button>
            <br />
            <br />
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br />
            <br />

        </div>
    )
}

export default Counter