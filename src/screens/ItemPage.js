import React, { useEffect } from 'react';
import { useParams } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { getItem } from "../redux/list/Actions";

export default function ItemPage() {
     const {id}=useParams();
    const {isLoading, error, item}=useSelector(state => state.item)
    const dispatch=useDispatch()
       useEffect(()=>{
        dispatch(getItem(id))
    },[dispatch, id])
    
    return (
         isLoading?
            <div>Loading...</div>:
            <div> {id} : {error ? error : item.title} </div>
    )
}
