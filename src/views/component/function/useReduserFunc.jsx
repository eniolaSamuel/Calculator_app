import React, {useReducer} from "react";
import * as events from "events";

const UseReduserFunc = () => {
    let initialValue = {
        name: '',
        age: 0,
        gender: '',
        height: 0.0,
    }

    function  reducer (state, action){
        switch (action.type) {
            case 'changeInput':
                return{
                    ...state,
                    [action.field]: action.payload
                }
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleChange = (event) => {
        dispatch({
            type: 'changeInput',
            field: event.target.name,
            payload: event.target.value
        })
    }
    return (
        <React.Fragment>
            <>
                <p> Name: {state.name}</p>
                <p> Age: {state.age}</p>
                <p> Gender: {state.gender}</p>
                <p> Height: {state.height}</p>
            </>
            <>
            <input type="text" name="name" value={state.name} placeholder='Enter your name' onChange={handleChange}/>
            <input type="number" name="age" value={state.age} placeholder='Enter your age' onChange={handleChange}/>
            <input type="text" name="gender" value={state.gender} placeholder='Enter your gender' onChange={handleChange}/>
            <input type="number" name="height" value={state.height} placeholder='Enter your height' onChange={handleChange}/>
            </>
        </React.Fragment>
    )
}
export default UseReduserFunc

