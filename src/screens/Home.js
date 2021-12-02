import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import ToDoList from '../components/ToDoList';

export default function Home() {
    const navigate=useNavigate()
    const {list:{list,isLoading,error}}= useSelector(state=>state)

    return (
        <div className='homePage'>
        <ToDoList />
           {error?
        <span>{error}</span>
        :
        <div>
        {isLoading?
         <span>loading...</span>:
         list.map(item=>
        <div className='oneitem' key={item.id} onClick={()=>navigate(`/${item.id}`)}>
            {item.title}
        </div>
        
        )    
    }
        </div>   
        
        } 
        </div>
    )
}
