import {
    ADD_ITEM,GET_ITEM_START,GET_ITEM_SUCCESS,GET_ITEM_FAIL,GET_LIST_ITEMS_SUCCESS,GET_LIST_ITEMS_START,GET_LIST_ITEMS_FAIL
} from './Constants'

import API from '../../api'


export const getItems=()=>async(dispatch)=>{
  try{

        dispatch({
            type:GET_LIST_ITEMS_START
        })

        const response=await API.get('/todos')

         dispatch({
            type:GET_LIST_ITEMS_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch(
            {
                type:GET_LIST_ITEMS_FAIL,
                payload:e.message
            }
        )
    }

}
export const addItemAction=(payload)=>{
    return ({
        type:ADD_ITEM,
        payload
    })
}

export const getItem=(id)=>async (dispatch)=>{
    try{
        dispatch({
            type:GET_ITEM_START
        })

        const response=await API.get(`/todos/${id}`)

        dispatch({
            type:GET_ITEM_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch(
            {
                type:GET_ITEM_FAIL,
                payload:e.message
            }
        )
    }
}