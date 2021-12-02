import {useEffect, useState} from 'react';
import {addItemAction, getItems} from "../redux/list/Actions";
import {dispatch} from "../redux/Store";

export default function ToDoList() {
    const [values, setValues] = useState('')


 const handleInputChange=e=>setValues(e.target.value)

const handleAddItem=()=>{
        if (!values)
            return
        dispatch(addItemAction({
            title:values,
            id:Math.random()*1000
        }))
        setValues('')
    }

  useEffect(()=>{
        dispatch(getItems())
    },[dispatch])

     return (
        <div style={{marginTop:40}}>

            <input
             type={'text'}
             onChange={handleInputChange}
             value={values}
            />

            <button
            onClick={handleAddItem}
            >Add Item</button>
        </div>
    );

}